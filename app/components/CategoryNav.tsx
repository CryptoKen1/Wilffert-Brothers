'use client';
import { categories, CategoryKey } from '@/data/categories';
import { useCategory } from './CategoryContext';

// Map categories to icons
const categoryIcons: Record<CategoryKey, string> = {
  finance: '💳',
  tech: '💻',
  health: '🏃',
  clothes: '🎒',
};

export function CategoryNav() {
  const { activeCategory, setActiveCategory } = useCategory();
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 overflow-x-auto py-4">
          {(Object.keys(categories) as CategoryKey[]).map((catId) => {
            const isActive = catId === activeCategory;
            return (
              <button
                key={catId}
                onClick={() => setActiveCategory(catId)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full 
                  whitespace-nowrap transition-all font-medium
                  ${isActive 
                    ? 'bg-[#0EA5E9] text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                <span className="text-xl">{categoryIcons[catId]}</span>
                <span>{categories[catId].label}</span>
              </button>
            );
          })}
          <button className="flex items-center gap-1 px-4 py-3 text-gray-600 hover:text-gray-900">
            See all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

