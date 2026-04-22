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
            A PROFISSIONAL
          </p>

          {/* Name */}
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

          {/* CRP */}
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

          {/* Bio Content */}
          <div
            style={{
              marginTop: 40,
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
            }}
          >
            {/* Formation */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  color: 'var(--color-golden-oak)',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}
              >
                Formação
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: 'rgba(245, 240, 230, 0.85)',
                }}
              >
                Sou psicóloga graduada desde 2012, com formação em Psicanálise pelo Centro de Estudos Psicanalíticos de Porto Alegre (CEPdePA). Possuo mestrado em Psicologia pela PUCRS e doutorado em Psiquiatria e Ciências do Comportamento pela UFRGS.
              </p>
            </div>

            {/* Clinical Practice */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  color: 'var(--color-golden-oak)',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}
              >
                Atuação Clínica
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: 'rgba(245, 240, 230, 0.85)',
                }}
              >
                Atuo com psicoterapia psicanalítica individual para crianças, adolescentes e adultos, oferecendo um espaço de escuta qualificada, pautado na tradição freudiana e nas contribuições contemporâneas da psicanálise. Meu trabalho é orientado pelo compromisso ético e pelo respeito à singularidade de cada sujeito.
              </p>
            </div>

            {/* Supervision */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  color: 'var(--color-golden-oak)',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}
              >
                Supervisão
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: 'rgba(245, 240, 230, 0.85)',
                }}
              >
                Além da prática clínica, ofereço supervisão para estudantes e profissionais da área, contribuindo para a formação e o aprimoramento do exercício clínico.
              </p>
            </div>

            {/* Experience */}
            <div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  color: 'var(--color-golden-oak)',
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}
              >
                Experiência
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                  fontWeight: 400,
                  lineHeight: 1.7,
                  color: 'rgba(245, 240, 230, 0.85)',
                }}
              >
                Tenho ampla experiência em consultório particular, bem como atuação em contexto escolar, desenvolvendo trabalhos com estudantes, formação de professores e orientação a famílias sobre desenvolvimento e comportamento infantil. Atuei também como pesquisadora colaboradora no Hospital de Clínicas de Porto Alegre (HCPA), com foco em estudos sobre dissidência de gênero, e integrei o Serviço de Psicanálise da Infância e Adolescência do CEPdePA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}