/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  basePath: '/clickang.github.io',
  assetPrefix: '/clickang.github.io/',
};

export default nextConfig;