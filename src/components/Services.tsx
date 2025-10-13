import { serviceCategories } from "@/data/servicesData";
import { businessInfo } from "@/data/businessInfo";

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
                          window.open(businessInfo.booking.booksySimple, '_blank');
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