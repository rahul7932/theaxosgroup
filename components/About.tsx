'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
              {/* TODO: Replace with your company&apos;s story */}
              With 10+ years of AI/software experience, we are a team of seasoned engineers looking to deliver
              bespoke AI solutions to American businesses. We believe that AI should be accessible and actionable for
              all businesses and want to help companies embrace the power of automation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We&rsquo;ve built software at the world&rsquo;s biggest companies &mdash; now we want to help you do the same.
              We&rsquo;ll work with you every step of the way to understand how we can use AI technology to help
              you achieve your business goals. We guarantee that we&rsquo;ll deliver something that works in two weeks or less.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-400"
            >
              &mdash; Rahul Kumar, CEO of Axos Group
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

