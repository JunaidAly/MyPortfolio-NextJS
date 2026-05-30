"use client"
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCode, FiCalendar, FiEye, FiPlay } from 'react-icons/fi'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { staggerContainer, staggerItem } from '@/lib/animations'
import CloudinaryVideoPlayer from '@/components/ui/CloudinaryVideoPlayer'

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all')
  const router = useRouter()

  const projects = [
    {
      id: 1,
      title: 'Turkish E-commerce Platform',
      description: 'Turkish-based e-commerce website inspired by Sahibinden.com with customized design and layout. Features marketplace functionality with similar core features, responsive design, and user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop&auto=format',
      videoPublicId: 'online_selling_app_ssogjx',
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
        live: 'https://chimerical-moxie-c1e96e.netlify.app/',
        github: null,
        demo: null
      }
    },
    {
      id: 2,
      title: 'TeraBit IT Company Website',
      description: 'Developed and maintained the official website of TeraBit IT Company using modern React practices. Professional corporate website with responsive design and optimized performance.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=300&fit=crop&auto=format',
      videoPublicId: 'Recording_2025-09-06_145350_z0a0rh', // Add your Cloudinary video public ID here
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
        live: 'https://terabit-site.vercel.app/',
        github: null,
        demo: null
      }
    },
    {
      id: 3,
      title: 'Augmented Reality Admin Panel',
      description: 'Built the Admin Panel for an AR-based web application focusing on dynamic UI components and seamless user management features with AR integration support.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&auto=format',
      videoPublicId: 'Recording_2025-09-13_122233_cypx08',
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
      id: 20,
      title: 'Vidlo – Video Platform Website',
      description: 'Developed a full video platform website using WordPress and a custom theme. Implemented responsive UI, custom page layouts, and plugin integrations with optimized site speed, SEO metadata, and mobile performance.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=300&fit=crop&auto=format',
      videoPublicId: null,
      tech: ['WordPress', 'Custom Theme', 'SEO', 'Responsive Design', 'Plugin Integration'],
      category: 'web',
      status: 'completed',
      period: '2025',
      features: [
        'Full video platform built with WordPress and custom theme',
        'Responsive UI with custom page layouts',
        'Plugin integrations for video delivery',
        'Optimized site speed, SEO metadata, and mobile performance'
      ],
      links: {
        live: 'https://vidlo.video/',
        github: null,
        demo: null
      }
    },
    {
      id: 21,
      title: 'Pro Content Radar – Content Marketing Platform',
      description: 'Built a content marketing and radar platform using WordPress CMS. Customized Elementor layouts with advanced styling and responsiveness, and integrated lead capture forms, analytics, and SEO plugins.',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=300&fit=crop&auto=format',
      videoPublicId: null,
      tech: ['WordPress', 'Elementor', 'SEO Plugins', 'Lead Capture', 'Analytics'],
      category: 'web',
      status: 'completed',
      period: '2025',
      features: [
        'Content marketing platform built on WordPress CMS',
        'Customized Elementor layouts with advanced styling',
        'Lead capture forms and analytics integrations',
        'SEO plugin configuration and on-page optimization'
      ],
      links: {
        live: 'https://procontentradar.com/',
        github: null,
        demo: null
      }
    },
    {
      id: 22,
      title: 'Gifted Curators DC – Art Curation Website',
      description: 'Designed and developed an art curation website using WordPress. Built custom pages with gallery layouts, WooCommerce, and event sections while ensuring cross-browser compatibility, accessibility, and performance tuning.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=300&fit=crop&auto=format',
      videoPublicId: null,
      tech: ['WordPress', 'WooCommerce', 'Gallery Layouts', 'Custom Pages', 'Accessibility'],
      category: 'web',
      status: 'completed',
      period: '2025',
      features: [
        'Art curation site with custom gallery layouts',
        'WooCommerce integration for art sales',
        'Event sections and custom page designs',
        'Cross-browser compatibility, accessibility, and performance tuning'
      ],
      links: {
        live: 'https://giftedcuratorsdc.com/',
        github: null,
        demo: null
      }
    },
    {
      id: 23,
      title: 'Primus Booking – Multi-Platform SaaS Ecosystem',
      description: 'Built a full booking SaaS ecosystem comprising three interconnected platforms: a Customer Portal, a Business Portal, and an Admin Panel. Implemented Supabase Auth (email, Google OAuth, recovery, verification), role-based access control via Next.js middleware, a booking and scheduling system, and a reward points module — all on a scalable Next.js App Router + TypeScript architecture.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop&auto=format',
      videoPublicId: null,
      tech: ['Next.js', 'TypeScript', 'Supabase', 'App Router', 'Tailwind CSS', 'Role-based Access'],
      category: 'fullstack',
      status: 'ongoing',
      period: '2025 – Present',
      features: [
        'Customer, Business, and Admin platforms in one ecosystem',
        'Supabase Auth with email, Google OAuth, recovery & verification',
        'Role-based access control using Next.js middleware',
        'Booking system, scheduling, and reward points module',
        'Scalable architecture with Next.js App Router + TypeScript'
      ],
      links: {
        live: null,
        github: null,
        demo: null
      },
      extraLinks: [
        { label: 'Customer Portal', url: 'https://primus-customer-website.vercel.app/' },
        { label: 'Business Portal', url: 'https://primus-business-website.vercel.app/' },
        { label: 'Admin Panel', url: 'https://primus-admin-dashboard.vercel.app/' },
      ]
    },
    {
      id: 24,
      title: 'SkillBridge – Skill Exchange Platform',
      description: 'A MERN stack application connecting students and teachers for skill exchange. Features AI-powered teacher recommendations using content-based filtering, real-time Socket.IO chat, integrated meeting scheduling, a virtual credit system, and a Python/FastAPI microservice for ML recommendations.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop&auto=format',
      videoPublicId: null,
      tech: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Redux Toolkit', 'Python', 'FastAPI', 'scikit-learn', 'Tailwind CSS', 'JWT', 'Cloudinary'],
      category: 'fullstack',
      status: 'completed',
      period: '2025',
      features: [
        'JWT + 2FA + Google OAuth authentication',
        'Real-time chat with Socket.IO messaging',
        'AI-powered teacher matching via Python/FastAPI + scikit-learn',
        'Meeting scheduler for booking sessions with teachers',
        'Virtual credit system and user skill portfolios with ratings',
        'Email notifications and Cloudinary cloud storage'
      ],
      links: {
        live: 'https://skill-bridge-mern.vercel.app/',
        github: 'https://github.com/JunaidAly/SkillBridge_MERN',
        demo: null
      }
    },
    {
      id: 13,
      title: 'My Sunlight — Landing Page',
      description: 'Responsive landing page built with React.js and Firebase for form handling and hosting. Focused on marketing, email capture, and performance-optimized UX.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=300&fit=crop&auto=format',
      videoPublicId: 'sunshine_updated_d8go2d',
      tech: ['React.js', 'Firebase', 'Tailwind CSS', 'Responsive Design'],
      category: 'web',
      status: 'completed',
      period: '2025',
      features: [
      'Email capture with Firebase (Firestore + Functions)',
      'Fast, SEO-friendly landing content',
      'Responsive design across devices',
      'Optimized assets and performance'
      ],
      links: {
      live: 'https://mysunlight.co/',
      github: null,
      demo: null
      }
    },
    {
      id: 14,
      title: 'My Sunlight — Admin Panel',
      description: 'Admin panel for the My Sunlight landing site. Built with React.js and Firebase (Auth, Firestore) to manage leads, content, and site settings.',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=300&fit=crop&auto=format',
      videoPublicId: 'mysunlight_j58ihg',
      tech: ['React.js', 'Firebase Auth', 'Firestore', 'Tailwind CSS'],
      category: 'admin',
      status: 'completed',
      period: '2025',
      features: [
      'Lead management dashboard connected to Firestore',
      'Role-based access using Firebase Auth',
      'Content management for landing page sections',
      'Real-time updates and basic analytics'
      ],
      links: {
      live: null,
      github: null,
      demo: null
      }
    },
    {
      id: 15,
      title: 'Global Connect — Admin Panel',
      description: 'Admin dashboard for Global Connect built with React.js, Tailwind CSS, Redux and Context API. Provides user & role management, analytics, real-time notifications and integrations for cross-region teams.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop&auto=format',
      videoPublicId: 'globalconnect_fvtcf2',
      tech: ['React.js', 'Tailwind CSS', 'Redux', 'Context API'],
      category: 'admin',
      status: 'completed',
      period: '2024',
      features: [
        'User & role management with granular permissions',
        'Real-time notifications and activity feed',
        'Analytics dashboard with charts and filters',
        'Integrations with external APIs and webhooks'
      ],
      links: {
        live: null,
        github: null,
        demo: null
      }
    },
    {
      id: 16,
      title: 'Xplra App — Admin Panel',
      description: 'Admin panel for Xplra App created using Next.js (App Router), Tailwind CSS, Redux and Context API. Focused on fast server-rendered admin pages, content management and operational workflows.',
      image: 'https://images.unsplash.com/photo-1526378721384-2d6d7f4f1f20?w=600&h=300&fit=crop&auto=format',
      videoPublicId: 'xplra_ixkyii',
      tech: ['Next.js', 'Tailwind CSS', 'Redux', 'Context API', 'App Router'],
      category: 'admin',
      status: 'ongoing',
      period: '2025 – Present',
      features: [
        'App Router-based structure with server and client components',
        'SSR/ISR for performant admin pages',
        'Role-based access control and audit logs',
        'Content, user and settings management workflows'
      ],
      links: {
        live: null,
        github: null,
        demo: null
      }
    },
    {
      id: 17,
      title: 'Wix Greeting Cards Store',
      description: 'A Wix-built online store for selling greeting cards (birthday, friendship, anniversary, and more). Implemented product collections, variant options, a simple checkout flow, and basic SEO and performance optimizations.',
      image: 'https://images.unsplash.com/photo-1505575967455-7e2d9d3d1f3b?w=600&h=300&fit=crop&auto=format',
      videoPublicId: 'sayitincard_zwyxtw',
      tech: ['Wix', 'Wix Stores', 'Responsive Design', 'SEO'],
      category: 'ecommerce',
      status: 'completed',
      period: '2025',
      features: [
        'Product collections for different card categories',
        'Variant options (sizes, finishes)',
        'Integrated Wix checkout and payment providers',
        'Mobile-first responsive storefront and SEO optimizations'
      ],
      links: {
        live: null,
        github: null,
        demo: null
      }
    },
    {
      id: 18,
      title: 'Task Manager App (MERN)',
      description: 'Full-featured task manager built with the MERN stack (MongoDB, Express, React, Node) featuring user authentication, role-based access, real-time updates and a Kanban-style board.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=300&fit=crop&auto=format',
      videoPublicId: 'WhatsApp_Video_2025-10-16_at_17.19.05_6dc31f06_xcdv1e',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO', 'Redux', 'Tailwind CSS'],
      category: 'fullstack',
      status: 'completed',
      period: '2024',
      features: [
        'JWT authentication with refresh tokens',
        'Project & task CRUD with role-based permissions',
        'Real-time task updates and notifications via Socket.IO',
        'Drag-and-drop Kanban board with persistent state',
        'Search, filtering, and activity audit log',
        'REST API with input validation and error handling'
      ],
      links: {
        live: null,
        github: null,
        demo: null
      }
    },
    {
      id: 19,
      title: 'Monetize 360 Global',
      description: 'Client website focused on monetization and ad revenue optimization. Built with React.js and Framer Motion for smooth UI animations, integrated EmailJS for contact/lead forms, fully SEO-optimized and deployed to Hostinger.',
      image: 'https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=600&h=300&fit=crop&auto=format',
      videoPublicId: 'monetize_360_eckdxy',
      tech: ['React.js', 'Framer Motion', 'EmailJS', 'SEO', 'Hostinger', 'Google Ads'],
      category: 'web',
      status: 'completed',
      period: '2025',
      features: [
        'Framer Motion powered animations and transitions',
        'EmailJS integration for contact and lead capture forms',
        'Full on-page SEO, sitemap and Google indexing configuration',
        'Hosted on Hostinger with cPanel deployment',
        'Google Ads integration for monetization and ad placement',
        'Performance and accessibility optimizations for better ranking'
      ],
      links: {
        live: 'https://monetize360.global/',
        github: null,
        demo: null
      }
    },
    {
      id: 4,
      title: 'E-Commerce Store',
      description: 'Full-featured e-commerce store with shopping cart, admin dashboard, user authentication, product reviews, and order tracking functionality.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop&auto=format',
      videoPublicId: 'ecommerce_svds7y',
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
        github: 'https://github.com/JunaidAly/E-Commerce-Website-React-JS.git',
        demo: null
      }
    },
    {
      id: 5,
      title: 'Tea Station',
      description: 'Product catalog website with responsive UI and mobile-first responsive design implementation. Clean and modern design focusing on user experience.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=300&fit=crop&auto=format',
      videoPublicId: 'tea_station_mzvhxi',
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
      videoPublicId: 'Project_Short_Demo_Organization_Task_Tracker_gmgjdr',
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
      image: 'https://www.proofhub.com/articles/wp-content/uploads/2024/08/Task-table-view.jpg.webp',
      videoPublicId: 'todolist_fgfspj',
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
        github: 'https://github.com/JunaidAly/crud-task-api.git',
        demo: null
      }
    },
    {
      id: 8,
      title: 'Attendance Management System',
      description: 'Developed using Frontend (HTML, CSS) and Backend (MongoDB, Express.js, Node.js) for efficient attendance tracking with role-based authentication.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop&auto=format',
      videoPublicId: null,
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
      videoPublicId: null,
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
      videoPublicId: null,
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
      videoPublicId: null,
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
      videoPublicId: null,
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
              {/* Project Image/Video */}
              {project.videoPublicId ? (
                <div className="relative">
                  <CloudinaryVideoPlayer
                    publicId={project.videoPublicId}
                    thumbnail={project.image}
                    title={project.title}
                  />
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status === 'ongoing' ? 'In Progress' : 'Completed'}
                    </span>
                  </div>
                </div>
              ) : (
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
              )}

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

                  {(project as any).extraLinks?.map((link: { label: string; url: string }) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200 justify-center"
                    >
                      <FiExternalLink className="mr-2" size={14} />
                      {link.label}
                    </a>
                  ))}

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

                  {!project.links.live && !project.links.github && !project.links.demo && !(project as any).extraLinks?.length && (
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