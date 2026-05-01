import { useLenis } from './hooks/useLenis';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import ParaVoce from './sections/ParaVoce';
import MorphDivider from './sections/MorphDivider';
import ParaSuaFamilia from './sections/ParaSuaFamilia';
import ParaColegas from './sections/ParaColegas';
import About from './sections/About';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import FloatingCTA from './sections/FloatingCTA';

function App() {
  const lenisRef = useLenis();

  return (
    <>
      <Navigation lenisRef={lenisRef} />
      <Hero />
      <ParaVoce />
      <MorphDivider text="Autoconhecimento" bgImage="/images/morph-bg-1.jpg" variant={1} />
      <ParaSuaFamilia />
      <MorphDivider text="Transformação" bgImage="/images/morph-bg-2.jpg" variant={2} />
      <ParaColegas />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;
