import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="footer-icon-container">
        <div className="footer-icon">
          <Image
            src="/images/app-icon.png"
            alt="Emojify Text App Icon"
            width={60}
            height={60}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
      <p>&copy; 2025 Nathalia Thomas @ Inventa Labs 💡. All rights reserved.</p>
      <p><a href="mailto:emojify-text@inventa-labs.com">emojify-text@inventa-labs.com</a></p>
    </footer>
  )
}
