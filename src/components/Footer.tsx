import { Button } from "@/components/ui/button";
import { 
  Instagram, 
  Youtube, 
  Linkedin, 
  Twitter,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png" 
                alt="Chill Videowala Logo" 
                className="h-16 w-16 object-contain"
              />
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              India's premier pre and post production studio specializing in corporate photography, 
              wedding films, VFX, and creative content. Based in West Bengal, serving clients nationwide.
            </p>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="p-2"
                onClick={() => window.open("https://instagram.com/chillvideowala", "_blank")}
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="p-2"
                onClick={() => window.open("https://youtube.com/@chillvideowala", "_blank")}
              >
                <Youtube className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="p-2"
                onClick={() => window.open("https://linkedin.com/company/chillvideowala", "_blank")}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="p-2"
                onClick={() => window.open("https://twitter.com/chillvideowala", "_blank")}
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
                  Corporate Photo & Video
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
                  Wedding Films
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
                  VFX & 3D Editing
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
                  Model Portfolio
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
                  2D Editing
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="/our-team" className="text-muted-foreground hover:text-primary transition-smooth">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/our-gears" className="text-muted-foreground hover:text-primary transition-smooth">
                  Our Gears
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-muted-foreground hover:text-primary transition-smooth">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">chillvideowala@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">8981104129 / 8918258722</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">West Bengal, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2024 Chill Videowala. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;