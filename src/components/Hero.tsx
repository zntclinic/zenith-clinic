import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import zenithVideo from "@/assets/zenith-video.mp4";
import { WhatsAppIcon } from "./icons/SocialIcons";

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
      <div className="absolute bottom-52 sm:bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 sm:left-16 md:left-24 sm:transform-none z-20">
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
              <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="hidden sm:inline md:hidden">
              <WhatsAppIcon className="w-5 h-5 text-white" />
            </span>
            <span className="hidden md:inline">
              <WhatsAppIcon className="w-6 h-6 text-white" />
            </span>
            Contactar
          </Button>
        </div>
      </div>

      {/* Address and Schedule - Centered on mobile, Right on desktop */}
      <div className="absolute bottom-36 sm:bottom-12 md:bottom-16 left-2 right-2 sm:left-auto sm:right-16 md:right-24 sm:transform-none z-20 text-white">
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