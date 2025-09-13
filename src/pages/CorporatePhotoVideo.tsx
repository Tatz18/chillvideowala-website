import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Camera, Video, Users, Building2, TrendingUp } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const CorporatePhotoVideo = () => {
  const services = [
    {
      title: "Corporate Events",
      description: "Professional coverage of conferences, seminars, and corporate gatherings",
      icon: <Users className="h-6 w-6" />,
      features: ["Multi-camera setup", "Live streaming", "Post-event highlights"]
    },
    {
      title: "Product Photography",
      description: "High-quality product shots for marketing and e-commerce",
      icon: <Camera className="h-6 w-6" />,
      features: ["Studio lighting", "360° product views", "Lifestyle shots"]
    },
    {
      title: "Brand Videos",
      description: "Compelling brand stories and promotional content",
      icon: <Video className="h-6 w-6" />,
      features: ["Script development", "Professional editing", "Multi-platform optimization"]
    },
    {
      title: "Training Videos",
      description: "Educational content for employee training and onboarding",
      icon: <TrendingUp className="h-6 w-6" />,
      features: ["Interactive elements", "Subtitle support", "Progress tracking"]
    }
  ];

  const portfolio = [
    {
      title: "Tech Conference 2024",
      type: "Event Coverage",
      duration: "2 days",
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    },
    {
      title: "Product Launch Campaign",
      type: "Brand Video",
      duration: "3 minutes",
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    },
    {
      title: "Corporate Training Series",
      type: "Educational Content",
      duration: "5 episodes",
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Building2 className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Corporate Photo & Video
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Elevate your business with professional photography and videography services. 
            From corporate events to product launches, we capture your brand's story with precision and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                <Camera className="mr-2 h-5 w-5" />
                Get Corporate Quote
              </Button>
            </ContactModal>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Corporate Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Corporate Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-elegant transition-all duration-300">
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      <Play className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{project.type}</Badge>
                    <span className="text-sm text-muted-foreground">{project.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-8 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Elevate Your Corporate Content?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your corporate photography and videography needs. 
            We'll create content that showcases your brand professionally.
          </p>
          <ContactModal>
            <Button variant="secondary" size="lg">
              Start Your Corporate Project
            </Button>
          </ContactModal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporatePhotoVideo;