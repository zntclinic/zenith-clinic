import masajeImage from "@/assets/masaje.jpg";
import facialesImage from "@/assets/faciales.jpg";
import microImage from "@/assets/micropigmentacion.jpg";
import manicuraImage from "@/assets/manicura.jpg";
import pedicuraImage from "@/assets/pedicura.jpg";
import pestanasImage from "@/assets/pestanhas.jpg";
import tatuajeImage from "@/assets/tatuaje.jpeg";
import cejasImage from "@/assets/cejas.jpg";

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
        name: "Limpieza Básica",
        description: "Tratamiento completo de limpieza que elimina impurezas y deja la piel radiante.",
        price: "30€",
        duration: "30 min"
      },
      {
        name: "Limpieza Profunda",
        description: "Tratamiento avanzado que limpia, exfolia e hidrata la piel en profundidad.",
        price: "60€",
        duration: "60 min"
      }
    ]
  },
  {
    category: "Láser",
    image: masajeImage, // You can change this to a laser-specific image later
    treatments: [
      {
        name: "Consulta Láser",
        description: "Consulta gratuita para evaluar tu tipo de piel y planificar el tratamiento de depilación láser más adecuado.",
        price: "Gratis",
        duration: "10 min"
      },
      {
        name: "Ingle Normal",
        description: "Depilación láser de la zona del bikini en línea normal para una piel suave y sin vello.",
        price: "45€",
        duration: "15 min"
      },
      {
        name: "Ingle Completa + Peri",
        description: "Depilación láser completa de la zona del bikini incluyendo área perianal para máxima comodidad.",
        price: "55€",
        duration: "15 min"
      },
      {
        name: "Axilas",
        description: "Depilación láser de las axilas para eliminar el vello de forma permanente y mantener la zona suave.",
        price: "30€",
        duration: "15 min"
      },
      {
        name: "Medias Piernas",
        description: "Depilación láser de medias piernas (inferior o superior) para piernas lisas y sin vello.",
        price: "65€",
        duration: "20 min"
      },
      {
        name: "Pierna Entera",
        description: "Depilación láser completa de ambas piernas para una piel suave de los muslos hasta los tobillos.",
        price: "98€",
        duration: "30 min"
      },
      {
        name: "Brazos Completos",
        description: "Depilación láser de brazos completos para eliminar el vello de antebrazos y brazos superiores.",
        price: "70€",
        duration: "25 min"
      },
      {
        name: "Dorsal",
        description: "Depilación láser de la zona dorsal para una espalda suave y libre de vello.",
        price: "50€",
        duration: "25 min"
      },
      {
        name: "Lumbar",
        description: "Depilación láser de la zona lumbar para eliminar el vello de la parte baja de la espalda.",
        price: "50€",
        duration: "25 min"
      },
      {
        name: "Abdomen",
        description: "Depilación láser del abdomen para una piel lisa y suave en la zona del vientre.",
        price: "50€",
        duration: "25 min"
      },
      {
        name: "Pecho",
        description: "Depilación láser del pecho para eliminar el vello y mantener la zona suave.",
        price: "50€",
        duration: "25 min"
      },
      {
        name: "Hombros",
        description: "Depilación láser de los hombros para una piel suave y libre de vello.",
        price: "50€",
        duration: "25 min"
      },
      {
        name: "Glúteos",
        description: "Depilación láser de los glúteos para una piel suave y sin vello en esta zona.",
        price: "50€",
        duration: "25 min"
      },
      {
        name: "Medios Brazos",
        description: "Depilación láser de medios brazos (hasta el codo) para antebrazos suaves.",
        price: "50€",
        duration: "25 min"
      },
      {
        name: "Facial Completo",
        description: "Depilación láser facial completa para eliminar el vello no deseado del rostro.",
        price: "50€",
        duration: "20 min"
      },
      {
        name: "Labio",
        description: "Depilación láser del labio superior para eliminar el vello no deseado.",
        price: "20€",
        duration: "15 min"
      },
      {
        name: "Mentón",
        description: "Depilación láser del mentón para eliminar el vello no deseado de esta zona.",
        price: "20€",
        duration: "15 min"
      },
      {
        name: "Manos",
        description: "Depilación láser de las manos para eliminar el vello dorsal y mantener las manos suaves.",
        price: "20€",
        duration: "15 min"
      },
      {
        name: "Pies",
        description: "Depilación láser de los pies para eliminar el vello del dorso y mantener los pies suaves.",
        price: "20€",
        duration: "15 min"
      },
      {
        name: "Perianal",
        description: "Depilación láser de la zona perianal para máxima higiene y comodidad.",
        price: "20€",
        duration: "15 min"
      },
      {
        name: "Areolas",
        description: "Depilación láser de las areolas para eliminar el vello no deseado de esta zona sensible.",
        price: "20€",
        duration: "15 min"
      },
      {
        name: "Labio + Mentón",
        description: "Depilación láser combinada de labio superior y mentón para una zona facial completamente suave.",
        price: "35€",
        duration: "15 min"
      },
      {
        name: "Mentón Prolongado",
        description: "Depilación láser extendida del mentón para cubrir un área más amplia.",
        price: "40€",
        duration: "15 min"
      },
      {
        name: "Piernas Enteras + Ingles + Axilas",
        description: "Tratamiento completo de depilación láser que incluye piernas enteras, ingles y axilas.",
        price: "140€",
        duration: "45 min"
      },
      {
        name: "Piernas Enteras + Ingle Normal",
        description: "Depilación láser de piernas enteras combinada con ingle en línea normal.",
        price: "130€",
        duration: "45 min"
      },
      {
        name: "Piernas Enteras + Axilas",
        description: "Depilación láser de piernas enteras combinada con axilas para máxima comodidad.",
        price: "110€",
        duration: "35 min"
      },
      {
        name: "Ingle Normal + Axilas",
        description: "Depilación láser combinada de ingle normal y axilas para una zona íntima y axilas suaves.",
        price: "58€",
        duration: "20 min"
      },
      {
        name: "Ingle Completa + Axilas",
        description: "Depilación láser de ingle completa combinada con axilas para máxima higiene.",
        price: "68€",
        duration: "25 min"
      },
      {
        name: "Medias Piernas + Ingles + Axilas",
        description: "Depilación láser de medias piernas combinada con ingles y axilas.",
        price: "115€",
        duration: "35 min"
      },
      {
        name: "Medias Piernas + Ingles",
        description: "Depilación láser de medias piernas combinada con ingles para mayor comodidad.",
        price: "95€",
        duration: "30 min"
      },
      {
        name: "Medias Piernas + Axilas",
        description: "Depilación láser de medias piernas combinada con axilas para un tratamiento completo.",
        price: "75€",
        duration: "30 min"
      },
      {
        name: "Espalda + Hombros",
        description: "Depilación láser combinada de espalda y hombros para una zona superior completamente suave.",
        price: "80€",
        duration: "30 min"
      },
      {
        name: "Brazos + Hombros + Axilas",
        description: "Depilación láser completa de brazos, hombros y axilas para una zona superior sin vello.",
        price: "100€",
        duration: "30 min"
      },
      {
        name: "Tórax + Espalda + Brazos + Axilas",
        description: "Tratamiento completo de depilación láser de toda la zona superior del cuerpo.",
        price: "190€",
        duration: "45 min"
      },
      {
        name: "Brazos + Hombros",
        description: "Depilación láser de brazos completos combinada con hombros para mayor cobertura.",
        price: "85€",
        duration: "35 min"
      }
    ]
  },
  {
    category: "Micropigmentación",
    image: microImage,
    treatments: [
      {
        name: "Eyeliner (línea entre pestañas)",
        description: "Micropigmentación de línea de ojos entre las pestañas para un delineado permanente y natural.",
        price: "350€",
        duration: "120 min"
      },
      {
        name: "Micropigmentación Labios/Cejas (1ª Sesión)",
        description: "Primera sesión de micropigmentación para labios o cejas con diseño personalizado y color natural.",
        price: "350€",
        duration: "120 min"
      },
      {
        name: "Repaso Micropigmentación (Al Mes)",
        description: "Repaso gratuito de micropigmentación realizado al mes para mantener el color y la forma perfectos.",
        price: "Gratis",
        duration: "60 min"
      },
      {
        name: "Repaso Anual Micropigmentación",
        description: "Repaso gratuito anual de micropigmentación con descuentos según tiempo transcurrido desde la última sesión.",
        price: "Gratis",
        duration: "90 min"
      }
    ]
  },
  {
    category: "Pestañas",
    image: pestanasImage,
    treatments: [
      {
        name: "Pestañas Técnica Clásica (1ª Puesta)",
        description: "Primera aplicación de extensiones de pestañas con técnica clásica para conseguir mayor longitud y volumen.",
        price: "70€",
        duration: "150 min"
      },
      {
        name: "Pestañas Efecto Rímel/Mojado (1ª Puesta)",
        description: "Primera aplicación de extensiones con efecto rímel o mojado para una mirada intensa y definida.",
        price: "75€",
        duration: "150 min"
      },
      {
        name: "Repaso Pestañas Efecto Rímel/Mojado (3 Semanas)",
        description: "Repaso de extensiones con efecto rímel/mojado cada 3 semanas para mantener el resultado perfecto.",
        price: "55€",
        duration: "90 min"
      },
      {
        name: "Pestañas Volumen 2D/3D/Fibra Tecnológica",
        description: "Aplicación de extensiones con técnica de volumen 2D/3D o fibra tecnológica para máxima densidad.",
        price: "80€",
        duration: "150 min"
      },
      {
        name: "Repaso Pestañas Volumen 2D/3D/Fibra Tecnológica",
        description: "Repaso de extensiones con volumen 2D/3D cada 3 semanas para mantener la densidad y forma.",
        price: "60€",
        duration: "90 min"
      },
      {
        name: "Retirada de Extensiones",
        description: "Retirada profesional de extensiones de pestañas de forma segura y sin dañar las pestañas naturales.",
        price: "15€",
        duration: "30 min"
      }
    ]
  },
  {
    category: "Manicura",
    image: manicuraImage,
    treatments: [
      {
        name: "Esmaltado Semipermanente",
        description: "Esmaltado semipermanente de larga duración que mantiene el brillo y color perfecto hasta 3 semanas.",
        price: "30€",
        duration: "90 min"
      },
      {
        name: "Arreglo Uña Rota",
        description: "Reparación profesional de uñas rotas o dañadas para restaurar su forma y resistencia.",
        price: "6€",
        duration: "15 min"
      },
      {
        name: "Decoración Elaborada",
        description: "Decoración artística elaborada por uña para diseños únicos y personalizados.",
        price: "1€/uña",
        duration: "5 min"
      },
      {
        name: "Esmaltado Semipermanente Francesa",
        description: "Esmaltado semipermanente con diseño francés clásico y elegante de larga duración.",
        price: "35€",
        duration: "105 min"
      },
      {
        name: "Retirar Semipermanente",
        description: "Retirada profesional del esmalte semipermanente sin dañar la uña natural.",
        price: "10€",
        duration: "20 min"
      },
      {
        name: "Retirar Acrygel",
        description: "Retirada profesional del acrílico y gel sin dañar la uña natural.",
        price: "12€",
        duration: "30 min"
      },
      {
        name: "Retirar + Limar Semipermanente",
        description: "Retirada y limado profesional del esmalte semipermanente para preparar las uñas.",
        price: "14€",
        duration: "30 min"
      },
      {
        name: "Retirar + Limar Acr+gel",
        description: "Retirada y limado profesional del acrílico y gel para preparar las uñas para un nuevo tratamiento.",
        price: "16€",
        duration: "35 min"
      }
    ]
  },
  {
    category: "Pedicura",
    image: pedicuraImage,
    treatments: [
      {
        name: "Pedicura Básica",
        description: "Cuidado básico de pies y uñas con limpieza, limado y esmaltado tradicional.",
        price: "25€",
        duration: "40 min"
      },
      {
        name: "Pedicura Talones Secos",
        description: "Tratamiento especializado para talones secos con limpieza con torno, exfoliación e hidratación profunda.",
        price: "30€",
        duration: "50 min"
      },
      {
        name: "Pedicura Completa",
        description: "Tratamiento completo de pedicura con limpieza con torno, exfoliación, hidratación y esmaltado semipermanente.",
        price: "40€",
        duration: "120 min"
      }
    ]
  },
  {
    category: "Tatuaje",
    image: tatuajeImage,
    treatments: [
      {
        name: "Consulta previa tatuaje",
        description: "Consulta gratuita previa para diseñar y planificar tu tatuaje personalizado con nuestros profesionales.",
        price: "Gratis",
        duration: "10 min"
      }
    ]
  },
  {
    category: "Cejas",
    image: cejasImage,
    treatments: [
      {
        name: "Diseño de cejas + tinte",
        description: "Diseño profesional de cejas con tinte para definir y oscurecer el color natural de las cejas.",
        price: "20€",
        duration: "30 min"
      },
      {
        name: "Diseño de cejas + depilación",
        description: "Diseño y depilación profesional de cejas para conseguir la forma perfecta y definir el arco.",
        price: "10€",
        duration: "15 min"
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