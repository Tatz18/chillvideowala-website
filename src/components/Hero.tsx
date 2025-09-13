import { Button } from "@/components/ui/button";
import { Play, ArrowDown } from "lucide-react";
import heroWorkspace from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroWorkspace}
          alt="Professional video editing workspace with multiple monitors and color grading interface"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="px-4 py-2 bg-card/50 border border-primary/30 rounded-full text-sm text-primary backdrop-blur-sm">
              ✨ Pre & Post Production Studio
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-primary neon-glow">PROFESSIONAL</span>
            <br />
            <span className="text-foreground">PHOTO &</span>
            <br />
            <span className="text-primary neon-glow">VIDEO PRODUCTION</span>
            <br />
            <span className="text-foreground">FROM CONCEPT</span>
            <br />
            <span className="text-primary neon-glow">TO DELIVERY</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Complete pre and post production services for corporate, wedding, and creative projects
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90">
              Fill in the brief →
            </Button>
          </div>

          {/* Service Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary backdrop-blur-sm hover:bg-primary/20 transition-smooth">
              Corporate Videos
            </div>
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary backdrop-blur-sm hover:bg-primary/20 transition-smooth">
              Wedding Films
            </div>
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary backdrop-blur-sm hover:bg-primary/20 transition-smooth">
              VFX & 3D
            </div>
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary backdrop-blur-sm hover:bg-primary/20 transition-smooth">
              Model Portfolio
            </div>
            <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary backdrop-blur-sm hover:bg-primary/20 transition-smooth">
              Photography
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-primary opacity-70" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;