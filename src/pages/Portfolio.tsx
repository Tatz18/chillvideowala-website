import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import PortfolioSection from "@/components/Portfolio";

const Portfolio = () => {
  // Using centralized PortfolioSection component for projects grid

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "8+", label: "Years Experience" },
    { number: "4.9", label: "Client Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary neon-glow">OUR PORTFOLIO</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore our diverse portfolio showcasing corporate photography, wedding films, VFX projects, 
            model portfolios, and creative content produced across India
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary neon-glow mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioSection />

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Like What You See?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing for your brand
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;