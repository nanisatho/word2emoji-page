const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  // Code splitting
  experimental: {
    optimizePackageImports: ['firebase', 'next-intl'],
  },
}

module.exports = withNextIntl(nextConfig)
