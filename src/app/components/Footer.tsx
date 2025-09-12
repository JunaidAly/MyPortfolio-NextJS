"use client"
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiHeart } from 'react-icons/fi'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/junaidali',
      icon: FiGithub,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/junaidali',
      icon: FiLinkedin,
    },
    {
      name: 'Email',
      href: 'mailto:juanidalikhan03@gmail.com',
      icon: FiMail,
    },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                JA
              </div>
              <span className="font-bold text-xl">Junaid Ali</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              MERN Stack Developer passionate about creating dynamic and scalable web applications. 
              Currently working as a React Developer with expertise in modern web technologies.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <FiMapPin size={14} />
                <span>Islamabad, Pakistan</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone size={14} />
                <span>03495328703</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMail size={14} />
                <span>juanidalikhan03@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-200"
                  aria-label={link.name}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Feel free to reach out for opportunities or collaborations!
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} Junaid Ali. Made with{' '}
            <FiHeart className="text-red-500 mx-1" size={14} />{' '}
            using Next.js & Tailwind CSS
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Last updated: September 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer