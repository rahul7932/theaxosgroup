'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 text-black leading-tight"
          >
            Custom AI solutions built for your business
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            {/* TODO: Replace with your value proposition */}
            We build customized AI solutions to help you speed up your repetitive business workflows and focus on what really matters.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="#contact"
              className="bg-black text-white px-10 py-4 font-medium text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors duration-200"
            >
              Get Started
            </Link>
            <Link
              href="#services"
              className="bg-transparent border border-black text-black px-10 py-4 font-medium text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all duration-200"
            >
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

