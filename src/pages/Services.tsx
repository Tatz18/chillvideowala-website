import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Edit, Palette, Volume2, Zap, Award } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Play className="w-8 h-8" />,
      title: "Corporate Photo & Videography",
      description: "Professional corporate photography and videography services for businesses and events.",
      features: ["Corporate Events", "Product Photography", "Promotional Videos", "Business Headshots"]
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Wedding Photography & Films",
      description: "Capture your special moments with cinematic wedding films and stunning photography.",
      features: ["Pre-Wedding Shoots", "Ceremony Coverage", "Reception Documentation", "Wedding Albums"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "VFX & 3D Editing",
      description: "Advanced visual effects and 3D editing services to create stunning, immersive content.",
      features: ["3D Animation", "Visual Effects", "Compositing", "CGI Integration"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Model Portfolio Shoots",
      description: "Professional model portfolio photography and videography to showcase talent effectively.",
      features: ["Fashion Photography", "Portfolio Videos", "Creative Headshots", "Concept Development"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "2D Editing & Motion Graphics",
      description: "Professional 2D video editing and motion graphics design for all your creative needs.",
      features: ["Video Editing", "Motion Graphics", "Social Media Content", "Graphic Design"]
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Audio Post-Production",
      description: "Complete audio services including mixing, mastering, and custom sound design.",
      features: ["Audio Mixing", "Sound Design", "Voice Enhancement", "Music Composition"]
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
            Complete pre and post production services for corporate, wedding, and creative projects
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