import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { serviceCategories } from "@/data/servicesData";
import { businessInfo } from "@/data/businessInfo";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Services = () => {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);
  const { getItemProps, isVisible } = useScrollReveal({
    threshold: 0.2,
    rootMargin: "0px 0px -10% 0px",
    triggerOnce: true,
  });

  const toggleCategory = (index: number) => {
    setExpandedCategories((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="servicios" className="pt-12 pb-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {serviceCategories.map((category, categoryIndex) => {
            const isExpanded = expandedCategories.includes(categoryIndex);

            const isItemVisible = isVisible(categoryIndex) || isExpanded;
            return (
              <div
                key={categoryIndex}
                {...getItemProps(categoryIndex)}
                className={`${isExpanded ? "md:col-span-2 lg:col-span-3" : ""
                  } transition-all duration-700 ${isItemVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
              >
                {!isExpanded ? (
                  /* Category Tile - Only shown when collapsed */
                  <div
                    onClick={() => toggleCategory(categoryIndex)}
                    className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Category image */}
                    {category.image ? (
                      <img
                        src={category.image}
                        alt={category.category}
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

                    {/* Overlay with category name */}
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-300 group-hover:bg-black/40">
                      <div className="text-center">
                        <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-2">
                          {category.category}
                        </h3>
                        <div className="flex items-center justify-center text-white/90">
                          <span className="text-sm font-medium mr-2">Ver tratamientos</span>
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Category Header - Only shown when expanded */
                  <div className="mb-6">
                    <div
                      onClick={() => toggleCategory(categoryIndex)}
                      className="flex items-center justify-between cursor-pointer group"
                    >
                      <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
                        {category.category}
                      </h3>
                      <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="text-sm font-medium mr-2">Ver menos</span>
                        <ChevronUp className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Expanded Treatment Grid */}
                {isExpanded && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
                    {category.treatments.map((treatment, treatmentIndex) => (
                      <div
                        key={treatmentIndex}
                        className="relative group overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 cursor-pointer"
                      >
                        {/* Treatment image - always visible */}
                        {category.image ? (
                          <img
                            src={treatment.image || category.image}
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
                          <h4 className="text-xl font-medium text-foreground mb-3">
                            {treatment.name}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {treatment.description}
                          </p>
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-2xl font-medium text-secondary">
                              {treatment.price}
                            </div>
                            {treatment.duration && (
                              <div className="text-sm font-medium text-muted-foreground">
                                {treatment.duration}
                              </div>
                            )}
                          </div>
                          <button
                            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(businessInfo.booking.booksySimple, "_blank");
                            }}
                          >
                            Reservar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
