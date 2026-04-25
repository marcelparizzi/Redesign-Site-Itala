import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Users, GraduationCap, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: <Users size={24} />,
    title: 'Para quem é',
    text: 'Estudantes de psicologia em formação, psicólogos recém-formados e profissionais experientes que buscam aprimorar seu exercício clínico.',
  },
  {
    icon: <GraduationCap size={24} />,
    title: 'Conteúdo',
    text: 'Discussão de casos clínicos, fundamentação teórica em psicanálise, ética profissional e desenvolvimento da escuta analítica.',
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Formato',
    text: 'Encontros individuais ou em grupo, com frequência e duração combinadas conforme a necessidade de cada supervisão.',
  },
  {
    icon: <MessageCircle size={24} />,
    title: 'Abordagem',
    text: 'Pautada na tradição psicanalítica freudiana e em contribuições contemporâneas, respeitando a singularidade de cada trajetória.',
  },
];

export default function Supervision() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.sup-animate');

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
      id="supervisao"
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'center',
        }}
      >
        {/* Left Column - Image */}
        <div className="sup-animate">
          <div style={{ borderRadius: 4, overflow: 'hidden' }}>
            <img
              src="/images/supervision.jpg"
              alt="Espaço de supervisão clínica"
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

        {/* Right Column - Content */}
        <div>
          {/* Section Label */}
          <p
            className="sup-animate"
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
            SUPERVISÃO
          </p>

          {/* Title */}
          <h2
            className="sup-animate"
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
            Supervisão para prática clínica
          </h2>

          {/* Description */}
          <p
            className="sup-animate"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.875rem, 1vw, 1rem)',
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'var(--color-earth-clay)',
              marginBottom: 40,
            }}
          >
            Ofereço supervisão clínica para estudantes e profissionais da área da psicologia,
            com o objetivo de contribuir para a formação e o aprimoramento do exercício clínico.
            Um espaço de reflexão conjunta sobre a prática psicanalítica, pautado no respeito
            à singularidade de cada trajetória profissional.
          </p>

          {/* Highlight Cards */}
          <div
            className="sup-animate"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 24,
            }}
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: '24px 20px',
                  borderRadius: 4,
                  border: '1px solid rgba(184, 149, 106, 0.25)',
                  backgroundColor: 'rgba(184, 149, 106, 0.04)',
                }}
              >
                <div
                  style={{
                    color: 'var(--color-golden-oak)',
                    marginBottom: 10,
                  }}
                >
                  {item.icon}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    color: 'var(--color-dark-void)',
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
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

          {/* CTA */}
          <div
            className="sup-animate"
            style={{ marginTop: 36 }}
          >
            <a
              href="#contato"
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--color-golden-oak)',
                color: 'var(--color-warm-cream)',
                padding: '14px 36px',
                borderRadius: 2,
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'var(--color-dark-void)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'var(--color-golden-oak)';
              }}
            >
              Entre em contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
