import Link from 'next/link'

export function Hero() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em]" style={{ color: 'var(--muted)' }}>
            Wilffert Brothers
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-[var(--text)] sm:text-5xl">
            Essentials for modern men—field-tested, curated, and ready to use.
          </h1>
          <p className="text-lg" style={{ color: 'var(--muted)' }}>
            Choose a category, get the exact kits we rely on, and skip the guesswork. Premium,
            minimal, and built to perform.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#categories"
              className="rounded-full px-5 py-3 text-sm font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, var(--teal), var(--orange))',
                boxShadow: '0 10px 20px -5px rgba(14, 165, 233, 0.35)',
              }}
            >
              Explore categories
            </Link>
            <Link
              href="#trust"
              className="rounded-full border px-5 py-3 text-sm font-semibold"
              style={{ borderColor: 'var(--border)', color: 'var(--text)' }}
            >
              Why trust us
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div
            className="h-72 rounded-2xl border"
            style={{
              borderColor: 'var(--border)',
              background:
                'radial-gradient(circle at 20% 20%, rgba(14, 165, 233, 0.15), transparent 35%), radial-gradient(circle at 80% 30%, rgba(249, 115, 22, 0.15), transparent 40%), linear-gradient(145deg, #ffffff, #f8fafc)',
              boxShadow: '0 25px 35px -20px rgba(15, 23, 42, 0.2)',
            }}
          />
        </div>
      </div>
    </section>
  )
}

