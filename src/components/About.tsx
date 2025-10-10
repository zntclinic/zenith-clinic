export const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Experience Luxury Beauty
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Luxe Beauty Studio, we believe that beauty is more than skin deep. It's about feeling confident, radiant, and empowered in your own skin.
              </p>
              <p>
                Our team of expert aestheticians and beauty professionals are dedicated to providing you with personalized treatments using the finest products and latest techniques in the industry.
              </p>
              <p>
                Step into our serene sanctuary and let us help you discover your most beautiful self.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-primary mb-2">5K+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="font-playfair text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Services</div>
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