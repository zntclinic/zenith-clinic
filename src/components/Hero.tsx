import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import zenithVideo from "@/assets/zenith-video.mp4";

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
        <source src={zenithVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Business Name and Buttons - Centered on mobile, Left on desktop */}
      <div className="absolute bottom-32 sm:bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 sm:left-16 md:left-24 sm:transform-none z-20">
        <h1 className="font-playfair text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center sm:text-left">
          ZENITH CLINIC
        </h1>

        <div className="flex flex-row gap-2 sm:gap-4 justify-center sm:justify-start">
          <Button
            size="sm"
            className="bg-white text-black hover:bg-gray-100 font-semibold px-3 py-2 text-xs sm:px-8 sm:py-5 sm:text-base md:px-10 md:py-6"
            onClick={() => window.open('https://booksy.com/es-es/rwg/153333_zenith-clinic_medicina-estetica_65288_ourense?hl=es-DE&gei=tQHpaP6hB66oxc8P4srX0Qo&rwg_token=ACgRB3e5lvnMzzILBD_P9qgArcYnzOFL65huPYfWsJVgsq5hSxu_StI2RxM6me9s3CH23uA8drCaHINN9CZ0wZz01s1RZi3Q8Q%3D%3D', '_blank')}
          >
            Reserva
          </Button>

          <Button
            size="sm"
            className="bg-green-500 text-white hover:bg-green-600 font-semibold px-3 py-2 gap-1 text-xs sm:px-8 sm:py-5 sm:gap-2 sm:text-base md:px-10 md:py-6"
            onClick={() => window.open('https://wa.me/34628521662', '_blank')}
          >
            <span className="sm:hidden">
              <WhatsAppIcon size={14} />
            </span>
            <span className="hidden sm:inline md:hidden">
              <WhatsAppIcon size={20} />
            </span>
            <span className="hidden md:inline">
              <WhatsAppIcon size={24} />
            </span>
            Contactar
          </Button>
        </div>
      </div>

      {/* Address and Schedule - Centered on mobile, Right on desktop */}
      <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-2 right-2 sm:left-auto sm:right-16 md:right-24 sm:transform-none z-20 text-white">
        <div className="flex flex-col sm:block text-center sm:text-right max-w-none sm:max-w-md">
          <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3 mb-2 sm:mb-3 whitespace-nowrap">
            <MapPin size={18} className="text-white/80 flex-shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
              Av. da Habana 26, Ourense, España
            </span>
          </div>

          <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-3 whitespace-nowrap">
            <Clock size={18} className="text-white/80 flex-shrink-0 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">
              Lunes a viernes 10:00 - 20:00
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};