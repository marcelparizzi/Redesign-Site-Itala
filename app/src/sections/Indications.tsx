import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const indications = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 8C18.5 8 14 12.5 14 18C14 23.5 18.5 30 24 38C29.5 30 34 23.5 34 18C34 12.5 29.5 8 24 8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 18C20 15.8 21.8 14 24 14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Ansiedade e Estresse',
    body: 'Sintomas de ansiedade generalizada, crises de pânico, estresse crônico e burnout. A psicanálise ajuda a compreender as raízes inconscientes desses sintomas.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 42C24 42 8 30 8 19C8 13.5 12 9 17 9C20.5 9 23 11 24 13C25 11 27.5 9 31 9C36 9 40 13.5 40 19C40 30 24 42 24 42Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Humor e Tristeza',
    body: 'Estados de humor persistentemente baixo, tristeza crônica, sensação de vazio e falta de sentido. A análise investiga o significado subjacente ao sofrimento.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 40C12 32 17 28 24 28C31 28 36 32 36 40"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path d="M24 22V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Relacionamentos',
    body: 'Dificuldades nos vínculos amorosos, familiares e sociais. A análise explora padrões repetitivos de relacionamento e seus fundamentos na história pessoal.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M16 42V34C16 30 19 27 24 27C29 27 32 30 32 34V42"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 24L16 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M36 24L32 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Autoconhecimento',
    body: 'Busca de compreensão mais profunda de si mesmo, de seus desejos, medos e potencialidades. O processo analítico é uma via de desenvolvimento pessoal.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M16 42V34C16 30 19 27 24 27C29 27 32 30 32 34V42"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="12" r="2" fill="currentColor" />
        <path
          d="M8 28L12 24L16 28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32 28L36 24L40 28"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: 'Crianças e Adolescentes',
    body: '14 anos de experiência no atendimento à infância, incluindo trabalho dentro de escolas e atendimento individual em consultório com sala exclusiva para crianças. O lúdico é ferramenta essencial de acesso ao inconsciente infantil.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="30" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 38C12 30 16 26 24 26C32 26 36 30 36 38"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 26V22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: 'Orientação aos Pais',
    body: 'Acompanhamento e orientação para pais e cuidadores que buscam compreender melhor o desenvolvimento emocional de seus filhos e fortalecer os vínculos familiares.',
  },
];

export default function Indications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.indication-card');

    gsap.fromTo(
      cards,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
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
      id="indicacoes"
      style={{
        width: '100%',
        backgroundColor: 'var(--color-pale-sand)',
        padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Section Label */}
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
          INDICAÇÕES
        </p>

        {/* Cards Grid — 2 columns, 3 rows */}
        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: 32,
            marginTop: 64,
          }}
        >
          {indications.map((item, index) => (
            <div
              key={index}
              className="indication-card"
              style={{
                backgroundColor: 'var(--color-warm-cream)',
                padding: 'clamp(32px, 4vw, 48px)',
                borderRadius: 4,
                border: '1px solid rgba(184, 149, 106, 0.2)',
              }}
            >
              <div style={{ color: 'var(--color-golden-oak)', marginBottom: 24 }}>
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                  color: 'var(--color-dark-void)',
                  marginBottom: 16,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                  fontWeight: 400,
                  lineHeight: 1.65,
                  letterSpacing: '0.01em',
                  color: 'var(--color-earth-clay)',
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
