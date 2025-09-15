"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

const Skills2D: React.FC = () => {
  const skills = [
    { text: "React", color: "#61dafb" },
    { text: "Node.js", color: "#68a063" },
    { text: "TypeScript", color: "#3178c6" },
    { text: "MongoDB", color: "#4db33d" },
    { text: "Express", color: "#68a063" },
    { text: "Next.js", color: "#000000" },
    { text: "JavaScript", color: "#f7df1e" },
    { text: "Python", color: "#3776ab" },
  ]

  const hobbies = [
    { text: "Gaming", color: "#ff6b6b" },
    { text: "Reading", color: "#4ecdc4" },
    { text: "Coding", color: "#45b7d1" },
    { text: "Learning", color: "#96ceb4" },
  ]

  return (
    <div className="w-full h-[600px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden relative flex items-center justify-center">
      {/* Central Avatar */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <Image
            src="/myprofile.jpg"
            alt="Junaid Ali"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Glowing ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-400"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Skills floating around */}
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * 2 * Math.PI
        const radius = 180
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={skill.text}
            className="absolute z-20"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0]
            }}
            transition={{
              duration: 0.8,
              delay: 1 + index * 0.1,
              y: {
                duration: 2 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.2 }}
          >
            <div
              className="px-4 py-2 rounded-full text-white font-medium text-sm shadow-lg cursor-pointer"
              style={{ backgroundColor: skill.color }}
            >
              {skill.text}
            </div>
          </motion.div>
        )
      })}

      {/* Hobbies closer to center */}
      {hobbies.map((hobby, index) => {
        const angle = (index / hobbies.length) * 2 * Math.PI + Math.PI / 4
        const radius = 120
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius

        return (
          <motion.div
            key={hobby.text}
            className="absolute z-20"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, 8, 0]
            }}
            transition={{
              duration: 0.8,
              delay: 1.5 + index * 0.1,
              y: {
                duration: 3 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            whileHover={{ scale: 1.2 }}
          >
            <div
              className="px-3 py-1 rounded-full text-white font-medium text-xs shadow-lg cursor-pointer"
              style={{ backgroundColor: hobby.color }}
            >
              {hobby.text}
            </div>
          </motion.div>
        )
      })}

      {/* Background particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-300/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Skills</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <span className="text-sm text-gray-600">Hobbies</span>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute top-4 right-4">
        <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg text-sm text-gray-600">
          Hover to interact • Animated
        </div>
      </div>
    </div>
  )
}

export default Skills2D