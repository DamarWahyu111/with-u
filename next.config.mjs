/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/with-u',
  assetPrefix: '/with-u',  // ← TAMBAHKAN INI
  images: {
    unoptimized: true,  // ← TAMBAHKAN INI juga
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig