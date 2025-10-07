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
    title: "Destination Wedding Film",
    category: "Wedding",
    description: "A breathtaking destination wedding featuring royal ceremonies, traditional rituals, and stunning drone shots with 500+ guests celebrating love in a spectacular venue.",
    image: timelineInterface,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Sony FX9", "DJI Mavic 3 Cine", "Zhiyun Crane 4", "DaVinci Resolve", "Cinematic Grading"],
    client: "Arjun & Meera Wedding",
    year: "2024",
    duration: "12:45",
    tags: ["Destination Wedding", "Royal Venue", "Aerial Shots"]
  },
  {
    id: "2",
    title: "Lakme Lipstick Campaign",
    category: "Product Photography",
    description: "High-end product photography campaign for Lakme's new matte lipstick range featuring 12 shades with dramatic lighting, macro shots, and lifestyle compositions for digital and print media.",
    image: equipmentGrid,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Phase One IQ4", "Profoto B10", "Focus Stacking", "Beauty Retouching", "Color Calibration"],
    client: "Lakme Cosmetics India",
    year: "2024",
    duration: "2:30",
    tags: ["Beauty Products", "Macro Photography", "Commercial Shoot"]
  },
  {
    id: "3",
    title: "Professional Model Portfolio",
    category: "Model Portfolio",
    description: "Professional model portfolio shoot featuring 8 diverse looks from traditional Indian wear to contemporary fashion, shot across iconic Mumbai locations including Marine Drive and Film City.",
    image: timelineInterface,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Canon R5C", "Sony Alpha 7R V", "Profoto Lighting", "Fashion Retouching", "Portfolio Design"],
    client: "Elite Models Mumbai",
    year: "2024",
    duration: "4:20",
    tags: ["Fashion Portfolio", "Mumbai Locations", "Modeling Agency"]
  },
  {
    id: "4",
    title: "Pixar-Style Character Animation",
    category: "Animation",
    description: "3D character animation for children's educational series featuring expressive facial rigs, dynamic movements, and Pixar-inspired rendering style with vibrant colors and engaging storytelling.",
    image: equipmentGrid,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Blender", "Maya", "Arnold Renderer", "Character Rigging", "Motion Capture"],
    client: "Kids Learning Network",
    year: "2024",
    duration: "5:15",
    tags: ["3D Animation", "Character Design", "Educational Content"]
  },
  {
    id: "5",
    title: "Wedding Highlight Reel - 2D Edit",
    category: "2D Editing",
    description: "Cinematic wedding film edit featuring color grading, smooth transitions, emotional storytelling, and music synchronization for a traditional Punjabi wedding celebration in Chandigarh.",
    image: timelineInterface,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["DaVinci Resolve", "Adobe Premiere Pro", "Color Grading", "Sound Design", "Multicam Editing"],
    client: "Singh Family Wedding",
    year: "2024",
    duration: "8:30",
    tags: ["Wedding Film", "Color Grading", "Cinematic Edit"]
  },
  {
    id: "6",
    title: "Lakme Fashion Week Coverage",
    category: "Product Photography",
    description: "Complete runway and backstage photography coverage for Lakme Fashion Week featuring designer collections, model portfolios, and beauty close-ups with fast-paced shooting requirements.",
    image: equipmentGrid,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Sony Alpha 1", "Canon EOS R3", "Runway Lighting", "Fast AF", "RAW Processing"],
    client: "Lakme Fashion Week Mumbai",
    year: "2024",
    duration: "6:45",
    tags: ["Fashion Week", "Runway", "Designer Fashion"]
  },
  {
    id: "7",
    title: "Model Portfolio - Elite Agency",
    category: "Model Portfolio",
    description: "Composite card and portfolio creation for emerging models featuring headshots, full-body shots, and versatile looks for agency representation and casting submissions.",
    image: timelineInterface,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Hasselblad H6D", "Studio Lighting", "Composite Design", "Retouching", "Print Ready"],
    client: "Elite Model Management",
    year: "2024",
    duration: "3:45",
    tags: ["Comp Card", "Agency Portfolio", "Professional Headshots"]
  },
  {
    id: "8",
    title: "Logo Animation Package",
    category: "Animation",
    description: "Dynamic 2D/3D logo animation package for corporate brand featuring multiple variations including minimal, full, and intro/outro sequences with modern motion graphics.",
    image: equipmentGrid,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["After Effects", "Cinema 4D", "Motion Design", "Brand Guidelines", "Multi-format Export"],
    client: "Tech Startup India",
    year: "2024",
    duration: "1:30",
    tags: ["Logo Animation", "Motion Graphics", "Brand Identity"]
  },
  {
    id: "9",
    title: "YouTube Vlog Edit Series",
    category: "2D Editing",
    description: "Fast-paced YouTube vlog editing with dynamic cuts, text overlays, color correction, thumbnail creation, and B-roll integration for travel and lifestyle content creator.",
    image: timelineInterface,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Final Cut Pro", "Adobe Premiere", "Motion Templates", "Thumbnail Design", "YouTube SEO"],
    client: "Travel Vlogger - Wanderlust Journeys",
    year: "2024",
    duration: "12:00",
    tags: ["YouTube Content", "Vlog Editing", "Social Media"]
  },
  {
    id: "10",
    title: "Product VFX Commercial",
    category: "3D Editing",
    description: "3D product visualization and VFX commercial featuring realistic product renders, particle effects, and seamless integration with live-action footage for national advertising campaign.",
    image: equipmentGrid,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Cinema 4D", "Octane Render", "After Effects", "Nuke Compositing", "Product Viz"],
    client: "National Brand Campaign",
    year: "2024",
    duration: "3:00",
    tags: ["3D VFX", "Product Visualization", "TV Commercial"]
  }
];

const categories = ["All", "Wedding", "Product Photography", "Model Portfolio", "Animation", "2D Editing", "3D Editing"];

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

        {/* Story-Style Horizontal Scroll */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 px-4">Latest Stories</h3>
          <div className="flex overflow-x-auto gap-4 pb-4 px-4 scrollbar-hide snap-x snap-mandatory">
            {portfolioItems.slice(0, 8).map((item) => (
              <PortfolioModal key={item.id} item={item}>
                <div className="flex-shrink-0 w-32 cursor-pointer snap-start">
                  <div className="relative">
                    {/* Story Ring */}
                    <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary via-accent to-secondary">
                      <div className="w-full h-full rounded-full border-4 border-background overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/60 rounded-full p-2">
                        <Play className="h-6 w-6 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-sm mt-2 text-foreground font-medium truncate">
                    {item.category}
                  </p>
                  <p className="text-center text-xs text-muted-foreground truncate">
                    {item.duration}
                  </p>
                </div>
              </PortfolioModal>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
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
                  alt={`${item.title} - ${item.category} project showcasing professional work`}
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