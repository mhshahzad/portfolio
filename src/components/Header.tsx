'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        // Check system preference on mount
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add('dark');
        }

        // Handle scroll
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active section
            const sections = ['home', 'skills', 'experience', 'projects', 'testimonials', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };

    const navItems = [
        {name: 'Skills', href: '#skills'},
        // {name: 'Experience', href: '#experience'},
        // {name: 'Testimonials', href: '#testimonials'},
        {name: 'Projects', href: '#projects'},
        {name: 'Contact', href: '#contact'},
    ];

    return (
        <>
            <motion.header
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md'
                        : 'bg-transparent'
                }`}
                initial={{y: -100}}
                animate={{y: 0}}
                transition={{duration: 0.5}}
            >
                <nav className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center h-14">
                        {/* Logo */}
                        <Link href="/" className="relative group">
                            <motion.span
                                className="text-xl font-bold bg-gradient-to-r from-lime-600 to-emerald-600 dark:from-lime-400 dark:to-emerald-400 bg-clip-text text-transparent"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                            >
                                MH
                            </motion.span>
                            <motion.div
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-lime-600 to-emerald-600 group-hover:w-full transition-all duration-300"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.href.slice(1);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="relative px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-lime-600 dark:hover:text-lime-400 transition-colors font-medium"
                                    >
                                        {item.name}
                                        {isActive && (
                                            <motion.div
                                                className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-lime-600 to-emerald-600"
                                                layoutId="activeSection"
                                                transition={{type: 'spring', stiffness: 380, damping: 30}}
                                            />
                                        )}
                                    </Link>
                                );
                            })}


                            {/* Dark Mode Toggle */}
                            <motion.button
                                onClick={toggleDarkMode}
                                className="ml-1 p-1.5 rounded-lg bg-lime-50 dark:bg-gray-800 hover:bg-lime-100 dark:hover:bg-gray-700 transition-colors"
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                aria-label="Toggle dark mode"
                            >
                                <AnimatePresence mode="wait">
                                    {isDarkMode ? (
                                        <motion.div
                                            key="sun"
                                            initial={{rotate: -90, opacity: 0}}
                                            animate={{rotate: 0, opacity: 1}}
                                            exit={{rotate: 90, opacity: 0}}
                                            transition={{duration: 0.2}}
                                        >
                                            <SunIcon className="w-4 h-4 text-yellow-500"/>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="moon"
                                            initial={{rotate: 90, opacity: 0}}
                                            animate={{rotate: 0, opacity: 1}}
                                            exit={{rotate: -90, opacity: 0}}
                                            transition={{duration: 0.2}}
                                        >
                                            <MoonIcon className="w-4 h-4 text-gray-700"/>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden items-center gap-2">
                            <motion.button
                                onClick={toggleDarkMode}
                                className="p-1.5 rounded-lg bg-lime-50 dark:bg-gray-800"
                                whileTap={{scale: 0.9}}
                                aria-label="Toggle dark mode"
                            >
                                {isDarkMode ? (
                                    <SunIcon className="w-4 h-4 text-yellow-500"/>
                                ) : (
                                    <MoonIcon className="w-4 h-4 text-gray-700"/>
                                )}
                            </motion.button>

                            <motion.button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-1.5 rounded-lg bg-lime-50 dark:bg-gray-800 hover:bg-lime-100 dark:hover:bg-gray-700 transition-colors"
                                whileTap={{scale: 0.9}}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <XMarkIcon className="w-5 h-5 text-gray-700 dark:text-gray-300"/>
                                ) : (
                                    <Bars3Icon className="w-5 h-5 text-gray-700 dark:text-gray-300"/>
                                )}
                            </motion.button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className="md:hidden bg-white dark:bg-gray-900 border-t border-lime-100 dark:border-gray-800"
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: 'auto'}}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration: 0.3}}
                        >
                            <div className="px-4 py-3 space-y-1">
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{delay: index * 0.1}}
                                    >
                                        <Link
                                            href={item.href}
                                            className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-lime-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </motion.header>

        </>
    )
}