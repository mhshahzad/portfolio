'use client';

import { motion } from 'framer-motion';
import { blogPosts } from '@/data/BlogPostData';
import { 
  ClockIcon, 
  TagIcon,
  ArrowRightIcon,
  BookOpenIcon,
  FireIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-lime-100 dark:bg-lime-900/30 rounded-full">
            <BookOpenIcon className="w-5 h-5 text-lime-600 dark:text-lime-400" />
            <span className="text-sm font-medium text-lime-700 dark:text-lime-300">
              Latest Articles
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog & Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Thoughts on web development, programming, and technology
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-xl font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-lime-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-lime-50 to-emerald-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl overflow-hidden shadow-xl border-2 border-lime-200 dark:border-gray-700">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <FireIcon className="w-6 h-6 text-orange-500" />
                  <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-semibold">
                    Featured Post
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredPost.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                  <span>{featuredPost.date}</span>
                  <span className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                  <span className="px-3 py-1 bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-lime-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Read Full Article
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter(post => !post.featured || selectedCategory !== 'All').map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all group"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-lime-100 to-emerald-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center overflow-hidden">
                <BookOpenIcon className="w-16 h-16 text-lime-600 dark:text-lime-400 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-lime-600 dark:group-hover:text-lime-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-xs"
                    >
                      <TagIcon className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-lime-600 dark:text-lime-400 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read more
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:shadow-xl transition-all"
          >
            View All Articles
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
