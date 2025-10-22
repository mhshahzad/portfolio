import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',

    // Optimize images
    images: {
        unoptimized: true,
        formats: ['image/avif', 'image/webp'],
    },

    // Add trailing slash for GitHub Pages compatibility
    trailingSlash: true,

    // Optimize for production
    reactStrictMode: true,

    // Enable SWC minification
    swcMinify: true,

    // Compiler options for better performance
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    // Optimize bundle
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['@heroicons/react'],
    },

    // Optional: Add base path if deploying to a subdirectory
    // basePath: '/portfolio',
};

export default nextConfig;