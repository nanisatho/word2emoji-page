# Word2Emoji Web

A Next.js web application that converts text to emojis using AI. This is the web version of the Word2Emoji iOS app.

## Features

- ✨ Text-to-emoji generation using Google Gemini AI
- 🎨 Advanced options: color palette, emoji count, personality-based generation
- 📚 History management with local storage
- 😊 Personality system with vibe preferences
- 🌍 Multi-language support (10 languages)
- 📱 Responsive design for mobile and desktop
- 💰 AdSense integration for monetization

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Backend**: Firebase Functions
- **Storage**: localStorage + IndexedDB
- **Ads**: Google AdSense

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file with your Firebase and AdSense credentials:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
   NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-1286486326636890
   NEXT_PUBLIC_GA_ID=your_ga_id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run unit tests
- `npm run test:e2e` - Run E2E tests with Playwright

## Project Structure

```
word2emoji-web/
├── app/
│   └── [locale]/          # Internationalized routes
│       ├── layout.tsx     # Root layout
│       ├── page.tsx       # Generate page
│       ├── history/       # History page
│       ├── settings/      # Settings page
│       └── startup/       # Personality test
├── components/
│   ├── features/          # Feature components
│   ├── ui/                # Reusable UI components
│   ├── ads/               # Ad components
│   └── layout/            # Layout components
├── lib/
│   ├── managers/          # Business logic managers
│   ├── storage/           # Storage utilities
│   ├── hooks/             # React hooks
│   └── utils/             # Utility functions
├── messages/              # Translation files
└── public/
    └── data/              # JSON data files
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

The project includes a `vercel.json` configuration file.

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Self-hosted with Node.js

## Monetization

The app uses Google AdSense for monetization. Ad units are implemented with:
- Lazy loading for performance
- Consent management (GDPR/CCPA)
- Responsive ad formats

## License

Copyright © 2025 Nathalia Thomas @ Fiorella Mille. All rights reserved.
