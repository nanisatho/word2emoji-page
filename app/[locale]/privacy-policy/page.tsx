import { Metadata } from 'next'
import BackLink from '@/components/BackLink'
import MarkdownContent from '@/components/MarkdownContent'
import { getPageContent } from '@/lib/markdown'

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
  return {
    title: 'Privacy Policy - Emojify Text',
    description: 'Privacy Policy for Emojify Text mobile application',
  }
}

export default async function PrivacyPolicy({
  params,
}: {
  params: { locale: string }
}) {
  const locale = params.locale || 'en'
  const pageContent = await getPageContent(locale, 'privacy-policy')
  
  return (
    <div className="content-page">
      <BackLink locale={locale} />
      <MarkdownContent content={pageContent.content} />
    </div>
  )
}
