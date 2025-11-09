"use client"
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { FiPlay, FiX, FiMaximize } from 'react-icons/fi'

// Dynamically import ReactPlayer to avoid SSR issues
const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse" />
}) as any

interface VideoPlayerProps {
  videoUrl: string
  thumbnail?: string
  title?: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, thumbnail, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const playerRef = useRef<any>(null)

  const openModal = () => {
    setIsModalOpen(true)
    setIsPlaying(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsPlaying(false)
    setIsReady(false)
  }

  const handleReady = () => {
    setIsReady(true)
  }

  // Generate Cloudinary video thumbnail if not provided
  const getCloudinaryThumbnail = (url: string) => {
    if (thumbnail) return thumbnail

    // Extract public_id from Cloudinary URL
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dinkmfjwo'
    if (url.includes(cloudName)) {
      const parts = url.split('/upload/')
      if (parts.length === 2) {
        return `${parts[0]}/upload/so_0,w_600,h_300,c_fill,q_auto/${parts[1].replace(/\.[^/.]+$/, '.jpg')}`
      }
    }

    return null
  }

  const thumbnailUrl = getCloudinaryThumbnail(videoUrl)

  return (
    <>
      {/* Video Thumbnail with Play Button */}
      <motion.div
        className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden cursor-pointer group"
        onClick={openModal}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        whileHover={{ scale: 1.02 }}
      >
        {/* Thumbnail */}
        {thumbnailUrl ? (
          <img
            src={thumbnailUrl}
            alt={title || 'Project video'}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-900">
            <div className="text-white">Video Preview</div>
          </div>
        )}

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0.7 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: isHovering ? 1.1 : 1 }}
          >
            <FiPlay className="text-blue-600 ml-1" size={32} />
          </motion.div>
        </motion.div>

        {/* "Click to Play" Text */}
        <motion.div
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovering ? 1 : 0, y: isHovering ? 0 : 10 }}
        >
          <span className="text-white text-sm font-medium flex items-center">
            <FiMaximize className="mr-2" size={14} />
            Click to view fullscreen
          </span>
        </motion.div>
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white z-10"
              onClick={closeModal}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX size={24} />
            </motion.button>

            {/* Video Title */}
            {title && (
              <motion.div
                className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-lg z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-white font-semibold text-lg">{title}</h3>
              </motion.div>
            )}

            {/* Video Player */}
            <motion.div
              className="relative w-full max-w-6xl aspect-video bg-black rounded-lg overflow-hidden"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <ReactPlayer
                url={videoUrl}
                width="100%"
                height="100%"
                playing={isPlaying}
                controls={true}
                pip={false}
                onReady={handleReady}
                onError={(e: any) => console.error('Video error:', e)}
              />
            </motion.div>

            {/* Instructions */}
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-white text-sm">Press ESC or click outside to close</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default VideoPlayer
