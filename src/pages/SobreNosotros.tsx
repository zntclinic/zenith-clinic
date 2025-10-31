import { Navigation } from "@/components/Navigation";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { ImageGallery } from "@/components/ImageGallery";
import clinica1Image from "@/assets/clinica/clinica-1.jpeg";
import clinica2Image from "@/assets/clinica/clinica-2.jpeg";
import clinica3Image from "@/assets/clinica/clinica-3.jpeg";
import clinica4Image from "@/assets/clinica/clinica-4.jpeg";
import clinica5Image from "@/assets/clinica/clinica-5.jpeg";
import clinica6Image from "@/assets/clinica/clinica-6.jpeg";
import clinica7Image from "@/assets/clinica/clinica-7.jpeg";


const SobreNosotros = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden flex items-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
            style={{ backgroundImage: `url(${clinica5Image})` }}
          >
            {/* Beige Overlay */}
            <div className="absolute inset-0 bg-overlay/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-center text-lg text-black/80 max-w-3xl mx-auto">
              Conoce nuestra historia, filosofía y el espacio donde cuidamos de tu belleza y bienestar
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8 text-center">
                Nuestra Historia
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  Zenith Clinic nació de la pasión por elevar la belleza y el bienestar a su punto más alto. Apasionados por la estética y el equilibrio interior, entendimos que la verdadera transformación va más allá de lo superficial: nace del cuidado integral de cuerpo, mente y piel.
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Inspirados por la innovación y la cosmética natural de alta calidad, creamos el espacio que deseábamos encontrar —un lugar donde cada detalle está pensado para realzar tu belleza auténtica y acompañarte hacia tu mejor versión.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-16 bg-primary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-8 text-center">
                La Filosofía de Zenith Clinic
              </h2>
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg">
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  En Zenith Clinic creemos que la belleza auténtica nace del equilibrio entre la ciencia y la sensibilidad. Nuestra filosofía une tecnología avanzada, cosmética natural y un enfoque humano que entiende cada piel como única. Buscamos resultados visibles, sí, pero también una experiencia que inspire bienestar, confianza y armonía interior.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-medium text-foreground mb-12 text-center">
                Nuestra Clínica
              </h2>
              <ImageGallery
                images={[
                  { src: clinica1Image, title: 'Recepción y zona de bienvenida' },
                  { src: clinica2Image, title: 'Sala de tratamientos' },
                  { src: clinica3Image, title: 'Zona de espera y productos' },
                  { src: clinica4Image, title: 'Área de consulta' },
                  { src: clinica5Image, title: 'Sala de medicina estética' },
                  { src: clinica6Image, title: 'Zona de relajación' },
                  { src: clinica7Image, title: 'Cabina de tratamientos corporales' },

                ]}
                altText="Zenith Clinic - Instalaciones"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <About />

        <Footer />
      </main>
    </>
  );
};

export default SobreNosotros;

