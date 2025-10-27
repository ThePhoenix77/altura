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
      <main>
        <div className="animate-fade-in">
          <Hero />
        </div>
        <div className="animate-fade-in">
          <Features />
        </div>
        <div className="animate-fade-in">
          <Portfolio />
        </div>
        <div className="animate-fade-in">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
