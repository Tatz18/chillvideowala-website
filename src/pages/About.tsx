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
      description: "We strive for perfection in every shot, every edit, and every final delivery."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaboration",
      description: "Working closely with our clients across India to bring their vision to life."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliability",
      description: "Delivering high-quality work on time, every time, with professional service."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Using latest technology and creative approaches for stunning visual content."
    }
  ];

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Creative Director & Lead Editor",
      image: "/placeholder.svg",
      bio: "8+ years in video production specializing in corporate and wedding cinematography across India."
    },
    {
      name: "Priya Sharma",
      role: "VFX & 3D Specialist",
      image: "/placeholder.svg",
      bio: "Expert in visual effects and 3D animation with experience in major Indian film projects."
    },
    {
      name: "Amit Patel",
      role: "Lead Photographer",
      image: "/placeholder.svg",
      bio: "Professional photographer specializing in corporate events and model portfolio shoots."
    },
    {
      name: "Sneha Reddy",
      role: "Color Grading Artist",
      image: "/placeholder.svg",
      bio: "Cinematic color grading expert bringing visual stories to life with perfect aesthetics."
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
              We are India's premier pre and post production studio, specializing in corporate photography, 
              wedding films, VFX, model portfolios, and creative content. Based in West Bengal, serving clients nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Bringing Your Vision to Life
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Chill Videowala, we are passionate about creating stunning visual content 
                that tells your story. From corporate events to wedding celebrations, 
                we capture moments that matter.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team combines years of experience with cutting-edge technology to deliver 
                exceptional photography, videography, VFX, and post-production services 
                across India.
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