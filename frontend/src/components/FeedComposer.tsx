import { useMemo, useState, type FormEvent } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  createKudo,
  getMe,
  getUsers,
  type CreateKudoPayload,
  type MeResponse,
  type UserSearchItem,
  uploadFile,
} from '../api'

type MediaType = 'IMAGE' | 'VIDEO'

export function FeedComposer() {
  const queryClient = useQueryClient()
  const [isExpanded, setIsExpanded] = useState(false)
  const [message, setMessage] = useState('')
  const [taggedUserIds, setTaggedUserIds] = useState<string[]>([])
  const [mediaFile, setMediaFile] = useState<File | null>(null)
  const [mediaPreview, setMediaPreview] = useState<string | null>(null)
  const [mediaType, setMediaType] = useState<MediaType | null>(null)

  const { data: me } = useQuery<MeResponse>({
    queryKey: ['me'],
    queryFn: getMe,
  })

  const { data: users, isLoading: usersLoading } = useQuery<UserSearchItem[]>({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  const createMutation = useMutation({
    mutationFn: async (payload: CreateKudoPayload) => createKudo(payload),
    onSuccess: async () => {
      setIsExpanded(false)
      setMessage('')
      setTaggedUserIds([])
      setMediaFile(null)
      setMediaPreview(null)
      setMediaType(null)
      await queryClient.invalidateQueries({ queryKey: ['kudos', 'feed'] })
    },
  })

  const isUploading = Boolean(mediaFile && createMutation.isPending)
  const userOptions = useMemo(() => (users ?? []).filter((user) => user.id !== me?.id), [me?.id, users])

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
            durationSeconds: mediaType === 'VIDEO' ? 0 : undefined,
          },
        ]
      : undefined

    const payload = {
      message,
      visibility: 'PUBLIC' as const,
      ...(media ? { media } : {}),
      ...(taggedUserIds.length ? { taggedUserIds } : {}),
    }

    createMutation.mutate(payload as CreateKudoPayload)
  }

  return (
    <section className="mb-5 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-linear-to-br from-blue-600 to-violet-600 font-bold text-white">
          {me?.fullName?.slice(0, 2).toUpperCase() ?? 'ME'}
        </div>
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="min-h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-left text-slate-500 transition hover:-translate-y-0.5 hover:bg-slate-100"
        >
          Share recognition with your team...
        </button>
      </div>

      {isExpanded ? (
        <form className="mt-4 grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4" onSubmit={handleSubmit}>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Message
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={4}
              placeholder="Share recognition with your team..."
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Tagged users
            <div className="grid gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3">
              <div className="flex flex-wrap gap-2">
                {taggedUserIds.map((id) => {
                  const user = userOptions.find((item) => item.id === id)
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setTaggedUserIds((prev) => prev.filter((userId) => userId !== id))}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                    >
                      {user?.fullName ?? id} ×
                    </button>
                  )
                })}
              </div>
              <select
                value=""
                onChange={(event) => {
                  const selectedId = event.target.value
                  if (!selectedId) return
                  setTaggedUserIds((prev) => (prev.includes(selectedId) ? prev : [...prev, selectedId]))
                }}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Select users to tag</option>
                {usersLoading ? (
                  <option value="">Loading users...</option>
                ) : (
                  userOptions.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.fullName} ({user.email})
                    </option>
                  ))
                )}
              </select>
            </div>
          </label>

          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Photo / Video
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(event) => handleMediaChange(event.target.files?.[0] ?? null)}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition file:mr-4 file:rounded-xl file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
            />
          </label>

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

          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-slate-500">Text, images/videos, and tagged users are supported.</p>
            <button
              type="submit"
              disabled={!message.trim() || createMutation.isPending || isUploading}
              className="rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isUploading ? 'Uploading...' : createMutation.isPending ? 'Sending...' : 'Post Feed'}
            </button>
          </div>
        </form>
      ) : null}
    </section>
  )
}
