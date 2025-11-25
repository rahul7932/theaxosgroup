'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              {/* TODO: Replace with your company name */}
              The Axos Group
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed font-light">
              {/* TODO: Add your company description */}
              Transforming businesses through innovative AI solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {['Services', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} The Axos Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

