'use client'

import { categories } from '@/data/categories'
import { useCategory } from './CategoryContext'

export function ContentGrid() {
  const { activeCategory } = useCategory()
  const current = categories[activeCategory]

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-[0.25em]" style={{ color: 'var(--muted)' }}>
          {current.label}
        </p>
        <h2 className="text-3xl font-semibold text-[var(--text)] sm:text-4xl">{current.label} Kit</h2>
        <p className="max-w-3xl text-lg" style={{ color: 'var(--muted)' }}>
          {current.description}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {current.items.map((item) => (
          <article
            key={item.title}
            className="group h-full rounded-xl border p-5 transition hover:-translate-y-1"
            style={{
              borderColor: 'var(--border)',
              backgroundColor: '#FFFFFF',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--teal)'
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(14, 165, 233, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-[var(--text)]">{item.title}</h3>
              <span
                className="rounded-full border px-3 py-1 text-xs font-semibold"
                style={{
                  borderColor: 'rgba(245, 158, 11, 0.45)',
                  backgroundColor: 'rgba(245, 158, 11, 0.12)',
                  color: '#C2410C',
                }}
              >
                Ready to use
              </span>
            </div>
            <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>
              {item.summary}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-full border px-3 py-1 text-xs transition"
                  style={{
                    borderColor: 'var(--border)',
                    backgroundColor: '#F8FAFC',
                    color: 'var(--muted)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--teal)'
                    e.currentTarget.style.color = 'var(--teal)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--muted)'
                  }}
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

