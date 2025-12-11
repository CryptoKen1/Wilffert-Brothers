import { Hero } from '@/components/Hero'
import { CategoryNav } from '@/components/CategoryNav'
import { ContentGrid } from '@/components/ContentGrid'
import { TrustSection } from '@/components/TrustSection'
import { CategoryProvider } from '@/components/CategoryContext'

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
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
