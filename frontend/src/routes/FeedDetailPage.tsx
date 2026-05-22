import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { addKudoFeedComment, addKudoFeedReaction, getKudoById, uploadFile } from '../api'
import { FeedLoading } from '../components/FeedLoading'

type ReactionType = 'LIKE' | 'LOVE' | 'FIRE' | 'CLAP' | 'PARTY'
type CommentMode = 'text' | 'image' | 'video'

type ReactionOption = {
  type: ReactionType
  icon: string
  label: string
  className: string
}

const reactionOptions: ReactionOption[] = [
  { type: 'LIKE', icon: '👍', label: 'Like', className: 'from-blue-50 to-blue-100 text-blue-700' },
  { type: 'LOVE', icon: '❤️', label: 'Love', className: 'from-rose-50 to-rose-100 text-rose-700' },
  { type: 'FIRE', icon: '🔥', label: 'Fire', className: 'from-orange-50 to-orange-100 text-orange-700' },
  { type: 'CLAP', icon: '👏', label: 'Clap', className: 'from-amber-50 to-amber-100 text-amber-700' },
  { type: 'PARTY', icon: '🎉', label: 'Party', className: 'from-violet-50 to-violet-100 text-violet-700' },
]

export function FeedDetailPage() {
  const { id } = useParams()
  const queryClient = useQueryClient()
  const [comment, setComment] = useState('')
  const [selectedReaction, setSelectedReaction] = useState<ReactionType | null>(null)
  const [showPicker, setShowPicker] = useState(false)
  const [commentMode, setCommentMode] = useState<CommentMode>('text')
  const [commentFile, setCommentFile] = useState<File | null>(null)
  const [commentPreview, setCommentPreview] = useState<string | null>(null)
  const [commentMediaType, setCommentMediaType] = useState<'IMAGE' | 'VIDEO' | null>(null)

  const {
    data: item,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['kudo', id],
    queryFn: () => getKudoById(id ?? ''),
    enabled: Boolean(id),
  })

  const reactionMutation = useMutation({
    mutationFn: (emoji: ReactionType) => addKudoFeedReaction(id ?? '', { emoji }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['kudo', id] })
      await queryClient.invalidateQueries({ queryKey: ['kudos'] })
    },
  })

  const commentMutation = useMutation({
    mutationFn: async (payload: { content: string; mediaFile?: File | null }) => {
      const media = payload.mediaFile
        ? [
            {
              mediaType: (payload.mediaFile.type.startsWith('video/') ? 'VIDEO' : 'IMAGE') as 'IMAGE' | 'VIDEO',
              mediaUrl: await uploadFile(payload.mediaFile),
            },
          ]
        : undefined

      return addKudoFeedComment(id ?? '', {
        content: payload.content,
        ...(media ? { media } : {}),
      })
    },
    onSuccess: async () => {
      setComment('')
      setCommentFile(null)
      setCommentPreview(null)
      setCommentMode('text')
      setCommentMediaType(null)
      await queryClient.invalidateQueries({ queryKey: ['kudo', id] })
      await queryClient.invalidateQueries({ queryKey: ['kudos'] })
    },
  })

  const activeReaction = useMemo(
    () => reactionOptions.find((reaction) => reaction.type === selectedReaction),
    [selectedReaction],
  )

  if (!id) return <p>Missing feed id</p>
  if (isLoading) return <FeedLoading />

  if (isError || !item) {
    return (
      <div className="grid gap-4">
        <Link to="/feed" className="text-sm font-semibold text-blue-700 hover:underline">
          ← Back to feed
        </Link>
        <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
          Failed to load feed detail
        </article>
      </div>
    )
  }

  const handleCommentFile = (file: File | null) => {
    setCommentFile(file)
    if (!file) {
      setCommentPreview(null)
      setCommentMediaType(null)
      return
    }
    setCommentPreview(URL.createObjectURL(file))
    setCommentMediaType(file.type.startsWith('video/') ? 'VIDEO' : 'IMAGE')
    setCommentMode(file.type.startsWith('video/') ? 'video' : 'image')
  }


  return (
    <div className="grid gap-5">
      <Link to="/feed" className="text-sm font-semibold text-blue-700 hover:underline">
        ← Back to feed
      </Link>

      <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <header className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Feed detail</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">{item.sender?.fullName ?? 'Unknown sender'}</h1>
          </div>
          <div className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">{item.points} pts</div>
        </header>

        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
              #{item.coreValue}
            </span>
            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
              {item.visibility}
            </span>
          </div>
          <p className="text-[16px] leading-8 text-slate-700">{item.message}</p>
        </div>

        {item.media?.length ? (
          <div className="mt-6 grid gap-3">
            {item.media.map((media) =>
              media.mediaType === 'VIDEO' ? (
                <video key={media.id} controls className="w-full rounded-2xl border border-slate-200">
                  <source src={media.mediaUrl} />
                </video>
              ) : (
                <img
                  key={media.id}
                  src={media.mediaUrl}
                  alt="kudo media"
                  className="w-full rounded-2xl border border-slate-200 object-cover"
                />
              ),
            )}
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
          <span>
            To <strong className="text-slate-900">{item.receiver?.fullName ?? 'Unknown receiver'}</strong>
          </span>
          <span>{new Date(item.createdAt).toLocaleString()}</span>
        </div>
      </article>

      <section className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <header className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <h2 className="text-xl font-semibold text-slate-900">Reactions</h2>
          <span className="text-sm text-slate-500">{item.reactions?.length ?? 0} total</span>
        </header>

        <div className="flex flex-wrap gap-3">
          {reactionOptions.map((reaction) => {
            const isSelected = selectedReaction === reaction.type

            return (
              <button
                key={reaction.type}
                type="button"
                className={`group flex min-w-[92px] flex-col items-center gap-1 rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-1 hover:scale-105 active:scale-95 ${
                  isSelected
                    ? `border-transparent bg-linear-to-br ${reaction.className} shadow-lg`
                    : 'border-slate-200 bg-slate-50 text-slate-700'
                }`}
                onClick={() => {
                  setSelectedReaction(reaction.type)
                  setShowPicker(true)
                }}
              >
                <span
                  className={`text-2xl transition-transform duration-200 ${
                    isSelected ? 'animate-bounce' : 'group-hover:scale-125'
                  }`}
                >
                  {reaction.icon}
                </span>
                <span>{reaction.label}</span>
              </button>
            )
          })}
        </div>

        {showPicker && activeReaction ? (
          <div className="animate-[fadeIn_220ms_ease-out] rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-xl shadow-sm">
                {activeReaction.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Send {activeReaction.label}</p>
                <p className="text-sm text-slate-500">Tap send to confirm your reaction.</p>
              </div>
              <button
                type="button"
                disabled={reactionMutation.isPending}
                onClick={() => reactionMutation.mutate(activeReaction.type)}
                className="ml-auto rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {reactionMutation.isPending ? 'Sending...' : 'Send'}
              </button>
            </div>
          </div>
        ) : null}

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          {item.reactions?.length ? (
            <div className="flex flex-wrap gap-2">
              {item.reactions.map((reaction) => {
                const matched = reactionOptions.find((option) => option.type === reaction.emoji)
                return (
                  <span
                    key={reaction.id}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 font-medium text-slate-700 shadow-sm"
                  >
                    <span>{matched?.icon ?? '👍'}</span>
                    <span>{matched?.label ?? reaction.emoji}</span>
                  </span>
                )
              })}
            </div>
          ) : (
            <p>No reactions yet.</p>
          )}
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <header className="flex items-center justify-between gap-3 border-b border-slate-200 pb-4">
          <h2 className="text-xl font-semibold text-slate-900">Comments</h2>
          <span className="text-sm text-slate-500">{item.comments?.length ?? 0} total</span>
        </header>

        <div className="grid gap-3">
          {item.comments?.length ? (
            item.comments.map((commentItem) => (
              <article key={commentItem.id} className="rounded-2xl bg-slate-50 px-4 py-3">
                <strong className="block text-slate-900">{commentItem.user?.fullName ?? 'User'}</strong>
                <p className="mt-1 text-sm leading-6 text-slate-600">{commentItem.content}</p>
                {commentItem.media?.length ? (
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {commentItem.media.map((media) =>
                      media.mediaType === 'VIDEO' ? (
                        <video key={media.id} controls className="w-full rounded-2xl border border-slate-200 bg-black">
                          <source src={media.mediaUrl} />
                        </video>
                      ) : (
                        <img
                          key={media.id}
                          src={media.mediaUrl}
                          alt="comment attachment"
                          className="w-full rounded-2xl border border-slate-200 object-cover"
                        />
                      ),
                    )}
                  </div>
                ) : null}
              </article>
            ))
          ) : (
            <article className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-500">No comments yet.</article>
          )}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
          <div className="mb-3 flex gap-2">
            {[
              ['text', 'Text'],
              ['image', 'Image'],
              ['video', 'Video'],
            ].map(([mode, label]) => (
              <button
                key={mode}
                type="button"
                onClick={() => setCommentMode(mode as CommentMode)}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${
                  commentMode === mode ? 'bg-blue-600 text-white' : 'bg-white text-slate-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {commentMode === 'text' ? (
            <textarea
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              placeholder="Write your comment..."
              rows={4}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          ) : (
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Upload {commentMode}
              <input
                type="file"
                accept={commentMode === 'image' ? 'image/*' : 'video/*'}
                onChange={(event) => handleCommentFile(event.target.files?.[0] ?? null)}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition file:mr-4 file:rounded-xl file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
              />
            </label>
          )}

          {commentPreview ? (
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              {commentMediaType === 'VIDEO' ? (
                <video controls className="w-full">
                  <source src={commentPreview} />
                </video>
              ) : (
                <img src={commentPreview} alt="comment preview" className="h-56 w-full object-cover" />
              )}
            </div>
          ) : null}

          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-sm text-slate-500">You can leave text and upload an image or video in the same comment.</p>
            <button
              type="button"
              disabled={(!comment.trim() && !commentFile) || commentMutation.isPending}
              onClick={() => commentMutation.mutate({ content: comment.trim(), mediaFile: commentFile })}
              className="rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {commentMutation.isPending ? 'Sending...' : 'Send'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
