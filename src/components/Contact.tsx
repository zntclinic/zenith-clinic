import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visítanos",
    details: "Av. da Habana 26, 32003 Ourense, España",
  },
  {
    icon: Phone,
    title: "Llámanos",
    details: "+34 628 52 16 62",
  },
  {
    icon: Mail,
    title: "Escríbenos",
    details: "info@zenithclinic.es",
  },
  {
    icon: Clock,
    title: "Horario",
    details: "Lun-Vie: 10:00-20:00",
  },
];

export const Contact = () => {
  return (
    <section id="contacto" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Lista para experimentar el lujo? Reserva tu cita hoy y déjanos mimarte.
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
          <Button 
            variant="elegant" 
            size="lg" 
            className="font-semibold"
            onClick={() => window.open('https://booksy.com/es-es/rwg/153333_zenith-clinic_medicina-estetica_65288_ourense?hl=es-DE&gei=tQHpaP6hB66oxc8P4srX0Qo&rwg_token=ACgRB3e5lvnMzzILBD_P9qgArcYnzOFL65huPYfWsJVgsq5hSxu_StI2RxM6me9s3CH23uA8drCaHINN9CZ0wZz01s1RZi3Q8Q%3D%3D', '_blank')}
          >
            Reservar Cita Online
          </Button>
        </div>
      </div>
    </section>
  );
};