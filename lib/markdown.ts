import { readFileSync } from 'fs'
import { join } from 'path'

export interface PageContent {
  title: string
  lastUpdated?: string
  content: string
}

/**
 * Reads markdown content from a file
 * @param locale - Language code (e.g., 'en', 'es')
 * @param page - Page name (e.g., 'privacy-policy', 'terms-of-service')
 * @returns Parsed markdown content
 */
export async function getPageContent(
  locale: string = 'en',
  page: string
): Promise<PageContent> {
  try {
    const filePath = join(process.cwd(), 'content', locale, `${page}.md`)
    const fileContents = readFileSync(filePath, 'utf8')
    
    // Parse frontmatter and content
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/
    const match = fileContents.match(frontmatterRegex)
    
    if (match) {
      const frontmatter = match[1]
      const content = match[2]
      
      // Parse frontmatter (simple key-value parser)
      const frontmatterData: Record<string, string> = {}
      frontmatter.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':')
        if (key && valueParts.length > 0) {
          frontmatterData[key.trim()] = valueParts.join(':').trim().replace(/^["']|["']$/g, '')
        }
      })
      
      return {
        title: frontmatterData.title || '',
        lastUpdated: frontmatterData.lastUpdated,
        content: content.trim(),
      }
    }
    
    // No frontmatter, return entire content
    return {
      title: '',
      content: fileContents.trim(),
    }
  } catch (error) {
    console.error(`Error reading content for ${locale}/${page}:`, error)
    throw new Error(`Content not found for ${locale}/${page}`)
  }
}
