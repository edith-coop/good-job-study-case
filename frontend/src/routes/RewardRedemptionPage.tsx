import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useMemo, useState } from 'react'
import { getMe, getRedemptions, getRewards, redeemReward } from '../api'

function statusClass(status: string) {
  switch (status) {
    case 'Available':
      return 'bg-blue-50 text-blue-700'
    case 'Popular':
      return 'bg-emerald-50 text-emerald-700'
    case 'Fast redeem':
      return 'bg-amber-50 text-amber-700'
    case 'Limited':
      return 'bg-rose-50 text-rose-700'
    default:
      return 'bg-slate-100 text-slate-700'
  }
}

export function RewardRedemptionPage() {
  const queryClient = useQueryClient()
  const [selectedRewardId, setSelectedRewardId] = useState<string | null>(null)

  const { data: me } = useQuery({
    queryKey: ['me'],
    queryFn: getMe,
  })

  const {
    data: rewards,
    isLoading: rewardsLoading,
    isError: rewardsError,
  } = useQuery({
    queryKey: ['rewards'],
    queryFn: getRewards,
  })

  const { data: redemptions } = useQuery({
    queryKey: ['rewards', 'redemptions'],
    queryFn: getRedemptions,
  })

  const redeemMutation = useMutation({
    mutationFn: (rewardId: string) => redeemReward({ rewardId }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['rewards'] })
      await queryClient.invalidateQueries({ queryKey: ['rewards', 'redemptions'] })
      await queryClient.invalidateQueries({ queryKey: ['me'] })
    },
  })

  const availablePoints = me?.pointBalance ?? 0
  const redeemedPoints = useMemo(
    () => redemptions?.reduce((sum, redemption) => sum + redemption.pointsSpent, 0) ?? 0,
    [redemptions],
  )
  const remainingPoints = availablePoints - redeemedPoints

  const selectedReward = rewards?.find((reward) => reward.id === selectedRewardId) ?? rewards?.[0] ?? null

  return (
    <div className="grid gap-5">
      <header className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Rewards</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Reward redemption</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Browse perks, redeem points, and track your reward balance.
          </p>
        </div>

        <div className="flex gap-3">
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <span className="block text-2xl font-bold text-slate-900">{availablePoints}</span>
            <small className="text-slate-500">Available</small>
          </div>
          <div className="rounded-2xl bg-slate-50 px-4 py-3">
            <span className="block text-2xl font-bold text-slate-900">{remainingPoints}</span>
            <small className="text-slate-500">Remaining</small>
          </div>
        </div>
      </header>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ['Redeemed', String(redeemedPoints)],
          ['Claims', String(redemptions?.length ?? 0)],
          ['Pending', String(redemptions?.filter((item) => item.status === 'PENDING').length ?? 0)],
          ['Top reward', selectedReward?.title ?? 'Loading...'],
        ].map(([label, value]) => (
          <article key={label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-500">{label}</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">{value}</h2>
          </article>
        ))}
      </section>

      {rewardsLoading ? (
        <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-500">Loading rewards...</article>
      ) : rewardsError ? (
        <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-700">Failed to load rewards</article>
      ) : (
        <section className="grid gap-4 lg:grid-cols-2">
          {rewards?.map((reward) => {
            const canRedeem = availablePoints >= reward.costPoints && reward.isActive && reward.stockQuantity > 0

            return (
              <article
                key={reward.id}
                className={`rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 ${
                  selectedRewardId === reward.id ? 'border-blue-300 ring-4 ring-blue-50' : 'border-slate-200'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${statusClass(reward.isActive ? (reward.stockQuantity > 0 ? 'Available' : 'Limited') : 'Limited')}`}>
                      {reward.isActive ? (reward.stockQuantity > 0 ? 'Available' : 'Out of stock') : 'Inactive'}
                    </span>
                    <h3 className="mt-3 text-xl font-semibold text-slate-900">{reward.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{reward.description}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 px-4 py-3 text-right">
                    <span className="block text-2xl font-bold text-slate-900">{reward.costPoints}</span>
                    <small className="text-slate-500">pts</small>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedRewardId(reward.id)}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5"
                  >
                    View details
                  </button>
                  <button
                    type="button"
                    disabled={!canRedeem || redeemMutation.isPending}
                    onClick={() => redeemMutation.mutate(reward.id)}
                    className="rounded-2xl bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {redeemMutation.isPending && redeemMutation.variables === reward.id ? 'Redeeming...' : 'Redeem now'}
                  </button>
                </div>

                <div className="mt-4 text-sm text-slate-500">
                  {reward.stockQuantity} in stock • {reward.isActive ? 'Active' : 'Inactive'}
                </div>
              </article>
            )
          })}
        </section>
      )}

      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Redemption history</h2>
        <div className="mt-4 grid gap-3">
          {redemptions?.length ? (
            redemptions.map((item) => (
              <article key={item.id} className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <strong className="block text-slate-900">{item.reward?.title ?? 'Reward'}</strong>
                    <p className="mt-1 text-sm text-slate-500">{new Date(item.redeemedAt).toLocaleString()}</p>
                  </div>
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">{item.status}</span>
                </div>
              </article>
            ))
          ) : (
            <article className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500">
              No redemptions yet.
            </article>
          )}
        </div>
      </section>
    </div>
  )
}
