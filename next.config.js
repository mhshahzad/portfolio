/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Remove basePath and assetPrefix for custom domain
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Enable path aliases from tsconfig
  webpack: (config) => {
    // This resolves the path alias issue
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
    };
    return config;
  },
  // Ensure CSS is properly loaded
  experimental: {
    optimizeCss: true,
  },
  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
