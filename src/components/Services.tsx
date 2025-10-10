import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Droplet, Heart, Star } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Tratamientos Faciales",
    description: "Revitaliza tu piel con nuestros tratamientos faciales personalizados según tus necesidades y tipo de piel.",
  },
  {
    icon: Droplet,
    title: "Spa & Bienestar",
    description: "Disfruta de nuestros lujosos tratamientos de spa diseñados para rejuvenecer tu cuerpo y alma.",
  },
  {
    icon: Heart,
    title: "Servicios de Belleza",
    description: "Desde maquillaje profesional hasta extensiones de pestañas, realza tu belleza natural con nuestros servicios expertos.",
  },
  {
    icon: Star,
    title: "Cuidado Premium",
    description: "Experimenta tratamientos de vanguardia con productos premium para resultados duraderos.",
  },
];

export const Services = () => {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra gama de servicios premium de belleza y bienestar, cada uno elaborado con cuidado y experiencia.
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