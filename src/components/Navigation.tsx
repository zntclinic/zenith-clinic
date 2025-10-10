import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-playfair text-2xl font-bold text-primary">
            Zenith Clinic
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('sobre-nosotros')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contacto
            </button>
            <Button
              variant="elegant"
              size="default"
              onClick={() => window.open('https://booksy.com/es-es/rwg/153333_zenith-clinic_medicina-estetica_65288_ourense?hl=es-DE&gei=tQHpaP6hB66oxc8P4srX0Qo&rwg_token=ACgRB3e5lvnMzzILBD_P9qgArcYnzOFL65huPYfWsJVgsq5hSxu_StI2RxM6me9s3CH23uA8drCaHINN9CZ0wZz01s1RZi3Q8Q%3D%3D', '_blank')}
            >
              Reservar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('sobre-nosotros')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Sobre Nosotros
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-foreground hover:text-primary transition-colors text-left"
              >
                Contacto
              </button>
              <Button
                variant="elegant"
                size="default"
                onClick={() => window.open('https://booksy.com/es-es/rwg/153333_zenith-clinic_medicina-estetica_65288_ourense?hl=es-DE&gei=tQHpaP6hB66oxc8P4srX0Qo&rwg_token=ACgRB3e5lvnMzzILBD_P9qgArcYnzOFL65huPYfWsJVgsq5hSxu_StI2RxM6me9s3CH23uA8drCaHINN9CZ0wZz01s1RZi3Q8Q%3D%3D', '_blank')}
              >
                Reservar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
