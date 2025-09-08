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
            <h2 className="text-3xl font-bold text-primary neon-glow mb-4">
              Chill Videowala
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Professional post-production services that transform your vision into 
              cinematic reality. From color grading to sound design, we handle it all 
              with passion and precision.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="p-2">
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
                  Color Grading
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
                  Sound Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
                  Visual Effects
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
                  Video Editing
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-smooth">
                  Motion Graphics
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
                <span className="text-sm">hello@chillvideowala.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm">Mumbai, Maharashtra</span>
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