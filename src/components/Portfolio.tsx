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
    title: "Tata Steel Corporate Documentary",
    category: "Corporate",
    description: "A powerful 15-minute documentary showcasing Tata Steel's journey from raw material to finished products, featuring interviews with workers, management, and the impact on local communities across Jamshedpur and Kalinganagar plants.",
    image: timelineInterface,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["RED Komodo 6K", "DaVinci Resolve", "Adobe After Effects", "Drone Cinematography", "Color Science"],
    client: "Tata Steel Limited",
    year: "2024",
    duration: "15:30",
    tags: ["Industrial Documentary", "Drone Work", "Corporate Storytelling"]
  },
  {
    id: "2",
    title: "Destination Wedding - Udaipur Palace",
    category: "Wedding",
    description: "An epic 3-day wedding celebration at the City Palace Udaipur, featuring traditional Rajasthani ceremonies, multiple outfit changes, and a cast of 500+ guests. Shot with cinematic techniques including aerial shots of Lake Pichola.",
    image: equipmentGrid,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Sony FX9", "DJI Mavic 3 Cine", "Zhiyun Crane 4", "DaVinci Resolve", "Multicam Sync"],
    client: "Arjun Weds Meera",
    year: "2024",
    duration: "12:45",
    tags: ["Destination Wedding", "Aerial Cinematography", "Traditional Ceremonies"]
  },
  {
    id: "3",
    title: "Bollywood Actress Portfolio - Shraddha",
    category: "Fashion",
    description: "High-end fashion portfolio for emerging Bollywood actress featuring 8 different looks - from traditional Indian wear to contemporary fashion. Shot across Mumbai's iconic locations including Marine Drive and Film City.",
    image: timelineInterface,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Canon R5C", "Sony Alpha 7R V", "Profoto Lighting", "Adobe Lightroom", "Fashion Retouching"],
    client: "Shraddha Sharma - Rising Star",
    year: "2024",
    duration: "4:20",
    tags: ["Celebrity Portfolio", "Fashion Photography", "Mumbai Locations"]
  },
  {
    id: "4",
    title: "Samsung Galaxy S24 Launch Campaign",
    category: "Commercial",
    description: "National TV commercial for Samsung Galaxy S24 featuring 3D product animation, lifestyle shots, and AI feature demonstrations. Campaign reached 50M+ viewers across India with localized versions in Hindi, Tamil, and Bengali.",
    image: equipmentGrid,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Cinema 4D", "Octane Render", "Adobe After Effects", "Nuke Compositing", "AI Integration"],
    client: "Samsung India Electronics",
    year: "2024",
    duration: "2:45",
    tags: ["National Campaign", "3D Product Viz", "Multi-language"]
  },
  {
    id: "5",
    title: "Reliance AGM 2024 - Live Coverage",
    category: "Corporate",
    description: "Complete live streaming and post-production coverage of Reliance Industries Annual General Meeting with 12-camera setup, real-time graphics, and same-day highlight reel delivery. Streamed live to 2M+ shareholders worldwide.",
    image: timelineInterface,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Blackmagic ATEM", "12-Camera Setup", "OBS Studio", "Live Graphics", "Satellite Uplink"],
    client: "Reliance Industries Limited",
    year: "2024",
    duration: "8:15",
    tags: ["Live Streaming", "Corporate Events", "Multi-cam Production"]
  },
  {
    id: "6",
    title: "Lakme Fashion Week - Designer Showcase",
    category: "Fashion",
    description: "Complete runway coverage for emerging designer Anita Dongre's sustainable fashion line at Lakme Fashion Week Mumbai. Featured backstage interviews, model preparations, and the complete runway show with dynamic camera work.",
    image: equipmentGrid,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Sony FX6", "Runway Tracking", "LED Panel Lighting", "Multicam Edit", "Fashion Color Grading"],
    client: "Anita Dongre Studio",
    year: "2024",
    duration: "6:30",
    tags: ["Fashion Week", "Runway Coverage", "Designer Fashion"]
  },
  {
    id: "7",
    title: "Mahindra XUV700 - Adventure Campaign",
    category: "Commercial",
    description: "High-octane automotive commercial featuring the Mahindra XUV700 across diverse Indian terrains - from Rajasthan deserts to Himachal mountains. Includes challenging night shoots and extreme weather conditions.",
    image: timelineInterface,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Phantom TMX 7510", "Car Rigs", "Drone Cinematography", "Weather Protection", "Automotive Lighting"],
    client: "Mahindra & Mahindra",
    year: "2023",
    duration: "3:00",
    tags: ["Automotive", "Adventure", "Multi-location"]
  },
  {
    id: "8",
    title: "Cricket Legend Dhoni - Retirement Documentary",
    category: "Corporate",
    description: "Intimate documentary following MS Dhoni's final cricket season, featuring exclusive behind-the-scenes footage, family interviews, and never-before-seen moments from his illustrious career spanning 15 years.",
    image: equipmentGrid,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Cinema Verité Style", "Archive Integration", "Sports Cinematography", "Interview Setup", "Legacy Storytelling"],
    client: "Disney+ Hotstar",
    year: "2023",
    duration: "45:00",
    tags: ["Sports Documentary", "Celebrity", "Archive Integration"]
  },
  {
    id: "9",
    title: "Royal Bengal Wedding - Kolkata",
    category: "Wedding",
    description: "Traditional Bengali wedding spanning 5 days of ceremonies in heritage Kolkata venues. Featured elaborate decorations, 1000+ guests, classical music performances, and traditional rituals captured with respect for cultural authenticity.",
    image: timelineInterface,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: ["Cultural Sensitivity", "Heritage Venue Filming", "Traditional Music Recording", "Bengali Customs", "Multi-generational Coverage"],
    client: "Roy & Chatterjee Families",
    year: "2023",
    duration: "18:20",
    tags: ["Bengali Wedding", "Cultural Traditions", "Heritage Venues"]
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