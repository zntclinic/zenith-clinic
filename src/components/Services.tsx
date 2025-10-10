import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Hand, Eye, Pipette, Scissors, Footprints } from "lucide-react";

const services = [
  {
    icon: Hand,
    title: "Masajes",
    description: "Relájate con nuestros masajes terapéuticos y relajantes, diseñados para liberar tensiones y mejorar tu bienestar.",
  },
  {
    icon: Sparkles,
    title: "Faciales",
    description: "Tratamientos faciales personalizados que revitalizan tu piel, mejorando su textura, luminosidad y salud.",
  },
  {
    icon: Pipette,
    title: "Micropigmentación",
    description: "Realza tu belleza natural con técnicas de micropigmentación de cejas, labios y delineado de ojos.",
  },
  {
    icon: Eye,
    title: "Pestañas",
    description: "Extensiones y lifting de pestañas para una mirada impactante y natural que realza tus ojos.",
  },
  {
    icon: Scissors,
    title: "Manicura",
    description: "Cuidado completo de manos y uñas con esmaltes de alta calidad y diseños personalizados.",
  },
  {
    icon: Footprints,
    title: "Pedicura",
    description: "Tratamiento profesional de pies para mantenerlos suaves, saludables y perfectamente cuidados.",
  },
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra gama completa de servicios de belleza y bienestar, cada uno diseñado para realzar tu belleza natural.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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