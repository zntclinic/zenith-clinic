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
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'transition-all duration-300' : ''
      } ${isOpen || isScrolled
        ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-soft'
        : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-playfair text-2xl font-bold text-black transition-colors duration-300"
          >
            {businessInfo.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/tratamientos"
              className="transition-colors text-black hover:text-gray-700"
            >
              Tratamientos
            </Link>
            <Link
              to="/sobre-nosotros"
              className="transition-colors text-black hover:text-gray-700"
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/tarjetas-regalo"
              className="transition-colors text-black hover:text-gray-700"
            >
              Tarjetas Regalo
            </Link>
            <Button
              size="default"
              className={`transition-all duration-300 ${isScrolled
                ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-elegant'
                : 'bg-white text-black hover:bg-gray-100 shadow-soft'
                }`}
              onClick={() => window.open(businessInfo.booking.booksy, '_blank')}
            >
              Reserva
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-colors text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation - Full Width */}
      {isOpen && (
        <div className={`md:hidden bg-background/95 backdrop-blur-sm ${isScrolled ? 'border-t border-border' : 'border-t border-black/20'}`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/tratamientos"
                onClick={() => setIsOpen(false)}
                className="transition-colors text-left text-black hover:text-gray-700"
              >
                Tratamientos
              </Link>
              <Link
                to="/sobre-nosotros"
                onClick={() => setIsOpen(false)}
                className="transition-colors text-left text-black hover:text-gray-700"
              >
                Sobre Nosotros
              </Link>
              <Link
                to="/tarjetas-regalo"
                onClick={() => setIsOpen(false)}
                className="transition-colors text-left text-black hover:text-gray-700"
              >
                Tarjetas Regalo
              </Link>
              <Button
                size="default"
                className={`transition-all duration-300 ${isScrolled
                  ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-elegant'
                  : 'bg-white text-black hover:bg-gray-100 shadow-soft'
                  }`}
                onClick={() => window.open(businessInfo.booking.booksy, '_blank')}
              >
                Reserva
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
