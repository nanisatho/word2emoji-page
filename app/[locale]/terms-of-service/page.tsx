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
    title: 'Terms of Service - Emojify Text',
    description: 'Terms of Service for Emojify Text mobile application',
  }
}

export default async function TermsOfService({
  params,
}: {
  params: { locale: string }
}) {
  const locale = params.locale || 'en'
  const pageContent = await getPageContent(locale, 'terms-of-service')
  
  return (
    <div className="content-page">
      <BackLink locale={locale} />
      <MarkdownContent content={pageContent.content} />
    </div>
  )
}
