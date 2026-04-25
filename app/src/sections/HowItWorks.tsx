import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MessageSquare, Sprout } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    icon: <Calendar size={28} />,
    title: 'Primeiro contato',
    text: 'Envie uma mensagem pelo WhatsApp ou e-mail. Responderei em até 24h para conversarmos sobre o que te trouxe até aqui.',
  },
  {
    number: '02',
    icon: <MessageSquare size={28} />,
    title: 'Conversa inicial',
    text: 'Agendamos uma primeira conversa para conhecermos melhor um ao outro, entender suas necessidades e avaliar como posso ajudar.',
  },
  {
    number: '03',
    icon: <Sprout size={28} />,
    title: 'Início do processo',
    text: 'Caso haja interesse mútuo, iniciamos o trabalho terapêutico. O processo é construído semanalmente, no seu ritmo.',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.hiw-animate');
    gsap.fromTo(
      elements,
      { y: 40, opacity: 0 },
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
      id="como-funciona"
      style={{
        width: '100%',
        backgroundColor: 'var(--color-pale-sand)',
        padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <p
            className="hiw-animate"
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
            COMO FUNCIONA
          </p>
          <h2
            className="hiw-animate"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 400,
              lineHeight: 1.2,
              color: 'var(--color-dark-void)',
              maxWidth: 600,
              margin: '0 auto',
            }}
          >
            Três passos para começar
          </h2>
          <p
            className="hiw-animate"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.875rem, 1vw, 1rem)',
              color: 'var(--color-earth-clay)',
              marginTop: 16,
              maxWidth: 520,
              margin: '16px auto 0',
            }}
          >
            O processo é simples. O primeiro passo é você decidir cuidar de si.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 40,
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="hiw-animate"
              style={{
                textAlign: 'center',
                padding: '40px 24px',
                backgroundColor: 'var(--color-warm-cream)',
                borderRadius: 4,
                border: '1px solid rgba(184, 149, 106, 0.2)',
                position: 'relative',
              }}
            >
              {/* Step number */}
              <span
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 20,
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  color: 'var(--color-golden-oak)',
                  opacity: 0.5,
                }}
              >
                {step.number}
              </span>

              <div style={{ color: 'var(--color-golden-oak)', marginBottom: 20 }}>
                {step.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                  fontWeight: 400,
                  color: 'var(--color-dark-void)',
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.8rem, 0.9vw, 0.9rem)',
                  fontWeight: 400,
                  lineHeight: 1.65,
                  color: 'var(--color-earth-clay)',
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="hiw-animate"
          style={{ textAlign: 'center', marginTop: 48 }}
        >
          <a
            href="https://wa.me/5551999223888"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--color-golden-oak)',
              color: 'var(--color-warm-cream)',
              padding: '16px 40px',
              borderRadius: 2,
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
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
            Agendar primeiro contato
          </a>
        </div>
      </div>
    </section>
  );
}
