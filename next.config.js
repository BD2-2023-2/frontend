/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 't2.gstatic.com'
      }
    ]
  }
}

module.exports = nextConfig
