import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

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
        backgroundColor: 'var(--color-pale-sand)',
        padding: 'clamp(80px, 12vh, 160px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div
        className="contact-content"
        style={{
          maxWidth: 900,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        {/* Label */}
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

        {/* Conversion headline */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
            fontWeight: 400,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: 'var(--color-dark-void)',
            marginTop: 24,
            maxWidth: 700,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          O primeiro passo é sempre o mais importante
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
            fontWeight: 400,
            lineHeight: 1.65,
            color: 'var(--color-earth-clay)',
            marginTop: 20,
            maxWidth: 560,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Entre em contato e vamos conversar. Respondo em até 24 horas.
        </p>

        {/* Primary CTA — WhatsApp */}
        <div style={{ marginTop: 40 }}>
          <a
            href="https://wa.me/5551999223888"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              backgroundColor: '#25D366',
              color: '#FFFFFF',
              padding: '18px 40px',
              borderRadius: 4,
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 500,
              letterSpacing: '0.02em',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease, transform 0.2s ease',
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            <MessageCircle size={22} fill="white" />
            Conversar pelo WhatsApp
          </a>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 1,
            backgroundColor: 'var(--color-golden-oak)',
            opacity: 0.4,
            margin: '48px auto',
          }}
        />

        {/* Contact Info */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 48,
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Phone size={18} style={{ color: 'var(--color-golden-oak)', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--color-dark-void)',
              }}
            >
              (51) 99922-3888
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Mail size={18} style={{ color: 'var(--color-golden-oak)', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--color-dark-void)',
              }}
            >
              contato@italachinazzo.com.br
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <MapPin size={18} style={{ color: 'var(--color-golden-oak)', flexShrink: 0 }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--color-dark-void)',
              }}
            >
              Rua Luciana de Abreu 471, Sala 307 — Moinhos de Vento, Porto Alegre/RS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
