import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Clock, 
  Users, 
  Heart,
  CheckCircle,
  Star
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="inline-block mb-4">
              <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-primary">
                About Us
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">PASSIONATE</span>
              <br />
              <span className="text-primary neon-glow">STORYTELLERS</span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Chill Videowala, we believe every frame tells a story. Our team of creative 
              professionals combines technical expertise with artistic vision to deliver 
              post-production services that exceed expectations.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-success" />
                <span className="text-foreground">5+ years of industry experience</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-success" />
                <span className="text-foreground">State-of-the-art equipment and software</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-success" />
                <span className="text-foreground">Collaborative approach with clients</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-success" />
                <span className="text-foreground">Fast turnaround without compromising quality</span>
              </div>
            </div>

            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              <Heart className="mr-2" />
              Work With Us
            </Button>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="gradient-card border-border/50 text-center p-8">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary neon-glow mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 text-center p-8">
              <CardContent className="p-0">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-accent mb-2">48hr</div>
                <div className="text-sm text-muted-foreground">Avg. Delivery</div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 text-center p-8">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-success mx-auto mb-4" />
                <div className="text-3xl font-bold text-success mb-2">200+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 text-center p-8">
              <CardContent className="p-0">
                <Star className="h-12 w-12 text-warning mx-auto mb-4" />
                <div className="text-3xl font-bold text-warning mb-2">4.9</div>
                <div className="text-sm text-muted-foreground">Client Rating</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Team Values */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground">
            Our <span className="text-primary neon-glow">Values</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Excellence</h4>
              <p className="text-muted-foreground">
                We strive for perfection in every project, ensuring the highest quality output 
                that exceeds client expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Passion</h4>
              <p className="text-muted-foreground">
                Our love for storytelling and visual arts drives us to create content 
                that resonates with audiences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-success" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Collaboration</h4>
              <p className="text-muted-foreground">
                We work closely with our clients as partners, bringing their vision 
                to life through open communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;