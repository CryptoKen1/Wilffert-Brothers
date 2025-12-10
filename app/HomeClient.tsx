'use client'

import { useState } from 'react'

type CategoryKey = 'finance' | 'tech' | 'health' | 'clothes'

const categories: Record<
  CategoryKey,
  {
    label: string
    description: string
    items: { title: string; summary: string; highlights: string[] }[]
  }
> = {
  finance: {
    label: 'Finance',
    description:
      'Money moves that actually work: high-yield picks, smart credit, and tools that keep cash flowing.',
    items: [
      {
        title: 'Starter Investment Stack',
        summary:
          'Index fund basics plus a simple rebalancing cadence you can keep up for years.',
        highlights: ['Automated contributions', 'Low-fee funds', 'Quarterly check-ins'],
      },
      {
        title: 'Cashflow Playbook',
        summary:
          'A 50/30/20-inspired budget tuned for side hustles and variable income.',
        highlights: ['Weekly reviews', 'Buffer-first savings', 'Debt snowball option'],
      },
      {
        title: 'Credit Score Sprint',
        summary: 'Steps to lift your score in 90 days without gimmicks or hacks.',
        highlights: ['Reporting schedule', 'Utilization caps', 'Dispute template'],
      },
    ],
  },
  tech: {
    label: 'Tech',
    description:
      'Gear and workflows that keep you sharp: from focused setups to automation that saves hours.',
    items: [
      {
        title: 'Minimal Workstation',
        summary: 'Hardware picks for a distraction-light, performance-heavy desk.',
        highlights: ['Ergo-first layout', 'Single-cable docking', 'Neutral lighting'],
      },
      {
        title: 'Automation Kit',
        summary: 'Shortcuts, snippets, and micro-automations that shave minutes daily.',
        highlights: ['Text expander set', 'Focus timer presets', 'Weekly cleanup cron'],
      },
      {
        title: 'Security Basics',
        summary: 'Practical security moves that protect without slowing you down.',
        highlights: ['Passkey ready', '2FA defaults', 'Backups that auto-verify'],
      },
    ],
  },
  health: {
    label: 'Health',
    description:
      'Training and recovery built for momentum: simple, repeatable, and hard to skip.',
    items: [
      {
        title: '3x Week Strength',
        summary: 'Push, pull, legs rotation with progressive overload you can track.',
        highlights: ['Warmup flows', 'RPE guidance', '30–45 minute sessions'],
      },
      {
        title: 'Sleep Protocol',
        summary: 'A nighttime routine that stacks small wins into deep sleep.',
        highlights: ['Wind-down checklist', 'Caffeine cutoff', 'Weekend resets'],
      },
      {
        title: 'Recovery Staples',
        summary: 'Nutrition and mobility habits that keep you training consistently.',
        highlights: ['Protein targets', 'Hydration plan', '10-minute mobility'],
      },
    ],
  },
  clothes: {
    label: 'Clothes',
    description:
      'Everyday pieces that survive travel, workouts, and nights out without fuss.',
    items: [
      {
        title: 'Core Capsule',
        summary: '8–10 pieces that mix cleanly across work and weekend.',
        highlights: ['Neutral palette', 'Tailored fit', 'Wrinkle resistant'],
      },
      {
        title: 'Travel Pack',
        summary: 'Carry-on ready kit that covers gym, meetings, and dinner.',
        highlights: ['Quick-dry layers', 'Packable outerwear', 'Versatile footwear'],
      },
      {
        title: 'Care Routine',
        summary: 'Keep fabrics fresh longer with minimal effort.',
        highlights: ['Wash schedule', 'De-pill basics', 'Proper storage'],
      },
    ],
  },
}

export default function HomeClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('finance')

  // Tab state controls which set of recommendations is visible.
  const current = categories[activeCategory]

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-12">
        <header className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-300">
            Wilffert Brothers
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Essentials, field-tested and ready to use
          </h1>
          <p className="max-w-3xl text-lg text-slate-300">
            We cut the noise and keep what works. Pick a category to see the kits,
            routines, and tools we rely on.
          </p>
        </header>

        <nav
          aria-label="Categories"
          className="sticky top-0 z-10 -mx-6 border-b border-slate-800 bg-slate-950/70 px-6 py-3 backdrop-blur"
        >
          <div className="flex flex-wrap gap-3">
            {(Object.keys(categories) as CategoryKey[]).map((key) => {
              const isActive = key === activeCategory
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'border-emerald-400 bg-emerald-400/10 text-emerald-200 shadow-[0_0_0_1px_rgba(52,211,153,0.35)]'
                      : 'border-slate-700 text-slate-200 hover:border-slate-500 hover:text-white'
                  }`}
                  role="tab"
                  aria-selected={isActive}
                >
                  {categories[key].label}
                </button>
              )
            })}
          </div>
        </nav>

        <section
          className="flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl shadow-black/30"
          aria-live="polite"
        >
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              {current.label}
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {current.label} Kit
            </h2>
            <p className="max-w-3xl text-lg text-slate-300">{current.description}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {current.items.map((item) => (
              <article
                key={item.title}
                className="group h-full rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-400/15"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-100">
                    Ready to use
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{item.summary}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1 text-xs text-slate-200 transition group-hover:border-emerald-400/40 group-hover:text-emerald-100"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

