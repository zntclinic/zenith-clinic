import masajeImage from "@/assets/masaje.jpg";
import facialesImage from "@/assets/faciales.jpg";

const serviceCategories = [
  {
    category: "Masajes",
    image: masajeImage,
    treatments: [
      "Masaje Relajante Albaricoque",
      "Masaje Relajante Almendra",
      "Masaje Relajante Uva",
      "Masaje Parcial Pies",
      "Masaje Parcial Cráneo-Cervical"
    ]
  },
  {
    category: "Faciales",
    image: facialesImage,
    treatments: [
      "Limpieza Facial Profunda",
      "Hidrafacial",
      "Peeling Químico",
      "Radiofrecuencia Facial"
    ]
  },
  {
    category: "Micropigmentación",
    image: null,
    treatments: [
      "Cejas Pelo a Pelo",
      "Delineado de Ojos",
      "Perfilado de Labios"
    ]
  },
  {
    category: "Pestañas",
    image: null,
    treatments: [
      "Extensiones de Pestañas",
      "Lifting de Pestañas",
      "Tinte de Pestañas"
    ]
  },
  {
    category: "Manicura",
    image: null,
    treatments: [
      "Manicura Clásica",
      "Manicura Semipermanente",
      "Nail Art"
    ]
  },
  {
    category: "Pedicura",
    image: null,
    treatments: [
      "Pedicura Clásica",
      "Pedicura Spa",
      "Tratamiento de Callos"
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
                    className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100"
                  >
                    {/* Treatment image */}
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={treatment}
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

                    {/* Overlay with treatment title */}
                    <div className="absolute inset-0 bg-black/40 flex items-end">
                      <div className="p-6 w-full">
                        <h4 className="text-white font-semibold text-lg leading-tight">
                          {treatment}
                        </h4>
                      </div>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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