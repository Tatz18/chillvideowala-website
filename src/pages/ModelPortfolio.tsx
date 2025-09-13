import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Camera, User, Star, Lightbulb, Palette, Image, Users } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const ModelPortfolio = () => {
  const packages = [
    {
      title: "Basic Portfolio",
      price: "₹15,000",
      description: "Perfect for aspiring models starting their journey",
      icon: <User className="h-6 w-6" />,
      features: ["2-hour shoot", "3 outfit changes", "25+ edited photos", "Basic retouching", "Online gallery"],
      popular: false
    },
    {
      title: "Professional Portfolio",
      price: "₹35,000",
      description: "Comprehensive portfolio for working models",
      icon: <Camera className="h-6 w-6" />,
      features: ["4-hour shoot", "5 outfit changes", "50+ edited photos", "Professional retouching", "Print-ready files", "Styling consultation"],
      popular: true
    },
    {
      title: "Premium Portfolio",
      price: "₹60,000",
      description: "High-end portfolio for established models",
      icon: <Star className="h-6 w-6" />,
      features: ["Full day shoot", "Unlimited outfits", "100+ edited photos", "Advanced retouching", "Video content", "Hair & makeup artist", "Multiple locations"],
      popular: false
    }
  ];

  const portfolioTypes = [
    {
      title: "Fashion Portfolio",
      description: "Editorial and commercial fashion photography",
      icon: <Palette className="h-6 w-6" />,
      styles: ["High Fashion", "Commercial", "Street Style", "Avant-garde"]
    },
    {
      title: "Beauty Portfolio",
      description: "Close-up beauty and cosmetic photography",
      icon: <Lightbulb className="h-6 w-6" />,
      styles: ["Clean Beauty", "Glamour", "Skincare", "Color Cosmetics"]
    },
    {
      title: "Lifestyle Portfolio",
      description: "Natural, everyday lifestyle photography",
      icon: <Users className="h-6 w-6" />,
      styles: ["Casual Wear", "Fitness", "Outdoor", "Urban Lifestyle"]
    },
    {
      title: "Commercial Portfolio",
      description: "Brand-focused commercial photography",
      icon: <Image className="h-6 w-6" />,
      styles: ["Product Integration", "Brand Ambassador", "Corporate", "E-commerce"]
    }
  ];

  const gallery = [
    {
      title: "Fashion Editorial Shoot",
      model: "Priya Sharma",
      category: "High Fashion",
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    },
    {
      title: "Beauty Campaign",
      model: "Anaya Patel",
      category: "Beauty",
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    },
    {
      title: "Lifestyle Portfolio",
      model: "Rahul Singh",
      category: "Commercial",
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    },
    {
      title: "Street Style Session",
      model: "Kavya Desai",
      category: "Fashion",
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    },
    {
      title: "Fitness Portfolio",
      model: "Arjun Mehta",
      category: "Lifestyle",
      image: "/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png"
    },
    {
      title: "Glamour Shoot",
      model: "Isha Gupta",
      category: "Beauty",
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
            <Star className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Model Portfolio
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Launch your modeling career with a stunning professional portfolio. 
            We create compelling images that showcase your unique style and personality to capture the attention of agencies and clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal>
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                <Camera className="mr-2 h-5 w-5" />
                Book Portfolio Shoot
              </Button>
            </ContactModal>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-5 w-5" />
              View Portfolio Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Packages */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`hover:shadow-elegant transition-all duration-300 relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
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
                    <Button variant={pkg.popular ? "default" : "outline"} className="w-full">
                      {pkg.popular ? "Choose Popular" : "Choose Package"}
                    </Button>
                  </ContactModal>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Types */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      {type.icon}
                    </div>
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                  </div>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {type.styles.map((style, idx) => (
                      <Badge key={idx} variant="secondary" className="mr-1 mb-1">
                        {style}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 px-4 lg:px-8 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((portfolio, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-elegant transition-all duration-300">
                <div className="relative aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img 
                    src={portfolio.image} 
                    alt={portfolio.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      <Image className="mr-2 h-4 w-4" />
                      View Portfolio
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{portfolio.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">Model: {portfolio.model}</p>
                  <Badge variant="secondary">{portfolio.category}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio Shoot Preparation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Wardrobe Planning", 
                tips: ["Bring variety of outfits", "Include solids and patterns", "Avoid logos and graphics", "Consider different styles"],
                icon: <Palette className="h-8 w-8" />
              },
              { 
                title: "Grooming", 
                tips: ["Get enough sleep", "Stay hydrated", "Professional hair/makeup", "Manicure recommended"],
                icon: <Star className="h-8 w-8" />
              },
              { 
                title: "Posing Practice", 
                tips: ["Study fashion magazines", "Practice in mirror", "Work on expressions", "Body positioning"],
                icon: <Camera className="h-8 w-8" />
              },
              { 
                title: "Mental Preparation", 
                tips: ["Stay confident", "Be yourself", "Take direction well", "Have fun with it"],
                icon: <Lightbulb className="h-8 w-8" />
              }
            ].map((tip, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {tip.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    {tip.tips.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-8 bg-gradient-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Modeling Portfolio?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards your modeling career with a professional portfolio 
            that showcases your unique potential and attracts the right opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ContactModal>
              <Button variant="secondary" size="lg">
                <Star className="mr-2 h-5 w-5" />
                Book Your Shoot
              </Button>
            </ContactModal>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Users className="mr-2 h-5 w-5" />
              View Success Stories
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ModelPortfolio;