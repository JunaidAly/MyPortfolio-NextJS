"use client"
import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Html, OrbitControls, useGLTF, Text3D, Center } from '@react-three/drei'
import * as THREE from 'three'

interface SkillOrbitProps {
  position: [number, number, number]
  text: string
  color: string
  radius?: number
}

const SkillOrbit: React.FC<SkillOrbitProps> = ({ position, text, color, radius = 0.3 }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
    }
  })

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.3 : 1}
      >
        <sphereGeometry args={[radius, 16, 16]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.9}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      <Html
        position={[0, radius + 0.8, 0]}
        center
        distanceFactor={6}
        style={{
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800 shadow-xl border border-gray-200">
          {text}
        </div>
      </Html>
    </group>
  )
}

// Simple 3D Avatar (we'll replace this with your actual model later)
const Avatar3DModel: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle breathing animation
      meshRef.current.scale.y = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02
      // Slight rotation
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  return (
    <group ref={meshRef} position={[0, -1, 0]}>
      {/* Head */}
      <mesh position={[0, 1.6, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>

      {/* Body */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.3, 0.25, 0.8, 8]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.4, 1.2, 0]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>
      <mesh position={[0.4, 1.2, 0]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
        <meshStandardMaterial color="#fdbcb4" />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.15, 0.3, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>
      <mesh position={[0.15, 0.3, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.8, 8]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>

      {/* Simple hair */}
      <mesh position={[0, 1.75, 0]}>
        <sphereGeometry args={[0.28, 8, 8]} />
        <meshStandardMaterial color="#4a4a4a" />
      </mesh>
    </group>
  )
}

const Avatar3D: React.FC = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const skills = [
    { text: "React", position: [3, 2, 0] as [number, number, number], color: "#61dafb" },
    { text: "Node.js", position: [-3, 2, 0] as [number, number, number], color: "#68a063" },
    { text: "TypeScript", position: [0, 3, 2] as [number, number, number], color: "#3178c6" },
    { text: "MongoDB", position: [2, -1, 2] as [number, number, number], color: "#4db33d" },
    { text: "Express", position: [-2, -1, 2] as [number, number, number], color: "#68a063" },
    { text: "Next.js", position: [0, -2, -2] as [number, number, number], color: "#000000" },
    { text: "JavaScript", position: [3, 0, -2] as [number, number, number], color: "#f7df1e" },
    { text: "Python", position: [-3, 0, -2] as [number, number, number], color: "#3776ab" },
  ]

  const hobbies = [
    { text: "Gaming", position: [0, 2, -3] as [number, number, number], color: "#ff6b6b" },
    { text: "Reading", position: [2, -1, -3] as [number, number, number], color: "#4ecdc4" },
    { text: "Coding", position: [-2, -1, -3] as [number, number, number], color: "#45b7d1" },
    { text: "Learning", position: [0, 0, 3] as [number, number, number], color: "#96ceb4" },
  ]

  if (!isClient) {
    return (
      <div className="w-full h-[700px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading 3D Avatar...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-[700px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl overflow-hidden relative">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading 3D Scene...</p>
          </div>
        </div>
      }>
        <Canvas
          camera={{ position: [0, 2, 8], fov: 60 }}
          style={{ background: 'transparent' }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />

          {/* 3D Avatar */}
          <Avatar3DModel />

          {/* Skills orbiting around */}
          {skills.map((skill, index) => (
            <SkillOrbit
              key={`skill-${index}`}
              position={skill.position}
              text={skill.text}
              color={skill.color}
              radius={0.3}
            />
          ))}

          {/* Hobbies */}
          {hobbies.map((hobby, index) => (
            <SkillOrbit
              key={`hobby-${index}`}
              position={hobby.position}
              text={hobby.text}
              color={hobby.color}
              radius={0.25}
            />
          ))}

          {/* Platform */}
          <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[2, 32]} />
            <meshStandardMaterial color="#e5e7eb" transparent opacity={0.5} />
          </mesh>

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={1}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 3}
            maxDistance={15}
            minDistance={5}
          />
        </Canvas>
      </Suspense>

      {/* Instructions */}
      <div className="absolute top-4 right-4">
        <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg text-sm text-gray-700 shadow-lg">
          <p className="font-medium">🎮 Controls:</p>
          <p>• Drag to rotate</p>
          <p>• Scroll to zoom</p>
          <p>• Auto-rotating</p>
        </div>
      </div>

      {/* Model Info */}
      <div className="absolute bottom-4 left-4">
        <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg text-sm text-gray-700 shadow-lg">
          <p className="font-medium">💡 Coming Soon:</p>
          <p>Replace with your actual</p>
          <p>3D animated avatar!</p>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Skills</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <span className="text-sm text-gray-600">Hobbies</span>
        </div>
      </div>
    </div>
  )
}

export default Avatar3D