import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <About />
        
        <footer className="bg-foreground text-background py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm opacity-80">
              © 2025 Zenith Clinic. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Index;