export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        backgroundColor: 'var(--color-deep-umber)',
        padding: '48px clamp(24px, 5vw, 80px)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Divider */}
        <div
          style={{
            width: '100%',
            height: 1,
            backgroundColor: 'rgba(184, 149, 106, 0.15)',
            marginBottom: 32,
          }}
        />

        {/* Top Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          {/* Logo */}
          <img
            src="/images/logo-itala_sem-bg_escuro2.png"
            alt="Ítala Chinazzo — Psicologia e Psicanálise"
            style={{
              height: 48,
              width: 'auto',
              opacity: 1,
            }}
          />

          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.06em',
              color: 'var(--color-earth-clay)',
            }}
          >
            © 2025
          </span>
        </div>

        {/* Bottom Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 32,
            marginTop: 24,
          }}
        >
          {/* <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.06em',
              color: 'var(--color-earth-clay)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = 'var(--color-golden-oak)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = 'var(--color-earth-clay)';
            }}
          >
            Instagram
          </a> */}
          {/* <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              fontWeight: 400,
              letterSpacing: '0.06em',
              color: 'var(--color-earth-clay)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = 'var(--color-golden-oak)';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = 'var(--color-earth-clay)';
            }}
          >
            LinkedIn
          </a> */}
        </div>
      </div>
    </footer>
  );
}
