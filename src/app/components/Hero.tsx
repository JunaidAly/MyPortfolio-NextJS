"use client"
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FiDownload, FiExternalLink, FiGithub, FiLinkedin } from 'react-icons/fi'

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    'React Developer',
    'MERN Stack Developer',
    'Frontend Developer',
    'Web Developer',
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
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-blue-600 font-medium tracking-wide uppercase">
                Welcome to my portfolio
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Junaid Ali
                </span>
              </h1>
              <div className="text-2xl md:text-3xl text-gray-700">
                I'm a{' '}
                <span className="text-blue-600 font-semibold typing-animation">
                  {roles[currentRole]}
                </span>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                BS Computer Science graduate from COMSATS University Islamabad, passionate about 
                building dynamic and scalable web applications using the MERN stack. Currently 
                working as a React Developer at TeraBit IT Company.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleContactScroll}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get In Touch</span>
                <FiExternalLink size={18} />
              </button>
              <button
                onClick={handleDownloadCV}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <FiDownload size={18} />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/junaidali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-all duration-200"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/junaidali"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">8+</div>
                <div className="text-sm text-gray-600">Months Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">6+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2.74</div>
                <div className="text-sm text-gray-600">CGPA</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl transform -rotate-6 opacity-20"></div>
              
              {/* Profile Image Container */}
              <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
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
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  React
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  MERN
                </div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                  JS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero