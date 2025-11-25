'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-8">
              About Us
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                {/* TODO: Replace with your company's story */}
                With 10+ years of AI/software experience, we are a team of seasoned engineers looking to deliver
                bespoke AI solutions to American businesses. We believe that AI should be accessible and actionable for
                all businesses and want to help companies embraces the power of automation. 
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                We've built software at the worlds biggest companies - now we want to help you do the same. 
                We'll work with you every step of the way to understand how we can be use AI technology to help
                you achieve your business goals. We guarantee that we'll deliver something that works in 2 weeks or less.        
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >- Rahul Kumar, CEO of Axos Group</motion.p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-900 border border-gray-800 p-8 h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center">
                {/* TODO: Add an image or visual element here */}
                [Image or visual element placeholder]
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

