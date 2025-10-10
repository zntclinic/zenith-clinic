export const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Belleza de Lujo
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                En Zenith Clinic, creemos que la belleza va más allá de la piel. Se trata de sentirse segura, radiante y empoderada.
              </p>
              <p>
                Nuestro equipo de expertos esteticistas y profesionales de la belleza se dedica a brindarte tratamientos personalizados utilizando los mejores productos y las técnicas más avanzadas de la industria.
              </p>
              <p>
                Entra en nuestro santuario sereno y déjanos ayudarte a descubrir tu yo más hermoso.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-primary mb-2">5K+</div>
                <div className="text-sm text-muted-foreground">Clientas Felices</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Servicios</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-hero border-2 border-primary/20 shadow-elegant" />
          </div>
        </div>
      </div>
    </section>
  );
};