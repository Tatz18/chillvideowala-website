import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import timelineInterface from "@/assets/timeline-interface.jpg";
import equipmentGrid from "@/assets/equipment-grid.jpg";
import PortfolioModal from "@/components/PortfolioModal";
import ContactModal from "@/components/ContactModal";

const portfolioItems = [
  {
    id: "1",
    title: "Corporate Brand Film",
    category: "Corporate",
    description: "A comprehensive brand film showcasing company culture and values through cinematic storytelling and professional interviews.",
    image: timelineInterface,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Color Grading"],
    client: "TechCorp Solutions",
    year: "2024",
    duration: "2:30",
    tags: ["Corporate Video", "Color Grading", "Motion Graphics"]
  },
  {
    id: "2",
    title: "Wedding Cinematic Film",
    category: "Wedding",
    description: "An emotional wedding film capturing the beautiful moments of a couple's special day with cinematic quality and artistic storytelling.",
    image: equipmentGrid,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Sony FX6", "DaVinci Resolve", "Color Grading", "Sound Design"],
    client: "Rahul & Priya",
    year: "2024",
    duration: "8:45",
    tags: ["Wedding Film", "VFX", "Color Grading"]
  },
  {
    id: "3",
    title: "Model Portfolio Shoot",
    category: "Fashion",
    description: "High-fashion portfolio shoot combining photography and videography to showcase model's versatility and range.",
    image: timelineInterface,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Canon R5", "Lightroom", "Photoshop", "Video Editing"],
    client: "Fashion Forward Agency",
    year: "2024",
    duration: "3:20",
    tags: ["Fashion Photography", "Portfolio Video", "Editing"]
  },
  {
    id: "4",
    title: "Product Launch Campaign",
    category: "Commercial",
    description: "3D animated product showcase with motion graphics and visual effects for a tech product launch campaign.",
    image: equipmentGrid,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Cinema 4D", "After Effects", "Blender", "Motion Graphics"],
    client: "Innovation Labs",
    year: "2023",
    duration: "1:45",
    tags: ["3D Animation", "Motion Graphics", "VFX"]
  },
  {
    id: "5",
    title: "Corporate Event Coverage",
    category: "Corporate",
    description: "Multi-camera coverage of annual corporate event with live streaming and post-production highlights reel.",
    image: timelineInterface,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Multi-cam Setup", "Live Streaming", "Adobe Premiere", "Audio Mixing"],
    client: "Global Enterprises",
    year: "2023",
    duration: "5:15",
    tags: ["Event Coverage", "Multi-cam Editing", "Color Correction"]
  },
  {
    id: "6",
    title: "Fashion Brand Campaign",
    category: "Fashion",
    description: "Fashion campaign video featuring VFX compositing and advanced color grading for luxury fashion brand.",
    image: equipmentGrid,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["VFX Compositing", "Color Grading", "Fashion Photography", "Video Production"],
    client: "Luxe Fashion House",
    year: "2023",
    duration: "2:30",
    tags: ["Fashion Film", "VFX", "Color Grading"]
  }
];

const categories = ["All", "Corporate", "Wedding", "Fashion", "Commercial"];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent">
              Our Work
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">PORTFOLIO</span>
            <br />
            <span className="text-primary neon-glow">SHOWCASE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our latest projects and see how we transform creative visions into 
            stunning visual experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden bg-card border-border/50 hover:border-primary/30 transition-smooth">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} - ${item.category} video project showcasing professional post-production work`}
                  className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                  <PortfolioModal item={item}>
                    <Button variant="hero" size="sm">
                      <Play className="mr-2 h-4 w-4" />
                      Watch
                    </Button>
                  </PortfolioModal>
                </div>
                <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 rounded text-xs">
                  {item.duration}
                </div>
                <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                  {item.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <PortfolioModal item={item}>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </PortfolioModal>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Ready to create something amazing?</p>
          <ContactModal>
            <Button variant="neon" size="lg" className="text-lg px-8 py-6">
              Start Your Project
            </Button>
          </ContactModal>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;