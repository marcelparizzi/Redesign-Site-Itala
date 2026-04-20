import { useLenis } from './hooks/useLenis';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Approach from './sections/Approach';
import MorphDivider from './sections/MorphDivider';
import Indications from './sections/Indications';
import ChildrenSection from './sections/ChildrenSection';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const lenisRef = useLenis();

  return (
    <div>
      <Navigation lenisRef={lenisRef} />
      <Hero />
      <Approach />
      <MorphDivider text="Autoconhecimento" bgImage="/images/morph-bg-1.jpg" variant={1} />
      <Indications />
      <ChildrenSection />
      <MorphDivider text="Transformação" bgImage="/images/morph-bg-2.jpg" variant={2} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
