'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Services() {
  const services = [
    {
      title: 'Workflow Automation',
      description: 'Use AI to automate your repetitive business workflows and focus on what really matters.',
    },
    {
      title: 'AI-Powered Insights',
      description: 'Get AI-powered insights to help you make better decisions and improve your business.',
    },
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
    },
  
    {
      title: 'AI Training & Support',
      description: 'Use AI to upskill your employees and train new hires faster.',
    },
    {
      title: 'Full Stack Development',
      description: 'We deliver a standalone application that works out of the box and is fully owned by your business.',
    },
    {
      title: 'Custom Support',
      description: 'Our team will build bespoke solutions for your specific needs and work with you to implement them.',
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            {/* TODO: Customize this description */}
            Comprehensive AI solutions to drive your business forward.
          </p>
        </motion.div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index, isInView }: { service: any, index: number, isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="p-8 border border-gray-200 hover:border-black transition-colors duration-200"
    >
      <h3 className="text-xl font-serif font-semibold text-black mb-4">
        {service.title}
      </h3>
      <p className="text-gray-600 leading-relaxed font-light">
        {service.description}
      </p>
    </motion.div>
  )
}

