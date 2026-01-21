# Emojify Text - Public Pages

This repository contains the public-facing legal and support pages for the Emojify Text iOS app. These pages are required for Apple App Store review compliance.

Built with **Next.js 14**, **TypeScript**, and **React**, featuring full internationalization support for 10 languages.

## Pages

- **Privacy Policy** - Comprehensive privacy policy covering data collection, storage, third-party services, and user rights
- **Terms of Service** - Terms and conditions for using the Emojify Text app
- **Support & Contact** - Support information, FAQs, and contact details

All pages are available in multiple languages:
- English (en) - Default
- Spanish (es)
- German (de)
- French (fr)
- Italian (it)
- Japanese (ja)
- Korean (ko)
- Portuguese (pt-BR)
- Russian (ru)
- Chinese Simplified (zh-Hans)

## Project Structure

```
word2emoji-page/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with Footer
│   ├── page.tsx                 # Root redirect to /en/
│   ├── globals.css              # Global styles
│   └── [locale]/                # Internationalized routes
│       ├── page.tsx             # Home page
│       ├── privacy-policy/      # Privacy Policy page
│       ├── terms-of-service/    # Terms of Service page
│       └── support/            # Support page
├── components/                   # Reusable React components
│   ├── Header.tsx              # Header component
│   ├── Footer.tsx              # Footer component
│   ├── BackLink.tsx            # Back to home link
│   └── MarkdownContent.tsx     # Markdown renderer
├── content/                      # Markdown content files
│   ├── en/                     # English content
│   ├── es/                     # Spanish content
│   ├── de/                     # German content
│   ├── fr/                     # French content
│   ├── it/                     # Italian content
│   ├── ja/                     # Japanese content
│   ├── ko/                     # Korean content
│   ├── pt-BR/                  # Portuguese (Brazil) content
│   ├── ru/                     # Russian content
│   └── zh-Hans/                # Chinese Simplified content
├── lib/                         # Utility functions
│   ├── markdown.ts             # Markdown parsing utilities
│   └── translations.ts         # Translation strings
├── public/                      # Static assets
│   └── images/                 # Image files
├── package.json                 # Dependencies
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── vercel.json                 # Vercel deployment configuration
```

## Setup

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)
- Git

### Local Development

1. **Clone this repository:**
   ```bash
   git clone https://github.com/nanisatho/word2emoji-page.git
   cd word2emoji-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)
   
   The root URL will automatically redirect to `/en/` (English).

5. **View pages in different languages:**
   - English: `http://localhost:3000/en/`
   - Spanish: `http://localhost:3000/es/`
   - German: `http://localhost:3000/de/`
   - And so on for other supported locales

### Build for Production

Build the static site:

```bash
npm run build
```

This generates static files in the `out/` directory, ready for deployment.

### Run Production Build Locally

After building, you can preview the production build:

```bash
npm run start
```

## Deployment

### Vercel (Recommended)

This project is configured for deployment on Vercel with automatic static site generation.

#### Option A: Connect via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository: `nanisatho/word2emoji-page`
4. Vercel will auto-detect Next.js and configure everything
5. Click "Deploy"

#### Option B: Deploy via CLI

```bash
npm i -g vercel
vercel
```

#### Custom Domain Setup

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your custom domain: `emojify-text.inventa-labs.com`
3. Follow DNS configuration instructions provided by Vercel
4. Vercel will automatically provision SSL certificates

### Other Static Hosting Providers

Since this project uses `output: 'export'` in `next.config.js`, you can deploy the `out/` directory to any static hosting provider:

- **GitHub Pages**: Upload the `out/` directory contents
- **Netlify**: Connect repository or drag-and-drop the `out/` folder
- **AWS S3 + CloudFront**: Upload `out/` to S3 bucket
- **Any static file server**: Serve the `out/` directory

## URLs

### Production URLs

**Custom Domain** (Primary):
- Home: `https://emojify-text.inventa-labs.com/`
- Privacy Policy: `https://emojify-text.inventa-labs.com/en/privacy-policy/`
- Terms of Service: `https://emojify-text.inventa-labs.com/en/terms-of-service/`
- Support: `https://emojify-text.inventa-labs.com/en/support/`

**Language-specific URLs** (replace `en` with locale code):
- English: `/en/privacy-policy/`
- Spanish: `/es/privacy-policy/`
- German: `/de/privacy-policy/`
- French: `/fr/privacy-policy/`
- Italian: `/it/privacy-policy/`
- Japanese: `/ja/privacy-policy/`
- Korean: `/ko/privacy-policy/`
- Portuguese (BR): `/pt-BR/privacy-policy/`
- Russian: `/ru/privacy-policy/`
- Chinese Simplified: `/zh-Hans/privacy-policy/`

## Internationalization (i18n)

### Supported Languages

The site supports 10 languages with URL-based routing:

- `en` - English (default)
- `es` - Spanish (Español)
- `de` - German (Deutsch)
- `fr` - French (Français)
- `it` - Italian (Italiano)
- `ja` - Japanese (日本語)
- `ko` - Korean (한국어)
- `pt-BR` - Portuguese (Brazil) (Português)
- `ru` - Russian (Русский)
- `zh-Hans` - Chinese Simplified (简体中文)

### Adding Content for a New Language

1. **Create language directory:**
   ```bash
   mkdir -p content/[locale]
   ```

2. **Create markdown files:**
   Copy and translate the English markdown files:
   ```bash
   cp content/en/*.md content/[locale]/
   # Then translate content/[locale]/*.md files
   ```

3. **Add translations:**
   Update `lib/translations.ts` to add translation strings for the new locale.

4. **Update locale list:**
   Add the locale to the `locales` array in `app/[locale]/page.tsx`.

### Content Format

Content files are stored as Markdown in the `content/` directory. Each file can include frontmatter:

```markdown
---
title: Privacy Policy
lastUpdated: December 20, 2025
---

# Privacy Policy

Your content here...
```

## Customization

### Update Contact Information

Update the following in the markdown files:

1. **Support Email**: `info@inventa-labs.com`
   - Files: `content/*/support.md`, `content/*/privacy-policy.md`, `content/*/terms-of-service.md`

2. **Company/Developer Name**: `Nathalia Thomas @ Inventa Labs 💡`
   - Files: All markdown files in `content/`

3. **Jurisdiction** (in Terms of Service): Update with your legal jurisdiction
   - Files: `content/*/terms-of-service.md`

### Styling

The site uses a shared `app/globals.css` file. You can customize:
- Colors (currently using Apple-inspired design)
- Fonts
- Spacing and layout
- Responsive breakpoints

## Requirements Met

These pages address the following Apple App Review requirements:

✅ **Privacy Policy** - Required disclosure of:
- Data collection (user input, emoji results, timestamps)
- Data storage (UserDefaults, Firebase)
- Third-party services (Firebase, Google Gemini AI)
- Data retention policies
- User rights (data deletion)

✅ **Terms of Service** - Covers:
- Service description
- User responsibilities
- AI-generated content disclaimers
- Limitation of liability
- Content usage rights

✅ **Support Page** - Provides:
- Contact information
- FAQ section
- Issue reporting guidance

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **UI Library**: React 18
- **Styling**: CSS (global styles)
- **Content**: Markdown files
- **Markdown Rendering**: react-markdown
- **Deployment**: Vercel (static export)
- **Internationalization**: URL-based routing with locale detection

## Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build static site for production
- `npm run start` - Start production server (after build)
- `npm run lint` - Run ESLint

## License

Copyright © 2025 Nathalia Thomas @ Inventa Labs 💡. All rights reserved.
