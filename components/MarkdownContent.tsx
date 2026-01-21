import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

interface MarkdownContentProps {
  content: string
  className?: string
}

export default function MarkdownContent({ content, className = '' }: MarkdownContentProps) {
  return (
    <div className={`markdown-content ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: (props) => <h1 {...props} />,
          h2: (props) => <h2 {...props} />,
          h3: (props) => <h3 {...props} />,
          p: (props) => <p {...props} />,
          ul: (props) => <ul {...props} />,
          ol: (props) => <ol {...props} />,
          li: (props) => <li {...props} />,
          a: (props) => <a {...props} />,
          strong: (props) => <strong {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
