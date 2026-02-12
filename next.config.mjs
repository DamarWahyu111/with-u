/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/with-u',
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
