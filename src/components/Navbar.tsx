import { Scissors } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Scissors className="h-8 w-8 text-brand-blue" />
            <span className="font-bold text-2xl tracking-tighter text-brand-black">ATA Haircutting</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-brand-gray hover:text-brand-blue font-medium transition-colors">Services</a>
            <a href="#work" className="text-brand-gray hover:text-brand-blue font-medium transition-colors">Our Work</a>
            <a href="#contact" className="text-brand-gray hover:text-brand-blue font-medium transition-colors">Location</a>
          </div>
          <div className="hidden md:flex">
            <a href="#contact" className="bg-brand-blue hover:bg-brand-blue-hover text-white px-6 py-2.5 rounded-none font-semibold transition-colors duration-200">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
