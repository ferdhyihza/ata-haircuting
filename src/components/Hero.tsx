import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2674&auto=format&fit=crop" 
          alt="Barbershop Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl uppercase leading-tight">
          Best Haircutting <br className="hidden md:block" /> in Town
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light">
          A premium grooming experience for the modern man. Precision, style, and unmatched confidence in every cut.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#contact" 
            className="group flex items-center justify-center bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-4 text-lg font-bold rounded-none transition-all duration-300 transform motion-safe:hover:scale-105"
          >
            Cobain Sekarang
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#work" 
            className="flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 text-lg font-bold rounded-none transition-colors duration-300"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
