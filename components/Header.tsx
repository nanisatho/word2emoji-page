import Image from 'next/image'
import Link from 'next/link'

export default function Header({ showSubtitle = true }: { showSubtitle?: boolean }) {
  return (
    <header>
      <div className="app-icon-container">
        <div className="app-icon">
          <Image
            src="/images/app-icon.png"
            alt="Emojify Text App Icon"
            width={120}
            height={120}
            priority
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
      <h1>Emojify Text</h1>
      {showSubtitle && <p className="subtitle">Legal & Support Information</p>}
    </header>
  )
}
