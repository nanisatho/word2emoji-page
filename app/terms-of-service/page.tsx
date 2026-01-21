import { Metadata } from 'next'
import BackLink from '@/components/BackLink'
import MarkdownContent from '@/components/MarkdownContent'
import { getPageContent } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'Terms of Service - Emojify Text',
  description: 'Terms of Service for Emojify Text mobile application',
}

export default async function TermsOfService() {
  const locale = 'en' // TODO: Get from URL params or headers when i18n is implemented
  const pageContent = await getPageContent(locale, 'terms-of-service')
  
  return (
    <div className="content-page">
      <BackLink />
      <MarkdownContent content={pageContent.content} />
    </div>
  )
}
