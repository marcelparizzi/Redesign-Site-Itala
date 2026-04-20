import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ChildrenSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.child-animate');

    gsap.fromTo(
      elements,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
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
      style={{
        width: '100%',
        backgroundColor: 'var(--color-warm-cream)',
        padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 64,
          alignItems: 'center',
        }}
      >
        {/* Left — Image */}
        <div className="child-animate">
          <div
            style={{
              borderRadius: 8,
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src="/images/children-section.jpg"
              alt="Espaço terapêutico para crianças com materiais lúdicos, desenhos e brinquedos"
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '16/10',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* Right — Content */}
        <div>
          <p
            className="child-animate"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: 'var(--color-golden-oak)',
              textTransform: 'uppercase',
              lineHeight: 1.4,
              marginBottom: 24,
            }}
          >
            ESPAÇO INFANTIL
          </p>

          <h2
            className="child-animate"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              color: 'var(--color-dark-void)',
              marginBottom: 24,
            }}
          >
            Uma escuta especial para os pequenos
          </h2>

          <p
            className="child-animate"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.875rem, 1vw, 1rem)',
              fontWeight: 400,
              lineHeight: 1.65,
              letterSpacing: '0.01em',
              color: 'var(--color-earth-clay)',
              marginBottom: 20,
            }}
          >
            O atendimento psicanalítico com crianças acontece de forma diferenciada. Através do
            brincar, dos desenhos, das histórias e dos jogos, a criança expressa suas angústias,
            medos e desejos enquanto constrói um vínculo de confiança com o terapeuta.
          </p>

          <p
            className="child-animate"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.875rem, 1vw, 1rem)',
              fontWeight: 400,
              lineHeight: 1.65,
              letterSpacing: '0.01em',
              color: 'var(--color-earth-clay)',
              marginBottom: 32,
            }}
          >
            Com 14 anos de experiência no atendimento à infância — incluindo trabalho dentro de
            escolas — o consultório conta com uma sala exclusiva e acolhedora para receber as
            crianças, oferecendo um ambiente seguro onde elas se sentem à vontade para se expressar.
            O acompanhamento dos pais é parte integrante do processo.
          </p>

          {/* Little highlights */}
          <div
            className="child-animate"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px 32px',
            }}
          >
            {['Brincar terapêutico', 'Desenhos e expressão', 'Acolhimento familiar', 'Acompanhamento dos pais'].map(
              (item, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    color: 'var(--color-golden-oak)',
                    backgroundColor: 'rgba(184, 149, 106, 0.1)',
                    padding: '8px 16px',
                    borderRadius: 20,
                    border: '1px solid rgba(184, 149, 106, 0.2)',
                  }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
