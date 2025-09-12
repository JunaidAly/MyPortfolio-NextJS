import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiTool, 
  FiLayers,
  FiMonitor,
  FiGitBranch,
  FiCloud
} from 'react-icons/fi'

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FiMonitor,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'React.js', level: 85 },
        { name: 'Angular', level: 75 },
        { name: 'Bootstrap 5', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ]
    },
    {
      title: 'Backend Development',
      icon: FiServer,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 78 },
        { name: 'PHP', level: 70 },
      ]
    },
    {
      title: 'Databases',
      icon: FiDatabase,
      color: 'from-purple-500 to-violet-500',
      skills: [
        { name: 'MongoDB', level: 82 },
        { name: 'MySQL', level: 75 },
        { name: 'Firebase', level: 70 },
      ]
    },
    {
      title: 'Programming Languages',
      icon: FiCode,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'JavaScript', level: 88 },
        { name: 'Java', level: 75 },
        { name: 'C#', level: 70 },
        { name: 'C++', level: 72 },
        { name: 'Python', level: 68 },
        { name: 'PHP', level: 70 },
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: FiCloud,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'AWS', level: 65 },
        { name: 'GCP', level: 60 },
        { name: 'Azure', level: 58 },
        { name: 'Jenkins', level: 60 },
        { name: 'Docker', level: 65 },
      ]
    },
    {
      title: 'Tools & Version Control',
      icon: FiGitBranch,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Postman', level: 80 },
      ]
    }
  ]

  const techStack = [
    { name: 'MERN Stack', description: 'MongoDB, Express.js, React.js, Node.js' },
    { name: 'Frontend Focus', description: 'React.js, Angular, Modern CSS' },
    { name: 'Full Stack', description: 'End-to-end web application development' },
    { name: 'Responsive Design', description: 'Mobile-first, cross-browser compatibility' },
  ]

  const getSkillColor = (level: number) => {
    if (level >= 85) return 'from-green-400 to-green-600'
    if (level >= 75) return 'from-blue-400 to-blue-600'
    if (level >= 65) return 'from-yellow-400 to-yellow-600'
    return 'from-gray-400 to-gray-600'
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with
            to build modern, scalable web applications.
          </p>
        </div>

        {/* Tech Stack Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techStack.map((stack, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <FiLayers className="text-white" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{stack.name}</h3>
                <p className="text-sm text-gray-600">{stack.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-6 text-white`}>
                <div className="flex items-center">
                  <category.icon size={24} className="mr-3" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
              </div>

              {/* Skills List */}
              <div className="p-6 space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
              Technology is constantly evolving, and so am I. I'm always exploring new tools, 
              frameworks, and best practices to stay current with industry trends and deliver 
              the best solutions for every project.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">8+</div>
                <div className="text-sm text-gray-600">Months Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-gray-600">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">6+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">1</div>
                <div className="text-sm text-gray-600">Certification</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills