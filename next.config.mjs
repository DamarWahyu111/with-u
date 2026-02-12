/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  outdir: 'docs',
  basePath: '/with-u',
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
