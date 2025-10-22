'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Dynamically import components to enable code-splitting
const Header = dynamic(() => import('@/components/Header'), { ssr: true });
const Hero = dynamic(() => import('@/components/Hero'), { ssr: true });
const Skills = dynamic(() => import('@/components/SkillsDisplay'), { ssr: true });
const Experience = dynamic(() => import('@/components/ExperienceEducationSection'), { ssr: true });
const Projects = dynamic(() => import('@/components/Projects'), { ssr: true });
// const GitHubStats = dynamic(() => import('@/components/GitHubActivity'), { ssr: false });
// const Testimonials = dynamic(() => import('@/components/TestimonialsSlider'), { ssr: true });
// const Blog = dynamic(() => import('@/components/BlogInsights'), { ssr: true });
// const ResumeDownload = dynamic(() => import('@/components/ResumeDownload'), { ssr: true });
// const Newsletter = dynamic(() => import('@/components/NewsletterSubscription'), { ssr: true });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: true });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
const BackToTop = dynamic(() => import('@/components/BackToTopButton'), { ssr: false });

export default function Home() {
    // Add smooth scrolling for anchor links
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Smooth scroll to anchor links
            const handleAnchorClick = (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
                    e.preventDefault();
                    const targetId = target.getAttribute('href');
                    if (targetId) {
                        const element = document.querySelector(targetId);
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                    }
                }
            };

            document.addEventListener('click', handleAnchorClick);
            return () => document.removeEventListener('click', handleAnchorClick);
        }
    }, []);

    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
            <Header />
            <main className="flex-grow">
                <Hero />
                <Skills />
                {/*<Experience />*/}
                <Projects />
                {/*<GitHubStats />*/}
                {/*<Testimonials />*/}
                {/*<ResumeDownload />*/}
                {/*<Blog />*/}
                {/*<Newsletter />*/}
                <Contact />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}