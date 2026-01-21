import type { Metadata } from 'next'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Emojify Text - Legal & Support',
  description: 'Legal and support information for Emojify Text mobile application',
  icons: {
    icon: '/images/app-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
