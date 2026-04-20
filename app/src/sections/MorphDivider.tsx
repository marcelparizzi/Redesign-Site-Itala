import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MorphDividerProps {
  id?: string;
  text: string;
  bgImage: string;
  variant: 1 | 2;
}

export default function MorphDivider({ id, text, bgImage, variant }: MorphDividerProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const overlay = section.querySelector('.divider-overlay');
    const line = section.querySelector('.divider-line');
    const textEl = section.querySelector('.divider-text');

    if (!overlay || !line || !textEl) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: '+=40%',
        scrub: true,
      },
    });

    // Line draws from center outward
    gsap.set(line, { scaleX: 0, transformOrigin: '50% 50%' });

    // Text fades in slightly
    gsap.set(textEl, { y: 20, opacity: 0 });

    // Phase 1: Line draws
    tl.to(line, {
      scaleX: 1,
      duration: 0.5,
      ease: 'power2.out',
    }, 0);

    // Phase 2: Text fades up
    tl.to(textEl, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out',
    }, 0.2);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, [variant]);

  const bgColor = variant === 1
    ? 'rgba(212, 196, 168, 0.15)'
    : 'rgba(61, 48, 40, 0.15)';

  const lineColor = variant === 1
    ? 'var(--color-golden-oak)'
    : 'var(--color-pale-sand)';

  const textColor = variant === 1
    ? 'var(--color-warm-cream)'
    : 'var(--color-warm-cream)';

  return (
    <div
      ref={sectionRef}
      id={id}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '35vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
      }}
    >
      {/* Background image */}
      <img
        src={bgImage}
        alt=""
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
        loading="eager"
      />

      {/* Soft overlay */}
      <div
        className="divider-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: bgColor,
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          padding: 'clamp(40px, 6vh, 80px) clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Decorative line */}
        <div
          className="divider-line"
          style={{
            width: 'clamp(60px, 8vw, 120px)',
            height: 1,
            backgroundColor: lineColor,
            opacity: 0.6,
          }}
        />

        {/* Text */}
        <span
          className="divider-text"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 5vw, 3rem)',
            fontWeight: 400,
            color: textColor,
            lineHeight: 1.2,
            letterSpacing: '0.08em',
            textAlign: 'center',
            textShadow: '0 2px 20px rgba(26, 26, 26, 0.3)',
          }}
        >
          {text}
        </span>

        {/* Decorative line bottom */}
        <div
          className="divider-line"
          style={{
            width: 'clamp(60px, 8vw, 120px)',
            height: 1,
            backgroundColor: lineColor,
            opacity: 0.6,
          }}
        />
      </div>
    </div>
  );
}
