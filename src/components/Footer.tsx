import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-gray-dark py-12 text-center text-white border-t-4 border-brand-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex items-center mb-6">
          <Image
            src="/logo.png"
            alt="ATA Haircutting Logo"
            width={240}
            height={100}
            className="h-16 w-auto invert grayscale mix-blend-screen opacity-90"
          />
        </div>
        <p className="text-gray-400 max-w-md mx-auto mb-8 font-light">
          Precision, style, and unmatched confidence. The premier destination for men's grooming in Blitar.
        </p>
        <div className="w-full border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ATA Haircutting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
