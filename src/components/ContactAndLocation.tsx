import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactAndLocation() {
  return (
    <section id="contact" className="py-24 bg-brand-gray-light border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black uppercase tracking-tight mb-4">Find Us</h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white shadow-xl">
          {/* Info Side */}
          <div className="p-10 lg:p-14 flex flex-col justify-center">
            <h3 className="text-2xl font-bold uppercase tracking-tight text-brand-black mb-8">Location & Contact</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-brand-black mb-1">Address</h4>
                  <p className="text-brand-gray leading-relaxed">
                    Jl. Pinang Tengah, Dandong<br />
                    Kec. Srengat, Kabupaten Blitar<br />
                    Jawa Timur 66152
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50/50 p-4 -ml-4 border-l-4 border-brand-blue">
                <div className="flex-shrink-0 mt-1">
                  <Clock className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-brand-black mb-1">Operating Hours</h4>
                  <p className="text-brand-gray uppercase tracking-wider font-semibold">Everyday</p>
                  <p className="text-brand-blue font-bold text-xl tabular-nums">2:00 PM - 9:15 PM</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-brand-black mb-1">WhatsApp / Call</h4>
                  <a href="https://wa.me/6281359573934" className="text-brand-gray hover:text-brand-blue transition-colors text-lg tabular-nums">
                    +62 813 5957 3934
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-brand-blue" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-brand-black mb-1">Email</h4>
                  <a href="mailto:info@atahaircutting.com" className="text-brand-gray hover:text-brand-blue transition-colors text-lg">
                    info@atahaircutting.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="h-96 lg:h-auto w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15814.779692429406!2d112.06236681023963!3d-8.067339798485258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ebd0dc9cfd7b%3A0xc3f58a8a2d1d3df8!2sDandong%2C%20Srengat%2C%20Blitar%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1709400000000!5m2!1sen!2sid"
              className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
