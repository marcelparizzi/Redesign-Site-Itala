import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParaQuemE() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.pqe-animate');
    gsap.fromTo(
      elements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="abordagem"
      style={{
        width: '100%',
        backgroundColor: 'var(--color-warm-cream)',
        padding: 'clamp(80px, 12vh, 140px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <p
          className="pqe-animate"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: 'var(--color-golden-oak)',
            textTransform: 'uppercase',
            lineHeight: 1.4,
            marginBottom: 32,
          }}
        >
          ABORDAGEM
        </p>

        <h2
          className="pqe-animate"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 400,
            lineHeight: 1.25,
            letterSpacing: '-0.01em',
            color: 'var(--color-dark-void)',
            marginBottom: 28,
            maxWidth: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Um espaço de escuta para quem busca se conhecer
        </h2>

        <p
          className="pqe-animate"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.9rem, 1.1vw, 1.05rem)',
            fontWeight: 400,
            lineHeight: 1.7,
            color: 'var(--color-earth-clay)',
            maxWidth: 620,
            margin: '0 auto',
          }}
        >
          A psicanálise trabalha através da fala livre — você expressa seus pensamentos,
          sentimentos e desejos enquanto eu escuto e intervijo para promover o acesso
          a mecanismos inconscientes. Um processo marcado pela ética, confiança e respeito
          à sua singularidade.
        </p>
      </div>
    </section>
  );
}
