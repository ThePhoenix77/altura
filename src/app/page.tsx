import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20 container mx-auto px-4">
        <div className="animate-slide-in animate-delay-0">
          <Hero />
        </div>
        <div className="animate-slide-in animate-delay-200">
          <Features />
        </div>
        <div className="animate-slide-in animate-delay-400">
          <Portfolio />
        </div>
        <div className="animate-slide-in animate-delay-600">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
