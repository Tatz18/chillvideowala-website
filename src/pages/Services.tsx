import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Edit, Palette, Volume2, Zap, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Video Editing",
      description: "Professional video editing with smooth transitions, perfect timing, and engaging storytelling.",
      features: ["Cut & Trim", "Transitions", "Text Overlays", "Multi-camera Editing"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Color Grading",
      description: "Transform your footage with cinematic color grading and professional color correction.",
      features: ["Color Correction", "Cinematic Look", "Brand Consistency", "Mood Enhancement"]
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Audio Design",
      description: "Crystal clear audio mixing, sound effects, and background music that enhances your story.",
      features: ["Audio Mixing", "Sound Effects", "Voiceover", "Background Music"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Motion Graphics",
      description: "Eye-catching animations, lower thirds, and motion graphics that bring your content to life.",
      features: ["2D Animation", "Lower Thirds", "Logo Animation", "Infographics"]
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Video Production",
      description: "Complete video production services from concept to final delivery.",
      features: ["Concept Development", "Scripting", "Filming", "Post-Production"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Brand Videos",
      description: "Professional brand videos that tell your story and connect with your audience.",
      features: ["Brand Story", "Product Videos", "Corporate Videos", "Social Media Content"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary neon-glow">OUR SERVICES</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Comprehensive video production and post-production services to bring your vision to life
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="gradient-card border-border hover:border-primary/30 transition-smooth">
                <CardHeader>
                  <div className="text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 neon-glow"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Get Free Quote
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;