export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0EA5E9] to-[#F59E0B] min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-image.jpg" 
          alt="" 
          className="w-full h-full object-cover opacity-90"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div className="text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Essentials, field-tested and ready to use
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Navigate every money move with guidance you can trust.
          </p>
        </div>
        
        {/* Right: Featured image or graphic */}
        <div className="hidden lg:block">
          {/* Placeholder for lifestyle image */}
        </div>
      </div>
    </section>
  );
}

