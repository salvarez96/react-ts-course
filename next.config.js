/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "randomfox.ca",
        port: '3000',
        pathname: '/images/*',
      },
    ],
  },
}

module.exports = nextConfig
