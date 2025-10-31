import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";
import { businessInfo } from "@/data/businessInfo";

export const About = () => {
  return <section id="sobre-nosotros" className="py-24 bg-primary/30">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* Map Section */}
        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden h-80 lg:h-auto">
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

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">Descubre una experiencia única de bienestar y belleza. Agenda tu cita y permítenos cuidar de ti con la atención que mereces.</p>

          <div className="space-y-6 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <MapPin size={20} className="text-secondary" />
              </div>
              <span className="text-lg font-medium text-foreground">
                {businessInfo.address.full}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Clock size={20} className="text-secondary" />
              </div>
              <div className="text-lg font-medium text-foreground">
                {businessInfo.hours.display}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                <Phone size={20} className="text-secondary" />
              </div>
              <span className="text-lg font-medium text-foreground">
                {businessInfo.contact.phoneFormatted}
              </span>
            </div>
          </div>

          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-3 w-fit flex items-center gap-2" onClick={() => window.open(businessInfo.contact.whatsapp, '_blank')}>
            <WhatsAppIcon className="w-5 h-5" />
            Contactar
          </Button>
        </div>
      </div>
    </div>
  </section>;
};
