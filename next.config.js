/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['press.hulu.com', 'image.tmdb.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'press.hulu.com',
        port: '',
        pathname: '/wp-content/uploads/2020/02/hulu-white.png'
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '*'
      }
    ]
  }
}

module.exports = nextConfig;