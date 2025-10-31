interface Promotion {
  title: string;
  description: string;
  duration: string;
}

export const Promotions = () => {
  // You can easily update these promotions
  const promotions: Promotion[] = [
    {
      title: "Promo de Lanzamiento",
      description: "1 mini tattoo por **60€**\n2 mini tattoos por ~~120€~~ **100€**\n3 Mini Tattoos por ~~180€~~ **130€**",
      duration: "6-7 Noviembre"
    },
    {
      title: "Promo Especial en Depilación Láser",
      description: "Disfruta de una piel suave todo el año con nuestro bono de **3 sesiones** y obtén un **20% de descuento**.",
      duration: "Promoción permanente"
    }
  ];

  return (
    <section className="py-16 bg-primary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-medium text-center text-foreground mb-12 drop-shadow-sm">
          Promociones Actuales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-secondary/40 hover:border-secondary/60 hover:scale-105 backdrop-blur-sm"
            >
              <div className="flex flex-col h-full">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-medium text-secondary mb-2">
                    {promo.title}
                  </h3>
                  <span className="bg-secondary/10 text-secondary text-sm font-semibold px-3 py-1 rounded-full">
                    {promo.duration}
                  </span>
                </div>
                <div
                  className="text-black text-lg leading-relaxed flex-grow"
                  dangerouslySetInnerHTML={{
                    __html: promo.description
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
                      .replace(/~~(.*?)~~/g, '<del class="text-muted-foreground/70">$1</del>')
                      .replace(/---/g, '<hr class="border-gray-200 my-3">')
                      .replace(/\n/g, '<br>')
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
