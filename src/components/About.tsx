import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

export const About = () => {
  return (
    <section id="sobre-nosotros" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Map Section */}
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Google Maps Embed */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d737.2486946199689!2d-7.865895830361884!3d42.34263468945067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2fff9e6f8b3aef%3A0x32822d79706056be!2sZenith%20Clinic!5e0!3m2!1ses!2sde!4v1760350524648!5m2!1ses!2sde" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Zenith Clinic Location"
            ></iframe>
          </div>

          {/* Information Section */}
          <div className="flex flex-col justify-center">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-6 text-foreground">
              EXPERIMENTA ZENITH CLINIC
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              ¿Lista para experimentar el lujo? Reserva tu cita hoy y déjanos mimarte.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-gray-600" />
                </div>
                <span className="text-lg font-medium text-foreground">
                  Av. da Habana 26, 32003 Ourense, España
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Clock size={20} className="text-gray-600" />
                </div>
                <div className="text-lg font-medium text-foreground">
                  Lunes a viernes 10:00 - 20:00
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-gray-600" />
                </div>
                <span className="text-lg font-medium text-foreground">
                  +34 628 52 16 62
                </span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-green-500 text-white hover:bg-green-600 font-semibold px-8 py-3 w-fit flex items-center gap-2"
              onClick={() => window.open('https://wa.me/34628521662', '_blank')}
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};