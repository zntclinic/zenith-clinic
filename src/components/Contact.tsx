import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Beauty Boulevard, Elegance District",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@luxebeauty.studio",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: "Mon-Sat: 9AM-8PM, Sun: 10AM-6PM",
  },
];

export const Contact = () => {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to experience luxury? Book your appointment today and let us pamper you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center border-border/50 bg-card/80 backdrop-blur">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 text-foreground">{info.title}</h3>
                <p className="text-sm text-muted-foreground">{info.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="elegant" size="lg" className="font-semibold">
            Book Your Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};