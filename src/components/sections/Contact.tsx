"use client"
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiDownload
} from 'react-icons/fi'
import { staggerContainer, staggerItem } from '@/lib/animations'

const Contact: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/My Resume.pdf'
    link.download = 'Junaid_Ali_Resume.pdf'
    link.click()
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Initialize EmailJS on component mount
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'E3qkJpavCm_7nv8Bw'
    emailjs.init(publicKey)
    console.log('EmailJS initialized with public key:', publicKey)
  }, [])

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'juanidalikhan03@gmail.com',
      href: 'mailto:juanidalikhan03@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '03495328703',
      href: 'tel:+923495328703',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Golden Jublee CHS, Islamabad, Pakistan',
      href: 'https://maps.app.goo.gl/wMNmGKeCBxea9aZm8',
      color: 'from-purple-500 to-violet-500'
    }
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      href: 'https://github.com/junaidali',
      color: 'hover:bg-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/junaidali',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Portfolio',
      icon: FiExternalLink,
      href: '#',
      color: 'hover:bg-purple-600'
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // EmailJS configuration - use the actual values directly
      const serviceId = 'service_v0jnvxb'
      const templateId = 'template_h3dciu9'

      // Template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Junaid Ali', // Your name
      }

      // Send email using EmailJS (already initialized in useEffect)
      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      )

      console.log('Email sent successfully:', result)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated Background Decorations */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
          scale: [1, 1.3, 1],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-lg blur-lg"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 relative z-10"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-block mb-4"
            variants={staggerItem}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 mx-auto"
              whileHover={{
                scale: 1.1,
                rotate: 360,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              <FiMail size={28} />
            </motion.div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
            variants={staggerItem}
            whileHover={{ scale: 1.05 }}
          >
            Let's Connect
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"
            variants={staggerItem}
            animate={{
              scaleX: [1, 1.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>

          <motion.p
            className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
            variants={staggerItem}
          >
            Ready to bring your ideas to life? I'm passionate about creating amazing web experiences
            and would love to discuss your next project. Let's build something incredible together! 🚀
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8 relative z-10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6"
                whileHover={{ scale: 1.02 }}
              >
                Let's Create Something Amazing
              </motion.h3>
              <motion.p
                className="text-gray-600 mb-8 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Whether you have a project in mind, want to collaborate, or just want to say hello,
                I'd love to hear from you. I typically respond within 24 hours with thoughtful insights! ✨
              </motion.p>

              {/* Download Resume Button */}
              <div className="mb-8">
                <motion.button
                  onClick={handleDownloadCV}
                  className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 space-x-3 overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="relative z-10"
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiDownload size={20} />
                  </motion.div>
                  <span className="relative z-10">Download My Resume</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start space-x-5 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 shadow-lg transition-all duration-300 group hover:bg-white/80"
                  variants={staggerItem}
                  custom={index}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <info.icon size={24} />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <motion.h4
                      className="font-bold text-gray-900 mb-2 text-lg"
                      whileHover={{ color: "#2563eb" }}
                    >
                      {info.label}
                    </motion.h4>
                    <motion.p
                      className="text-gray-600 break-all group-hover:text-gray-800 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      {info.value}
                    </motion.p>
                  </div>
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiExternalLink className="text-gray-400 group-hover:text-blue-600" size={20} />
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="font-semibold text-gray-900 mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300`}
                    aria-label={social.name}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-white/30 shadow-2xl relative z-10 overflow-hidden max-h-fit"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Form Background Decoration */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, -180, -360]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.h3
              className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 relative z-10"
              whileHover={{ scale: 1.02 }}
            >
              Send Me a Message 💬
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 mb-0 flex flex-col">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your full name"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                    }}
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-gray-400" />
                  </div>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your email address"
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                    }}
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="block w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  placeholder="What's this about?"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                  }}
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                  </div>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none bg-white/80 backdrop-blur-sm"
                    placeholder="Tell me about your project or just say hello..."
                    whileFocus={{
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                    }}
                  ></motion.textarea>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl overflow-hidden group"
                whileHover={{
                  scale: 1.02,
                  y: -3,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative z-10 flex items-center space-x-3">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending Magic...</span>
                    </>
                  ) : (
                    <>
                      <motion.div
                        whileHover={{ rotate: -10, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiSend size={20} />
                      </motion.div>
                      <span>Send Message ✨</span>
                    </>
                  )}
                </div>
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 text-green-700 shadow-lg"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white"
                    >
                      ✓
                    </motion.div>
                    <p className="font-medium">Message sent successfully! I'll get back to you soon. 🎉</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-2xl p-6 text-red-700 shadow-lg"
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white"
                    >
                      !
                    </motion.div>
                    <p className="font-medium">Something went wrong. Please try again or contact me directly. 😔</p>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Quick Response Promise */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-center relative overflow-hidden shadow-2xl"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(59, 130, 246, 0.3)"
            }}
          >
            {/* Background decorations */}
            <motion.div
              className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-3xl">⚡</span>
              </motion.div>

              <motion.h3
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Lightning Fast Response ⚡
              </motion.h3>

              <motion.p
                className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                I understand that time is valuable. I commit to responding to all messages within
                <span className="font-bold text-yellow-300"> 24 hours</span>, usually much sooner!
                Let's discuss how we can work together to bring your ideas to life! 🚀
              </motion.p>

              <motion.div
                className="flex justify-center items-center space-x-8 mt-8"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                {['💼', '🎨', '⚡', '🚀'].map((emoji, index) => (
                  <motion.div
                    key={index}
                    className="text-3xl"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {emoji}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact