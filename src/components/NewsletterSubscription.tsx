'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  EnvelopeIcon, 
  CheckCircleIcon,
  SparklesIcon,
  BellAlertIcon
} from '@heroicons/react/24/outline';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call - Replace with actual newsletter service integration
    // Example: Mailchimp, ConvertKit, SendGrid, etc.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail('');

      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1500);

    // Real implementation example:
    // try {
    //   const response = await fetch('/api/newsletter', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email }),
    //   });
    //   
    //   if (response.ok) {
    //     setIsSubscribed(true);
    //     setEmail('');
    //   } else {
    //     setError('Something went wrong. Please try again.');
    //   }
    // } catch (err) {
    //   setError('Failed to subscribe. Please try again later.');
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-lime-500 to-emerald-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <BellAlertIcon className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to my newsletter for the latest articles, tutorials, and insights on web development.
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: SparklesIcon, text: 'Weekly tips & tricks' },
              { icon: EnvelopeIcon, text: 'Exclusive content' },
              { icon: CheckCircleIcon, text: 'No spam, ever' },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center gap-2 text-white/90"
              >
                <benefit.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Subscription Form */}
          {!isSubscribed ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="max-w-md mx-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
                    disabled={isSubmitting}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-lime-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Subscribing...
                    </span>
                  ) : (
                    'Subscribe'
                  )}
                </motion.button>
              </div>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-sm text-red-200"
                >
                  {error}
                </motion.p>
              )}
              <p className="mt-4 text-sm text-white/70">
                Join 2,500+ developers receiving weekly updates
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8">
                <CheckCircleIcon className="w-16 h-16 text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  You're Subscribed!
                </h3>
                <p className="text-white/90">
                  Thank you for subscribing! Check your email for a confirmation message.
                </p>
              </div>
            </motion.div>
          )}

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-6 text-white/80"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-white font-semibold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">2,500+ subscribers</p>
              <p className="text-xs text-white/70">Join the community</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
