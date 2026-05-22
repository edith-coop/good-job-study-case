import { useQuery } from '@tanstack/react-query'
import { getKudos, getMe, type MeResponse } from '../api'
import { FeedComposer } from '../components/FeedComposer'
import { FeedLoading } from '../components/FeedLoading'
import { FeedCard } from '../components/FeedCard'

export function FeedPage() {
  const {
    data: kudos,
    isLoading: kudosLoading,
    isError: kudosError,
  } = useQuery({
    queryKey: ['kudos'],
    queryFn: getKudos,
  })

  const feedItems = kudos?.items ?? []
  const { data: me } = useQuery<MeResponse>({
    queryKey: ['me'],
    queryFn: getMe,
  })

  const remainingBudget = me?.currentGivingBudget?.remainingBudget ?? 200
  const pointBalance = me?.pointBalance ?? 0
  const usedBudget = me?.currentGivingBudget?.usedBudget ?? 0

  return (
    <div className="grid gap-5">
      <header className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Feed</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Recognition timeline</h1>
        </div>
        <div className="flex gap-3">
          {[
            ['Remaining', remainingBudget],
            ['Balance', pointBalance],
          ].map(([label, value]) => (
            <div key={label as string} className="min-w-[130px] rounded-2xl bg-slate-50 px-4 py-3">
              <span className="block text-2xl font-bold text-slate-900">{value as number}</span>
              <small className="text-slate-500">{label as string} pts</small>
            </div>
          ))}
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-3">
        {[
          {
            label: 'Current user',
            title: me?.fullName ?? 'Loading...',
            description: me?.email ?? 'Loading profile',
            highlight: true,
          },
          {
            label: 'Giving budget',
            title: `${remainingBudget} pts left`,
            description: `${usedBudget} pts used this month`,
          },
          {
            label: 'Realtime status',
            title: 'Connected',
            description: 'Socket room ready for notifications',
          },
        ].map((card) => (
          <article
            key={card.label}
            className={`rounded-2xl border p-4 ${card.highlight ? 'border-blue-200 bg-gradient-to-br from-blue-50 to-violet-50' : 'border-slate-200 bg-slate-50'}`}
          >
            <p className="text-sm text-slate-500">{card.label}</p>
            <h3 className="mt-1 text-xl font-bold text-slate-900">{card.title}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">{card.description}</p>
          </article>
        ))}
      </section>

      <FeedComposer />

      <section className="space-y-4">
        {kudosLoading ? (
          <FeedLoading />
        ) : kudosError ? (
          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-700">
            Failed to load kudos feed
          </article>
        ) : (
          <div className="grid gap-4">
            {feedItems.length === 0 ? (
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
                <h3 className="text-lg font-semibold text-slate-900">No kudos yet</h3>
                <p className="mt-2 text-slate-500">This is where the live recognition feed will appear.</p>
              </article>
            ) : (
              feedItems.map((item) => <FeedCard key={item.id} item={item} />)
            )}
          </div>
        )}
      </section>
    </div>
  )
}
