import { useEffect } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getNotifications, getUnreadNotificationCount, markAllNotificationsAsRead } from '../api'
import { FeedLoading } from '../components/FeedLoading'
import { connectSocket, disconnectSocket } from '../lib/socket'

const notificationMeta: Record<string, { label: string; badgeClass: string; icon: string }> = {
  KUDO_CREATED: { label: 'Kudo', badgeClass: 'bg-blue-50 text-blue-700', icon: '👏' },
  REWARD_APPROVED: { label: 'Reward', badgeClass: 'bg-emerald-50 text-emerald-700', icon: '🎁' },
  BUDGET_RESET: { label: 'Budget', badgeClass: 'bg-violet-50 text-violet-700', icon: '💰' },
  TEAM_MILESTONE: { label: 'Milestone', badgeClass: 'bg-amber-50 text-amber-700', icon: '🏆' },
}

function timeAgo(dateString: string) {
  const date = new Date(dateString)
  const diffMs = Date.now() - date.getTime()
  const diffMinutes = Math.max(1, Math.floor(diffMs / 60000))

  if (diffMinutes < 60) return `${diffMinutes}m`
  const diffHours = Math.floor(diffMinutes / 60)
  if (diffHours < 24) return `${diffHours}h`
  const diffDays = Math.floor(diffHours / 24)
  return `${diffDays}d`
}

export function NotificationsPage() {
  const queryClient = useQueryClient()

  const {
    data: notifications,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['notifications'],
    queryFn: getNotifications,
  })

  const { data: unreadCountData } = useQuery({
    queryKey: ['notifications', 'unread-count'],
    queryFn: getUnreadNotificationCount,
  })

  const markAllReadMutation = useMutation({
    mutationFn: markAllNotificationsAsRead,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['notifications'] })
      await queryClient.invalidateQueries({ queryKey: ['notifications', 'unread-count'] })
    },
  })

  useEffect(() => {
    const cachedUser = localStorage.getItem('authUser')
    const userId = cachedUser ? (JSON.parse(cachedUser) as { id?: string }).id : undefined
    if (!userId) return

    const socket = connectSocket(userId)

    const invalidate = async () => {
      await queryClient.invalidateQueries({ queryKey: ['notifications'] })
      await queryClient.invalidateQueries({ queryKey: ['notifications', 'unread-count'] })
    }

    const handleNotification = async () => {
      await invalidate()
    }

    const handleNotificationRead = async () => {
      await invalidate()
    }

    socket.on('notification', handleNotification)
    socket.on('notification.read', handleNotificationRead)

    return () => {
      socket.off('notification', handleNotification)
      socket.off('notification.read', handleNotificationRead)
      disconnectSocket()
    }
  }, [queryClient])

  const items = notifications?.items ?? []
  const unreadCount = unreadCountData?.unreadCount ?? notifications?.meta.unreadCount ?? 0

  return (
    <div className="grid gap-5">
      <header className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Notifications</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Recent alerts</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Stay up to date with kudos, rewards, budget changes, and team milestones.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <span className="block text-2xl font-bold text-slate-900">{unreadCount}</span>
            <small className="text-slate-500">Unread</small>
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <span className="block text-2xl font-bold text-slate-900">{notifications?.meta.total ?? 0}</span>
            <small className="text-slate-500">Total</small>
          </div>
        </div>
      </header>

      {isLoading ? (
        <FeedLoading />
      ) : isError ? (
        <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-700">Failed to load notifications</article>
      ) : (
        <section className="grid gap-4">
          {items.length === 0 ? (
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
              <h3 className="text-lg font-semibold text-slate-900">No notifications yet</h3>
              <p className="mt-2 text-slate-500">Notifications from kudos and rewards will appear here.</p>
            </article>
          ) : (
            items.map((item) => {
              const meta = notificationMeta[item.type] ?? {
                label: item.type,
                badgeClass: 'bg-slate-100 text-slate-700',
                icon: '🔔',
              }

              return (
                <article
                  key={item.id}
                  className={`rounded-2xl border p-4 shadow-sm transition hover:-translate-y-0.5 ${
                    item.isRead ? 'border-slate-200 bg-white' : 'border-blue-200 bg-linear-to-r from-blue-50 to-violet-50'
                  }`}
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sm">
                        <span className="text-lg">{meta.icon}</span>
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <strong className="text-slate-900">{item.actor?.fullName ?? 'Amanotes system'}</strong>
                          <span className={`rounded-full px-3 py-1 text-xs font-bold ${meta.badgeClass}`}>{meta.label}</span>
                          {!item.isRead ? (
                            <span className="rounded-full bg-blue-600 px-2 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                              New
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                          {item.type === 'KUDO_CREATED'
                            ? 'You received a new kudo.'
                            : item.type === 'REWARD_APPROVED'
                              ? 'Your reward request was approved.'
                              : item.type === 'BUDGET_RESET'
                                ? 'Your monthly giving budget has been refreshed.'
                                : 'A team milestone has been unlocked.'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500 lg:justify-end">
                      <span>{timeAgo(item.createdAt)}</span>
                      <span>ago</span>
                    </div>
                  </div>
                </article>
              )
            })
          )}
        </section>
      )}

      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Notification preferences</h2>
            <p className="mt-1 text-sm text-slate-500">These controls are ready for a backend settings endpoint later.</p>
          </div>
          <button
            type="button"
            onClick={() => markAllReadMutation.mutate()}
            disabled={markAllReadMutation.isPending}
            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {markAllReadMutation.isPending ? 'Saving...' : 'Mark all as read'}
          </button>
        </div>
      </section>
    </div>
  )
}
