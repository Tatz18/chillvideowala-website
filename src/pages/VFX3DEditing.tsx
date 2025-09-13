import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Zap, Layers, Box, Sparkles, Cpu, Monitor, Film } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const VFX3DEditing = () => {
  const services = [
    {
      title: "3D Animation",
      description: "Create stunning 3D animations and motion graphics",
      icon: <Box className="h-6 w-6" />,
      features: ["Character modeling", "Environment design", "Rigging & animation", "Lighting & rendering"],
      complexity: "Advanced"
    },
    {
      title: "Visual Effects",
      description: "Professional VFX for films, commercials, and digital content",
      icon: <Sparkles className="h-6 w-6" />,
      features: ["Green screen compositing", "Particle effects", "Motion tracking", "Color grading"],
      complexity: "Expert"
    },
    {
      title: "Motion Graphics",
      description: "Dynamic graphics and animated elements",
      icon: <Layers className="h-6 w-6" />,
      features: ["Logo animations", "Title sequences", "Infographic videos", "Social media graphics"],
      complexity: "Intermediate"
    },
    {
      title: "Post Production",
      description: "Complete post-production pipeline services",
      icon: <Film className="h-6 w-6" />,
      features: ["Video editing", "Audio mixing", "Color correction", "Final delivery"],
      complexity: "Professional"
    }
  ];

  const software = [
    { name: "After Effects", category: "VFX & Motion Graphics" },
    { name: "Blender", category: "3D Modeling & Animation" },
    { name: "Cinema 4D", category: "3D Animation" },
    { name: "DaVinci Resolve", category: "Color Grading" },
    { name: "Nuke", category: "Compositing" },
    { name: "Maya", category: "3D Animation" }
  ];

  const portfolio = [
    {
      title: "Sci-Fi Short Film VFX",
      category: "Visual Effects",
      duration: "5 minutes",
      complexity: "Expert Level",
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png",
      techniques: ["Green Screen", "3D Integration", "Particle Systems"]
    },
    {
      title: "Product Launch Animation",
      category: "3D Animation",
      duration: "2 minutes",
      complexity: "Advanced",
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png",
      techniques: ["3D Modeling", "Product Visualization", "Motion Graphics"]
    },
    {
      title: "Corporate Brand Film",
      category: "Motion Graphics",
      duration: "3 minutes",
      complexity: "Professional",
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png",
      techniques: ["Typography Animation", "Logo Animation", "Transitions"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Zap className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              VFX & 3D Editing
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your vision into reality with cutting-edge visual effects and 3D animation. 
            From explosive action sequences to subtle atmospheric enhancements, we bring magic to your content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                <Sparkles className="mr-2 h-5 w-5" />
                Start VFX Project
              </Button>
            </ContactModal>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-5 w-5" />
              View VFX Reel
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">VFX & 3D Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {service.complexity}
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

      {/* Software & Tools */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Tools & Software</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {software.map((tool, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      <Monitor className="h-5 w-5" />
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

      {/* Portfolio Showcase */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">VFX Portfolio</h2>
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
                      Watch VFX Breakdown
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-primary">
                    {project.complexity}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{project.category}</Badge>
                    <span className="text-sm text-muted-foreground">{project.duration}</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Techniques Used:</p>
                    <div className="flex flex-wrap gap-1">
                      {project.techniques.map((technique, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {technique}
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

      {/* Process Timeline */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">VFX Production Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Pre-Production", desc: "Concept development and planning", icon: <Layers /> },
              { step: "2", title: "Asset Creation", desc: "3D modeling and texturing", icon: <Box /> },
              { step: "3", title: "Animation", desc: "Character and object animation", icon: <Film /> },
              { step: "4", title: "VFX Integration", desc: "Compositing and effects", icon: <Sparkles /> },
              { step: "5", title: "Final Render", desc: "Color grading and delivery", icon: <Cpu /> }
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
            Ready to Create Visual Magic?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Transform your creative vision with professional VFX and 3D animation. 
            Let's discuss your project requirements and bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal>
              <Button variant="secondary" size="lg">
                <Sparkles className="mr-2 h-5 w-5" />
                Start VFX Project
              </Button>
            </ContactModal>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Monitor className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VFX3DEditing;