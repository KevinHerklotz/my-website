/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/meeting',
        destination: 'https://calendly.com/kevinherklotz/45min',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
