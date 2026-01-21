# Emojify Text - Next.js Setup

This project has been migrated to Next.js for better maintainability and deployment options.

## Project Structure

```
word2emoji-page/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Footer
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── privacy-policy/     # Privacy Policy page
│   ├── terms-of-service/   # Terms of Service page
│   └── support/           # Support page
├── components/             # Reusable React components
│   ├── Header.tsx         # Header component
│   ├── Footer.tsx         # Footer component
│   └── BackLink.tsx      # Back to home link
├── public/                # Static assets
│   └── images/           # Image files (app-icon.png)
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
└── vercel.json            # Vercel deployment configuration
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Copy Images

Make sure to copy your images to the `public/images/` directory:

```bash
cp images/app-icon.png public/images/
```

### 3. Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

Build the static site:

```bash
npm run build
```

This will generate static files in the `out/` directory.

### 5. Deploy to Vercel

#### Option A: Connect via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js and configure everything
5. Click "Deploy"

#### Option B: Deploy via CLI

```bash
npm i -g vercel
vercel
```

### 6. Custom Domain Setup

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your custom domain: `emojify-text.inventa-labs.com`
3. Follow DNS configuration instructions
4. Vercel will automatically provision SSL certificates

## Key Features

- ✅ **Static Export**: Configured for static site generation
- ✅ **TypeScript**: Full TypeScript support
- ✅ **Component-Based**: Reusable Header and Footer components
- ✅ **SEO Optimized**: Metadata for each page
- ✅ **Responsive**: Mobile-friendly design maintained
- ✅ **Vercel Ready**: Optimized for Vercel deployment

## Migration Notes

- All HTML pages have been converted to Next.js pages
- Styles moved to `app/globals.css`
- Images should be in `public/images/` directory
- Links updated to use Next.js `Link` component
- All content preserved exactly as before

## Old Files

The original HTML files (`index.html`, `privacy-policy.html`, etc.) are still in the repository but are no longer used. You can delete them after confirming the Next.js version works correctly.

## Troubleshooting

### Images not showing?
- Make sure images are in `public/images/` directory
- Use `/images/filename.png` in Image src (Next.js serves from `/public`)

### Build errors?
- Run `npm install` to ensure all dependencies are installed
- Check that TypeScript is properly configured

### Deployment issues?
- Ensure `next.config.js` has `output: 'export'` for static export
- Check that `vercel.json` is properly configured
