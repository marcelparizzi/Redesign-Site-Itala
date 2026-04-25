/**
 * Environment variables configuration
 * All values are prefixed with VITE_ to be accessible in the browser
 */

export const ENV = {
  // Google Analytics
  GOOGLE_ANALYTICS_ID: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '',
  
  // Contact Information
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || 'contato@italachinazzo.com.br',
  CONTACT_PHONE: import.meta.env.VITE_CONTACT_PHONE || '+55 51 99922-3888',
} as const;

/**
 * Initialize Google Analytics
 * Call this function once on app startup
 */
export function initGoogleAnalytics(): void {
  if (!ENV.GOOGLE_ANALYTICS_ID) {
    console.warn('Google Analytics ID not configured. Set VITE_GOOGLE_ANALYTICS_ID in .env.local');
    return;
  }

  // Add Google Analytics script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ENV.GOOGLE_ANALYTICS_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  (window as any).gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', ENV.GOOGLE_ANALYTICS_ID);
}
