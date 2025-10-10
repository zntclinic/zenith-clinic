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
        price: "45€"
      },
      {
        name: "Masaje Relajante Almendra",
        description: "Tratamiento relajante con aceite de almendras dulces que nutre e hidrata la piel.",
        price: "45€"
      },
      {
        name: "Masaje Relajante Uva",
        description: "Masaje antioxidante con extractos de uva que revitaliza y rejuvenece la piel.",
        price: "45€"
      },
      {
        name: "Masaje Parcial Pies",
        description: "Tratamiento específico para relajar y descansar los pies después de un día intenso.",
        price: "25€"
      },
      {
        name: "Masaje Parcial Cráneo-Cervical",
        description: "Masaje especializado para aliviar tensiones en cuello, hombros y cuero cabelludo.",
        price: "30€"
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
        price: "60€"
      },
      {
        name: "Hidrafacial",
        description: "Tratamiento avanzado que limpia, exfolia e hidrata la piel en profundidad.",
        price: "80€"
      },
      {
        name: "Peeling Químico",
        description: "Exfoliación química que renueva la piel y mejora su textura y luminosidad.",
        price: "70€"
      },
      {
        name: "Radiofrecuencia Facial",
        description: "Tratamiento anti-edad que estimula el colágeno y reafirma la piel del rostro.",
        price: "90€"
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
        price: "200€"
      },
      {
        name: "Delineado de Ojos",
        description: "Micropigmentación del contorno de ojos para una mirada más definida y expresiva.",
        price: "180€"
      },
      {
        name: "Perfilado de Labios",
        description: "Definición y color permanente de labios para un resultado natural y duradero.",
        price: "220€"
      }
    ]
  },
  {
    category: "Pestañas",
    image: pestanasImage,
    treatments: [
      {
        name: "Extensiones de Pestañas",
        description: "Aplicación de extensiones para conseguir pestañas más largas y voluminosas.",
        price: "50€"
      },
      {
        name: "Lifting de Pestañas",
        description: "Tratamiento que curva y alarga las pestañas naturales de forma duradera.",
        price: "40€"
      },
      {
        name: "Tinte de Pestañas",
        description: "Coloración de pestañas para intensificar la mirada de forma natural.",
        price: "20€"
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
        price: "25€"
      },
      {
        name: "Manicura Semipermanente",
        description: "Manicura con esmalte de larga duración que mantiene el brillo hasta 3 semanas.",
        price: "35€"
      },
      {
        name: "Nail Art",
        description: "Diseños artísticos personalizados en uñas para un look único y creativo.",
        price: "45€"
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
        price: "30€"
      },
      {
        name: "Pedicura Spa",
        description: "Tratamiento relajante de pies con masaje y productos premium.",
        price: "45€"
      },
      {
        name: "Tratamiento de Callos",
        description: "Eliminación profesional de callos y durezas para pies suaves.",
        price: "25€"
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
                      <div className="text-2xl font-bold text-primary">
                        {treatment.price}
                      </div>
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