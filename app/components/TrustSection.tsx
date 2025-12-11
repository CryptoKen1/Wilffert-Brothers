export function TrustSection() {
  const items = [
    { label: 'Cumulative hours tested', value: '10,000+' },
    { label: 'Kits refined', value: '48' },
    { label: 'Avg. satisfaction', value: '4.9 / 5' },
    { label: 'Returning readers', value: '83%' },
  ]

  return (
    <section id="trust" className="rounded-2xl border p-8" style={{ borderColor: 'var(--border)', backgroundColor: '#FFFFFF' }}>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.25em]" style={{ color: 'var(--muted)' }}>
            Trusted by our readers
          </p>
          <h3 className="text-2xl font-semibold text-[var(--text)]">Proof in the results</h3>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            Real-world testing, weekly tweaks, and zero fluff. We keep what performs.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="min-w-[140px] rounded-xl border px-4 py-3 text-center"
              style={{ borderColor: 'var(--border)', backgroundColor: '#F8FAFC' }}
            >
              <div className="text-lg font-semibold text-[var(--text)]">{item.value}</div>
              <div className="text-xs" style={{ color: 'var(--muted)' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

