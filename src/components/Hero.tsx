import { Button } from "@/components/ui/button";
import { Play, ArrowDown } from "lucide-react";
import heroWorkspace from "@/assets/hero-workspace.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
              ✨ Professional Post-Production Services
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">POST-PRODUCTION</span>
            <br />
            <span className="text-primary neon-glow">PERFECTION</span>
            <br />
            <span className="text-foreground">BY CHILL VIDEOWALA</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform raw footage into cinematic masterpieces with our expert color grading, 
            sound design, and visual effects services.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Play className="mr-2" />
              View Our Work
            </Button>
            <Button variant="neon" size="lg" className="text-lg px-8 py-6">
              Get Free Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary neon-glow">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary neon-glow">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary neon-glow">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary neon-glow">4K</div>
              <div className="text-sm text-muted-foreground">Quality Output</div>
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