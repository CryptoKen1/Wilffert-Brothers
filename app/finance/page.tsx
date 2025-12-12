 'use client'

import Link from 'next/link'
import { categories } from '@/data/categories'

const finance = categories.finance

export default function FinancePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col gap-10">
        <header className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.25em]" style={{ color: 'var(--muted)' }}>
            Wilffert Brothers / Finance
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl text-[var(--text)]">
            Finance essentials, tested and trusted
          </h1>
          <p className="max-w-3xl text-lg" style={{ color: 'var(--muted)' }}>
            The exact money moves we rely on—clear guidance, no fluff. Dive into cards, cashflow, and
            credit strategies that work.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/"
              className="text-sm font-semibold underline"
              style={{ color: 'var(--teal)' }}
            >
              Back to home
            </Link>
          </div>
        </header>

        <section className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.25em]" style={{ color: 'var(--muted)' }}>
              {finance.label}
            </p>
            <h2 className="text-3xl font-semibold text-[var(--text)] sm:text-4xl">
              {finance.label} Kit
            </h2>
            <p className="max-w-3xl text-lg" style={{ color: 'var(--muted)' }}>
              {finance.description}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {finance.items.map((item) => (
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

        <section className="rounded-2xl border p-6" style={{ borderColor: 'var(--border)', backgroundColor: '#FFFFFF' }}>
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-semibold text-[var(--text)]">Coming next</h3>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              We&apos;ll add finance-specific blogs, reviews, and deep dives here. Send topics you want covered.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

