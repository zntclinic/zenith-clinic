import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Droplet, Heart, Star } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Facial Treatments",
    description: "Revitalize your skin with our signature facials, customized to your unique needs and skin type.",
  },
  {
    icon: Droplet,
    title: "Spa & Wellness",
    description: "Indulge in our luxurious spa treatments designed to rejuvenate your body and soul.",
  },
  {
    icon: Heart,
    title: "Beauty Services",
    description: "From makeup artistry to lash extensions, enhance your natural beauty with our expert services.",
  },
  {
    icon: Star,
    title: "Premium Skincare",
    description: "Experience cutting-edge skincare treatments with premium products for lasting results.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium beauty and wellness services, each crafted with care and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-playfair text-xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};