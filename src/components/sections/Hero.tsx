"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FiDownload, FiExternalLink, FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { fadeIn, slideInLeft, slideInRight, staggerContainer, staggerItem, hoverScale, hoverFloat } from '@/lib/animations'
import AnimatedText from '@/components/ui/AnimatedText'
import ParticleBackground from '@/components/ui/ParticleBackground'
import { useRef } from 'react'

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const roles = [
    'React Developer',
    'MERN Stack Developer',
    'Frontend Developer',
    'Full Stack Developer',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/My Resume.pdf'
    link.download = 'Junaid_Ali_Resume.pdf'
    link.click()
  }

  const handleContactScroll = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated geometric shapes */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360] 
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-16 h-16 bg-purple-400/10 rounded-lg"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -180, -360] 
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            variants={slideInLeft}
          >
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
            >
              <motion.div 
                variants={staggerItem}
                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full"
              >
                <span className="text-sm text-blue-600 font-medium tracking-wide uppercase">
                  Welcome to my portfolio
                </span>
              </motion.div>
              
              <motion.div variants={staggerItem}>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Hi, I'm{' '}
                  <AnimatedText 
                    text="Junaid Ali"
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
                    delay={0.3}
                  />
                </h1>
              </motion.div>

              <motion.div 
                variants={staggerItem}
                className="text-2xl md:text-3xl text-gray-700"
              >
                I'm a{' '}
                <motion.span 
                  key={currentRole}
                  className="text-blue-600 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[currentRole]}
                </motion.span>
              </motion.div>

              <motion.p 
                variants={staggerItem}
                className="text-lg text-gray-600 leading-relaxed max-w-2xl"
              >
                BS Computer Science graduate from COMSATS University Islamabad, passionate about 
                building dynamic and scalable web applications using the MERN stack. Currently 
                working as a React Developer at TeraBit IT Company.
              </motion.p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={handleContactScroll}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-lg flex items-center justify-center space-x-2 relative overflow-hidden"
                {...hoverScale}
                whileHover={{ boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Get In Touch</span>
                <motion.div
                  className="relative z-10"
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiExternalLink size={18} />
                </motion.div>
              </motion.button>
              
              <motion.button
                onClick={handleDownloadCV}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-medium rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                {...hoverScale}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiDownload size={18} />
                </motion.div>
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={staggerItem}
              className="flex space-x-6"
            >
              <motion.a
                href="https://github.com/JunaidAly"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg"
                aria-label="GitHub"
                {...hoverFloat}
              >
                <FiGithub size={22} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/junaid-ali-8679871ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg"
                aria-label="LinkedIn"
                {...hoverFloat}
              >
                <FiLinkedin size={22} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={staggerItem}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { number: "8+", label: "Months Experience" },
                { number: "6+", label: "Projects Completed" },
                { number: "2.74", label: "CGPA" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div 
                    className="text-2xl font-bold text-gray-900"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div 
            className="relative"
            variants={slideInRight}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Animated Background Decorations */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl opacity-20"
                animate={{ 
                  rotate: [6, -6, 6],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl opacity-20"
                animate={{ 
                  rotate: [-6, 6, -6],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              {/* Profile Image Container */}
              <motion.div 
                className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-inner">
                  <Image
                    src="/myprofile.jpg"
                    alt="Junaid Ali - Profile Picture"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                
                {/* Animated Floating Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 180, 360] 
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  React
                </motion.div>
                <motion.div 
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -180, -360] 
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  MERN
                </motion.div>
                <motion.div 
                  className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg"
                  animate={{ 
                    x: [0, -5, 0],
                    y: [0, -8, 0] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  JS
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div 
            className="flex flex-col items-center text-gray-600"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FiArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero