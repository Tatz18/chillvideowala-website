import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import OurGears from "@/components/OurGears";
import About from "@/components/About";
import OurTeam from "@/components/OurTeam";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <OurGears />
      <About />
      <OurTeam />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
