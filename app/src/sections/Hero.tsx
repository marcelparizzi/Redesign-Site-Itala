import { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const hasPlayedRef = useRef(false);
  const [showLogo, setShowLogo] = useState(false);
  const [needsInteraction, setNeedsInteraction] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const LOGO_APPEAR_TIME = 6000;

  const resetAndPlay = useCallback(() => {
    const video = videoRef.current;
    const logo = logoRef.current;
    if (!video) return;

    setShowLogo(false);
    setNeedsInteraction(false);
    if (logo) {
      gsap.set(logo, { opacity: 0, scale: 0.85 });
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    video.currentTime = 0;
    video.play()
      .then(() => {
        setNeedsInteraction(false);
      })
      .catch(() => {
        setNeedsInteraction(true);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      });

    timeoutRef.current = setTimeout(() => {
      const v = videoRef.current;
      if (v && !v.paused) {
        setShowLogo(true);
        if (logo) {
          gsap.to(logo, {
            opacity: 1,
            scale: 1,
            duration: 5.5,
            ease: 'power2.out',
          });
        }
      }
    }, LOGO_APPEAR_TIME);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    video.addEventListener('ended', () => {
      video.pause();
      video.currentTime = video.duration - 0.1;
    });

    const handlePause = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
    video.addEventListener('pause', handlePause);

    const handleCanPlay = () => {
      if (!hasPlayedRef.current) {
        hasPlayedRef.current = true;
        resetAndPlay();
      }
    };
    video.addEventListener('canplaythrough', handleCanPlay);

    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      end: 'bottom 20%',
      onLeave: () => {
        hasPlayedRef.current = false;
      },
      onEnterBack: () => {
        if (!hasPlayedRef.current) {
          hasPlayedRef.current = true;
          resetAndPlay();
        }
      },
    });

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay);
      video.removeEventListener('pause', handlePause);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, [resetAndPlay]);

  return (
    <section
      ref={sectionRef}
      id="home"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'var(--color-deep-umber)',
      }}
    >
      <video
        ref={videoRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
        autoPlay
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
      >
        <source src="/videos/hero-butterfly.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(26,26,26,0.4) 0%, rgba(26,26,26,0.05) 40%, rgba(26,26,26,0.1) 100%)',
          zIndex: 2,
        }}
      />

      <div
        ref={logoRef}
        className="hero-logo-container"
        style={{
          position: 'absolute',
          top: '12vh',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          opacity: 0,
          pointerEvents: showLogo ? 'auto' : 'none',
          textAlign: 'center',
          width: '85%',
          maxWidth: 600,
        }}
      >
        <img
          src="/images/logo-itala.png"
          alt="Ítala Chinazzo — Psicologia e Psicanálise"
          className="hero-logo"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: '0 auto',
            filter: 'drop-shadow(0 2px 20px rgba(26, 26, 26, 0.25))',
          }}
        />
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(60px, 10vh, 120px)',
          left: 'clamp(24px, 5vw, 80px)',
          zIndex: 4,
          maxWidth: 640,
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 4.5vw, 3rem)',
            fontWeight: 400,
            color: 'var(--color-warm-cream)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            textShadow: '0 2px 30px rgba(26, 26, 26, 0.6)',
            textWrap: 'balance',
          }}
        >
          A voz do inconsciente é sutil, mas ela não descansa até ser ouvida
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            fontWeight: 400,
            color: 'var(--color-golden-oak)',
            marginTop: 16,
            letterSpacing: '0.06em',
            textShadow: '0 1px 10px rgba(26, 26, 26, 0.5)',
          }}
        >
          — Sigmund Freud
        </p>

        {/* CTA: Agendar consulta — compacto */}
        <a
          href="https://wa.me/5551999223888"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            backgroundColor: 'var(--color-golden-oak)',
            color: 'var(--color-warm-cream)',
            padding: '10px 24px',
            borderRadius: 2,
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            fontWeight: 500,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            textDecoration: 'none',
            marginTop: 24,
            transition: 'background-color 0.3s ease, transform 0.2s ease',
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

      {/* Play overlay for iOS */}
      {needsInteraction && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            cursor: 'pointer',
          }}
          onClick={() => {
            const video = videoRef.current;
            if (!video) return;
            video.play()
              .then(() => {
                setNeedsInteraction(false);
                const logo = logoRef.current;
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout(() => {
                  const v = videoRef.current;
                  if (v && !v.paused) {
                    setShowLogo(true);
                    if (logo) {
                      gsap.to(logo, {
                        opacity: 1,
                        scale: 1,
                        duration: 5.5,
                        ease: 'power2.out',
                      });
                    }
                  }
                }, LOGO_APPEAR_TIME);
              })
              .catch(() => {});
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              backgroundColor: 'rgba(245, 240, 230, 0.15)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(245, 240, 230, 0.3)',
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-warm-cream)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" fill="var(--color-warm-cream)" /></svg>
          </div>
        </div>
      )}

      <div className="scroll-indicator">
        <ChevronDown
          size={24}
          style={{ color: 'var(--color-warm-cream)', opacity: 0.6 }}
        />
      </div>
    </section>
  );
}
