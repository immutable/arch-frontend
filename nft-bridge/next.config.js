/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'starknet-ecosystem.com']
  }
}

module.exports = nextConfig
