import { InstagramIcon, GmailIcon } from "./icons/SocialIcons";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand and Social Media */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold text-black mb-4">ZENITH CLINIC</h3>
            <div className="flex gap-3 mb-6">
              <a 
                href="https://www.instagram.com/znt.clinic/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <InstagramIcon />
              </a>
              <a 
                href="mailto:info@zenithclinic.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <GmailIcon />
              </a>
            </div>
            <p className="text-sm text-gray-500">
              © Todos los derechos reservados
            </p>
          </div>

          {/* Other Links */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold text-black mb-4">Otros enlaces</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>Tarjeta de Regalo</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6h-2V4c0-1.11-.89-2-2-2H8c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0H8V4h6v2zm4 12H6V10h12v8z"/>
                </svg>
                <span>Trabaja con nosotros</span>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold text-black mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-gray-600">
                <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Avenida da Habana 26, Ourense, España</span>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <div>
                  <div>Lunes a Viernes 10:00 - 20:00</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+34 628 52 16 62</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
