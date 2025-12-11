export function TrustSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Why thousands trust Wilffert Brothers
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Expert reviews, transparent recommendations, and real-world testing.
        </p>
        
        {/* Stats grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6">
            <div className="text-5xl font-bold text-[#0EA5E9] mb-2">500+</div>
            <div className="text-gray-600">Products Reviewed</div>
          </div>
          <div className="p-6">
            <div className="text-5xl font-bold text-[#0EA5E9] mb-2">10K+</div>
            <div className="text-gray-600">Community Members</div>
          </div>
          <div className="p-6">
            <div className="text-5xl font-bold text-[#0EA5E9] mb-2">95%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

