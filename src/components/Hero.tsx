import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

// WhatsApp Icon Component
const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/zenith-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Business Name and Buttons - Bottom Left */}
      <div className="absolute bottom-12 md:bottom-16 left-16 md:left-24 z-20">
        <h1 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-4">
          ZENITH CLINIC
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3"
            onClick={() => window.open('https://booksy.com/es-es/rwg/153333_zenith-clinic_medicina-estetica_65288_ourense?hl=es-DE&gei=tQHpaP6hB66oxc8P4srX0Qo&rwg_token=ACgRB3e5lvnMzzILBD_P9qgArcYnzOFL65huPYfWsJVgsq5hSxu_StI2RxM6me9s3CH23uA8drCaHINN9CZ0wZz01s1RZi3Q8Q%3D%3D', '_blank')}
          >
            Reserva
          </Button>

          <Button
            size="lg"
            className="bg-green-500 text-white hover:bg-green-600 font-semibold px-8 py-3 gap-2"
            onClick={() => window.open('https://wa.me/34628521662', '_blank')}
          >
            <WhatsAppIcon size={20} />
            Contactar
          </Button>
        </div>
      </div>

      {/* Address and Schedule - Bottom Right */}
      <div className="absolute bottom-12 md:bottom-16 right-16 md:right-24 z-20 text-white text-right">
        <div className="flex items-center justify-end gap-3 mb-3">
          <MapPin size={20} className="text-white/80" />
          <span className="text-base md:text-lg font-medium">
            Av. da Habana 26, Ourense, España
          </span>
        </div>

        <div className="flex items-center justify-end gap-3 mb-1">
          <Clock size={20} className="text-white/80" />
          <span className="text-base md:text-lg">
            Lunes a viernes 10:00 - 20:00
          </span>
        </div>
      </div>
    </section>
  );
};