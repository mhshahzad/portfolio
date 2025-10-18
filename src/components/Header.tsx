import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-dark transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
