'use client'

import { useState, useRef } from 'react'

interface MediaPlayerProps {
  src: string
  type: 'audio' | 'video'
  title: string
  thumbnail?: string
}

export default function MediaPlayer({ src, type, title, thumbnail }: MediaPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const mediaRef = useRef<HTMLVideoElement | HTMLAudioElement>(null)

  const togglePlay = () => {
    if (mediaRef.current) {
      if (isPlaying) {
        mediaRef.current.pause()
      } else {
        mediaRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = () => {
    if (mediaRef.current) {
      setCurrentTime(mediaRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (mediaRef.current) {
      setDuration(mediaRef.current.duration)
    }
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value)
    if (mediaRef.current) {
      mediaRef.current.currentTime = time
      setCurrentTime(time)
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      
      {type === 'video' ? (
        <video
          ref={mediaRef as React.RefObject<HTMLVideoElement>}
          src={src}
          poster={thumbnail}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          className="w-full rounded-lg mb-4"
        />
      ) : (
        <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-8 mb-4 flex items-center justify-center">
          <div className="text-white text-center">
            <div className="text-4xl mb-2">🎵</div>
            <p>Audio Player</p>
          </div>
          <audio
            ref={mediaRef as React.RefObject<HTMLAudioElement>}
            src={src}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
        </div>
      )}

      {/* Controls */}
      <div className="space-y-4">
        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max={duration || 0}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-2 bg-white/20 rounded-lg appearance-none slider"
        />

        {/* Time Display */}
        <div className="flex justify-between text-sm text-gray-300">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Play Button */}
        <div className="flex justify-center">
          <button
            onClick={togglePlay}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-4 transition-colors"
          >
            {isPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
