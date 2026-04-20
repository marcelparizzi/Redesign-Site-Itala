import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const leftCol = section.querySelector('.about-left');
    const rightCol = section.querySelector('.about-right');

    if (leftCol) {
      gsap.fromTo(
        leftCol,
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (rightCol) {
      gsap.fromTo(
        rightCol,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="profissional"
      style={{
        width: '100%',
        backgroundColor: 'var(--color-deep-umber)',
        padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'center',
        }}
      >
        {/* Left Column - Portrait */}
        <div className="about-left">
          <img
            src="/images/portrait.jpg"
            alt="Ítala Chinazzo - Psicóloga e Psicanalista"
            style={{
              width: '100%',
              maxWidth: 480,
              aspectRatio: '3/4',
              objectFit: 'cover',
              borderRadius: 4,
            }}
          />
        </div>

        {/* Right Column - Bio */}
        <div className="about-right">
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: 'var(--color-golden-oak)',
              textTransform: 'uppercase',
              lineHeight: 1.4,
            }}
          >
            A PROFISSIONAL
          </p>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--color-warm-cream)',
              marginTop: 24,
            }}
          >
            Dra. Ítala Chinazzo
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: 'var(--color-earth-clay)',
              marginTop: 8,
            }}
          >
            Psicóloga — CRP 07/21722
          </p>

          <div
            style={{
              marginTop: 32,
              maxWidth: 520,
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                fontWeight: 400,
                lineHeight: 1.65,
                letterSpacing: '0.01em',
                color: 'rgba(245, 240, 230, 0.85)',
                marginBottom: 20,
              }}
            >
              Psicóloga graduada em 2012, com formação em psicanálise pelo Centro de Estudos
              Psicanalíticos de Porto Alegre (CEPdePA). Doutora em Psiquiatria e Ciência do
              Comportamento pela UFRGS e mestre em Psicologia pela PUCRS. Pesquisadora colaboradora
              do Hospital de Clínicas de Porto Alegre (HCPA) e membro do Serviço de Psicanálise da
              Infância e Adolescência do CEPdePA.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                fontWeight: 400,
                lineHeight: 1.65,
                letterSpacing: '0.01em',
                color: 'rgba(245, 240, 230, 0.85)',
              }}
            >
              Atende crianças, adolescentes e adultos em psicoterapia psicanalítica individual,
              oferecendo um espaço de escuta clínica fundamentado na tradição freudiana
              e contemporânea.<br/>
              Conta com 14 anos de experiência clínica com crianças e doutorado em
              psiquiatria e ciência do comportamento, com enface na dicidencia de genero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
