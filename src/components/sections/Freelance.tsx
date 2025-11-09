"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiBriefcase, FiStar, FiTrendingUp } from 'react-icons/fi'
import { staggerContainer, staggerItem } from '@/lib/animations'

const Freelance: React.FC = () => {
  const platforms = [
    {
      id: 1,
      name: 'Fiverr',
      url: 'https://www.fiverr.com/s/VYK4Ag5',
      logo: 'https://cdn.worldvectorlogo.com/logos/fiverr-1.svg',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      description: 'Professional gigs in web development and full-stack solutions',
      stats: {
        icon: FiStar,
        label: 'Top Rated Services'
      }
    },
    {
      id: 2,
      name: 'Upwork',
      url: 'https://www.upwork.com/freelancers/~018161b863407dcb92?mp_source=share',
      logo: 'https://cdn.worldvectorlogo.com/logos/upwork-1.svg',
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      description: 'Expert freelancer for React, Next.js, and MERN stack projects',
      stats: {
        icon: FiTrendingUp,
        label: 'Rising Talent'
      }
    },
    {
      id: 3,
      name: 'Freelancer',
      url: 'https://www.freelancer.com/u/juanidalikhan03?frm=juanidalikhan03&sb=t',
      logo: 'https://cdn.worldvectorlogo.com/logos/freelancer-1.svg',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      description: 'Delivering quality web applications and custom solutions',
      stats: {
        icon: FiBriefcase,
        label: 'Professional Projects'
      }
    },
    {
      id: 4,
      name: 'Guru',
      url: 'https://www.guru.com/freelancers/junaid-ali-39',
      logo: 'https://cdn.worldvectorlogo.com/logos/guru.svg',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      description: 'Full-stack development with modern technologies and best practices',
      stats: {
        icon: FiStar,
        label: 'Verified Expert'
      }
    }
  ]

  return (
    <motion.section
      id="freelance"
      className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Decorations */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            variants={staggerItem}
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg">
              Hire Me On
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
            variants={staggerItem}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Freelance Platforms
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            Available for hire on top freelancing platforms. Let's collaborate and bring your ideas to life!
          </motion.p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative p-6 md:p-8">
                {/* Platform Logo */}
                <div className="mb-6">
                  <div className="w-full h-16 flex items-center justify-center mb-4">
                    <img
                      src={platform.logo}
                      alt={`${platform.name} logo`}
                      className="h-12 w-auto object-contain"
                      onError={(e) => {
                        // Fallback if logo fails to load
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = `<div class="w-16 h-16 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg">${platform.name.charAt(0)}</div>`
                        }
                      }}
                    />
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 flex items-center justify-center gap-2 ${platform.textColor}`}>
                    {platform.name}
                    <FiExternalLink className="text-lg opacity-60 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6 text-center line-clamp-3">
                  {platform.description}
                </p>

                {/* Stats Badge */}
                <div className="flex justify-center">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 ${platform.bgColor} rounded-lg`}>
                    <platform.stats.icon className={platform.textColor} size={16} />
                    <span className="text-xs font-semibold text-gray-700">
                      {platform.stats.label}
                    </span>
                  </div>
                </div>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 45 }}
                >
                  <FiExternalLink size={20} />
                </motion.div>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${platform.color} opacity-5 rounded-bl-full`} />
            </motion.a>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm available for freelance work on all platforms. Choose your preferred platform and let's discuss your project requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me Directly
              </motion.a>
              <motion.a
                href="/projects"
                className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-full shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Freelance
