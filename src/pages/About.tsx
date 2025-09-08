import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Clock, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for perfection in every frame, every cut, and every color grade."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working closely with our clients to bring their vision to life."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliability",
      description: "Delivering high-quality work on time, every time."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Embracing new technologies and creative approaches."
    }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Creative Director",
      image: "/placeholder.svg",
      bio: "15+ years in video production with expertise in storytelling and brand development."
    },
    {
      name: "Sarah Chen",
      role: "Lead Editor",
      image: "/placeholder.svg",
      bio: "Award-winning editor specialized in narrative structure and pacing."
    },
    {
      name: "Marcus Johnson",
      role: "Color Grading Specialist",
      image: "/placeholder.svg",
      bio: "Cinematic color grading expert with Hollywood film experience."
    },
    {
      name: "Emma Thompson",
      role: "Motion Graphics Artist",
      image: "/placeholder.svg",
      bio: "Creative animator bringing brands to life through motion and design."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary neon-glow">ABOUT US</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are filmmakers and marketers working together to create content 
              that speaks the new language of business communication.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Content is the new language
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                In today's digital world, visual storytelling has become the primary 
                way businesses communicate with their audiences. We help brands speak 
                this language fluently.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team combines creative filmmaking expertise with marketing intelligence 
                to produce content that not only looks amazing but drives real business results.
              </p>
              <Button variant="hero" size="lg">
                Get to Know Us Better
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Our creative workspace"
                className="rounded-lg shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="gradient-card border-border text-center">
                <CardHeader>
                  <div className="text-primary mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              The creative minds behind every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="gradient-card border-border text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
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
            Ready to Work Together?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing that tells your story and connects with your audience
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Start a Conversation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;