/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  i18n,
  reactStrictMode: true,
}

module.exports = nextConfig
