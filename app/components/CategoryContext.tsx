'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import type { CategoryKey } from '@/data/categories'

type CategoryContextValue = {
  activeCategory: CategoryKey
  setActiveCategory: (category: CategoryKey) => void
}

const CategoryContext = createContext<CategoryContextValue | undefined>(undefined)

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('finance')

  return (
    <CategoryContext.Provider value={{ activeCategory, setActiveCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

export function useCategory() {
  const ctx = useContext(CategoryContext)
  if (!ctx) {
    throw new Error('useCategory must be used within a CategoryProvider')
  }
  return ctx
}

