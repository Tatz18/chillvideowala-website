import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Volume2, 
  Sparkles, 
  Film, 
  Zap, 
  Target,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <Film className="h-8 w-8" />,
    title: "Corporate Photo & Video",
    description: "Professional corporate photography and videography for businesses, events, and promotional content.",
    features: ["Corporate Events", "Product Photography", "Promotional Videos", "Team Headshots"]
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Wedding Photography & Films",
    description: "Capture your special day with cinematic wedding films and stunning photography.",
    features: ["Pre-Wedding Shoots", "Ceremony Coverage", "Reception Films", "Wedding Albums"]
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "VFX & 3D Editing",
    description: "Advanced visual effects and 3D editing to create stunning and immersive content.",
    features: ["3D Animation", "Visual Effects", "Compositing", "Motion Graphics"]
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Model Portfolio Shoots",
    description: "Professional model portfolio photography and videography to showcase talent.",
    features: ["Fashion Photography", "Portfolio Videos", "Headshots", "Creative Concepts"]
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: "2D Editing & Design",
    description: "Professional 2D editing, motion graphics, and graphic design services.",
    features: ["Video Editing", "Motion Graphics", "Graphic Design", "Social Media Content"]
  },
  {
    icon: <Volume2 className="h-8 w-8" />,
    title: "Audio Post-Production",
    description: "Complete audio services including mixing, mastering, and sound design.",
    features: ["Audio Mixing", "Sound Design", "Voice Enhancement", "Music Composition"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">
              Our Expertise
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">PRE & POST</span>
            <br />
            <span className="text-primary neon-glow">PRODUCTION SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete production services from concept to delivery. We specialize in corporate, 
            wedding, and creative content with cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="gradient-card border-border/50 hover:border-primary/30 transition-smooth group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            <Zap className="mr-2" />
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;