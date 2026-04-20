import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Approach() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const blocks = section.querySelectorAll('.approach-block');

    gsap.fromTo(
      blocks,
      { y: 40, opacity: 0 },
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
        padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Section Label */}
        <p
          className="approach-block"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: 'var(--color-golden-oak)',
            textTransform: 'uppercase',
            marginBottom: 48,
            lineHeight: 1.4,
          }}
        >
          ABORDAGEM
        </p>

        {/* Block 1 - A Psicanálise */}
        <div className="approach-block" style={{ marginBottom: 64 }}>
          <h2
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
            A Psicanálise
          </h2>
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
            A psicanálise pode ser definida como um conjunto de teorias e técnicas terapêuticas
            que visam compreender o funcionamento da mente humana, dando especial atenção aos
            processos inconscientes que influenciam nossos pensamentos, sentimentos e comportamentos.
            O método psicanalítico trabalha através da fala livre — o paciente é convidado a expressar
            suas histórias, pensamentos, sentimentos e desejos — enquanto o analista escuta e intervém
            para promover o acesso a mecanismos inconscientes.
          </p>
        </div>

        {/* Block 2 - Os Encontros */}
        <div className="approach-block">
          <h2
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
            Os Encontros
          </h2>
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
            Os encontros fazem parte de um processo terapêutico marcado pela ética, confiança e
            respeito. Ambos se comprometem no processo para o crescimento psíquico, a ampliação
            das capacidades mentais e o alívio do sofrimento emocional. O paciente é ativo no
            trabalho terapêutico — sua assiduidade e comprometimento influenciam o andamento do
            tratamento. As sessões acontecem com hora marcada e duração de 45 minutos. A frequência
            e o valor são combinados pela dupla como parte do processo de avaliação.
          </p>
        </div>
      </div>
    </section>
  );
}
