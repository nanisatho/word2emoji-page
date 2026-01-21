import Image from 'next/image'
import Link from 'next/link'

const locales = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'it', name: 'Italiano' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'pt-BR', name: 'Português (Brasil)' },
  { code: 'ru', name: 'Русский' },
  { code: 'zh-Hans', name: '简体中文' },
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-icon-container">
        <div className="footer-icon">
          <Image
            src="/images/app-icon.png"
            alt="Emojify Text App Icon"
            width={60}
            height={60}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className="footer-locales">
        <p className="footer-locales-label">Languages:</p>
        <div className="footer-locales-links">
          {locales.map((locale) => (
            <Link key={locale.code} href={`/${locale.code}/`} className="footer-locale-link">
              {locale.name}
            </Link>
          ))}
        </div>
      </div>
      <p>&copy; 2025 Nathalia Thomas @ Inventa Labs 💡. All rights reserved.</p>
      <p><a href="mailto:emojify-text@inventa-labs.com">emojify-text@inventa-labs.com</a></p>
    </footer>
  )
}
