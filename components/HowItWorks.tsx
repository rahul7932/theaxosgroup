'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Discovery Workshop',
    description:
      'We meet with your stakeholders to understand business goals, existing workflows, and available data.',
  },
  {
    title: 'Opportunity Mapping',
    description:
      'We identify the highest ROI AI use cases and define success metrics, timelines, and resource needs.',
  },
  {
    title: 'Solution Development',
    description:
      'Our team prototypes, tests, and iterates on tailored AI solutions that integrate with your tooling.',
  },
  {
    title: 'Launch & Optimization',
    description:
      'We handle deployment, training, and continuous improvement so your team keeps getting value.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-serif font-bold text-gray-900"
          >
            From idea to production in four steps
          </motion.h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gray-300" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start"
              >
              {/* Step number */}
              <div className="flex-shrink-0 w-16 text-5xl font-serif text-gray-400 text-center">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                {/* Content */}
                <div className="flex-1 pl-6 md:pl-8">
                  <h3 className="text-2xl font-serif font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


