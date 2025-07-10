/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    domains: [
      'images.unsplash.com',
      'a.storyblok.com',
    ],
  },
}

module.exports = nextConfig
