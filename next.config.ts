import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Add trailing slash for GitHub Pages compatibility
  trailingSlash: true,
  // Optional: Add base path if deploying to a subdirectory
  // basePath: '/portfolio',
};

export default nextConfig;
