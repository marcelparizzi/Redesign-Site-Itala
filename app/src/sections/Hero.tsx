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
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Tempo para vídeo de 12s — logo aparece aos 9,0s quando a borboleta já quase desapareceu
  const LOGO_APPEAR_TIME = 9000; // ms — borboleta praticamente fora, só permanece céu e campo

  const resetAndPlay = useCallback(() => {
    const video = videoRef.current;
    const logo = logoRef.current;
    if (!video) return;

    // Resetar logo
    setShowLogo(false);
    if (logo) {
      gsap.set(logo, { opacity: 0, scale: 0.85 });
    }

    // Limpar qualquer timeout pendente
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Resetar e reproduzir o vídeo
    video.currentTime = 0;
    video.play().catch(() => {});

    // Agendar aparição do logo — quando a borboleta já voou e o céu está limpo
    timeoutRef.current = setTimeout(() => {
      setShowLogo(true);
      if (logo) {
        gsap.to(logo, {
          opacity: 1,
          scale: 1,
          duration: 2.5,
          ease: 'power2.out',
        });
      }
    }, LOGO_APPEAR_TIME);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // Evitar loop
    video.addEventListener('ended', () => {
      video.pause();
      video.currentTime = video.duration - 0.1;
    });

    // Reprodução inicial
    const handleCanPlay = () => {
      if (!hasPlayedRef.current) {
        hasPlayedRef.current = true;
        resetAndPlay();
      }
    };

    video.addEventListener('canplaythrough', handleCanPlay);

    // ScrollTrigger: reproduzir novamente ao voltar para o hero
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
      {/* Video Background */}
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
        preload="auto"
      >
        <source src="/videos/hero-butterfly.mp4" type="video/mp4" />
      </video>

      {/* Subtle top gradient for logo readability against sky */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '45%',
          background: 'linear-gradient(to bottom, rgba(245,240,230,0.15) 0%, rgba(245,240,230,0) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Bottom gradient for quote readability */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(to top, rgba(26,26,26,0.35) 0%, rgba(26,26,26,0) 100%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      {/* Logo — positioned in upper area against the SKY for visibility */}
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

      {/* Quote — bottom left over the field */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(60px, 10vh, 120px)',
          left: 'clamp(24px, 5vw, 80px)',
          zIndex: 4,
          opacity: 1,
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
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <ChevronDown
          size={24}
          style={{ color: 'var(--color-warm-cream)', opacity: 0.6 }}
        />
      </div>
    </section>
  );
}