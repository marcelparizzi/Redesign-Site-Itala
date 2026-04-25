import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://italachinazzo.com.br';
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');

// Define all routes of your site
const routes = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '#about', changefreq: 'monthly', priority: '0.8' },
  { path: '#approach', changefreq: 'monthly', priority: '0.8' },
  { path: '#indications', changefreq: 'monthly', priority: '0.8' },
  { path: '#contact', changefreq: 'monthly', priority: '0.9' },
];

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const urls = routes
    .map((route) => {
      return `  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  // Ensure directory exists
  const dir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, sitemap, 'utf-8');
  console.log(`✅ Sitemap generated: ${OUTPUT_PATH}`);
}

generateSitemap();
