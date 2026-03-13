import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurWork from "@/components/OurWork";
import Services from "@/components/Services";
import ContactAndLocation from "@/components/ContactAndLocation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <OurWork />
      <Services />
      <ContactAndLocation />
      <Footer />
    </main>
  );
}
