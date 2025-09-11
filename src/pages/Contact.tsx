import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Corporate Office",
      details: ["Barua Colony beldanga", "Murshidabad, 742189"]
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Branch Office",
      details: ["Chayaneer apartment", "south bankimpally madhyamgram", "700129"]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["8981104129", "8918258722"]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["chillvideowala@gmail.com"]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary neon-glow">GET IN TOUCH</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="gradient-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="Your phone number" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <Input id="projectType" placeholder="e.g., Corporate video, Social media content" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Input id="budget" placeholder="e.g., $5,000 - $10,000" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    className="min-h-32"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Let's Connect
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to help bring your creative vision to life. Whether you need a quick quote 
                  or want to discuss a complex project, we're ready to listen.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="gradient-card border-border">
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="text-primary mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="gradient-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4">Quick Response Guarantee</h3>
                  <p className="text-muted-foreground mb-4">
                    We understand that timing is crucial in creative projects. That's why we guarantee:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 neon-glow"></div>
                      Response within 2 hours during business hours
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 neon-glow"></div>
                      Detailed quote within 24 hours
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 neon-glow"></div>
                      Project kickoff within 48 hours of approval
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="gradient-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">What's your typical turnaround time?</h3>
                <p className="text-muted-foreground">
                  Most projects are completed within 1-2 weeks, depending on complexity and revisions needed.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Do you offer revisions?</h3>
                <p className="text-muted-foreground">
                  Yes! We include 3 rounds of revisions in all our packages to ensure you're completely satisfied.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">What file formats do you deliver?</h3>
                <p className="text-muted-foreground">
                  We deliver in any format you need - MP4, MOV, AVI, and more, optimized for your specific use case.
                </p>
              </CardContent>
            </Card>
            
            <Card className="gradient-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Can you work with rush projects?</h3>
                <p className="text-muted-foreground">
                  Absolutely! We offer expedited services for urgent projects with 24-48 hour turnaround available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;