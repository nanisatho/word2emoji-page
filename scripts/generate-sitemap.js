const fs = require('fs')
const path = require('path')

// Locales supported by the application
const locales = ['en', 'es', 'de', 'fr', 'it', 'ja', 'ko', 'pt-BR', 'ru', 'zh-Hans']

// Routes for each locale
const routes = [
  '', // home page
  'privacy-policy',
  'support',
  'terms-of-service',
]

// Base URL - can be overridden via environment variable
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://emojify-text.inventa-labs.com'

// Output directory (Next.js static export uses 'out' by default)
const outDir = path.join(process.cwd(), 'out')

// Ensure output directory exists
if (!fs.existsSync(outDir)) {
  console.error(`Error: Output directory '${outDir}' does not exist. Make sure to run 'next build' first.`)
  process.exit(1)
}

// Generate all URLs
const urls = []
locales.forEach((locale) => {
  routes.forEach((route) => {
    const urlPath = route ? `/${locale}/${route}/` : `/${locale}/`
    urls.push({
      loc: `${baseUrl}${urlPath}`,
      changefreq: 'monthly',
      priority: route === '' ? '1.0' : '0.8', // Home page has higher priority
    })
  })
})

// Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

// Generate urls.txt (one URL per line)
const urlsTxt = urls.map((url) => url.loc).join('\n')

// Write sitemap.xml
const sitemapPath = path.join(outDir, 'sitemap.xml')
fs.writeFileSync(sitemapPath, sitemap, 'utf8')
console.log(`✓ Generated sitemap.xml at ${sitemapPath}`)
console.log(`  Total URLs: ${urls.length}`)

// Write urls.txt
const urlsTxtPath = path.join(outDir, 'urls.txt')
fs.writeFileSync(urlsTxtPath, urlsTxt, 'utf8')
console.log(`✓ Generated urls.txt at ${urlsTxtPath}`)

console.log('\nSitemap generation complete!')
