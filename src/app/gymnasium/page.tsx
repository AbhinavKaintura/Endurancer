'use client'

import { useState } from 'react'
import GameSelection from '@/components/pages/gymnasium/GameSelection'
import GymnasiumGameView from '@/components/pages/gymnasium/GymnasiumGameView'

export default function GymnasiumPage() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null)

  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId)
  }

  const handleBackToSelection = () => {
    setSelectedGame(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">The Gymnasium</h1>
          <p className="text-xl text-gray-300">Train your mind with traditional cognitive games</p>
        </header>
        
        {!selectedGame ? (
          <GameSelection onGameSelect={handleGameSelect} />
        ) : (
          <GymnasiumGameView 
            gameId={selectedGame} 
            onBack={handleBackToSelection} 
          />
        )}
      </div>
    </div>
  )
}
