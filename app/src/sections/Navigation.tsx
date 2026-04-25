import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  lenisRef: React.MutableRefObject<import('@studio-freight/lenis').default | null>;
}

const navLinks = [
  { label: 'Abordagem', target: '#abordagem' },
  { label: 'Indicações', target: '#indicacoes' },
  { label: 'Como Funciona', target: '#como-funciona' },
  { label: 'A Profissional', target: '#profissional' },
  { label: 'Supervisão', target: '#supervisao' },
  { label: 'Contato', target: '#contato' },
];

export default function Navigation({ lenisRef }: NavigationProps) {
  const navRef = useRef<HTMLElement>(null);
  const [hasBg, setHasBg] = useState(false);
  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasBg(currentScrollY > 100);
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
    setMobileOpen(false);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -72 });
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className="main-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 50,
          height: 72,
          backgroundColor: hasBg ? 'rgba(245, 240, 230, 0.9)' : 'transparent',
          backdropFilter: hasBg ? 'blur(8px)' : 'none',
          WebkitBackdropFilter: hasBg ? 'blur(8px)' : 'none',
          borderBottom: hasBg ? '1px solid rgba(74, 66, 56, 0.1)' : '1px solid transparent',
          transition: 'background-color 0.3s ease, border-bottom 0.3s ease',
        }}
      >
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 clamp(24px, 5vw, 80px)',
            maxWidth: 1400,
            margin: '0 auto',
          }}
        >
          {/* Logo IC */}
          <a
            href="#"
            onClick={handleLogoClick}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
          >
            <img
              src="/images/logo-icon-dark.png"
              alt="Ítala Chinazzo"
              style={{
                height: 40,
                width: 'auto',
                filter: hasBg
                  ? 'none'
                  : 'brightness(0) saturate(100%) invert(0.95) sepia(0.1) saturate(0.5)',
                transition: 'filter 0.3s ease',
              }}
            />
          </a>

          {/* Desktop Nav Links */}
          <div
            className="nav-desktop"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 28,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={link.target}
                onClick={(e) => handleNavClick(e, link.target)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  color: hasBg ? 'var(--color-dark-void)' : 'var(--color-warm-cream)',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                  position: 'relative',
                  paddingBottom: 4,
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.opacity = '0.7';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.opacity = '1';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              color: hasBg ? 'var(--color-dark-void)' : 'var(--color-warm-cream)',
              display: 'none',
            }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown - compact style below navbar */}
      {mobileOpen && (
        <div
          className="mobile-dropdown"
          style={{
            position: 'fixed',
            top: 72,
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-warm-cream)',
            zIndex: 49,
            padding: '16px 0',
            boxShadow: '0 4px 20px rgba(26, 26, 26, 0.1)',
            borderBottom: '1px solid rgba(184, 149, 106, 0.15)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={link.target}
                onClick={(e) => handleNavClick(e, link.target)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                  color: 'var(--color-dark-void)',
                  textDecoration: 'none',
                  padding: '10px 0',
                  width: '100%',
                  textAlign: 'center',
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(184, 149, 106, 0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
