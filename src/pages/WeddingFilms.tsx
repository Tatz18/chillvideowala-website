import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Heart, Camera, Video, Users, Clock, MapPin } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const WeddingFilms = () => {
  const packages = [
    {
      title: "Engagement Package",
      price: "₹25,000",
      description: "Perfect for capturing your pre-wedding moments",
      icon: <Heart className="h-6 w-6" />,
      features: ["2-hour session", "50+ edited photos", "Highlight reel", "Online gallery"]
    },
    {
      title: "Wedding Day Coverage",
      price: "₹75,000",
      description: "Complete wedding day documentation",
      icon: <Camera className="h-6 w-6" />,
      features: ["8-hour coverage", "Ceremony & reception", "Same-day highlights", "USB delivery"]
    },
    {
      title: "Cinematic Wedding Film",
      price: "₹1,50,000",
      description: "Premium storytelling with cinematic quality",
      icon: <Video className="h-6 w-6" />,
      features: ["Multi-camera setup", "Drone footage", "Professional editing", "Music licensing"]
    },
    {
      title: "Complete Wedding Package",
      price: "₹2,00,000",
      description: "Everything you need for your special day",
      icon: <Users className="h-6 w-6" />,
      features: ["Pre-wedding shoot", "Full wedding coverage", "Reception party", "Anniversary film"]
    }
  ];

  const gallery = [
    {
      title: "Rahul & Priya's Wedding",
      location: "Udaipur, Rajasthan",
      type: "Traditional Hindu Wedding",
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    },
    {
      title: "Arjun & Sneha's Engagement",
      location: "Mumbai, Maharashtra",
      type: "Beach Engagement",
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    },
    {
      title: "Vikram & Anjali's Reception",
      location: "Delhi, NCR",
      type: "Grand Reception",
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Wedding Films
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your love story deserves to be told beautifully. We create cinematic wedding films 
            that capture every emotion, every moment, and every detail of your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                <Heart className="mr-2 h-5 w-5" />
                Book Your Wedding
              </Button>
            </ContactModal>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Wedding Films
            </Button>
          </div>
        </div>
      </section>

      {/* Wedding Packages */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Wedding Packages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300 relative">
                {index === 2 && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      {pkg.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{pkg.title}</CardTitle>
                      <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                    </div>
                  </div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <ContactModal>
                    <Button variant="outline" className="w-full">
                      Choose Package
                    </Button>
                  </ContactModal>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Wedding Films</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((wedding, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-elegant transition-all duration-300">
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img 
                    src={wedding.image} 
                    alt={wedding.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Film
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{wedding.title}</h3>
                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      {wedding.location}
                    </div>
                    <Badge variant="secondary">{wedding.type}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Wedding Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "We discuss your vision and preferences" },
              { step: "2", title: "Planning", desc: "Timeline creation and shot list preparation" },
              { step: "3", title: "Filming", desc: "Professional coverage of your special day" },
              { step: "4", title: "Delivery", desc: "Edited films delivered within 4-6 weeks" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{process.title}</h3>
                <p className="text-muted-foreground">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-8 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Capture Your Love Story?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's create beautiful memories together. Contact us to discuss your wedding 
            photography and videography needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal>
              <Button variant="secondary" size="lg">
                <Heart className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </ContactModal>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Clock className="mr-2 h-5 w-5" />
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WeddingFilms;