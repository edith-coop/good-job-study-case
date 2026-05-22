export function FeedComposer() {
  return (
    <section className="mb-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-violet-600 font-bold text-white">
          JD
        </div>
        <button
          type="button"
          className="min-h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-left text-slate-500 transition hover:-translate-y-0.5 hover:bg-slate-100"
        >
          Share recognition with your team...
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {['Photo/Video', 'Core Value', 'Points', 'Send Kudo'].map((item, index) => (
          <button
            key={item}
            type="button"
            className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
              index === 3
                ? 'border-blue-200 bg-gradient-to-r from-blue-50 to-violet-50 text-blue-700'
                : 'border-slate-200 bg-slate-50 text-slate-700'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  )
}
