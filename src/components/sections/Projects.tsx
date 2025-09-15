"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCode, FiCalendar, FiEye, FiPlay } from 'react-icons/fi'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { staggerContainer, staggerItem } from '@/lib/animations'

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all')
  const router = useRouter()

  const projects = [
    {
      id: 1,
      title: 'Turkish E-commerce Platform',
      description: 'Turkish-based e-commerce website inspired by Sahibinden.com with customized design and layout. Features marketplace functionality with similar core features, responsive design, and user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop&auto=format',
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
        github: null,
        demo: null
      }
    },
    {
      id: 2,
      title: 'TeraBit IT Company Website',
      description: 'Developed and maintained the official website of TeraBit IT Company using modern React practices. Professional corporate website with responsive design and optimized performance.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop&auto=format',
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
        github: null,
        demo: null
      }
    },
    {
      id: 3,
      title: 'Augmented Reality Admin Panel',
      description: 'Built the Admin Panel for an AR-based web application focusing on dynamic UI components and seamless user management features with AR integration support.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&auto=format',
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
        github: null,
        demo: null
      }
    },
    {
      id: 4,
      title: 'E-Commerce Store',
      description: 'Full-featured e-commerce store with shopping cart, admin dashboard, user authentication, product reviews, and order tracking functionality.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop&auto=format',
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
        live: 'https://capable-torrone-467511.netlify.app/',
        github: 'https://github.com/junaidali/ecommerce-store',
        demo: null
      }
    },
    {
      id: 5,
      title: 'Tea Station',
      description: 'Product catalog website with responsive UI and mobile-first responsive design implementation. Clean and modern design focusing on user experience.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=300&fit=crop&auto=format',
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
        live: 'https://snazzy-syrniki-96c61e.netlify.app/',
        github: 'https://github.com/junaidali/tea-station',
        demo: null
      }
    },
    {
      id: 6,
      title: 'Organization Task Tracker',
      description: 'Comprehensive task management system with Angular frontend and Laravel backend. Features task creation, assignment, tracking, notifications, role-based access, and team collaboration.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop&auto=format',
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
        live: 'https://www.youtube.com/watch?v=uwpQyfTYeJ0',
        github: null,
        demo: null
      }
    },
    {
      id: 7,
      title: 'Task Management App (MEAN Stack)',
      description: 'Built using the MEAN Stack (MongoDB, Express.js, Angular, Node.js) for seamless task tracking with advanced user management and analytics.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop&auto=format',
      tech: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
      category: 'fullstack',
      status: 'completed',
      period: '2023',
      features: [
        'User authentication & role-based access control',
        'Task creation, assignment & real-time updates',
        'Interactive dashboard with analytics'
      ],
      links: {
        live: null,
        github: 'https://github.com/JunaidAly/crud-task-fe.git',
        demo: null
      }
    },
    {
      id: 8,
      title: 'Attendance Management System',
      description: 'Developed using Frontend (HTML, CSS) and Backend (MongoDB, Express.js, Node.js) for efficient attendance tracking with role-based authentication.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop&auto=format',
      tech: ['HTML', 'CSS', 'MongoDB', 'Express.js', 'Node.js'],
      category: 'fullstack',
      status: 'completed',
      period: '2023',
      features: [
        'Role-based user authentication (Admin, Teacher, Student)',
        'Automated attendance tracking with real-time updates',
        'Detailed reports & analytics for attendance monitoring'
      ],
      links: {
        live: null,
        github: 'https://github.com/JunaidAly/Attendance-Management-System.git',
        demo: null
      }
    },
    {
      id: 9,
      title: 'Cargo Booking System',
      description: 'Developed using Laravel, this system streamlines the process of managing and scheduling cargo shipments efficiently with comprehensive logistics coordination.',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=300&fit=crop&auto=format',
      tech: ['Laravel', 'PHP', 'MySQL'],
      category: 'fullstack',
      status: 'completed',
      period: '2023',
      features: [
        'Real-time cargo tracking & shipment management',
        'Seamless integration with payment gateways',
        'Automated notifications & detailed reporting',
        'Route optimization for efficient logistics coordination'
      ],
      links: {
        live: null,
        github: 'https://github.com/JunaidAly/Cargo_Booking_System_in_Laravel.git',
        demo: null
      }
    },
    {
      id: 10,
      title: 'Veterinary Management System',
      description: 'This project explores fundamental concepts of Object-Oriented Programming (OOP) in Java. Implements core Java features to enhance understanding and practical application.',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=300&fit=crop&auto=format',
      tech: ['Java', 'OOP', 'GUI', 'File Handling'],
      category: 'desktop',
      status: 'completed',
      period: '2023',
      features: [
        'File Handling for data storage & retrieval',
        'Exception Handling to manage runtime errors',
        'Graphical User Interface (GUI) implementation in Java',
        'Practical demonstration of OOP principles'
      ],
      links: {
        live: null,
        github: 'https://github.com/JunaidAly/Veterinary_Management_System_in_Java_OOP.git',
        demo: null
      }
    },
    {
      id: 11,
      title: 'Contract Management System',
      description: 'A desktop application built with C# in Visual Studio for managing contracts efficiently. The system enables CRUD operations with a MySQL database.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop&auto=format',
      tech: ['C#', 'Visual Studio', 'MySQL', 'WinForms'],
      category: 'desktop',
      status: 'completed',
      period: '2023',
      features: [
        'Create, Read, Update, and Delete (CRUD) contracts',
        'MySQL database integration for secure data storage',
        'User-friendly C# Windows Forms (WinForms) interface',
        'Data validation & exception handling'
      ],
      links: {
        live: null,
        github: 'https://github.com/JunaidAly/Contract_management_system_in_c-_desktop_app.git',
        demo: null
      }
    },
    {
      id: 12,
      title: 'Mobile Applications (React Native)',
      description: 'Developed multiple mobile applications using React Native, providing cross-platform compatibility for both Android and iOS with high performance and responsive UI.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=300&fit=crop&auto=format',
      tech: ['React Native', 'JavaScript', 'Cross-platform'],
      category: 'mobile',
      status: 'completed',
      period: '2023',
      features: [
        'Cross-platform apps for Android & iOS',
        'API integration for real-time data fetching',
        'Smooth UI/UX with custom components',
        'Performance optimization for fast and efficient execution'
      ],
      links: {
        live: null,
        github: 'https://github.com/JunaidAly/Mobile-Application-Development.git',
        demo: null
      }
    }
  ]

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Apps' },
    { key: 'ecommerce', label: 'E-Commerce' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'admin', label: 'Admin Panels' },
    { key: 'desktop', label: 'Desktop Apps' },
    { key: 'mobile', label: 'Mobile Apps' },
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
            onClick={() => router.push('/contact')}
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