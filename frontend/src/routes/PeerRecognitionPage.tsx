import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  getMe,
  getPeerRecognitionReceived,
  getPeerRecognitionSent,
  getUsers,
  type CreateKudoPayload,
  type KudoListItem,
  type MeResponse,
  type PeerRecognitionResponse,
  type UserSearchItem,
  uploadFile,
  createKudoPeerRecognition,
} from '../api'

const pointOptions = [10, 20, 30, 40, 50] as const

type StatusBadgeProps = { status: string }
function StatusBadge({ status }: StatusBadgeProps) {
  const className =
    status === 'PUBLIC'
      ? 'bg-blue-50 text-blue-700'
      : status === 'PRIVATE'
        ? 'bg-slate-100 text-slate-700'
        : 'bg-emerald-50 text-emerald-700'

  return <span className={`rounded-full px-3 py-1 text-xs font-bold ${className}`}>{status}</span>
}

function KudoList({
  title,
  description,
  queryKey,
  queryFn,
  emptyText,
}: {
  title: string
  description: string
  queryKey: string[]
  queryFn: () => Promise<PeerRecognitionResponse>
  emptyText: string
}) {
  const { data, isLoading, isError } = useQuery({ queryKey, queryFn })
  const items = data?.items ?? []

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="border-b border-slate-200 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Peer recognition</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
      </header>

      {isLoading ? (
        <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-slate-500">Loading...</div>
      ) : isError ? (
        <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-700">Failed to load data</div>
      ) : items.length === 0 ? (
        <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-slate-500">{emptyText}</div>
      ) : (
        <div className="mt-4 grid gap-4">
          {items.map((item: KudoListItem) => (
            <article key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <strong className="block text-slate-900">
                    {item.sender?.fullName ?? item.receiver?.fullName ?? 'Unknown'}
                  </strong>
                  <p className="mt-1 text-sm text-slate-500">{item.message}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <StatusBadge status={item.visibility} />
                  <span className="text-sm font-bold text-slate-900">{item.points} pts</span>
                </div>
              </div>

              {item.media?.length ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {item.media.map((media) =>
                    media.mediaType === 'VIDEO' ? (
                      <video key={media.id} controls className="w-full rounded-2xl border border-slate-200 bg-black">
                        <source src={media.mediaUrl} />
                      </video>
                    ) : (
                      <img
                        key={media.id}
                        src={media.mediaUrl}
                        alt="peer recognition media"
                        className="w-full rounded-2xl border border-slate-200 object-cover"
                      />
                    ),
                  )}
                </div>
              ) : null}

              <div className="mt-4 flex items-center justify-between gap-3 text-xs text-slate-500">
                <span>{new Date(item.createdAt).toLocaleString()}</span>
                <Link to={`/feed/${item.id}`} className="font-semibold text-blue-700 hover:underline">
                  View detail
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

function SendPointsCard() {
  const queryClient = useQueryClient()
  const [receiverId, setReceiverId] = useState('')
  const [points, setPoints] = useState<(typeof pointOptions)[number]>(10)
  const [coreValue, setCoreValue] = useState('Teamwork')
  const [message, setMessage] = useState('')
  const [mediaFile, setMediaFile] = useState<File | null>(null)
  const [mediaPreview, setMediaPreview] = useState<string | null>(null)
  const [mediaType, setMediaType] = useState<'IMAGE' | 'VIDEO' | null>(null)

  const {
    data: me,
    isLoading: meLoading,
    isError: meError,
  } = useQuery<MeResponse>({
    queryKey: ['me'],
    queryFn: getMe,
  })

  const {
    data: users,
    isLoading: usersLoading,
    isError: usersError,
  } = useQuery<UserSearchItem[]>({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  const {
    isLoading: sentLoading,
    isError: sentError,
  } = useQuery({
    queryKey: ['kudos', 'peer-recognition', 'sent'],
    queryFn: getPeerRecognitionSent,
  })

  const createMutation = useMutation({
    mutationFn: async (payload: CreateKudoPayload) => createKudoPeerRecognition(payload),
    onSuccess: async () => {
      setReceiverId('')
      setPoints(10)
      setCoreValue('Teamwork')
      setMessage('')
      setMediaFile(null)
      setMediaPreview(null)
      setMediaType(null)
      await queryClient.invalidateQueries({ queryKey: ['kudos', 'peer-recognition', 'sent'] })
      await queryClient.invalidateQueries({ queryKey: ['kudos', 'peer-recognition', 'received'] })
      await queryClient.invalidateQueries({ queryKey: ['me'] })
    },
  })

  const isUploading = Boolean(mediaFile && createMutation.isPending)

  const handleMediaChange = (file: File | null) => {
    setMediaFile(file)
    if (!file) {
      setMediaPreview(null)
      setMediaType(null)
      return
    }

    setMediaPreview(URL.createObjectURL(file))
    setMediaType(file.type.startsWith('video/') ? 'VIDEO' : 'IMAGE')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const media = mediaFile
      ? [
          {
            mediaType: mediaType ?? (mediaFile.type.startsWith('video/') ? 'VIDEO' : 'IMAGE'),
            mediaUrl: await uploadFile(mediaFile),
          },
        ]
      : undefined

    const payload: CreateKudoPayload = {
      receiverId,
      points,
      coreValue,
      message,
      visibility: 'PRIVATE',
      ...(media ? { media } : {}),
    }

    createMutation.mutate(payload)
  }

  const receiverOptions = useMemo(() => {
    const allUsers = users ?? []
    return allUsers.filter((user) => user.id !== me?.id)
  }, [me?.id, users])

  const pointsError = points < 10 || points > 50
  const hasRequiredFields = Boolean(receiverId.trim() && coreValue.trim() && message.trim())
  const canSubmit = hasRequiredFields && !pointsError

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <header className="border-b border-slate-200 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Peer recognition</p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900">Send points</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">Send between 10 and 50 points to a teammate.</p>
      </header>

      {meLoading || usersLoading || sentLoading ? (
        <div className="mt-5 grid gap-4">
          <div className="h-24 animate-pulse rounded-2xl bg-slate-100" />
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="h-72 animate-pulse rounded-2xl bg-slate-100" />
            <div className="h-72 animate-pulse rounded-2xl bg-slate-100" />
          </div>
        </div>
      ) : meError || usersError || sentError ? (
        <div className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
          Failed to load peer recognition data
        </div>
      ) : null}

      <form className="mt-5 grid gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Receiver
          <select
            value={receiverId}
            onChange={(event) => setReceiverId(event.target.value)}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          >
            <option value="">Select a user</option>
            {receiverOptions.map((user) => (
              <option key={user.id} value={user.id}>
                {user.fullName} ({user.email})
              </option>
            ))}
          </select>
        </label>

        <div className="grid gap-2 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Points
            <select
              value={points}
              onChange={(event) => setPoints(Number(event.target.value) as (typeof pointOptions)[number])}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              {pointOptions.map((option) => (
                <option key={option} value={option}>
                  {option} pts
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Quick picks
            <div className="grid grid-cols-5 gap-2">
              {pointOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setPoints(option)}
                  className={`rounded-2xl border px-3 py-3 text-sm font-semibold transition ${
                    points === option ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-slate-200 bg-white text-slate-700'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </label>
        </div>

        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Core value
          <input
            type="text"
            value={coreValue}
            onChange={(event) => setCoreValue(event.target.value)}
            placeholder="Teamwork"
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Message
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={4}
            placeholder="Write something meaningful..."
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Attachment
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(event) => handleMediaChange(event.target.files?.[0] ?? null)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition file:mr-4 file:rounded-xl file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
            />
          </label>

          
        </div>

        {isUploading ? (
          <div className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
            Uploading attachment...
          </div>
        ) : mediaPreview ? (
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {mediaType === 'VIDEO' ? (
              <video controls className="w-full">
                <source src={mediaPreview} />
              </video>
            ) : (
              <img src={mediaPreview} alt="media preview" className="h-56 w-full object-cover" />
            )}
          </div>
        ) : null}

        {me ? (
          <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
            You are sending as <strong className="text-slate-900">{me.fullName}</strong>
          </div>
        ) : null}

        <div className="flex items-center justify-between gap-3">
          <p className="text-sm text-slate-500">Your points must be between 10 and 50. Peer recognition is private by default.</p>
          <button
            type="submit"
            disabled={!canSubmit || createMutation.isPending || isUploading}
            className="rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isUploading ? 'Uploading...' : createMutation.isPending ? 'Sending...' : 'Send points'}
          </button>
        </div>
      </form>
    </section>
  )
}

export function PeerRecognitionPage() {
  return (
    <div className="grid gap-5">
      <header className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Peer recognition</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Sent & received kudos</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Track recognitions you sent and recognitions you received in one place.
          </p>
        </div>
      </header>

      <SendPointsCard />

      <div className="grid gap-5 lg:grid-cols-2">
        <KudoList
          title="Sent"
          description="All kudos you have sent to teammates."
          queryKey={['kudos', 'peer-recognition', 'sent']}
          queryFn={getPeerRecognitionSent}
          emptyText="You haven't sent any kudos yet."
        />

        <KudoList
          title="Received"
          description="All kudos your teammates have sent to you."
          queryKey={['kudos', 'peer-recognition', 'received']}
          queryFn={getPeerRecognitionReceived}
          emptyText="You haven't received any kudos yet."
        />
      </div>
    </div>
  )
}
