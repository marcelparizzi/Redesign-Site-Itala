import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: 'O processo terapêutico com a Ítala mudou minha forma de me relacionar comigo mesma e com as pessoas ao meu redor. Encontrei um espaço seguro para falar sobre o que nunca havia compartilhado.',
    initials: 'A.C.',
    detail: 'Atendimento adulto',
  },
  {
    quote: 'Minha filha começou o atendimento aos 8 anos e a transformação foi gradual e profunda. A Ítala soube criar um vínculo de confiança que fez toda a diferença no desenvolvimento dela.',
    initials: 'M.R.',
    detail: 'Mãe de paciente infantil',
  },
  {
    quote: 'A supervisão com a Ítala foi fundamental para minha formação como psicóloga. A escuta clínica, a fundamentação teórica e a ética do trabalho me deram segurança para atender meus próprios pacientes.',
    initials: 'L.S.',
    detail: 'Supervisão profissional',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.test-animate');
    gsap.fromTo(
      elements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
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
      id="depoimentos"
      style={{
        width: '100%',
        backgroundColor: 'var(--color-deep-umber)',
        padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p
            className="test-animate"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: 'var(--color-golden-oak)',
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            DEPOIMENTOS
          </p>
          <h2
            className="test-animate"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              color: 'var(--color-warm-cream)',
              maxWidth: 600,
              margin: '0 auto',
            }}
          >
            O que dizem quem passou por aqui
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 32,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="test-animate"
              style={{
                padding: '40px 32px',
                backgroundColor: 'rgba(245, 240, 230, 0.04)',
                borderRadius: 4,
                border: '1px solid rgba(184, 149, 106, 0.12)',
                position: 'relative',
              }}
            >
              <div style={{ color: 'var(--color-golden-oak)', marginBottom: 20, opacity: 0.5 }}>
                <Quote size={24} />
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  lineHeight: 1.55,
                  color: 'rgba(245, 240, 230, 0.9)',
                  marginBottom: 24,
                }}
              >
                "{t.quote}"
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(184, 149, 106, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'var(--color-golden-oak)',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: 'var(--color-warm-cream)',
                    }}
                  >
                    {t.initials}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      color: 'var(--color-earth-clay)',
                    }}
                  >
                    {t.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
