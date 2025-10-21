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
  // Disable image optimization for static export
  output: 'export',
  // Add custom webpack configuration
  webpack: (config, { isServer }) => {
    // This resolves the path alias issue
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname, './src'),
    };
    
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
  // Disable CSS optimization for static export
  experimental: {
    optimizeCss: false, // Disable critters for now
  },
  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  // Disable React strict mode during export
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
