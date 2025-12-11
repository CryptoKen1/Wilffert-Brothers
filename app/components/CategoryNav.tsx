'use client'

import { categories, CategoryKey } from '@/data/categories'
import { useCategory } from './CategoryContext'

export function CategoryNav() {
  const { activeCategory, setActiveCategory } = useCategory()

  return (
    <section id="categories" className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-3">
        {(Object.keys(categories) as CategoryKey[]).map((key) => {
          const isActive = key === activeCategory
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive ? 'shadow-[0_0_0_1px_rgba(14,165,233,0.35)]' : 'hover:shadow-sm'
              }`}
              style={
                isActive
                  ? {
                      borderColor: 'var(--teal)',
                      backgroundColor: 'rgba(14, 165, 233, 0.12)',
                      color: '#0F172A',
                    }
                  : {
                      borderColor: 'var(--border)',
                      color: 'var(--muted)',
                    }
              }
              role="tab"
              aria-selected={isActive}
            >
              {categories[key].label}
            </button>
          )
        })}
      </div>
      <p className="text-sm" style={{ color: 'var(--muted)' }}>
        Curated kits for {categories[activeCategory].label.toLowerCase()} that balance performance and
        polish.
      </p>
    </section>
  )
}

