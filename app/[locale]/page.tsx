import Header from '@/components/Header'
import Link from 'next/link'
import { Metadata } from 'next'
import { getTranslations } from '@/lib/translations'

const locales = ['en', 'es', 'de', 'fr', 'it', 'ja', 'ko', 'pt-BR', 'ru', 'zh-Hans']

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale: locale,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = getTranslations(params.locale || 'en')
  return {
    title: t.metadata.title,
    description: t.metadata.description,
  }
}

export default function Home({
  params,
}: {
  params: { locale: string }
}) {
  const locale = params.locale || 'en'
  const t = getTranslations(locale)
  
  return (
    <>
      <Header showSubtitle={true} subtitle={t.header.subtitle} />
      <main>
        <div className="card-grid">
          <Link href={`/${locale}/privacy-policy/`} className="card">
            <h2>{t.cards.privacyPolicy.title}</h2>
            <p>{t.cards.privacyPolicy.description}</p>
          </Link>
          
          <Link href={`/${locale}/terms-of-service/`} className="card">
            <h2>{t.cards.termsOfService.title}</h2>
            <p>{t.cards.termsOfService.description}</p>
          </Link>
          
          <Link href={`/${locale}/support/`} className="card">
            <h2>{t.cards.support.title}</h2>
            <p>{t.cards.support.description}</p>
          </Link>
        </div>
      </main>
    </>
  )
}
