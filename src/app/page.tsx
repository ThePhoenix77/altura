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
        <div className="animate-slide-in">
          <Hero />
        </div>
        <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
          <Features />
        </div>
        <div className="animate-slide-in" style={{ animationDelay: "0.4s" }}>
          <Portfolio />
        </div>
        <div className="animate-slide-in" style={{ animationDelay: "0.6s" }}>
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
