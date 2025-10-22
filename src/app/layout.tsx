import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';


// Load Inter font with modern features and optimizations
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  adjustFontFallback: false,
  preload: true,
});

// Add font variables for Tailwind
const fontVariables = `${inter.variable} font-sans`;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export const metadata: Metadata = {
    title: 'Muhammad Hamza Shahzad | Portfolio',
    description: 'Personal portfolio showcasing my projects and skills',
    keywords: ['portfolio', 'web developer', 'frontend', 'react', 'next.js'],
    authors: [{name: 'Muhammad Hamza Shahzad'}],
    openGraph: {
        title: 'Muhammad Hamza Shahzad | Portfolio',
        description: 'Personal portfolio showcasing my projects and skills',
        type: 'website',
        locale: 'en_US',
        url: 'https://mhshahzad.tech',
        siteName: 'Muhammad Hamza Shahzad Portfolio',
    },
    // Twitter card uses OpenGraph data by default
    twitter: {
        card: 'summary_large_image',
        title: 'Muhammad Hamza Shahzad | Portfolio',
        description: 'Personal portfolio showcasing my projects and skills',
    },
}

interface RootLayoutProps {
  children: React.ReactNode;
}

// This is a client component that wraps the app with LanguageProvider
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVariables} min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-200`}>
          <div className="flex min-h-screen flex-col">
            {children}
          </div>
      </body>
    </html>
  );
}
