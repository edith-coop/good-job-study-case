function SkeletonBlock({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-2xl bg-slate-200 ${className}`} />
}

export function FeedLoading() {
  return (
    <div className="grid gap-4">
      <SkeletonBlock className="h-28 w-full" />
      <SkeletonBlock className="h-64 w-full" />
      <SkeletonBlock className="h-64 w-full" />
    </div>
  )
}
