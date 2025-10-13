import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Gift, Heart, Sparkles, Check } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";
import clinica2Image from "@/assets/clinica-2.jpeg";

const TarjetasRegalo = () => {
  const giftCardAmounts = [
    { amount: 50, popular: false },
    { amount: 100, popular: true },
    { amount: 250, popular: false },
    { amount: 500, popular: false },
  ];

  const benefits = [
    "Válida para todos nuestros tratamientos",
    "Sin fecha de caducidad",
    "Transferible a otra persona",
    "Presentación elegante incluida",
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden pt-32 md:pt-40 lg:pt-48">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${clinica2Image})` }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <Gift className="w-16 h-16 text-white" />
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-6">
              Tarjetas Regalo
            </h1>
            <p className="text-center text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Regala belleza, bienestar y momentos únicos
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
                El Regalo Perfecto
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                Nuestras tarjetas regalo son la forma ideal de sorprender a alguien especial. 
                Permiten elegir entre todos nuestros tratamientos de medicina estética, masajes, 
                y cuidados faciales, adaptándose perfectamente a los gustos y necesidades de cada persona.
              </p>
            </div>
          </div>
        </section>

        {/* Gift Card Amounts Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Elige el Importe
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {giftCardAmounts.map((card) => (
                  <div
                    key={card.amount}
                    className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                      card.popular ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    {card.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                          Más Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center">
                      <div className="mb-4">
                        <Sparkles className="w-12 h-12 text-primary mx-auto" />
                      </div>
                      <div className="font-playfair text-5xl font-bold text-foreground mb-2">
                        {card.amount}€
                      </div>
                      <p className="text-muted-foreground text-sm mb-6">
                        Tarjeta Regalo
                      </p>
                      <button
                        onClick={() => window.open(businessInfo.contact.whatsapp, '_blank')}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                      >
                        Solicitar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground text-sm">
                  ¿Prefieres otro importe? Contáctanos y personalizamos tu tarjeta regalo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Ventajas de Nuestras Tarjetas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-gray-50 rounded-xl p-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <p className="text-foreground font-medium pt-2">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                ¿Cómo Funciona?
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                      Elige el Importe
                    </h3>
                    <p className="text-muted-foreground">
                      Selecciona el valor de la tarjeta regalo o solicita un importe personalizado.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                      Contáctanos
                    </h3>
                    <p className="text-muted-foreground">
                      Ponte en contacto con nosotros por WhatsApp, teléfono o visítanos en la clínica.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                      Recoge tu Tarjeta
                    </h3>
                    <p className="text-muted-foreground">
                      Recibe tu tarjeta regalo en una elegante presentación, lista para regalar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Listo para Hacer un Regalo Especial?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Contáctanos hoy mismo y prepararemos tu tarjeta regalo personalizada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open(businessInfo.contact.whatsapp, '_blank')}
                  className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
                >
                  Contactar por WhatsApp
                </button>
                <button
                  onClick={() => window.location.href = `tel:${businessInfo.contact.phone}`}
                  className="bg-white hover:bg-gray-50 text-foreground font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg border-2 border-gray-200"
                >
                  Llamar Ahora
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default TarjetasRegalo;

