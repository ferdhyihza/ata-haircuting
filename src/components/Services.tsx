import { Scissors, Ruler, Sparkles } from "lucide-react";

const SERVICES = [
  {
    icon: Scissors,
    title: "Precision Haircut & Styling",
    description: "Expert consultation, precise cutting techniques tailored to your head shape, and premium styling finish.",
    price: "From Rp 50.000",
  },
  {
    icon: Ruler,
    title: "Classic & Modern Fades",
    description: "Flawless transitions and sharp lineups. From skin fades to tapers, executed with surgical precision.",
    price: "From Rp 45.000",
  },
  {
    icon: Sparkles,
    title: "Hair Texture & Coloring",
    description: "Perms, texturizing, and color services designed to enhance volume, flow, and personal expression.",
    price: "From Rp 150.000",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase tracking-tight mb-4">Our Services</h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto mb-6"></div>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg leading-relaxed">
            Elevating the standard of men's grooming with top-tier craftsmanship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group bg-brand-gray-light p-10 border border-gray-100 hover:border-brand-blue hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150 duration-500"></div>
              <div className="mb-6 relative z-10 text-brand-blue group-hover:scale-110 transition-transform origin-left duration-300">
                <service.icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide relative z-10">{service.title}</h3>
              <p className="text-brand-gray mb-6 leading-relaxed relative z-10">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
