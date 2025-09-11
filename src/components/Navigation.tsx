import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/6aefb2bd-79c8-424a-bc9c-bf460b8aabe3.png" 
                alt="Chill Video Wala" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-smooth ${location.pathname === '/' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-smooth ${location.pathname === '/services' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className={`transition-smooth ${location.pathname === '/portfolio' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Portfolio
            </Link>
            <Link 
              to="/about" 
              className={`transition-smooth ${location.pathname === '/about' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-smooth ${location.pathname === '/contact' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-smooth ${location.pathname === '/' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`transition-smooth ${location.pathname === '/services' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/portfolio" 
                className={`transition-smooth ${location.pathname === '/portfolio' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/about" 
                className={`transition-smooth ${location.pathname === '/about' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`transition-smooth ${location.pathname === '/contact' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button variant="hero" size="sm" className="w-fit">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;