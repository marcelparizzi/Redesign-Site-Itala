import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Baby, GraduationCap, Users, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const topics = [
  {
    icon: <Baby size={22} />,
    title: 'Crianças e adolescentes',
    text: '14 anos de experiência no atendimento à infância, incluindo trabalho dentro de escolas e atendimento individual em consultório com sala exclusiva para crianças. O lúdico é ferramenta essencial de acesso ao inconsciente infantil.',
  },
  {
    icon: <Users size={22} />,
    title: 'Orientação aos pais',
    text: 'Acompanhamento e orientação para pais e cuidadores que buscam compreender melhor o desenvolvimento emocional de seus filhos e fortalecer os vínculos familiares.',
  },
  {
    icon: <GraduationCap size={22} />,
    title: 'Atuação em escolas',
    text: 'Desenvolvimento de trabalhos com estudantes, formação de professores e orientação sobre desenvolvimento e comportamento infantil a famílias.',
  },
  {
    icon: <Heart size={22} />,
    title: 'Luto e perdas',
    text: 'Processamento de perdas significativas — de pessoas, projetos, identidades. A psicanálise oferece espaço para o lento trabalho de elaboração do luto.',
  },
];

export default function ParaSuaFamilia() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.psf-animate');
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
      id="para-sua-familia"
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
        {/* Left — Content */}
        <div>
          <p
            className="psf-animate"
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
            PARA SUA FAMÍLIA
          </p>

          <h2
            className="psf-animate"
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
            Acolhimento para quem você ama
          </h2>

          <p
            className="psf-animate"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.875rem, 1vw, 1rem)',
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'var(--color-earth-clay)',
              marginBottom: 36,
            }}
          >
            O atendimento com crianças e adolescentes acontece de forma diferenciada.
            Através do brincar, dos desenhos e dos jogos, a criança expressa suas angústias
            enquanto constrói um vínculo de confiança. O consultório conta com uma sala
            exclusiva e acolhedora para receber os pequenos. O acompanhamento dos pais
            é parte integrante do processo.
          </p>

          {/* Topics */}
          <div
            className="psf-animate"
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

        {/* Right — Image */}
        <div className="psf-animate">
          <div style={{ borderRadius: 4, overflow: 'hidden' }}>
            <img
              src="/images/children-section.jpg"
              alt="Espaço terapêutico para crianças e famílias"
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
      </div>
    </section>
  );
}
