import { Metadata } from 'next'
import BackLink from '@/components/BackLink'
import MarkdownContent from '@/components/MarkdownContent'
import { getPageContent } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'Support & Contact - Emojify Text',
  description: 'Support and contact information for Emojify Text mobile application',
}

export default async function Support() {
  const locale = 'en' // TODO: Get from URL params or headers when i18n is implemented
  const pageContent = await getPageContent(locale, 'support')
  
  return (
    <div className="content-page">
      <BackLink />
      <MarkdownContent content={pageContent.content} />
    </div>
  )
}
