"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCode, FiCalendar, FiEye, FiPlay } from 'react-icons/fi'
import { useState } from 'react'
import { staggerContainer, staggerItem } from '@/lib/animations'

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Turkish E-commerce Platform',
      description: 'Turkish-based e-commerce website inspired by Sahibinden.com with customized design and layout. Features marketplace functionality with similar core features, responsive design, and user-friendly interface.',
      image: '/api/placeholder/600/300',
      tech: ['React.js', 'Modern Frontend Technologies', 'Responsive Design'],
      category: 'web',
      status: 'ongoing',
      period: '2024 – Present',
      features: [
        'Marketplace functionality',
        'Responsive design',
        'User-friendly interface',
        'Customized Turkish design'
      ],
      links: {
        live: 'https://turkish-ecommerce-demo.com',
        github: null
      }
    },
    {
      id: 2,
      title: 'TeraBit IT Company Website',
      description: 'Developed and maintained the official website of TeraBit IT Company using modern React practices. Professional corporate website with responsive design and optimized performance.',
      image: '/api/placeholder/600/300',
      tech: ['React.js', 'Modern Development Practices', 'Performance Optimization'],
      category: 'web',
      status: 'completed',
      period: '2024',
      features: [
        'Professional corporate design',
        'Responsive layout',
        'Optimized performance',
        'Modern React practices'
      ],
      links: {
        live: 'https://terabit-company.com',
        github: null
      }
    },
    {
      id: 3,
      title: 'Augmented Reality Admin Panel',
      description: 'Built the Admin Panel for an AR-based web application focusing on dynamic UI components and seamless user management features with AR integration support.',
      image: '/api/placeholder/600/300',
      tech: ['React.js', 'Dynamic UI Components', 'User Management'],
      category: 'admin',
      status: 'completed',
      period: '2024',
      features: [
        'Dynamic UI components',
        'User management system',
        'AR integration support',
        'Admin interface'
      ],
      links: {
        live: null,
        github: null
      }
    },
    {
      id: 4,
      title: 'E-Commerce Store',
      description: 'Full-featured e-commerce store with shopping cart, admin dashboard, user authentication, product reviews, and order tracking functionality.',
      image: '/api/placeholder/600/300',
      tech: ['React.js', 'Redux', 'Tailwind CSS', 'Formik', 'YUP'],
      category: 'ecommerce',
      status: 'completed',
      period: 'Dec 2024 – Jan 2025',
      features: [
        'Shopping cart functionality',
        'Admin dashboard',
        'User authentication',
        'Product reviews & order tracking'
      ],
      links: {
        live: 'https://ecommerce-store-demo.com',
        github: 'https://github.com/junaidali/ecommerce-store'
      }
    },
    {
      id: 5,
      title: 'Tea Station',
      description: 'Product catalog website with responsive UI and mobile-first responsive design implementation. Clean and modern design focusing on user experience.',
      image: '/api/placeholder/600/300',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'web',
      status: 'completed',
      period: 'Aug 2024 – Oct 2024',
      features: [
        'Product catalog',
        'Mobile-first design',
        'Responsive UI',
        'Clean modern layout'
      ],
      links: {
        live: 'https://tea-station-demo.com',
        github: 'https://github.com/junaidali/tea-station'
      }
    },
    {
      id: 6,
      title: 'Organization Task Tracker',
      description: 'Comprehensive task management system with Angular frontend and Laravel backend. Features task creation, assignment, tracking, notifications, role-based access, and team collaboration.',
      image: '/api/placeholder/600/300',
      tech: ['Angular', 'Laravel', 'MySQL', 'PHP'],
      category: 'fullstack',
      status: 'completed',
      period: 'July 2023 – July 2024',
      features: [
        'Task creation & assignment',
        'Progress tracking & notifications',
        'Role-based access control',
        'Team collaboration tools'
      ],
      links: {
        live: null,
        github: null,
        demo: 'https://task-tracker-demo-video.com'
      }
    }
  ]

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'ecommerce', label: 'E-Commerce' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'admin', label: 'Admin Panels' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing':
        return 'bg-blue-100 text-blue-800'
      case 'completed':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <motion.section
      id="projects"
      className="py-20 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and projects, demonstrating my skills in
            modern web development and various technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === category.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 border border-gray-300 hover:border-blue-500 hover:text-blue-600'
              }`}
              variants={staggerItem}
              custom={index}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)" }}
                layout
              >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-6xl text-gray-400">
                  <FiCode />
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status === 'ongoing' ? 'In Progress' : 'Completed'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <FiCalendar className="mr-1" size={14} />
                    {project.period}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2">Key Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1 h-1 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 flex-1 justify-center"
                    >
                      <FiExternalLink className="mr-2" size={14} />
                      Live Demo
                    </a>
                  )}
                  
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-400 transition-all duration-200"
                    >
                      <FiGithub className="mr-2" size={14} />
                      Code
                    </a>
                  )}

                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 border-2 border-green-300 text-green-700 rounded-lg text-sm font-medium hover:border-green-400 transition-all duration-200"
                    >
                      <FiPlay className="mr-2" size={14} />
                      Demo Video
                    </a>
                  )}

                  {!project.links.live && !project.links.github && !project.links.demo && (
                    <div className="flex items-center px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-sm font-medium">
                      <FiEye className="mr-2" size={14} />
                      Private Project
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            I'm always excited to work on new projects and bring innovative ideas to life. 
            Let's discuss how we can collaborate on your next big project!
          </p>
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg transition-all duration-200"
            whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Projects