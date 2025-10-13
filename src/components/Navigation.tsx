import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { businessInfo } from "@/data/businessInfo";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/"
            className={`font-playfair text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            {businessInfo.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/tratamientos"
              className={`transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Tratamientos
            </Link>
            <Link
              to="/sobre-nosotros"
              className={`transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/tarjetas-regalo"
              className={`transition-colors ${
                isScrolled 
                  ? 'text-foreground hover:text-primary' 
                  : 'text-white hover:text-gray-200'
              }`}
            >
              Tarjetas Regalo
            </Link>
            <Button
              variant="elegant"
              size="default"
              onClick={() => window.open(businessInfo.booking.booksy, '_blank')}
            >
              Reserva
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden py-4 ${isScrolled ? 'border-t border-border' : 'border-t border-white/20'}`}>
            <div className="flex flex-col gap-4">
              <Link
                to="/tratamientos"
                onClick={() => setIsOpen(false)}
                className={`transition-colors text-left ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                Tratamientos
              </Link>
              <Link
                to="/sobre-nosotros"
                onClick={() => setIsOpen(false)}
                className={`transition-colors text-left ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                Sobre Nosotros
              </Link>
              <Link
                to="/tarjetas-regalo"
                onClick={() => setIsOpen(false)}
                className={`transition-colors text-left ${
                  isScrolled 
                    ? 'text-foreground hover:text-primary' 
                    : 'text-white hover:text-gray-200'
                }`}
              >
                Tarjetas Regalo
              </Link>
              <Button
                variant="elegant"
                size="default"
                onClick={() => window.open(businessInfo.booking.booksy, '_blank')}
              >
                Reserva
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
