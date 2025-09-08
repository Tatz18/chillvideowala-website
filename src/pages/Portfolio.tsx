import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Corporate Brand Video",
      category: "Brand Video",
      image: "/placeholder.svg",
      description: "Professional corporate video showcasing company values and culture",
      tags: ["Corporate", "Brand Story", "Professional"]
    },
    {
      title: "Product Launch Campaign",
      category: "Product Video",
      image: "/placeholder.svg",
      description: "Dynamic product showcase with motion graphics and engaging storytelling",
      tags: ["Product", "Motion Graphics", "Marketing"]
    },
    {
      title: "Podcast Series",
      category: "Content Creation",
      image: "/placeholder.svg",
      description: "Weekly podcast series with professional audio and video production",
      tags: ["Podcast", "Interview", "Series"]
    },
    {
      title: "Social Media Content",
      category: "Social Media",
      image: "/placeholder.svg",
      description: "Engaging social media content package for Instagram and TikTok",
      tags: ["Social Media", "Short Form", "Viral"]
    },
    {
      title: "Documentary Film",
      category: "Documentary",
      image: "/placeholder.svg",
      description: "Award-winning documentary with cinematic color grading and sound design",
      tags: ["Documentary", "Cinematic", "Storytelling"]
    },
    {
      title: "Training Course",
      category: "Educational",
      image: "/placeholder.svg",
      description: "Professional training course with screen recordings and animations",
      tags: ["Education", "Training", "Course"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5M+", label: "Views Generated" },
    { number: "98%", label: "Client Satisfaction" }
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
            Discover our latest projects and see how we transform ideas into compelling visual stories
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

      {/* Portfolio Grid */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="gradient-card border-border hover:border-primary/30 transition-smooth group overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                      <Button variant="hero" size="sm" className="gap-2">
                        <Play className="w-4 h-4" />
                        Watch
                      </Button>
                    </div>
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  
                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </Button>
                  </div>
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