import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import timelineInterface from "@/assets/timeline-interface.jpg";
import equipmentGrid from "@/assets/equipment-grid.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Corporate Brand Film",
    category: "Commercial",
    image: timelineInterface,
    duration: "2:30",
    tags: ["Color Grading", "Sound Design", "Motion Graphics"]
  },
  {
    id: 2,
    title: "Music Video Production",
    category: "Music",
    image: equipmentGrid,
    duration: "3:45",
    tags: ["VFX", "Color Grading", "Editing"]
  },
  {
    id: 3,
    title: "Documentary Series",
    category: "Documentary",
    image: timelineInterface,
    duration: "45:00",
    tags: ["Audio Mixing", "Color Correction", "Finishing"]
  },
  {
    id: 4,
    title: "Fashion Campaign",
    category: "Fashion",
    image: equipmentGrid,
    duration: "1:20",
    tags: ["Cinematic Grading", "Motion Graphics", "VFX"]
  },
  {
    id: 5,
    title: "Tech Product Launch",
    category: "Tech",
    image: timelineInterface,
    duration: "2:15",
    tags: ["3D Graphics", "Sound Design", "Color Grading"]
  },
  {
    id: 6,
    title: "Event Highlight Reel",
    category: "Event",
    image: equipmentGrid,
    duration: "4:30",
    tags: ["Multi-cam Editing", "Audio Mixing", "Color Correction"]
  }
];

const categories = ["All", "Commercial", "Music", "Documentary", "Fashion", "Tech", "Event"];

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