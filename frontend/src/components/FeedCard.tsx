import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addKudoFeedComment, addKudoFeedReaction, uploadFile, type KudoListItem } from '../api'

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

export function FeedCard({ item }: { item: KudoListItem }) {
  const queryClient = useQueryClient()
  const [selectedReaction, setSelectedReaction] = useState<ReactionType | null>(null)
  const [showPicker, setShowPicker] = useState(false)
  const [comment, setComment] = useState('')
  const [commentMode, setCommentMode] = useState<CommentMode>('text')
  const [commentFile, setCommentFile] = useState<File | null>(null)
  const [commentPreview, setCommentPreview] = useState<string | null>(null)
  const [commentMediaType, setCommentMediaType] = useState<'IMAGE' | 'VIDEO' | null>(null)

  useEffect(() => {
    if (item.reactions?.length) {
      const meReaction = item.reactions[0]?.emoji as ReactionType | undefined
      setSelectedReaction(meReaction ?? null)
    }
  }, [item.reactions])

  const initials =
    item.sender?.fullName
      ?.split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('') ?? 'UK'

  const visibleComments = useMemo(() => item.comments?.slice(-5) ?? [], [item.comments])

  const reactionMutation = useMutation({
    mutationFn: (emoji: ReactionType) => addKudoFeedReaction(item.id, { emoji }),
    onSuccess: async () => {
      setShowPicker(false)
      await queryClient.invalidateQueries({ queryKey: ['kudos'] })
      await queryClient.invalidateQueries({ queryKey: ['kudo', item.id] })
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

      return addKudoFeedComment(item.id, {
        content: payload.content,
        ...(media ? { media } : {}),
      })
    },
    onSuccess: async () => {
      setComment('')
      setCommentMode('text')
      setCommentFile(null)
      setCommentPreview(null)
      setCommentMediaType(null)
      await queryClient.invalidateQueries({ queryKey: ['kudos'] })
      await queryClient.invalidateQueries({ queryKey: ['kudo', item.id] })
    },
  })

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
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <header className="flex items-start justify-between gap-3">
        <Link to={`/feed/${item.id}`} className="flex items-center gap-3 text-left">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-linear-to-br from-blue-600 to-violet-600 text-sm font-bold text-white">
            {initials}
          </div>
          <div>
            <strong className="block text-slate-900">{item.sender?.fullName ?? 'Unknown sender'}</strong>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <span>{new Date(item.createdAt).toLocaleString()}</span>
              <span>•</span>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 font-semibold text-blue-700">
                {item.visibility}
              </span>
            </div>
          </div>
        </Link>
      </header>

      <div className="mt-4 space-y-3">
        {item?.tags?.length ? item.tags.map((tag:any) => (
          <span key={tag.id} className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            #{tag.user.fullName}
          </span>
        )) : null}
        <p className="m-0 text-[15px] leading-7 text-slate-700">{item.message}</p>
      </div>

      {item.media?.length ? (
        <div className="mt-4 grid gap-3">
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

      

      <div className="mt-4 flex items-center justify-between gap-3 border-b border-slate-200 pb-4 text-sm text-slate-500">
        <span>👍 {item.reactions?.length ?? 0}</span>
        <span>💬 {item.comments?.length ?? 0}</span>
        <Link to={`/feed/${item.id}`} className="font-semibold text-blue-700 hover:underline">
          View detail
        </Link>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <button
          type="button"
          className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
            selectedReaction ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-slate-200 bg-slate-50 text-slate-700'
          }`}
          onClick={() => setShowPicker((prev) => !prev)}
        >
          <span className="text-lg leading-none">{selectedReaction ? reactionOptions.find((reaction) => reaction.type === selectedReaction)?.icon ?? '👍' : '👍'}</span>
          <span>React</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5"
          onClick={() => {
            const input = document.getElementById(`comment-${item.id}`) as HTMLInputElement | null
            input?.focus()
          }}
        >
          <span className="text-lg leading-none">💬</span>
          <span>Comment</span>
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5"
        >
          <span className="text-lg leading-none">↗</span>
          <span>Share</span>
        </button>
      </div>

      {showPicker ? (
        <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 animate-[fadeIn_220ms_ease-out]">
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
                      : 'border-slate-200 bg-white text-slate-700'
                  }`}
                  disabled={reactionMutation.isPending}
                  onClick={() => {
                    setSelectedReaction(reaction.type)
                    reactionMutation.mutate(reaction.type)
                  }}
                >
                  <span className={`text-2xl transition-transform duration-200 ${isSelected ? 'animate-bounce' : 'group-hover:scale-125'}`}>
                    {reaction.icon}
                  </span>
                  <span>{reaction.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      ) : null}

      <div className="mt-4 space-y-3">
        {visibleComments.length ? (
          <div className="space-y-2 rounded-2xl bg-slate-50 p-3">
            {visibleComments.map((commentItem) => (
              <div key={commentItem.id} className="rounded-xl bg-white px-3 py-2 text-sm text-slate-700">
                <strong className="mr-2 text-slate-900">{commentItem.user?.fullName ?? 'User'}</strong>
                {commentItem.content}
                {commentItem.media?.length ? (
                  <div className="mt-2 grid gap-2 sm:grid-cols-2">
                    {commentItem.media.map((media) =>
                      media.mediaType === 'VIDEO' ? (
                        <video key={media.id} controls className="w-full rounded-xl border border-slate-200 bg-black">
                          <source src={media.mediaUrl} />
                        </video>
                      ) : (
                        <img
                          key={media.id}
                          src={media.mediaUrl}
                          alt="comment attachment"
                          className="w-full rounded-xl border border-slate-200 object-cover"
                        />
                      ),
                    )}
                  </div>
                ) : null}
              </div>
            ))}

            {item.comments && item.comments.length > 5 ? (
              <Link to={`/feed/${item.id}`} className="inline-flex text-sm font-semibold text-blue-700 hover:underline">
                View all comments
              </Link>
            ) : null}
          </div>
        ) : null}

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
              placeholder="Write a comment..."
              rows={3}
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
                <img src={commentPreview} alt="comment preview" className="h-48 w-full object-cover" />
              )}
            </div>
          ) : null}

          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="text-sm text-slate-500">You can write text and upload an image or video in the same comment.</p>
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
      </div>
    </article>
  )
}
