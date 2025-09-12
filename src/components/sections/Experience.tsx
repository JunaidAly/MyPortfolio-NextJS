"use client"
import { FiBriefcase, FiMapPin, FiCalendar, FiCheckCircle } from 'react-icons/fi'

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'React Developer',
      company: 'TeraBit IT Company',
      location: 'Onsite',
      period: '2024 – Present (5+ months)',
      type: 'Full-time',
      status: 'Current Position',
      responsibilities: [
        'Currently working as a React Developer on various projects',
        'Developed and maintained the official website of TeraBit IT Company using modern React practices',
        'Built the Admin Panel for an AR-based web application, focusing on dynamic UI components and seamless user management features',
        'Actively involved in developing a Turkish-based e-commerce platform inspired by Sahibinden.com with customized design and core functionality',
        'Collaborated with cross-functional teams to deliver high-quality, scalable solutions'
      ],
      technologies: ['React.js', 'JavaScript', 'HTML/CSS', 'Modern Frontend Technologies'],
      achievements: [
        'Successfully delivered multiple client projects',
        'Improved website performance and user experience',
        'Implemented responsive design across all projects'
      ]
    },
    {
      title: 'Frontend Developer (React)',
      company: 'Social Swirl',
      location: 'Remote',
      period: '2024 (3 months)',
      type: 'Contract',
      status: 'Completed',
      responsibilities: [
        'Worked as a React Frontend Developer, contributing to the development and enhancement of web-based interfaces',
        'Collaborated closely with design and backend teams to deliver responsive and user-friendly UI',
        'Enhanced user experience through modern React development practices and responsive design implementations'
      ],
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Responsive Design'],
      achievements: [
        'Delivered responsive web interfaces on time',
        'Improved user engagement through better UX design',
        'Successfully collaborated with remote teams'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey in web development, focusing on React and modern frontend technologies.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-0.5"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline Dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transform md:-translate-x-2 border-4 border-white shadow-lg"></div>

              {/* Experience Card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Card Header */}
                  <div className={`p-6 ${exp.status === 'Current Position' ? 'bg-gradient-to-r from-green-500 to-blue-600' : 'bg-gradient-to-r from-blue-600 to-purple-600'} text-white`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-blue-100 font-medium">{exp.company}</p>
                      </div>
                      <div className={`mt-2 sm:mt-0 px-3 py-1 rounded-full text-xs font-medium ${
                        exp.status === 'Current Position' 
                          ? 'bg-green-400 bg-opacity-30 text-green-100' 
                          : 'bg-white bg-opacity-20 text-white'
                      }`}>
                        {exp.status}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-blue-100">
                      <div className="flex items-center">
                        <FiMapPin className="mr-1" size={14} />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <FiCalendar className="mr-1" size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <FiBriefcase className="mr-1" size={14} />
                        {exp.type}
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <FiCheckCircle className="text-green-500 mt-0.5 mr-3 flex-shrink-0" size={16} />
                            <span className="text-gray-700 text-sm">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Status */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Currently Available for New Opportunities
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              I'm actively looking for new challenges and opportunities to grow my career in web development. 
              If you have an exciting project or position, I'd love to hear from you!
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience