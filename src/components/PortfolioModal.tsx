import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink, X } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  videoUrl?: string;
  technologies: string[];
  client?: string;
  year: string;
}

interface PortfolioModalProps {
  children: React.ReactNode;
  item: PortfolioItem;
}

const PortfolioModal = ({ children, item }: PortfolioModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoToggle = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div>
              <DialogTitle className="text-xl font-bold text-foreground mb-2">
                {item.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {item.category} • {item.year} {item.client && `• ${item.client}`}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Media Section */}
          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
            {!isVideoPlaying ? (
              <div className="relative w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <Button
                      variant="hero"
                      size="lg"
                      className="rounded-full p-4"
                      onClick={handleVideoToggle}
                    >
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative w-full h-full">
                <iframe
                  src={item.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title={item.title}
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-2 right-2 p-2"
                  onClick={handleVideoToggle}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Project Overview</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>

            {/* Technologies/Tools Used */}
            <div>
              <h3 className="font-semibold text-foreground mb-2">Tools & Techniques</h3>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
              <Button variant="hero" className="flex-1 min-w-fit">
                <ExternalLink className="mr-2 h-4 w-4" />
                Start Similar Project
              </Button>
              <Button variant="outline" className="flex-1 min-w-fit">
                View More Work
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioModal;