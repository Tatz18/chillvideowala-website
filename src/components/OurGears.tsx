import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  Video, 
  Monitor, 
  Cpu, 
  HardDrive,
  Lightbulb,
  Mic,
  Settings
} from "lucide-react";

const gearCategories = [
  {
    icon: <Camera className="h-8 w-8" />,
    title: "Professional Cameras",
    description: "High-end cinema cameras for stunning 4K/8K capture",
    items: ["Sony FX9", "Canon C300 Mark III", "RED Komodo", "Blackmagic URSA Mini Pro"]
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "Video Equipment",
    description: "Complete video production gear for every project need",
    items: ["DJI Ronin 4D", "Gimbal Stabilizers", "Drone Equipment", "Slider & Jib Systems"]
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Lighting Setup",
    description: "Professional lighting equipment for perfect illumination",
    items: ["LED Panel Lights", "Softbox Kits", "Ring Lights", "Studio Strobes"]
  },
  {
    icon: <Monitor className="h-8 w-8" />,
    title: "Post-Production Suite",
    description: "State-of-the-art editing and color grading workstations",
    items: ["4K Monitors", "Calibrated Displays", "Professional Keyboards", "Graphics Tablets"]
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Computing Power",
    description: "High-performance workstations for intensive editing tasks",
    items: ["Intel i9 Processors", "NVIDIA RTX 4090", "64GB+ RAM", "Custom Built PCs"]
  },
  {
    icon: <HardDrive className="h-8 w-8" />,
    title: "Storage Solutions",
    description: "Reliable and fast storage systems for large video files",
    items: ["NVMe SSDs", "RAID Systems", "Cloud Backup", "External Drives"]
  }
];

const OurGears = () => {
  return (
    <section id="gears" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">
              Our Equipment
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">PROFESSIONAL</span>
            <br />
            <span className="text-primary neon-glow">GEAR & EQUIPMENT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We invest in the latest professional equipment to ensure every project meets the highest standards of quality and creativity.
          </p>
        </div>

        {/* Gears Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gearCategories.map((category, index) => (
            <Card key={index} className="gradient-card border-border/50 hover:border-primary/30 transition-smooth group">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 neon-glow"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            State-of-the-Art <span className="text-primary neon-glow">Technology</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our equipment is regularly updated to stay at the forefront of technology, ensuring your projects benefit from the latest innovations in video production.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            <Settings className="mr-2" />
            See Our Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurGears;