"use client"
import { useRef, useState, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls, useFBX, useAnimations } from '@react-three/drei'

interface SkillLabelProps {
  position: [number, number, number]
  text: string
  color: string
  isHobby?: boolean
}

const SkillLabel: React.FC<SkillLabelProps> = ({ position, text, color, isHobby = false }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Html
      position={position}
      center
      distanceFactor={8}
      style={{
        pointerEvents: 'auto',
        userSelect: 'none',
      }}
    >
      <div
        className={`px-6 py-3 rounded-xl text-base font-bold text-white shadow-2xl border-2 transition-all duration-300 cursor-pointer ${
          hovered ? 'transform scale-110' : ''
        } ${isHobby ? 'border-white/30' : 'border-white/50'}`}
        style={{
          backgroundColor: color,
          boxShadow: `0 10px 30px ${color}40`,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {text}
      </div>
    </Html>
  )
}

// Your actual 3D Avatar from Ready Player Me
const Avatar3DModel: React.FC = () => {
  const fbx = useFBX('/3DNew/rp_manuel_animated_001_dancing.fbx')
  const { actions } = useAnimations(fbx.animations, fbx)
  const modelRef = useRef<any>(null)

  useEffect(() => {
    if (fbx) {
      // Increase the model size significantly
      fbx.scale.setScalar(0.035) // Further increased model size
      fbx.position.y = -1.8 // Adjust position for larger model

      // Reset model rotations
      fbx.rotation.x = 0
      fbx.rotation.y = 0
      fbx.rotation.z = 0

      // Traverse and set up materials
      fbx.traverse((child: any) => {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
          // Ensure materials are properly set up
          if (child.material) {
            child.material.needsUpdate = true
          }
        }
      })
    }
  }, [fbx])

  useEffect(() => {
    // Play the dancing animation
    if (actions) {
      const actionNames = Object.keys(actions)
      if (actionNames.length > 0) {
        const danceAction = actions[actionNames[0]]
        if (danceAction) {
          danceAction.play()
        }
      }
    }
  }, [actions])

  return (
    <group ref={modelRef}>
      <primitive object={fbx} />
    </group>
  )
}

const Avatar3D: React.FC = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const skills = [
    { text: "React", position: [5, 1.5, 3] as [number, number, number], color: "#61dafb" },
    { text: "Node.js", position: [-5, 1.5, 3] as [number, number, number], color: "#68a063" },
    { text: "TypeScript", position: [4, 3, -0.5] as [number, number, number], color: "#3178c6" },
    { text: "MongoDB", position: [-4, 3, -0.5] as [number, number, number], color: "#4db33d" },
    { text: "Express", position: [5.5, 0, 1] as [number, number, number], color: "#68a063" },
    { text: "Next.js", position: [-5.5, 0, 1] as [number, number, number], color: "#000000" },
    { text: "JavaScript", position: [3, 4, 2] as [number, number, number], color: "#f7df1e" },
    { text: "Python", position: [-3, 4, 2] as [number, number, number], color: "#3776ab" },
  ]

  const hobbies = [
    { text: "Gaming", position: [0, 3.5, -4] as [number, number, number], color: "#ff6b6b" },
    { text: "Reading", position: [4, 0.5, -4] as [number, number, number], color: "#4ecdc4" },
    { text: "Coding", position: [-4, 0.5, -4] as [number, number, number], color: "#45b7d1" },
    { text: "Learning", position: [0, -0.5, 5] as [number, number, number], color: "#96ceb4" },
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
    <div className="w-full max-w-6xl mx-auto h-[700px] rounded-3xl overflow-hidden relative bg-gradient-to-br from-blue-50 to-purple-50 shadow-2xl">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading 3D Scene...</p>
          </div>
        </div>
      }>
        <Canvas
          camera={{ position: [0, 2, 12], fov: 50 }}
          style={{ background: 'transparent' }}
          shadows
          gl={{ antialias: true }}
        >
          {/* Enhanced Lighting for 3D Avatar */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-5, 5, 5]} intensity={0.6} color="#61dafb" />
          <pointLight position={[5, 5, -5]} intensity={0.6} color="#3b82f6" />
          <spotLight
            position={[0, 10, 0]}
            intensity={0.8}
            angle={0.3}
            penumbra={0.5}
            castShadow
          />

          {/* 3D Avatar */}
          <Avatar3DModel />

          {/* Skills around the avatar */}
          {skills.map((skill, index) => (
            <SkillLabel
              key={`skill-${index}`}
              position={skill.position}
              text={skill.text}
              color={skill.color}
              isHobby={false}
            />
          ))}

          {/* Hobbies around the avatar */}
          {hobbies.map((hobby, index) => (
            <SkillLabel
              key={`hobby-${index}`}
              position={hobby.position}
              text={hobby.text}
              color={hobby.color}
              isHobby={true}
            />
          ))}

          {/* Platform with shadows */}
          <mesh position={[0, -1.8, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <circleGeometry args={[6, 32]} />
            <meshStandardMaterial
              color="#f3f4f6"
              transparent
              opacity={0.8}
              roughness={0.8}
              metalness={0.1}
            />
          </mesh>

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={1}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 3}
            maxDistance={18}
            minDistance={8}
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