import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Award, 
  Star,
  Camera,
  Palette,
  Zap,
  Edit
} from "lucide-react";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Creative Director & Lead Editor",
    image: "/placeholder.svg",
    bio: "With over 8 years in the industry, Rajesh specializes in cinematic storytelling and has worked on 200+ corporate and wedding projects.",
    skills: ["Video Editing", "Color Grading", "Creative Direction"],
    icon: <Edit className="h-6 w-6" />
  },
  {
    name: "Priya Sharma",
    role: "VFX & 3D Specialist",
    image: "/placeholder.svg",
    bio: "Priya brings magic to our projects with her expertise in VFX and 3D animation. She has created stunning visuals for major Indian brands.",
    skills: ["3D Animation", "VFX", "Motion Graphics"],
    icon: <Zap className="h-6 w-6" />
  },
  {
    name: "Amit Patel",
    role: "Lead Photographer & Cinematographer",
    image: "/placeholder.svg",
    bio: "Amit captures stunning visuals with his keen eye for composition. He specializes in corporate photography and wedding cinematography.",
    skills: ["Photography", "Cinematography", "Lighting"],
    icon: <Camera className="h-6 w-6" />
  },
  {
    name: "Sneha Reddy",
    role: "Color Grading Artist",
    image: "/placeholder.svg",
    bio: "Sneha transforms raw footage into cinematic masterpieces with her expert color grading skills and artistic vision.",
    skills: ["Color Grading", "Color Correction", "Visual Aesthetics"],
    icon: <Palette className="h-6 w-6" />
  }
];

const stats = [
  { number: "8+", label: "Years Experience", icon: <Award className="h-8 w-8" /> },
  { number: "500+", label: "Projects Completed", icon: <Star className="h-8 w-8" /> },
  { number: "150+", label: "Happy Clients", icon: <User className="h-8 w-8" /> },
  { number: "4.9", label: "Client Rating", icon: <Star className="h-8 w-8" /> }
];

const OurTeam = () => {
  return (
    <section id="team" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent">
              Meet Our Team
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">CREATIVE</span>
            <br />
            <span className="text-primary neon-glow">PROFESSIONALS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our talented team of creatives, technicians, and storytellers work together to bring your vision to life with passion and precision.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="gradient-card border-border/50 text-center p-6">
              <CardContent className="p-0">
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary neon-glow mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="gradient-card border-border/50 hover:border-primary/30 transition-smooth group">
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-105 transition-smooth">
                    <div className="text-primary">
                      {member.icon}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-lg text-foreground">{member.name}</CardTitle>
                <p className="text-sm text-primary font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {member.bio}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Specialties:</h4>
                  <div className="flex flex-wrap gap-1">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Our Team */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Why Choose <span className="text-primary neon-glow">Our Team</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Proven Experience</h4>
              <p className="text-muted-foreground">
                Years of experience working with top Indian brands, celebrities, and international clients across various industries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Creative Excellence</h4>
              <p className="text-muted-foreground">
                Our team combines technical expertise with creative vision to deliver projects that exceed expectations every time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-success" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Client-Focused Approach</h4>
              <p className="text-muted-foreground">
                We work closely with our clients throughout the process, ensuring clear communication and complete satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            <User className="mr-2" />
            Work With Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;