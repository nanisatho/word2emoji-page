import Header from '@/components/Header'
import Link from 'next/link'

export const metadata = {
  title: 'Emojify Text - Legal & Support',
  description: 'Legal and support information for Emojify Text mobile application',
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="card-grid">
          <Link href="/privacy-policy/" className="card">
            <h2>Privacy Policy</h2>
            <p>Learn how we collect, use, and protect your data when using Emojify Text.</p>
          </Link>
          
          <Link href="/terms-of-service/" className="card">
            <h2>Terms of Service</h2>
            <p>Read our terms and conditions for using the Emojify Text app.</p>
          </Link>
          
          <Link href="/support/" className="card">
            <h2>Support & Contact</h2>
            <p>Get help, report issues, or contact our support team.</p>
          </Link>
        </div>
      </main>
    </>
  )
}
