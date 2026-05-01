import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Brain, Users, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const topics = [
  {
    icon: <Brain size={22} />,
    title: 'Ansiedade e estresse',
    text: 'Sintomas de ansiedade generalizada, crises de pânico, estresse crônico e burnout. A psicanálise ajuda a compreender as raízes inconscientes desses sintomas.',
  },
  {
    icon: <Heart size={22} />,
    title: 'Relacionamentos',
    text: 'Dificuldades nos vínculos amorosos, familiares e sociais. A análise explora padrões repetitivos de relacionamento e seus fundamentos na história pessoal.',
  },
  {
    icon: <Sparkles size={22} />,
    title: 'Autoconhecimento',
    text: 'Busca de compreensão mais profunda de si mesmo, de seus desejos, medos e potencialidades. O processo analítico é uma via de desenvolvimento pessoal.',
  },
  {
    icon: <Users size={22} />,
    title: 'Humor e tristeza',
    text: 'Estados de humor persistentemente baixo, tristeza crônica, sensação de vazio e falta de sentido. A análise investiga o significado subjacente ao sofrimento.',
  },
];

export default function ParaVoce() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.pv-animate');
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
      id="para-voce"
      style={{
        width: '100%',
        backgroundColor: 'var(--color-pale-sand)',
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
        {/* Left — Image */}
        <div className="pv-animate">
          <div style={{ borderRadius: 4, overflow: 'hidden' }}>
            <img
              src="/images/para-voce.jpg"
              alt="Espaço de escuta para você"
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
            className="pv-animate"
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
            PARA VOCÊ
          </p>

          <h2
            className="pv-animate"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '-0.01em',
              color: 'var(--color-dark-void)',
              marginBottom: 20,
            }}
          >
            Um espaço para você ser ouvido
          </h2>

          <p
            className="pv-animate"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.875rem, 1vw, 1rem)',
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'var(--color-earth-clay)',
              marginBottom: 36,
            }}
          >
            Atendo adolescentes e adultos em psicoterapia psicanalítica individual.
            O trabalho é pautado na tradição freudiana e nas contribuições contemporâneas,
            com escuta qualificada e respeito à singularidade de cada sujeito.
          </p>

          {/* Topics */}
          <div
            className="pv-animate"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 20,
            }}
          >
            {topics.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '20px 16px',
                  borderRadius: 4,
                  border: '1px solid rgba(184, 149, 106, 0.25)',
                  backgroundColor: 'rgba(184, 149, 106, 0.04)',
                }}
              >
                <div style={{ color: 'var(--color-golden-oak)', marginBottom: 8 }}>
                  {item.icon}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    color: 'var(--color-dark-void)',
                    marginBottom: 4,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 400,
                    lineHeight: 1.6,
                    color: 'var(--color-earth-clay)',
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
