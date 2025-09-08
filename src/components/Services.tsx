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
    icon: <Palette className="h-8 w-8" />,
    title: "Color Grading",
    description: "Professional color correction and cinematic color grading to enhance mood and visual storytelling.",
    features: ["HDR Color Grading", "Cinematic Look Development", "Color Matching", "DaVinci Resolve Workflow"]
  },
  {
    icon: <Volume2 className="h-8 w-8" />,
    title: "Sound Design",
    description: "Complete audio post-production including mixing, mastering, and custom sound effects.",
    features: ["Audio Mixing", "Sound Effects", "Voice Enhancement", "Surround Sound"]
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Visual Effects",
    description: "Stunning VFX and compositing to bring your creative vision to life.",
    features: ["Green Screen Removal", "Motion Graphics", "3D Compositing", "Particle Effects"]
  },
  {
    icon: <Film className="h-8 w-8" />,
    title: "Video Editing",
    description: "Professional video editing with smooth transitions and perfect pacing.",
    features: ["Multi-cam Editing", "Transitions & Effects", "Sync & Timing", "Format Conversion"]
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Motion Graphics",
    description: "Eye-catching animated graphics, titles, and lower thirds for professional presentation.",
    features: ["Animated Titles", "Logo Animation", "Lower Thirds", "Infographics"]
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Finishing",
    description: "Final output optimization and delivery in any format for any platform.",
    features: ["Format Optimization", "Platform Delivery", "Quality Control", "Archive Creation"]
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
            <span className="text-foreground">POST-PRODUCTION</span>
            <br />
            <span className="text-primary neon-glow">SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From raw footage to final masterpiece. We handle every aspect of post-production 
            with precision and creative excellence.
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