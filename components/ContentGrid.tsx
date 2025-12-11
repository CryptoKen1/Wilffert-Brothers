const featuredContent = [
  {
    icon: '🏆',
    title: 'See the best credit cards',
    subtitle: 'for this month',
    link: '/credit-cards',
  },
  {
    icon: '↔️',
    title: 'Wipe out debt and save money',
    subtitle: 'with a balance transfer',
    link: '/balance-transfer',
  },
  {
    icon: '🎁',
    title: 'Big rewards start with the right',
    subtitle: 'bonus offer',
    link: '/bonuses',
    highlight: true,
  },
  {
    icon: '📋',
    title: 'Read expert reviews',
    subtitle: 'of more than 400 products',
    link: '/reviews',
  },
  {
    icon: '✅',
    title: 'Answer a few questions to find',
    subtitle: 'your next product',
    link: '/finder',
  },
];

export function ContentGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Grid of feature cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredContent.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#0EA5E9] transition-colors">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="text-gray-600">{item.subtitle}</p>
            )}
          </a>
        ))}
      </div>
      
      {/* Large featured card with image */}
      <div className="mt-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-12 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured: Premium Tech Picks
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Our top-rated products for professionals who demand excellence.
          </p>
          <button className="px-8 py-4 bg-[#0EA5E9] text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
            Explore Now
          </button>
        </div>
        <div className="relative h-80 bg-gray-200 rounded-xl overflow-hidden">
          {/* Featured product image */}
          <img src="/featured.jpg" alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
