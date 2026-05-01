import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Users, GraduationCap, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const topics = [
  {
    icon: <Users size={22} />,
    title: 'Para quem é',
    text: 'Estudantes de psicologia em formação, psicólogos recém-formados e profissionais experientes que buscam aprimorar seu exercício clínico.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Conteúdo',
    text: 'Discussão de casos clínicos, fundamentação teórica em psicanálise, ética profissional e desenvolvimento da escuta analítica.',
  },
  {
    icon: <GraduationCap size={22} />,
    title: 'Formato',
    text: 'Encontros individuais ou em grupo, com frequência e duração combinadas conforme a necessidade de cada supervisão.',
  },
  {
    icon: <MessageCircle size={22} />,
    title: 'Abordagem',
    text: 'Pautada na tradição psicanalítica freudiana e em contribuições contemporâneas, respeitando a singularidade de cada trajetória.',
  },
];

export default function ParaColegas() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.pc-animate');
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
      id="para-colegas"
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
        <div className="pc-animate">
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

        {/* Right — Content */}
        <div>
          <p
            className="pc-animate"
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
            PARA COLEGAS
          </p>

          <h2
            className="pc-animate"
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

          <p
            className="pc-animate"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.875rem, 1vw, 1rem)',
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'var(--color-earth-clay)',
              marginBottom: 36,
            }}
          >
            Ofereço supervisão clínica para estudantes e profissionais da área da psicologia,
            com o objetivo de contribuir para a formação e o aprimoramento do exercício clínico.
            Um espaço de reflexão conjunta sobre a prática psicanalítica, pautado no respeito
            à singularidade de cada trajetória profissional.
          </p>

          {/* Topics */}
          <div
            className="pc-animate"
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
