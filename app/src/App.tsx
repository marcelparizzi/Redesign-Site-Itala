import { useLenis } from './hooks/useLenis';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import ParaQuemE from './sections/ParaQuemE';
import MorphDivider from './sections/MorphDivider';
import Indications from './sections/Indications';
import ChildrenSection from './sections/ChildrenSection';
import HowItWorks from './sections/HowItWorks';
import About from './sections/About';
import Supervision from './sections/Supervision';
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
      <ParaQuemE />
      <MorphDivider text="Autoconhecimento" bgImage="/images/morph-bg-1.jpg" variant={1} />
      <Indications />
      <ChildrenSection />
      <MorphDivider text="Transformação" bgImage="/images/morph-bg-2.jpg" variant={2} />
      <HowItWorks />
      <About />
      <Supervision />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;
