"use client"
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlay, FiX, FiMaximize } from 'react-icons/fi'
import 'cloudinary-video-player/cld-video-player.min.css'

interface CloudinaryVideoPlayerProps {
  publicId: string
  cloudName?: string
  thumbnail?: string
  title?: string
}

const CloudinaryVideoPlayer: React.FC<CloudinaryVideoPlayerProps> = ({
  publicId,
  cloudName = 'dinkmfjwo',
  thumbnail,
  title
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isPlayerReady, setIsPlayerReady] = useState(false)
  const videoId = `video-player-${publicId.replace(/[^a-zA-Z0-9]/g, '-')}`
  const playerRef = useRef<any>(null)

  // Initialize player when modal opens
  useEffect(() => {
    if (isModalOpen && !playerRef.current) {
      // Dynamically import the Cloudinary player
      import('cloudinary-video-player').then((cld) => {
        const videoElement = document.getElementById(videoId)
        if (videoElement) {
          console.log('Initializing Cloudinary player with publicId:', publicId)

          try {
            // Create player instance
            playerRef.current = cld.videoPlayer(videoId, {
              cloudName: cloudName,
              controls: true,
              fluid: true,
              autoplay: true,
              muted: false,
              bigPlayButton: true,
              sourceTypes: ['hls', 'dash', 'mp4'],
              transformation: { quality: 'auto' }
            })

            // Set the video source
            playerRef.current.source(publicId)

            console.log('Cloudinary player initialized successfully')
            setIsPlayerReady(true)
          } catch (error) {
            console.error('Error initializing Cloudinary player:', error)
          }
        }
      }).catch((error) => {
        console.error('Failed to load Cloudinary player:', error)
      })
    }
  }, [isModalOpen, cloudName, publicId, videoId])

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    // Destroy player when closing
    if (playerRef.current) {
      try {
        playerRef.current.dispose()
        playerRef.current = null
        setIsPlayerReady(false)
      } catch (error) {
        console.error('Error disposing player:', error)
      }
    }
  }

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isModalOpen])

  // Generate thumbnail URL
  const getThumbnailUrl = () => {
    if (thumbnail) return thumbnail
    return `https://res.cloudinary.com/${cloudName}/video/upload/so_0,w_600,h_300,c_fill/${publicId}.jpg`
  }

  const thumbnailUrl = getThumbnailUrl()

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
        <img
          src={thumbnailUrl}
          alt={title || 'Project video'}
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback if thumbnail fails to load
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            target.parentElement!.classList.add('bg-gray-900')
          }}
        />

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
              <video
                id={videoId}
                className="cld-video-player w-full h-full"
                controls
              />
              {!isPlayerReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="text-white text-lg">Loading video...</div>
                </div>
              )}
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

export default CloudinaryVideoPlayer
