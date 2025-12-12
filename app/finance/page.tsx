'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type ArticleCategory = 'INVESTING' | 'BUDGETING' | 'CREDIT' | 'SAVING'

type FinanceArticle = {
  title: string
  excerpt: string
  imageUrl: string
  category: ArticleCategory
  author: string
  link: string
}

const heroImage = '/finance/hero.jpg' // place a 600–800px tall image in /public/finance/hero.jpg

const articles: FinanceArticle[] = [
  {
    title: 'The 3-Fund Portfolio That Beats 90% of DIY Investors',
    excerpt: 'A simple, low-cost allocation you can set once and revisit quarterly to stay on track.',
    imageUrl: '/finance/investing-1.jpg',
    category: 'INVESTING',
    author: 'Alex Wilffert',
    link: '/finance/investing-3-fund-portfolio',
  },
  {
    title: 'Cashflow Playbook: 50/30/20 That Survives Real Life',
    excerpt: 'How to budget when income is lumpy: buffers, rules, and automations that keep you liquid.',
    imageUrl: '/finance/budgeting-1.jpg',
    category: 'BUDGETING',
    author: 'Ken Wilffert',
    link: '/finance/cashflow-playbook',
  },
  {
    title: 'Credit Score Sprint: 90 Days to 740+',
    excerpt: 'Disputes, utilization tricks, and reporting cadence—without hacks that backfire.',
    imageUrl: '/finance/credit-1.jpg',
    category: 'CREDIT',
    author: 'Alex Wilffert',
    link: '/finance/credit-score-sprint',
  },
  {
    title: 'High-Yield Savings: Where to Park Your Cash Now',
    excerpt: 'A short list of vetted accounts, bonus terms, and how to avoid teaser-rate traps.',
    imageUrl: '/finance/saving-1.jpg',
    category: 'SAVING',
    author: 'Ken Wilffert',
    link: '/finance/high-yield-savings',
  },
  {
    title: 'Beginner’s Guide to Index Funds',
    excerpt: 'Why broad market exposure beats stock picking and how to choose your first fund.',
    imageUrl: '/finance/investing-2.jpg',
    category: 'INVESTING',
    author: 'Alex Wilffert',
    link: '/finance/index-funds-guide',
  },
  {
    title: 'Budgeting Stack: Apps and Habits That Stick',
    excerpt: 'Tools we actually use, notification settings, and a weekly review that takes 15 minutes.',
    imageUrl: '/finance/budgeting-2.jpg',
    category: 'BUDGETING',
    author: 'Ken Wilffert',
    link: '/finance/budgeting-stack',
  },
]

const filters: ArticleCategory[] = ['INVESTING', 'BUDGETING', 'CREDIT', 'SAVING']

export default function FinancePage() {
  const [activeFilter, setActiveFilter] = useState<ArticleCategory>('INVESTING')

  const filteredArticles = useMemo(
    () => articles.filter((article) => article.category === activeFilter),
    [activeFilter]
  )

  return (
    <main className="min-h-screen bg-[#F5F5F5] text-[#2C2C2C]">
      {/* Header with brand name */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-900">Wilffert Brothers</h1>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate min-h-[700px] overflow-hidden bg-gradient-to-br from-[#0EA5E9] to-[#F59E0B] pt-20">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Finance hero"
            fill
            priority
            className="object-cover opacity-80"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 self-start rounded-full bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
            Finance
          </span>
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-tight">
              Finance
            </h1>
            <p className="mt-4 text-xl lg:text-2xl text-white/90 leading-relaxed">
              Smart money moves and financial strategies that work. Expert-tested finance tips,
              investment guides, and wealth-building advice to help you achieve financial freedom.
            </p>
          </div>
          <Link href="/" className="text-sm font-semibold text-white underline">
            Back to home
          </Link>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap items-center gap-4">
            {filters.map((filter) => {
              const isActive = filter === activeFilter
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`pb-2 text-sm font-semibold transition ${
                    isActive ? 'text-black' : 'text-gray-500 hover:text-black'
                  }`}
                  style={isActive ? { borderBottom: '2px solid #0EA5E9' } : undefined}
                >
                  {filter}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <Link
              key={article.title}
              href={article.link}
              className="group rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
                <span className="absolute left-3 top-3 rounded-full bg-black/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                  {article.category}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-gray-900 group-hover:text-[#0EA5E9] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[15px] text-gray-600 leading-relaxed line-clamp-3">{article.excerpt}</p>
                <div className="pt-2 text-[11px] font-semibold tracking-[0.2em] text-gray-500">
                  BY {article.author.toUpperCase()}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 text-sm font-semibold">
          {[1, 2, 3, 4, 5, 6].map((page) => {
            const isActive = page === 1
            return (
              <button
                key={page}
                className={`h-9 w-9 rounded-full transition ${
                  isActive
                    ? 'bg-red-500 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            )
          })}
          <button className="text-gray-600 hover:text-black">Next</button>
        </div>
      </section>
    </main>
  )
}

