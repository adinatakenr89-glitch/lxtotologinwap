/** @type {import('next').NextConfig} */
const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';
const repo = 'lxtotologinwap';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGhPages ? `/${repo}` : '',
  assetPrefix: isGhPages ? `/${repo}/` : '',
};

module.exports = nextConfig;
