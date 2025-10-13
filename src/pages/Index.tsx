import { Navigation } from "@/components/Navigation";
import { Promotions } from "@/components/Promotions";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Promotions />
        <Services />
        <About />
        
        <Footer />
      </main>
    </>
  );
};

export default Index;