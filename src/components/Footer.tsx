import { Scissors } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-gray-dark py-12 text-center text-white border-t-4 border-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6">
          <Scissors className="h-8 w-8 text-brand-blue" />
          <span className="font-bold text-2xl tracking-tighter text-white">ATA Haircutting</span>
        </div>
        <p className="text-gray-400 max-w-md mx-auto mb-8 font-light">
          Precision, style, and unmatched confidence. The premier destination for men's grooming in Blitar.
        </p>
        <div className="w-full border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ATA Haircutting. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
