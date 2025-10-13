import masajeImage from "@/assets/masaje.jpg";
import facialesImage from "@/assets/faciales.jpg";
import microImage from "@/assets/micropigmentacion.jpg";
import manicuraImage from "@/assets/manicura.jpg";
import pedicuraImage from "@/assets/pedicura.jpg";
import pestanasImage from "@/assets/pestanhas.jpg";

const serviceCategories = [
  {
    category: "Masajes",
    image: masajeImage,
    treatments: [
      {
        name: "Masaje Relajante Albaricoque",
        description: "Masaje relajante con aceites esenciales de albaricoque para una experiencia sensorial única.",
        price: "70€",
        duration: "60 min"
      },
      {
        name: "Masaje Relajante Almendra",
        description: "Tratamiento relajante con aceite de almendras dulces que nutre e hidrata la piel.",
        price: "70€",
        duration: "60 min"
      },
      {
        name: "Masaje Relajante Uva",
        description: "Masaje antioxidante con extractos de uva que revitaliza y rejuvenece la piel.",
        price: "70€",
        duration: "60 min"
      },
      {
        name: "Masaje Parcial Pies",
        description: "Tratamiento específico para relajar y descansar los pies después de un día intenso.",
        price: "45€",
        duration: "30 min"
      },
      {
        name: "Masaje Parcial Cráneo-Cervical",
        description: "Masaje especializado para aliviar tensiones en cuello, hombros y cuero cabelludo.",
        price: "45€",
        duration: "30 min"
      },
      {
        name: "Masaje Parcial Espalda",
        description: "Masaje enfocado en la zona de la espalda para aliviar tensiones musculares y contracturas.",
        price: "45€",
        duration: "30 min"
      },
      {
        name: "Masaje Piernas Cansadas + Vendar",
        description: "Tratamiento específico para piernas cansadas con técnicas de drenaje y vendaje relajante.",
        price: "50€",
        duration: "45 min"
      },
      {
        name: "Piedras Calientes",
        description: "Masaje terapéutico con piedras volcánicas calientes que relajan profundamente los músculos.",
        price: "100€",
        duration: "90 min"
      },
      {
        name: "Soliño",
        description: "Tratamiento especial relajante que combina técnicas tradicionales para el bienestar total.",
        price: "80€",
        duration: "75 min"
      },
      {
        name: "Exfoliación + Masaje Canela y Piripiri",
        description: "Exfoliación corporal seguida de masaje con aceites de canela y piripiri, efecto tonificante y revitalizante.",
        price: "80€",
        duration: "90 min"
      },
      {
        name: "Exfoliación + Masaje Maracuyá",
        description: "Exfoliación suave y masaje con aceite de maracuyá para una piel radiante y nutrida.",
        price: "80€",
        duration: "90 min"
      },
      {
        name: "Envoltura + Masaje Chocolate",
        description: "Envoltura de chocolate rica en antioxidantes seguida de masaje relajante y nutritivo.",
        price: "90€",
        duration: "90 min"
      },
      {
        name: "Envoltura + Masaje Algas",
        description: "Tratamiento marino con envoltura de algas que remineraliza la piel y masaje relajante.",
        price: "90€",
        duration: "90 min"
      },
      {
        name: "Envoltura + Masaje Células Madre",
        description: "Tratamiento premium con envoltura de células madre vegetales y masaje regenerador.",
        price: "90€",
        duration: "90 min"
      },
      {
        name: "Envoltura + Masaje Jengibre",
        description: "Envoltura con jengibre de efecto calor seguida de masaje que activa la circulación.",
        price: "90€",
        duration: "90 min"
      },
      {
        name: "Exfoliación + Envoltura + Masaje",
        description: "Tratamiento completo que combina exfoliación, envoltura corporal y masaje relajante para una experiencia de spa completa.",
        price: "110€",
        duration: "120 min"
      }
    ]
  },
  {
    category: "Faciales",
    image: facialesImage,
    treatments: [
      {
        name: "Limpieza Facial Profunda",
        description: "Tratamiento completo de limpieza que elimina impurezas y deja la piel radiante.",
        price: "60€",
        duration: "60 min"
      },
      {
        name: "Hidrafacial",
        description: "Tratamiento avanzado que limpia, exfolia e hidrata la piel en profundidad.",
        price: "80€",
        duration: "60 min"
      },
      {
        name: "Peeling Químico",
        description: "Exfoliación química que renueva la piel y mejora su textura y luminosidad.",
        price: "70€",
        duration: "45 min"
      },
      {
        name: "Radiofrecuencia Facial",
        description: "Tratamiento anti-edad que estimula el colágeno y reafirma la piel del rostro.",
        price: "90€",
        duration: "60 min"
      }
    ]
  },
  {
    category: "Micropigmentación",
    image: microImage,
    treatments: [
      {
        name: "Cejas Pelo a Pelo",
        description: "Técnica de micropigmentación que crea cejas naturales con efecto pelo a pelo.",
        price: "200€",
        duration: "120 min"
      },
      {
        name: "Delineado de Ojos",
        description: "Micropigmentación del contorno de ojos para una mirada más definida y expresiva.",
        price: "180€",
        duration: "90 min"
      },
      {
        name: "Perfilado de Labios",
        description: "Definición y color permanente de labios para un resultado natural y duradero.",
        price: "220€",
        duration: "120 min"
      }
    ]
  },
  {
    category: "Pestañas",
    image: pestanasImage,
    treatments: [
      {
        name: "Pestañas Técnica Clásica",
        description: "Aplicación de extensiones para conseguir pestañas más largas y voluminosas.",
        price: "50€",
        duration: "90 min"
      },
      {
        name: "Lifting de Pestañas",
        description: "Tratamiento que curva y alarga las pestañas naturales de forma duradera.",
        price: "40€",
        duration: "60 min"
      },
      {
        name: "Tinte de Pestañas",
        description: "Coloración de pestañas para intensificar la mirada de forma natural.",
        price: "20€",
        duration: "30 min"
      }
    ]
  },
  {
    category: "Manicura",
    image: manicuraImage,
    treatments: [
      {
        name: "Manicura Clásica",
        description: "Cuidado completo de manos y uñas con esmaltado tradicional.",
        price: "25€",
        duration: "30 min"
      },
      {
        name: "Manicura Semipermanente",
        description: "Manicura con esmalte de larga duración que mantiene el brillo hasta 3 semanas.",
        price: "35€",
        duration: "45 min"
      },
      {
        name: "Nail Art",
        description: "Diseños artísticos personalizados en uñas para un look único y creativo.",
        price: "45€",
        duration: "60 min"
      }
    ]
  },
  {
    category: "Pedicura",
    image: pedicuraImage,
    treatments: [
      {
        name: "Pedicura Clásica",
        description: "Cuidado completo de pies y uñas con exfoliación e hidratación.",
        price: "30€",
        duration: "45 min"
      },
      {
        name: "Pedicura Spa",
        description: "Tratamiento relajante de pies con masaje y productos premium.",
        price: "45€",
        duration: "60 min"
      },
      {
        name: "Tratamiento de Callos",
        description: "Eliminación profesional de callos y durezas para pies suaves.",
        price: "25€",
        duration: "30 min"
      }
    ]
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
                  {category.category}
                </h3>
              </div>

              {/* Treatment Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {category.treatments.map((treatment, treatmentIndex) => (
                  <div
                    key={treatmentIndex}
                    className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 cursor-pointer"
                  >
                    {/* Treatment image - always visible */}
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={treatment.name}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-200">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-white/40 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Default overlay with treatment title */}
                    <div className="absolute inset-0 bg-black/40 flex items-end transition-opacity duration-300 group-hover:opacity-0">
                      <div className="p-6 w-full">
                        <h4 className="text-white font-semibold text-lg leading-tight">
                          {treatment.name}
                        </h4>
                      </div>
                    </div>

                    {/* Hover overlay with semi-transparent white background and details */}
                    <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6">
                      <h4 className="font-playfair text-xl font-bold text-foreground mb-3">
                        {treatment.name}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {treatment.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl font-bold text-primary">
                          {treatment.price}
                        </div>
                        {treatment.duration && (
                          <div className="text-sm font-medium text-muted-foreground">
                            {treatment.duration}
                          </div>
                        )}
                      </div>
                      <button 
                        className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://booksy.com/es-es/153333_zenith-clinic_medicina-estetica_65288_ourense', '_blank');
                        }}
                      >
                        Reservar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};