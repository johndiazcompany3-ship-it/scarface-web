import "@/App.css";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Carta } from "@/components/Carta";
import { MenuDia } from "@/components/MenuDia";
import { Galeria } from "@/components/Galeria";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { CtaFooter } from "@/components/CtaFooter";
import { Fachada } from "@/components/Fachada";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileStickyBar } from "@/components/MobileStickyBar";

function App() {
  return (
    <div className="App relative bg-background text-foreground min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Carta />
        <MenuDia />
        <Galeria />
        <Fachada />
        <Stats />
        <Testimonials />
        <Faq />
        <CtaFooter />
      </main>
      <WhatsAppButton />
      <MobileStickyBar />
    </div>
  );
}

export default App;
