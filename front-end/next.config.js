/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
  compiler: {
    styledComponents: true
  },
  env: {
    BACKEND_URL: "https://db-tecnologia.herokuapp.com"
  }
}

module.exports = nextConfig
