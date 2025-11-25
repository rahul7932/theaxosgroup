'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LogoSlider() {
  const logos = [
    { name: 'AWS', path: '/logos/amazon.png' },
    { name: 'Atlassian', path: '/logos/atlassian.png' },
    { name: 'Cal', path: '/logos/cal.png' },
    { name: 'Cisco', path: '/logos/cisco.png' },
    { name: 'Meta', path: '/logos/meta.png' },
  ]

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 font-light">
            Built by engineers from the best
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex logo-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ width: '200px', height: '100px' }}
              >
                <div className="relative w-full h-full grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                  <Image
                    src={logo.path}
                    alt={logo.name}
                    width={200}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes logo-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .logo-scroll {
          animation: logo-scroll 30s linear infinite;
          display: flex;
          width: fit-content;
        }
      `}</style>
    </section>
  )
}

