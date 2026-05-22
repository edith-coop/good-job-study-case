import { useQuery } from '@tanstack/react-query'
import { NavLink } from 'react-router-dom'
import { getMe, type AuthUser, type MeResponse } from '../api'

function SkeletonBlock({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-2xl bg-slate-200 ${className}`} />
}

export function SharedSidebar({ user, onLogout }: { user: AuthUser; onLogout: () => void }) {
  const { data: me, isLoading, isError } = useQuery<MeResponse>({
    queryKey: ['me'],
    queryFn: getMe,
  })

  const remainingBudget = me?.currentGivingBudget?.remainingBudget ?? 200
  const pointBalance = me?.pointBalance ?? 0

  return (
    <aside className="sticky top-5 h-[calc(100vh-2.5rem)] overflow-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
          Amanotes Recognition
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-slate-900">Internal Reward Hub</h2>
        <p className="mt-2 text-sm leading-6 text-slate-500">
          Recognize teammates, track points, and redeem perks.
        </p>
      </div>

      <nav className="mt-6 grid gap-2">
        <NavLink
          to="/feed"
          className={({ isActive }) =>
            `rounded-2xl border px-4 py-3 text-left font-semibold transition hover:-translate-y-0.5 ${
              isActive
                ? 'border-blue-200 bg-gradient-to-r from-blue-50 to-violet-50 text-blue-700'
                : 'border-slate-200 bg-slate-50 text-slate-700'
            }`
          }
        >
          Feed
        </NavLink>
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            `rounded-2xl border px-4 py-3 text-left font-semibold transition hover:-translate-y-0.5 ${
              isActive
                ? 'border-blue-200 bg-gradient-to-r from-blue-50 to-violet-50 text-blue-700'
                : 'border-slate-200 bg-slate-50 text-slate-700'
            }`
          }
        >
          Notifications
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `rounded-2xl border px-4 py-3 text-left font-semibold transition hover:-translate-y-0.5 ${
              isActive
                ? 'border-blue-200 bg-gradient-to-r from-blue-50 to-violet-50 text-blue-700'
                : 'border-slate-200 bg-slate-50 text-slate-700'
            }`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/rewards"
          className={({ isActive }) =>
            `rounded-2xl border px-4 py-3 text-left font-semibold transition hover:-translate-y-0.5 ${
              isActive
                ? 'border-blue-200 bg-gradient-to-r from-blue-50 to-violet-50 text-blue-700'
                : 'border-slate-200 bg-slate-50 text-slate-700'
            }`
          }
        >
          Rewards
        </NavLink>
      </nav>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
        <p className="text-sm font-medium text-slate-500">Logged in as</p>
        {isLoading ? (
          <div className="mt-3 space-y-2">
            <SkeletonBlock className="h-5 w-36" />
            <SkeletonBlock className="h-4 w-44" />
          </div>
        ) : isError ? (
          <p className="mt-2 text-sm text-rose-600">Failed to load profile</p>
        ) : (
          <>
            <p className="mt-1 font-semibold text-slate-900">{me?.fullName ?? user.fullName}</p>
            <p className="mt-1 text-sm text-slate-500">{me?.email ?? user.email}</p>
          </>
        )}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <span className="block text-2xl font-bold text-slate-900">{remainingBudget}</span>
          <small className="text-slate-500">Remaining pts</small>
        </div>
        <div className="rounded-2xl bg-slate-50 px-4 py-3">
          <span className="block text-2xl font-bold text-slate-900">{pointBalance}</span>
          <small className="text-slate-500">Balance pts</small>
        </div>
      </div>

      <button
        type="button"
        className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-700 transition hover:-translate-y-0.5"
        onClick={onLogout}
      >
        Logout
      </button>
    </aside>
  )
}
