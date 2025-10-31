import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Gift, Heart, Sparkles, Check } from "lucide-react";
import { businessInfo } from "@/data/businessInfo";
import clinica1Image from "@/assets/clinica/clinica-1.jpeg";

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
        <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${clinica1Image})` }}
          >
            {/* Beige Overlay */}
            <div className="absolute inset-0 bg-overlay/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <Gift className="w-16 h-16 text-secondary" />
            </div>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-6">
              Tarjetas Regalo
            </h1>
            <p className="text-center text-lg md:text-xl text-black/80 max-w-3xl mx-auto">
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
        <section className="py-16 bg-primary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                Elige el Importe
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {giftCardAmounts.map((card) => (
                  <div
                    key={card.amount}
                    className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${card.popular ? 'ring-2 ring-secondary' : ''
                      }`}
                  >
                    {card.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-secondary text-secondary-foreground text-xs font-bold px-4 py-1 rounded-full">
                          Más Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center">
                      <div className="mb-4">
                        <Sparkles className="w-12 h-12 text-secondary mx-auto" />
                      </div>
                      <div className="font-playfair text-5xl font-bold text-foreground mb-2">
                        {card.amount}€
                      </div>
                      <p className="text-muted-foreground text-sm mb-6">
                        Tarjeta Regalo
                      </p>
                      <button
                        onClick={() => window.open(businessInfo.contact.whatsapp, '_blank')}
                        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
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
                    className="flex items-start gap-4 bg-secondary/15 rounded-xl p-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-secondary" />
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
        <section className="py-16 bg-primary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                ¿Cómo Funciona?
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                      Elige el importe
                    </h3>
                    <p className="text-muted-foreground">
                      Selecciona el valor de la tarjeta regalo o solicita un importe personalizado.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl">
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
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center font-bold text-xl">
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
              <Heart className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
                ¿Listo para hacer un Regalo Especial?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Contáctanos hoy mismo y prepararemos tu tarjeta regalo personalizada
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open(businessInfo.contact.whatsapp, '_blank')}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg"
                >
                  Contactar por WhatsApp
                </button>
                <button
                  onClick={() => window.location.href = `tel:${businessInfo.contact.phone}`}
                  className="bg-white hover:bg-gray-50 text-foreground font-semibold py-4 px-8 rounded-lg transition-colors duration-200 text-lg border-2 border-secondary/30"
                >
                  Llamar ahora
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

