import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Edit, Scissors, Palette, Music, Type, Filter, Download } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const TwoDEditing = () => {
  const services = [
    {
      title: "Video Editing",
      description: "Professional video editing for all content types",
      icon: <Scissors className="h-6 w-6" />,
      features: ["Multi-camera editing", "Transition effects", "Audio synchronization", "Color correction"],
      turnaround: "3-5 days"
    },
    {
      title: "Motion Graphics",
      description: "Dynamic 2D animations and graphic elements",
      icon: <Edit className="h-6 w-6" />,
      features: ["Logo animations", "Lower thirds", "Title sequences", "Animated infographics"],
      turnaround: "5-7 days"
    },
    {
      title: "Color Grading",
      description: "Professional color correction and grading services",
      icon: <Palette className="h-6 w-6" />,
      features: ["Color matching", "Mood enhancement", "Skin tone correction", "Cinematic looks"],
      turnaround: "2-3 days"
    },
    {
      title: "Audio Post",
      description: "Complete audio editing and mixing services",
      icon: <Music className="h-6 w-6" />,
      features: ["Audio cleanup", "Music mixing", "Sound effects", "Voice enhancement"],
      turnaround: "2-4 days"
    }
  ];

  const packages = [
    {
      title: "Basic Edit",
      price: "₹5,000",
      description: "Simple video editing for social media and basic content",
      features: ["Up to 5 minutes", "Basic cuts and transitions", "Music integration", "1 revision round"],
      duration: "2-3 days"
    },
    {
      title: "Standard Edit",
      price: "₹15,000",
      description: "Professional editing with graphics and effects",
      features: ["Up to 15 minutes", "Motion graphics", "Color correction", "Audio mixing", "2 revision rounds"],
      duration: "5-7 days"
    },
    {
      title: "Premium Edit",
      price: "₹35,000",
      description: "Complete post-production package",
      features: ["Up to 30 minutes", "Advanced VFX", "Professional color grading", "Sound design", "Unlimited revisions"],
      duration: "7-10 days"
    }
  ];

  const portfolio = [
    {
      title: "Corporate Presentation",
      category: "Business",
      duration: "8 minutes",
      services: ["Video Editing", "Motion Graphics", "Color Grading"],
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    },
    {
      title: "Music Video",
      category: "Entertainment",
      duration: "4 minutes",
      services: ["Video Editing", "Color Grading", "Audio Post"],
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    },
    {
      title: "Product Commercial",
      category: "Advertising",
      duration: "30 seconds",
      services: ["Video Editing", "Motion Graphics", "Audio Post"],
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    },
    {
      title: "Documentary Film",
      category: "Documentary",
      duration: "25 minutes",
      services: ["Video Editing", "Color Grading", "Audio Post"],
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    },
    {
      title: "Social Media Content",
      category: "Social Media",
      duration: "1 minute",
      services: ["Video Editing", "Motion Graphics"],
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    },
    {
      title: "Event Highlights",
      category: "Events",
      duration: "6 minutes",
      services: ["Video Editing", "Color Grading", "Audio Post"],
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    }
  ];

  const software = [
    { name: "Adobe Premiere Pro", category: "Video Editing" },
    { name: "After Effects", category: "Motion Graphics" },
    { name: "DaVinci Resolve", category: "Color Grading" },
    { name: "Adobe Audition", category: "Audio Editing" },
    { name: "Final Cut Pro", category: "Video Editing" },
    { name: "Photoshop", category: "Graphics" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Edit className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              2D Editing
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your raw footage into polished, professional content. From simple cuts to complex motion graphics, 
            we provide comprehensive 2D editing services that bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                <Edit className="mr-2 h-5 w-5" />
                Start Editing Project
              </Button>
            </ContactModal>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-5 w-5" />
              View Editing Samples
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">2D Editing Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {service.turnaround}
                      </Badge>
                    </div>
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

      {/* Pricing Packages */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Editing Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`hover:shadow-elegant transition-all duration-300 ${index === 1 ? 'ring-2 ring-primary' : ''}`}>
                {index === 1 && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="text-center mb-4">
                    <CardTitle className="text-2xl mb-2">{pkg.title}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                    <Badge variant="outline" className="mt-2">{pkg.duration}</Badge>
                  </div>
                  <CardDescription className="text-center">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <ContactModal>
                    <Button variant={index === 1 ? "default" : "outline"} className="w-full">
                      Choose Package
                    </Button>
                  </ContactModal>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Editing Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      Watch Video
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary">
                    {project.duration}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <Badge variant="secondary" className="mb-3">{project.category}</Badge>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Services Used:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.services.map((service, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Software & Tools */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Software & Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {software.map((tool, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      <Filter className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{tool.name}</h3>
                      <p className="text-sm text-muted-foreground">{tool.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Editing Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "File Upload", desc: "Secure upload of your raw footage", icon: <Download /> },
              { step: "2", title: "Review & Plan", desc: "Understanding your vision and requirements", icon: <Type /> },
              { step: "3", title: "Editing", desc: "Professional editing and post-production", icon: <Scissors /> },
              { step: "4", title: "Review", desc: "Client feedback and revisions", icon: <Play /> },
              { step: "5", title: "Final Delivery", desc: "High-quality file delivery", icon: <Download /> }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {process.icon}
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-2">
                  {process.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{process.title}</h3>
                <p className="text-muted-foreground text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-8 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Footage?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let our professional editors bring your vision to life with high-quality 2D editing services. 
            From concept to final delivery, we ensure your content stands out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal>
              <Button variant="secondary" size="lg">
                <Edit className="mr-2 h-5 w-5" />
                Start Your Project
              </Button>
            </ContactModal>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Download className="mr-2 h-5 w-5" />
              Upload Footage
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TwoDEditing;