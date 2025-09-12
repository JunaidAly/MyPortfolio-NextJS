"use client"
import { FiAward, FiBook, FiCode, FiHeart, FiDownload } from 'react-icons/fi'
import Image from 'next/image'

const About: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/My Resume.pdf'
    link.download = 'Junaid_Ali_Resume.pdf'
    link.click()
  }

  const education = [
    {
      degree: 'BS Computer Science',
      institution: 'COMSATS University Islamabad',
      period: '2020 – 2024',
      score: 'CGPA: 2.74/4.0',
      location: 'Islamabad',
    },
    {
      degree: 'Intermediate in Computer Science (ICS)',
      institution: 'Punjab Group Of Colleges',
      period: '2018 – 2020',
      score: 'Percentage: 74%',
      location: 'Rawalpindi',
    },
    {
      degree: 'Matriculation in Science',
      institution: 'Margalla Learners School Islamabad',
      period: '2016 – 2018',
      score: 'Percentage: 80%',
      location: 'Islamabad',
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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm Junaid Ali, a BS Computer Science graduate from COMSATS University Islamabad, 
            eager to kickstart my career in web development. My core expertise lies in MERN stack 
            (MongoDB, Express.js, React.js, Node.js), and I am passionate about building dynamic 
            and scalable web applications.
          </p>
          
          {/* Download Resume Button */}
          <div className="mt-8">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 space-x-2"
            >
              <FiDownload size={18} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

        {/* Profile Image Section */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
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
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Personal Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <FiCode className="mr-3 text-blue-600" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500 mb-1">
                      {info.label}
                    </span>
                    <span className="text-gray-900 font-medium">
                      {info.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Strengths */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <FiAward className="mr-3 text-blue-600" />
                Core Strengths
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {coreStrengths.map((strength, index) => (
                  <div 
                    key={index}
                    className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg p-3 border border-blue-200"
                  >
                    <span className="text-gray-900 font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests & Hobbies */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <FiHeart className="mr-3 text-blue-600" />
                Interests & Hobbies
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          <div>
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <FiBook className="mr-3" />
                  Education
                </h3>
              </div>
              
              <div className="p-6 space-y-6">
                {education.map((edu, index) => (
                  <div 
                    key={index} 
                    className={`relative pb-6 ${
                      index !== education.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-3 h-3 bg-blue-600 rounded-full"></div>
                    
                    <div className="ml-6">
                      <h4 className="font-semibold text-lg text-gray-900">
                        {edu.degree}
                      </h4>
                      <p className="text-blue-600 font-medium">
                        {edu.institution}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-600 mt-2">
                        <span>{edu.period}</span>
                        <span>{edu.score}</span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        {edu.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Certifications
          </h3>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FiAward className="text-green-600" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-lg text-gray-900">
                  Freelancing Certification
                </h4>
                <p className="text-green-600 font-medium">
                  DigiSkills Training Program
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  June 2021 – September 2021 | Certificate ID: KCWNYXBPQ
                </p>
                <p className="text-gray-700 mt-2">
                  Completed comprehensive freelancing course under Batch-10, 
                  covering essential skills for independent work and client management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About