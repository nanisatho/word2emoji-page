# Word2Emoji - Public Pages

This repository contains the public-facing legal and support pages for the Word2Emoji iOS app. These pages are required for Apple App Store review compliance.

## Pages

- **Privacy Policy** (`privacy-policy.html`) - Comprehensive privacy policy covering data collection, storage, third-party services, and user rights
- **Terms of Service** (`terms-of-service.html`) - Terms and conditions for using the Word2Emoji app
- **Support & Contact** (`support.html`) - Support information, FAQs, and contact details

## Setup

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/nanisatho/word2emoji-page.git
   cd word2emoji-page
   ```

2. Open `index.html` in a web browser to view the site locally

3. For local testing with a simple HTTP server:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
   
   Then visit `http://localhost:8000` in your browser

## Deployment to GitHub Pages

### Automatic Deployment

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Update public pages"
   git push origin main
   ```

2. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose the `main` branch and `/ (root)` folder
   - Click Save

3. Your site will be available at:
   `https://nanisatho.github.io/word2emoji-page/`

### Manual Deployment

If you prefer manual deployment or need to use a different branch:

1. Ensure all files are committed and pushed
2. Go to repository Settings → Pages
3. Configure the source branch and folder
4. GitHub will automatically build and deploy your site

## URLs

Once deployed, your pages will be available at:

- Home: `https://nanisatho.github.io/word2emoji-page/`
- Privacy Policy: `https://nanisatho.github.io/word2emoji-page/privacy-policy.html`
- Terms of Service: `https://nanisatho.github.io/word2emoji-page/terms-of-service.html`
- Support: `https://nanisatho.github.io/word2emoji-page/support.html`

## Customization

### Update Placeholders

Before deploying, update the following placeholders in the HTML files:

1. **Company/Developer Name**: `Nathalia Thomas @ Fiorella Mille` (already updated)
   - Files: `index.html`, `privacy-policy.html`, `terms-of-service.html`, `support.html`

2. **Support Email**: `support@fiorellamille.com` (already updated)
   - Files: `privacy-policy.html`, `terms-of-service.html`, `support.html`

3. **Jurisdiction** (in Terms of Service): Replace `[Jurisdiction]` with your legal jurisdiction
   - File: `terms-of-service.html`

### Styling

The site uses a shared `styles.css` file. You can customize:
- Colors (currently using Apple-inspired design)
- Fonts
- Spacing and layout
- Responsive breakpoints

## File Structure

```
word2emoji-page/
├── index.html              # Landing page with navigation
├── privacy-policy.html     # Privacy policy
├── terms-of-service.html   # Terms of service
├── support.html           # Support and contact page
├── styles.css             # Shared stylesheet
├── .nojekyll              # Prevents Jekyll processing
└── README.md              # This file
```

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

## Next Steps

1. Update all placeholder values (company name, email, jurisdiction)
2. Review legal content for accuracy
3. Deploy to GitHub Pages
4. Update iOS app to link to these pages
5. Add URLs to App Store Connect metadata:
   - Privacy Policy URL
   - Terms of Service URL
   - Support URL

## License

Copyright © 2025 Nathalia Thomas @ Fiorella Mille. All rights reserved.
