/** @type {import('next').NextConfig} */
const nextConfig = {
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
    BACKEND_URL: "http://localhost:3333"
  },
  // images: {
  //   domains: ['localhost']
  // }
}

module.exports = nextConfig
