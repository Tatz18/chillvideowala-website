import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import timelineInterface from "@/assets/timeline-interface.jpg";
import equipmentGrid from "@/assets/equipment-grid.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Corporate Brand Film",
    category: "Corporate",
    image: timelineInterface,
    duration: "2:30",
    tags: ["Corporate Video", "Color Grading", "Motion Graphics"]
  },
  {
    id: 2,
    title: "Wedding Cinematic Film",
    category: "Wedding",
    image: equipmentGrid,
    duration: "8:45",
    tags: ["Wedding Film", "VFX", "Color Grading"]
  },
  {
    id: 3,
    title: "Model Portfolio Shoot",
    category: "Fashion",
    image: timelineInterface,
    duration: "3:20",
    tags: ["Fashion Photography", "Portfolio Video", "Editing"]
  },
  {
    id: 4,
    title: "Product Launch Campaign",
    category: "Commercial",
    image: equipmentGrid,
    duration: "1:45",
    tags: ["3D Animation", "Motion Graphics", "VFX"]
  },
  {
    id: 5,
    title: "Corporate Event Coverage",
    category: "Corporate",
    image: timelineInterface,
    duration: "5:15",
    tags: ["Event Coverage", "Multi-cam Editing", "Color Correction"]
  },
  {
    id: 6,
    title: "Fashion Brand Campaign",
    category: "Fashion",
    image: equipmentGrid,
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
                  <Button variant="hero" size="sm">
                    <Play className="mr-2 h-4 w-4" />
                    Watch
                  </Button>
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
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Ready to create something amazing?</p>
          <Button variant="neon" size="lg" className="text-lg px-8 py-6">
            Start Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;