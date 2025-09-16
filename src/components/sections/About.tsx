"use client"
import { FiAward, FiBook, FiCode, FiHeart, FiDownload, FiLayers, FiBox } from 'react-icons/fi'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeIn, slideInUp, slideInLeft, slideInRight, staggerContainer, staggerItem, hoverScale, hoverFloat } from '@/lib/animations'

const About: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/My Resume.pdf'
    link.download = 'Junaid_Ali_Resume.pdf'
    link.click()
  }

  const achievements = [
    {
      title: 'React Developer',
      company: 'TeraBit IT Company',
      period: '2024 – Present',
      description: 'Currently working on modern web applications using React.js and Next.js',
      icon: 'FiCode',
    },
    {
      title: 'Full Stack Development',
      company: 'Personal Projects',
      period: '2023 – Present',
      description: 'Built 20+ projects using MERN stack with modern UI/UX designs',
      icon: 'FiLayers',
    },
    {
      title: '3D Web Experiences',
      company: 'Portfolio Innovation',
      period: '2024',
      description: 'Integrated Three.js and React Three Fiber for immersive web experiences',
      icon: 'FiBox',
    },
  ]

  const personalInfo = [
    { label: 'Location', value: 'Islamabad, Pakistan' },
    { label: 'Languages', value: 'English, Urdu' },
    { label: 'Email', value: 'juanidalikhan03@gmail.com' },
    { label: 'Phone', value: '03495328703' },
  ]

  const interests = [
    'Volunteering',
    'Cricket',
    'Football',
    'Swimming',
    'Hiking',
  ]

  const coreStrengths = [
    'Dedication',
    'Problem Solving',
    'Leadership',
  ]

  return (
    <section ref={ref} id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 180, 360] 
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-24 h-24 bg-purple-100 rounded-lg opacity-30"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h2 
            variants={staggerItem}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            About Me
          </motion.h2>
          <motion.div 
            variants={staggerItem}
            className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
          />
          <motion.p 
            variants={staggerItem}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            I'm Junaid Ali, a BS Computer Science graduate from COMSATS University Islamabad, 
            eager to kickstart my career in web development. My core expertise lies in MERN stack 
            (MongoDB, Express.js, React.js, Node.js), and I am passionate about building dynamic 
            and scalable web applications.
          </motion.p>
          
          {/* Download Resume Button */}
          <motion.div 
            variants={staggerItem}
            className="mt-8"
          >
            <motion.button
              onClick={handleDownloadCV}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl shadow-lg space-x-2 relative overflow-hidden"
              {...hoverScale}
              whileHover={{ boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="relative z-10"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <FiDownload size={18} />
              </motion.div>
              <span className="relative z-10">Download Resume</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={slideInUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <div className="relative">
            <motion.div 
              className="w-48 h-48 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <Image
                  src="/myprofile.jpg"
                  alt="Junaid Ali - Profile Picture"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </motion.div>
            {/* Animated decorative elements */}
            <motion.div 
              className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 
              }}
            />
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {/* Left Column */}
          <motion.div 
            className="space-y-8"
            variants={slideInLeft}
          >
            {/* Personal Information */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100"
              {...hoverFloat}
            >
              <motion.h3 
                className="text-xl font-semibold text-gray-900 mb-6 flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiCode className="mr-3 text-blue-600" />
                </motion.div>
                Personal Information
              </motion.h3>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
              >
                {personalInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="flex flex-col p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                    variants={{
                      initial: { opacity: 0, y: 20 },
                      animate: { 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: index * 0.1, duration: 0.3 }
                      }
                    }}
                  >
                    <span className="text-sm font-medium text-gray-500 mb-1">
                      {info.label}
                    </span>
                    <span className="text-gray-900 font-medium">
                      {info.value}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Core Strengths */}
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg border border-blue-100"
              {...hoverFloat}
            >
              <motion.h3 
                className="text-xl font-semibold text-gray-900 mb-6 flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiAward className="mr-3 text-blue-600" />
                </motion.div>
                Core Strengths
              </motion.h3>
              <motion.div 
                className="grid grid-cols-1 gap-3"
                variants={staggerContainer}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
              >
                {coreStrengths.map((strength, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/70 backdrop-blur-sm rounded-lg p-4 border border-blue-200 cursor-pointer"
                    variants={{
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { 
                        opacity: 1, 
                        scale: 1,
                        transition: { delay: index * 0.1, duration: 0.3 }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                    }}
                  >
                    <span className="text-gray-900 font-medium">{strength}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Interests & Hobbies */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100"
              {...hoverFloat}
            >
              <motion.h3 
                className="text-xl font-semibold text-gray-900 mb-6 flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FiHeart className="mr-3 text-blue-600" />
                </motion.div>
                Interests & Hobbies
              </motion.h3>
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={staggerContainer}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
              >
                {interests.map((interest, index) => (
                  <motion.span
                    key={index}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium cursor-pointer"
                    variants={{
                      initial: { opacity: 0, scale: 0 },
                      animate: { 
                        opacity: 1, 
                        scale: 1,
                        transition: { delay: index * 0.1, duration: 0.3 }
                      }
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(59, 130, 246, 0.8)",
                      color: "white"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {interest}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Career Highlights */}
          <motion.div
            variants={slideInRight}
          >
            <motion.div
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg"
              {...hoverFloat}
            >
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-purple-600 p-6"
                whileHover={{
                  backgroundImage: "linear-gradient(to right, #8b5cf6, #ec4899)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-xl font-semibold text-white flex items-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FiAward className="mr-3" />
                  </motion.div>
                  Career Highlights
                </motion.h3>
              </motion.div>

              <motion.div
                className="p-6 space-y-6"
                variants={staggerContainer}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
              >
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className={`relative pb-6 ${
                      index !== achievements.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                    variants={{
                      initial: { opacity: 0, x: 50 },
                      animate: {
                        opacity: 1,
                        x: 0,
                        transition: { delay: index * 0.2, duration: 0.5 }
                      }
                    }}
                    whileHover={{
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {/* Animated Timeline icon */}
                    <motion.div
                      className="absolute left-0 top-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm"
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                      whileHover={{
                        scale: 1.2,
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                        rotate: 360
                      }}
                    >
                      {achievement.icon === 'FiCode' && <FiCode size={16} />}
                      {achievement.icon === 'FiLayers' && <FiLayers size={16} />}
                      {achievement.icon === 'FiBox' && <FiBox size={16} />}
                    </motion.div>

                    <motion.div
                      className="ml-12 cursor-pointer p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.h4
                        className="font-semibold text-lg text-gray-900"
                        whileHover={{ color: "#2563eb" }}
                      >
                        {achievement.title}
                      </motion.h4>
                      <motion.p
                        className="text-blue-600 font-medium"
                        whileHover={{ scale: 1.02 }}
                      >
                        {achievement.company}
                      </motion.p>
                      <motion.span
                        className="text-sm text-gray-600 mt-1 block"
                        whileHover={{ fontWeight: "600" }}
                      >
                        {achievement.period}
                      </motion.span>
                      <motion.p
                        className="text-gray-700 text-sm mt-2 leading-relaxed"
                        whileHover={{ color: "#374151" }}
                      >
                        {achievement.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div 
          className="mt-16"
          variants={slideInUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
            whileHover={{ scale: 1.05 }}
          >
            Certifications
          </motion.h3>
          <motion.div 
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 shadow-lg border border-green-100"
            {...hoverFloat}
            whileHover={{ 
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.2)" 
            }}
          >
            <div className="flex items-start space-x-4">
              <motion.div 
                className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 360,
                  backgroundColor: "#10b981"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ color: "white" }}
                >
                  <FiAward className="text-green-600" size={24} />
                </motion.div>
              </motion.div>
              <motion.div 
                className="flex-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <motion.h4 
                  className="font-semibold text-lg text-gray-900 cursor-pointer"
                  whileHover={{ color: "#10b981", scale: 1.02 }}
                >
                  Freelancing Certification
                </motion.h4>
                <motion.p 
                  className="text-green-600 font-medium"
                  whileHover={{ scale: 1.02 }}
                >
                  DigiSkills Training Program
                </motion.p>
                <motion.p 
                  className="text-gray-600 text-sm mt-1"
                  whileHover={{ fontWeight: "600" }}
                >
                  June 2021 – September 2021 | Certificate ID: KCWNYXBPQ
                </motion.p>
                <motion.p 
                  className="text-gray-700 mt-2 leading-relaxed"
                  whileHover={{ color: "#374151" }}
                >
                  Completed comprehensive freelancing course under Batch-10, 
                  covering essential skills for independent work and client management.
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About