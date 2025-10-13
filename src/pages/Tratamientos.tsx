import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import clinica1Image from "@/assets/clinica-2.jpeg";
import { treatments } from "@/data/treatments";

const Tratamientos = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden pt-32 md:pt-40 lg:pt-48">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${clinica1Image})` }}
          >
            {/* Beige Overlay */}
            <div className="absolute inset-0 bg-[#f5f5dc]/70"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black mb-6">
              Nuestros Tratamientos
            </h1>
            <p className="text-center text-lg text-black/80 max-w-3xl mx-auto">
              Descubre nuestra amplia gama de tratamientos diseñados para realzar tu belleza natural y bienestar
            </p>
          </div>
        </section>

        {/* Treatments Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              {treatments.map((treatment, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 md:p-10 hover:shadow-lg transition-shadow duration-300"
                >
                  <h2 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {treatment.title}
                  </h2>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </main>
    </>
  );
};

export default Tratamientos;

