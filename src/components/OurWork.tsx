const PORTFOLIO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop",
    alt: "Classic Fade",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop",
    alt: "Modern Texture",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
    alt: "Sharp Beard Trim",
  },
];

export default function OurWork() {
  return (
    <section id="work" className="py-24 bg-brand-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase tracking-tight mb-4">Our Work</h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto mb-6"></div>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our portfolio of precision cuts, expert styling, and sharp details designed to elevate your everyday look.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_IMAGES.map((img, index) => (
            <div key={index} className="group relative overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 translate-y-2 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-300">
                <h3 className="text-white font-bold text-xl uppercase tracking-wide">{img.alt}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="https://instagram.com/atahaircutting" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-brand-black hover:text-brand-blue font-bold tracking-wide uppercase transition-colors">
            See more on Instagram <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
