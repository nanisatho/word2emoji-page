import Link from 'next/link'

export default function BackLink({ locale = 'en' }: { locale?: string }) {
  return (
    <Link href={`/${locale}/`} className="back-link">
      Back to Home
    </Link>
  )
}
