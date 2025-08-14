/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'el-pais-uruguay-production-web.s3.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig