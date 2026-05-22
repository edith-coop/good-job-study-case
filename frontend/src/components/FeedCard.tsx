import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addKudoComment, addKudoReaction, type KudoListItem } from '../api'

type ReactionEmoji = '👍' | '❤️' | '😂' | '😮' | '😢' | '👏'
const reactionOptions: ReactionEmoji[] = ['👍', '❤️', '😂', '😮', '😢', '👏']

export function FeedCard({ item }: { item: KudoListItem }) {
  const queryClient = useQueryClient()
  const [selectedReaction, setSelectedReaction] = useState<ReactionEmoji | null>(null)
  const [showPicker, setShowPicker] = useState(false)
  const [comment, setComment] = useState('')

  useEffect(() => {
    if (item.reactions?.length) {
      const meReaction = item.reactions[0]?.emoji as ReactionEmoji | undefined
      setSelectedReaction(meReaction ?? null)
    }
  }, [item.reactions])

  const initials =
    item.sender?.fullName
      ?.split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('') ?? 'UK'

  const visibleComments = useMemo(() => item.comments?.slice(-2) ?? [], [item.comments])

  const reactionMutation = useMutation({
    mutationFn: (emoji: ReactionEmoji) => addKudoReaction(item.id, { emoji }),
    onSuccess: async () => {
      setShowPicker(false)
      await queryClient.invalidateQueries({ queryKey: ['kudos'] })
      await queryClient.invalidateQueries({ queryKey: ['kudo', item.id] })
    },
  })

  const commentMutation = useMutation({
    mutationFn: (content: string) => addKudoComment(item.id, { content }),
    onSuccess: async () => {
      setComment('')
      await queryClient.invalidateQueries({ queryKey: ['kudos'] })
      await queryClient.invalidateQueries({ queryKey: ['kudo', item.id] })
    },
  })

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <header className="flex items-start justify-between gap-3">
        <Link to={`/feed/${item.id}`} className="flex items-center gap-3 text-left">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-bold text-white">
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

        <div className="rounded-full bg-blue-50 px-3 py-2 text-sm font-bold text-blue-700">
          {item.points} pts
        </div>
      </header>

      <div className="mt-4 space-y-3">
        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
          #{item.coreValue}
        </span>
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

      <div className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
        Recognition sent to <strong className="text-slate-900">{item.receiver?.fullName ?? 'Unknown receiver'}</strong>
      </div>

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
          className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
            selectedReaction ? 'border-blue-200 bg-blue-50 text-blue-700' : 'border-slate-200 bg-slate-50 text-slate-700'
          }`}
          onClick={() => setShowPicker((prev) => !prev)}
        >
          {selectedReaction ?? '👍'} React
        </button>
        <button
          type="button"
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5"
          onClick={() => {
            const input = document.getElementById(`comment-${item.id}`) as HTMLInputElement | null
            input?.focus()
          }}
        >
          💬 Comment
        </button>
        <button
          type="button"
          className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5"
        >
          ↗ Share
        </button>
      </div>

      {showPicker ? (
        <div className="mt-3 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3">
          {reactionOptions.map((emoji) => (
            <button
              key={emoji}
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full border border-slate-200 bg-white text-lg transition hover:-translate-y-0.5"
              disabled={reactionMutation.isPending}
              onClick={() => {
                setSelectedReaction(emoji)
                reactionMutation.mutate(emoji)
              }}
            >
              {emoji}
            </button>
          ))}
        </div>
      ) : null}

      <div className="mt-4 space-y-3">
        {visibleComments.length ? (
          <div className="space-y-2 rounded-2xl bg-slate-50 p-3">
            {visibleComments.map((commentItem) => (
              <div key={commentItem.id} className="rounded-xl bg-white px-3 py-2 text-sm text-slate-700">
                <strong className="mr-2 text-slate-900">{commentItem.user?.fullName ?? 'User'}</strong>
                {commentItem.content}
              </div>
            ))}
          </div>
        ) : null}

        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-xs font-bold text-white">
            ME
          </div>
          <input
            id={`comment-${item.id}`}
            type="text"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Write a comment..."
            className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
          <button
            type="button"
            disabled={!comment.trim() || commentMutation.isPending}
            onClick={() => commentMutation.mutate(comment.trim())}
            className="rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </article>
  )
}
