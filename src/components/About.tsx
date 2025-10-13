import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { businessInfo } from "@/data/businessInfo";
export const About = () => {
  return <section id="sobre-nosotros" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Map Section */}
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Google Maps Embed */}
            <iframe src={businessInfo.maps.embedUrl} width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`${businessInfo.name} Location`}></iframe>
          </div>

          {/* Information Section */}
          <div className="flex flex-col justify-center">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-6 text-foreground">
              EXPERIMENTA {businessInfo.name}
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">¿Lista para experimentar lo mejor de tu vida? Reserva tu cita hoy y déjanos mimarte.</p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-gray-600" />
                </div>
                <span className="text-lg font-medium text-foreground">
                  {businessInfo.address.full}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Clock size={20} className="text-gray-600" />
                </div>
                <div className="text-lg font-medium text-foreground">
                  {businessInfo.hours.display}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-gray-600" />
                </div>
                <span className="text-lg font-medium text-foreground">
                  {businessInfo.contact.phoneFormatted}
                </span>
              </div>
            </div>

            <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 font-semibold px-8 py-3 w-fit flex items-center gap-2" onClick={() => window.open(businessInfo.contact.whatsapp, '_blank')}>
              <WhatsAppIcon className="w-5 h-5 text-white" />
              Contactar
            </Button>
          </div>
        </div>
      </div>
    </section>;
};