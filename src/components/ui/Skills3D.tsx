"use client"
import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'

interface SkillBubbleProps {
  position: [number, number, number]
  text: string
  color: string
  size?: number
}

const SkillBubble: React.FC<SkillBubbleProps> = ({ position, text, color, size = 0.5 }) => {
  const meshRef = useRef<any>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1
    }
  })

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.2 : 1}
      >
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.2}
        />
      </mesh>
      <Html
        position={[0, size + 0.5, 0]}
        center
        distanceFactor={8}
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 shadow-lg border border-gray-200">
          {text}
        </div>
      </Html>
    </group>
  )
}

interface CentralAvatarProps {
  imageUrl: string
}

const CentralAvatar: React.FC<CentralAvatarProps> = ({ imageUrl }) => {
  const meshRef = useRef<any>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#3b82f6"
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
      {/* Glowing ring around avatar */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.4, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  )
}

const Skills3D: React.FC = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const skills = [
    { text: "React", position: [2, 1, 0] as [number, number, number], color: "#61dafb" },
    { text: "Node.js", position: [-2, 1, 0] as [number, number, number], color: "#68a063" },
    { text: "TypeScript", position: [0, 2, 1] as [number, number, number], color: "#3178c6" },
    { text: "MongoDB", position: [1.5, -1, 1] as [number, number, number], color: "#4db33d" },
    { text: "Express", position: [-1.5, -1, 1] as [number, number, number], color: "#68a063" },
    { text: "Next.js", position: [0, -2, -1] as [number, number, number], color: "#000000" },
    { text: "JavaScript", position: [2, 0, -1] as [number, number, number], color: "#f7df1e" },
    { text: "Python", position: [-2, 0, -1] as [number, number, number], color: "#3776ab" },
  ]

  const hobbies = [
    { text: "Gaming", position: [0, 1, -2] as [number, number, number], color: "#ff6b6b" },
    { text: "Reading", position: [1, -1, -2] as [number, number, number], color: "#4ecdc4" },
    { text: "Coding", position: [-1, -1, -2] as [number, number, number], color: "#45b7d1" },
    { text: "Learning", position: [0, 0, 2] as [number, number, number], color: "#96ceb4" },
  ]

  if (!isClient) {
    return (
      <div className="w-full h-[600px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading 3D Experience...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-[600px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden relative">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading 3D Scene...</p>
          </div>
        </div>
      }>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />

          {/* Central Avatar */}
          <CentralAvatar imageUrl="/myprofile.jpg" />

          {/* Skills Bubbles */}
          {skills.map((skill, index) => (
            <SkillBubble
              key={`skill-${index}`}
              position={skill.position}
              text={skill.text}
              color={skill.color}
              size={0.4}
            />
          ))}

          {/* Hobbies Bubbles */}
          {hobbies.map((hobby, index) => (
            <SkillBubble
              key={`hobby-${index}`}
              position={hobby.position}
              text={hobby.text}
              color={hobby.color}
              size={0.3}
            />
          ))}

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </Suspense>

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
          Drag to rotate • Auto-rotating
        </div>
      </div>
    </div>
  )
}

export default Skills3D