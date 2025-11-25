'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-black mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            {/* TODO: Customize this description */}
            Ready to transform your business with AI? Let's talk.
          </p>
        </motion.div>
        
        <div ref={ref} className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 bg-gray-50 border border-gray-200 p-8 text-center"
          >
            <p className="text-gray-600 leading-relaxed font-light">
              {/* TODO: Replace with your company email */}
              Prefer email? Reach out directly and we’ll reply within one business day.
            </p>
            <a
              href="mailto:info@example.com?subject=AI%20Consultancy%20Inquiry"
              className="inline-flex items-center justify-center w-full bg-black text-white px-8 py-4 font-medium text-sm uppercase tracking-wider hover:bg-gray-900 transition-colors duration-200"
            >
              Email Us
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

