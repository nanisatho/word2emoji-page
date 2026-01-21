import { Metadata } from 'next'
import BackLink from '@/components/BackLink'
import MarkdownContent from '@/components/MarkdownContent'
import { getPageContent } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'Privacy Policy - Emojify Text',
  description: 'Privacy Policy for Emojify Text mobile application',
}

export default async function PrivacyPolicy() {
  const locale = 'en' // TODO: Get from URL params or headers when i18n is implemented
  const pageContent = await getPageContent(locale, 'privacy-policy')
  
  return (
    <div className="content-page">
      <BackLink />
      <MarkdownContent content={pageContent.content} />
    </div>
  )
}
