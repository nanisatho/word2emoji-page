# Internationalization (i18n) Setup Guide

This project is structured to support multiple languages. Currently, English (`en`) is the default language.

## Content Structure

Content files are organized by language in the `content/` directory:

```
content/
├── en/                    # English (default)
│   ├── privacy-policy.md
│   ├── terms-of-service.md
│   └── support.md
├── es/                    # Spanish (future)
│   ├── privacy-policy.md
│   ├── terms-of-service.md
│   └── support.md
└── fr/                    # French (future)
    ├── privacy-policy.md
    ├── terms-of-service.md
    └── support.md
```

## Adding a New Language

1. **Create language directory:**
   ```bash
   mkdir -p content/es  # Example: Spanish
   ```

2. **Create markdown files:**
   Copy the English markdown files and translate them:
   ```bash
   cp content/en/*.md content/es/
   # Then translate content/es/*.md files
   ```

3. **Update routing** (when implementing i18n routing):
   - Add locale detection in `lib/markdown.ts`
   - Update pages to use locale from URL params
   - Add language switcher component

## Markdown File Format

Each markdown file should start with frontmatter:

```markdown
---
title: Privacy Policy
lastUpdated: December 20, 2025
---

# Privacy Policy

Your content here...
```

## Current Implementation

Currently, pages use `locale = 'en'` hardcoded. To enable multi-language support:

1. **Option 1: URL-based routing** (Recommended)
   - Use Next.js dynamic routes: `app/[locale]/privacy-policy/page.tsx`
   - Detect locale from URL: `/en/privacy-policy`, `/es/privacy-policy`

2. **Option 2: Subdomain-based**
   - Use middleware to detect locale from subdomain
   - `en.emojify-text.inventa-labs.com`, `es.emojify-text.inventa-labs.com`

3. **Option 3: Query parameter**
   - Use query params: `/privacy-policy?lang=es`
   - Less SEO-friendly but simpler to implement

## Example: URL-based Routing

```typescript
// app/[locale]/privacy-policy/page.tsx
export default async function PrivacyPolicy({
  params
}: {
  params: { locale: string }
}) {
  const locale = params.locale || 'en'
  const pageContent = await getPageContent(locale, 'privacy-policy')
  // ...
}
```

## Translation Workflow

1. Create markdown files for new language
2. Translate content maintaining markdown structure
3. Test pages render correctly
4. Update navigation/links to include language switcher
5. Deploy and verify

## Notes

- All markdown files should maintain the same structure
- Links within markdown should use relative paths: `/privacy-policy/`
- Frontmatter is optional but recommended for metadata
- Images and assets are language-agnostic (stored in `public/`)
