import { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronDown, Play } from 'lucide-react';
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

  // Tempo para vídeo de 12s — logo aparece aos 6,0s quando a borboleta já quase desapareceu
  const LOGO_APPEAR_TIME = 6000; // ms — borboleta praticamente fora, só permanece céu e campo

  const resetAndPlay = useCallback(() => {
    const video = videoRef.current;
    const logo = logoRef.current;
    if (!video) return;

    // Resetar logo e estado de interação para garantir que o vídeo possa ser reproduzido novamente sem problemas
    setShowLogo(false);
    setNeedsInteraction(false);
    if (logo) {
      gsap.set(logo, { opacity: 0, scale: 0.85 });
    }

    // Limpar qualquer timeout pendente para evitar múltiplos disparos
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    // Resetar e reproduzir o vídeo
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

    // Evitar loop infinito: quando o vídeo termina, pausá-lo e posicioná-lo no final para que o frame final permaneça visível
    video.addEventListener('ended', () => {
      video.pause();
      video.currentTime = video.duration - 0.1;
    });

    // Se o vídeo for pausado por qualquer motivo, limpar timeout e esconder logo
    const handlePause = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
    video.addEventListener('pause', handlePause);

    // Quando o vídeo estiver pronto para tocar, garantir que ele seja reproduzido se ainda não tiver sido
    const handleCanPlay = () => {
      if (!hasPlayedRef.current) {
        hasPlayedRef.current = true;
        resetAndPlay();
      }
    };
    video.addEventListener('canplaythrough', handleCanPlay);

    // Configurar ScrollTrigger para reiniciar o vídeo quando o usuário rolar de volta para a seção
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
      {/* Vídeo de fundo */}
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

      {/* Gradientes para melhorar legibilidade do texto sobre o vídeo */}
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

      {/* Gradiente inferior para criar um fade-out suave do vídeo e melhorar a legibilidade do texto próximo à parte inferior */}
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

      {/* Overlay de interação para dispositivos que exigem toque para reproduzir vídeos */}
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
            <Play size={32} style={{ color: 'var(--color-warm-cream)', marginLeft: 4 }} />
          </div>
        </div>
      )}

      {/* Logo que aparece após um tempo do vídeo começar a tocar */}
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

      {/* Texto sobreposto ao vídeo, posicionado próximo à parte inferior para aproveitar o gradiente de fade-out e garantir boa legibilidade */}
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

      {/* Indicador de scroll para incentivar o usuário a explorar mais o site, posicionado no centro inferior da tela */}
      <div className="scroll-indicator">
        <ChevronDown
          size={24}
          style={{ color: 'var(--color-warm-cream)', opacity: 0.6 }}
        />
      </div>
    </section>
  );
}