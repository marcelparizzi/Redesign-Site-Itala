import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const content = section.querySelector('.contact-content');

    if (content) {
      gsap.fromTo(
        content,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
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
      id="contato"
      style={{
        width: '100%',
        backgroundColor: 'var(--color-warm-cream)',
        padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div
        className="contact-content"
        style={{
          maxWidth: 800,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
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
          CONTATO
        </p>

        {/* Headline */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 4vw, 2.75rem)',
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: 'var(--color-dark-void)',
            marginTop: 32,
          }}
        >
          Inicie um processo
        </h2>

        {/* Body */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.875rem, 1vw, 1rem)',
            fontWeight: 400,
            lineHeight: 1.65,
            letterSpacing: '0.01em',
            color: 'var(--color-earth-clay)',
            marginTop: 24,
            maxWidth: 560,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          O primeiro passo é entrar em contato. Podemos agendar uma conversa inicial para avaliar
          se a psicanálise é indicada para você neste momento.
        </p>

        {/* Contact Info */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 48,
            marginTop: 48,
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <Phone size={20} style={{ color: 'var(--color-golden-oak)', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                fontWeight: 400,
                color: 'var(--color-dark-void)',
              }}
            >
              (51) 99922-3888
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <Mail size={20} style={{ color: 'var(--color-golden-oak)', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                fontWeight: 400,
                color: 'var(--color-dark-void)',
              }}
            >
              contato@italachinazzo.com.br
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <MapPin size={20} style={{ color: 'var(--color-golden-oak)', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1vw, 1rem)',
                fontWeight: 400,
                color: 'var(--color-dark-void)',
              }}
            >
              Rua Luciana de Abreu, 471 — Porto Alegre/RS
            </span>
          </div>
        </div>

        {/* CTA Button */}
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
            marginTop: 48,
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = 'var(--color-dark-void)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = 'var(--color-golden-oak)';
          }}
        >
          Agendar uma consulta
        </a>
      </div>
    </section>
  );
}
