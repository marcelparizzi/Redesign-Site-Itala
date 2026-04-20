import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface NavigationProps {
  lenisRef: React.MutableRefObject<import('@studio-freight/lenis').default | null>;
}

const navLinks = [
  { label: 'Abordagem', target: '#abordagem' },
  { label: 'Indicações', target: '#indicacoes' },
  { label: 'A Profissional', target: '#profissional' },
  { label: 'Contato', target: '#contato' },
];

export default function Navigation({ lenisRef }: NavigationProps) {
  const navRef = useRef<HTMLElement>(null);
  const [hasBg, setHasBg] = useState(false);
  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background
      setHasBg(currentScrollY > 100);

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: isVisible ? 0 : -100,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  }, [isVisible]);

  const handleNavClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -72 });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0);
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
      style={{
        height: 72,
        backgroundColor: hasBg ? 'rgba(245, 240, 230, 0.9)' : 'transparent',
        backdropFilter: hasBg ? 'blur(8px)' : 'none',
        WebkitBackdropFilter: hasBg ? 'blur(8px)' : 'none',
        borderBottom: hasBg ? '1px solid rgba(74, 66, 56, 0.1)' : '1px solid transparent',
      }}
    >
      <div
        className="h-full flex items-center justify-between"
        style={{ padding: '0 clamp(24px, 5vw, 80px)' }}
      >
        <a
          href="#"
          onClick={handleLogoClick}
          className="transition-opacity duration-200 hover:opacity-80"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
        >
          <img
            src="/images/logo-icon-dark.png"
            alt="Ítala Chinazzo"
            style={{
              height: 40,
              width: 'auto',
              filter: hasBg ? 'none' : 'brightness(0) saturate(100%) invert(0.95) sepia(0.1) saturate(0.5)',
              transition: 'filter 0.3s ease',
            }}
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={link.target}
              onClick={(e) => handleNavClick(e, link.target)}
              className="transition-colors duration-200 hover:opacity-70"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                fontWeight: 400,
                letterSpacing: '0.04em',
                color: hasBg ? 'var(--color-dark-void)' : 'var(--color-warm-cream)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
              mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
            }
          }}
          aria-label="Menu"
        >
          <span
            className="block w-5 h-px transition-colors duration-200"
            style={{ backgroundColor: hasBg ? 'var(--color-dark-void)' : 'var(--color-warm-cream)' }}
          />
          <span
            className="block w-5 h-px transition-colors duration-200"
            style={{ backgroundColor: hasBg ? 'var(--color-dark-void)' : 'var(--color-warm-cream)' }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="md:hidden flex-col items-center gap-6 py-8"
        style={{
          display: 'none',
          backgroundColor: 'rgba(245, 240, 230, 0.98)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.target}
            href={link.target}
            onClick={(e) => {
              handleNavClick(e, link.target);
              const mobileMenu = document.getElementById('mobile-menu');
              if (mobileMenu) mobileMenu.style.display = 'none';
            }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 400,
              letterSpacing: '0.04em',
              color: 'var(--color-dark-void)',
              textDecoration: 'none',
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
