import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Mritunjoy Mahato",
      role: "CEO & Creative Director & Lead Editor",
      image: "/placeholder.svg",
      bio: "Visionary leader with expertise in creative direction and video editing. Drives the company's artistic vision and ensures excellence in every project delivered.",
      skills: ["Creative Direction", "Video Editing", "Leadership", "Strategy"],
      icon: <Edit className="h-6 w-6" />
    },
    {
      name: "Debdip Mondal",
      role: "Co-founder, CTO & Marketing Head",
      image: "/placeholder.svg",
      bio: "Technical innovator and marketing strategist leading technology initiatives, brand development, and growth strategies for sustainable business expansion.",
      skills: ["Technology Leadership", "Marketing Strategy", "Business Development", "Innovation"],
      icon: <Zap className="h-6 w-6" />
    }
  ];

  const stats = [
    { number: "8+", label: "Years Experience", icon: <Award className="h-8 w-8" /> },
    { number: "500+", label: "Projects Completed", icon: <Star className="h-8 w-8" /> },
    { number: "150+", label: "Happy Clients", icon: <User className="h-8 w-8" /> },
    { number: "4.9", label: "Client Rating", icon: <Star className="h-8 w-8" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary neon-glow">OUR TEAM</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Meet our talented team of creatives, technicians, and storytellers who work together to bring your vision to life with passion and precision.
          </p>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
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
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Meet Our <span className="text-primary neon-glow">Professionals</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to delivering exceptional results
            </p>
          </div>

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
        </div>
      </section>

      {/* Why Choose Our Team */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why Choose <span className="text-primary neon-glow">Our Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience, expertise, and dedication in every project
            </p>
          </div>
          
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
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let our experienced professionals bring your creative vision to life with expertise and passion
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            <User className="mr-2" />
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurTeam;