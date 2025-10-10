import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="sobre-nosotros" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Map Section */}
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="absolute top-4 left-4 z-10 bg-white rounded-lg shadow-md p-3">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-sm">Zenith Clinic</h3>
              </div>
              <div className="text-xs text-gray-600 mb-2">
                Av. da Habana, 26, Ourense, España
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-600 mb-2">
                <span className="text-yellow-500">★★★★★</span>
                <span>4.9 • 345 reviews</span>
              </div>
              <button className="text-xs text-blue-600 hover:underline">
                View larger map
              </button>
            </div>

            {/* Map placeholder - you can replace this with actual Google Maps embed */}
            <div className="w-full h-80 bg-gradient-to-br from-green-100 to-blue-100 relative">
              <div className="absolute inset-0 bg-gray-100 opacity-20 pattern-dots"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-white" />
                </div>
              </div>
            </div>
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
              className="bg-green-500 text-white hover:bg-green-600 font-semibold px-8 py-3 w-fit"
              onClick={() => window.open('https://wa.me/34628521662', '_blank')}
            >
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};