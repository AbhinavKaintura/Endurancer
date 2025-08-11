'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface Track {
  id: number
  title: string
  artist: string
  duration: string
  category: string
  frequency?: string
}

interface Playlist {
  id: string
  name: string
  description: string
  tracks: Track[]
  color: string
}

export default function SoundscapePlayer() {
  const [currentPlaylist, setCurrentPlaylist] = useState<string>('focus')
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const playlists: Playlist[] = [
    {
      id: 'focus',
      name: 'Deep Focus',
      description: 'Binaural beats and ambient sounds for concentration',
      color: 'from-blue-500 to-cyan-600',
      tracks: [
        { id: 1, title: 'Alpha Focus', artist: 'Endurance Audio', duration: '30:00', category: 'Binaural', frequency: '15Hz' },
        { id: 2, title: 'Forest Concentration', artist: 'Nature Sounds', duration: '45:00', category: 'Nature' },
        { id: 3, title: 'Mozart Piano Sonata', artist: 'Classical Masters', duration: '25:00', category: 'Classical' }
      ]
    },
    {
      id: 'relaxation',
      name: 'Deep Relaxation',
      description: 'Calming sounds for stress relief and meditation',
      color: 'from-green-500 to-teal-600',
      tracks: [
        { id: 4, title: 'Theta Waves', artist: 'Endurance Audio', duration: '20:00', category: 'Binaural', frequency: '6Hz' },
        { id: 5, title: 'Ocean Waves', artist: 'Nature Sounds', duration: '60:00', category: 'Nature' },
        { id: 6, title: 'Debussy Reverie', artist: 'Classical Masters', duration: '15:00', category: 'Classical' }
      ]
    },
    {
      id: 'energy',
      name: 'Energize',
      description: 'Uplifting sounds to boost motivation',
      color: 'from-orange-500 to-red-600',
      tracks: [
        { id: 7, title: 'Beta Boost', artist: 'Endurance Audio', duration: '15:00', category: 'Binaural', frequency: '18Hz' },
        { id: 8, title: 'Morning Birds', artist: 'Nature Sounds', duration: '30:00', category: 'Nature' },
        { id: 9, title: 'Bach Brandenburg', artist: 'Classical Masters', duration: '20:00', category: 'Classical' }
      ]
    },
    {
      id: 'lofi',
      name: 'Lo-Fi Study',
      description: 'Chill beats for background focus',
      color: 'from-purple-500 to-pink-600',
      tracks: [
        { id: 10, title: 'Study Vibes', artist: 'Lo-Fi Collective', duration: '120:00', category: 'Lofi' },
        { id: 11, title: 'Rainy Day Study', artist: 'Chill Beats', duration: '90:00', category: 'Lofi' },
        { id: 12, title: 'Coffee Shop Ambience', artist: 'Urban Sounds', duration: '75:00', category: 'Lofi' }
      ]
    }
  ]

  const currentPlaylistData = playlists.find(p => p.id === currentPlaylist)

  const playTrack = (track: Track) => {
    setCurrentTrack(track)
    setIsPlaying(true)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Binaural': return '🧠'
      case 'Nature': return '🌿'
      case 'Classical': return '🎼'
      case 'Lofi': return '🎧'
      default: return '🎵'
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Playlist Selector */}
      <div className="lg:col-span-1">
        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Playlists</h3>
          <div className="space-y-3">
            {playlists.map((playlist) => (
              <button
                key={playlist.id}
                onClick={() => setCurrentPlaylist(playlist.id)}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  currentPlaylist === playlist.id 
                    ? 'bg-white/20 border border-orange-400' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className={`w-full h-2 bg-gradient-to-r ${playlist.color} rounded mb-2`} />
                <h4 className="text-white font-medium text-sm">{playlist.name}</h4>
                <p className="text-gray-400 text-xs">{playlist.description}</p>
              </button>
            ))}
          </div>
        </Card>

        {/* Current Track Info */}
        {currentTrack && (
          <Card className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-4">Now Playing</h3>
            <div className="text-center">
              <div className="text-4xl mb-3">{getCategoryIcon(currentTrack.category)}</div>
              <h4 className="text-white font-medium mb-1">{currentTrack.title}</h4>
              <p className="text-gray-400 text-sm mb-2">{currentTrack.artist}</p>
              {currentTrack.frequency && (
                <p className="text-orange-400 text-xs mb-4">{currentTrack.frequency}</p>
              )}
              
              <div className="flex justify-center space-x-4 mb-4">
                <button className="text-white hover:text-orange-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                  </svg>
                </button>
                <button onClick={togglePlayPause} className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3">
                  {isPlaying ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
                <button className="text-white hover:text-orange-400">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                  </svg>
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-1 mb-2">
                <div className="bg-orange-400 h-1 rounded-full w-1/3 transition-all duration-300" />
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>8:32</span>
                <span>{currentTrack.duration}</span>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Track List */}
      <div className="lg:col-span-3">
        <Card>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">
              {currentPlaylistData?.name}
            </h3>
            <Button variant="secondary">
              Create Custom Playlist
            </Button>
          </div>
          
          <p className="text-gray-300 mb-6">{currentPlaylistData?.description}</p>

          {/* Track Categories Filter */}
          <div className="flex space-x-2 mb-6">
            {['All', 'Binaural', 'Nature', 'Classical', 'Lofi'].map((category) => (
              <button
                key={category}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 text-gray-300 text-sm rounded-full transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tracks */}
          <div className="space-y-2">
            {currentPlaylistData?.tracks.map((track, index) => (
              <div
                key={track.id}
                className={`flex items-center space-x-4 p-3 rounded-lg hover:bg-white/10 transition-colors cursor-pointer ${
                  currentTrack?.id === track.id ? 'bg-white/10 border border-orange-400/50' : 'bg-white/5'
                }`}
                onClick={() => playTrack(track)}
              >
                <div className="text-2xl">{getCategoryIcon(track.category)}</div>
                <div className="flex-1">
                  <h4 className="text-white font-medium">{track.title}</h4>
                  <p className="text-gray-400 text-sm">{track.artist}</p>
                  {track.frequency && (
                    <p className="text-orange-400 text-xs">{track.frequency}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">{track.duration}</p>
                  <span className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                    {track.category}
                  </span>
                </div>
                <button className="text-orange-400 hover:text-orange-300">
                  {currentTrack?.id === track.id && isPlaying ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
