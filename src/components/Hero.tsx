import { Button } from "@/components/ui/button";
import { Sparkles, Play } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/ZC.jpeg";

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {!isPlaying ? (
        <>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Experiencia de Belleza Premium</span>
              </div>

              <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-foreground leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                Zenith Clinic
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
                Donde la elegancia se encuentra con la experiencia. Tratamientos transformadores de belleza en nuestro santuario de lujo diseñado para tu bienestar completo.
              </p>

              <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
                <Button
                  variant="elegant"
                  size="lg"
                  className="font-semibold"
                  onClick={() => window.open('https://booksy.com/es-es/rwg/153333_zenith-clinic_medicina-estetica_65288_ourense?hl=es-DE&gei=tQHpaP6hB66oxc8P4srX0Qo&rwg_token=ACgRB3e5lvnMzzILBD_P9qgArcYnzOFL65huPYfWsJVgsq5hSxu_StI2RxM6me9s3CH23uA8drCaHINN9CZ0wZz01s1RZi3Q8Q%3D%3D', '_blank')}
                >
                  Reservar Cita
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="font-semibold gap-2"
                  onClick={handlePlayVideo}
                >
                  <Play size={20} />
                  Ver Video
                </Button>
              </div>
            </div>
          </div>

          {/* Play button overlay center */}
          <button
            onClick={handlePlayVideo}
            className="absolute inset-0 z-20 flex items-center justify-center group"
            aria-label="Reproducir video"
          >
            <div className="bg-background/90 hover:bg-background rounded-full p-8 transition-all duration-300 group-hover:scale-110 shadow-elegant">
              <Play size={48} className="text-primary" fill="currentColor" />
            </div>
          </button>
        </>
      ) : (
        <div className="absolute inset-0 z-30 bg-background">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Zenith Clinic Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </section>
  );
};