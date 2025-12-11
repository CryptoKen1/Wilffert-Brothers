import { Hero } from '@/components/Hero'
import { CategoryNav } from '@/components/CategoryNav'
import { ContentGrid } from '@/components/ContentGrid'
import { TrustSection } from '@/components/TrustSection'
import { CategoryProvider } from '@/components/CategoryContext'

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* Header with brand name */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Wilffert Brothers</h1>
        </div>
      </header>
      
      <CategoryProvider>
        <Hero />
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-12">
          <CategoryNav />
          <ContentGrid />
          <TrustSection />
        </div>
      </CategoryProvider>
    </div>
  )
}
