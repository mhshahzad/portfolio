'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials_data';
import { useState } from 'react';
import { 
  ChevronLeftIcon, 
  ChevronRightIcon,
  StarIcon,
    PencilIcon
} from '@heroicons/react/24/solid';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection;
      if (newIndex < 0) newIndex = testimonials.length - 1;
      if (newIndex >= testimonials.length) newIndex = 0;
      return newIndex;
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-lime-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-lime-100 dark:border-gray-700"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-full">
                  <PencilIcon className="w-8 h-8 text-white transform rotate-180" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-6 h-6 ${
                      i < currentTestimonial.rating 
                        ? 'text-yellow-400' 
                        : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 text-center mb-8 leading-relaxed font-medium">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Author Info */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                  {currentTestimonial.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {currentTestimonial.position} at {currentTestimonial.company}
                </p>
                {currentTestimonial.projectType && (
                  <p className="text-sm text-lime-600 dark:text-lime-400 mt-2">
                    Project: {currentTestimonial.projectType}
                  </p>
                )}
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  {currentTestimonial.date}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
          
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'w-8 bg-gradient-to-r from-lime-500 to-emerald-500' 
                  : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Metrics */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
              50+
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Happy Clients</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
              5.0
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
              100%
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Satisfaction</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold bg-gradient-to-r from-lime-600 to-emerald-600 bg-clip-text text-transparent">
              80%
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Repeat Clients</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
