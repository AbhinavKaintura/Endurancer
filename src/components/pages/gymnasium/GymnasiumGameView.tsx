'use client'

import { useState, useEffect } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface GameViewProps {
  gameId: string
  onBack: () => void
}

export default function GymnasiumGameView({ gameId, onBack }: GameViewProps) {
  const [gameState, setGameState] = useState<'tutorial' | 'playing' | 'finished'>('tutorial')
  const [score, setScore] = useState(0)
  const [moves, setMoves] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (gameState === 'playing') {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [gameState])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const getGameContent = () => {
    switch (gameId) {
      case 'chaturanga':
        return {
          name: 'Chaturanga',
          description: 'The ancient precursor to chess',
          tutorialText: 'Chaturanga is played on an 8x8 board with pieces representing an ancient Indian army. The goal is to capture the opponent\'s Raja (King).',
          gameBoard: <ChaturangaBoard onMove={() => setMoves(prev => prev + 1)} />
        }
      case 'pachisi':
        return {
          name: 'Pachisi',
          description: 'Traditional race game from India',
          tutorialText: 'Move your pieces around the board based on cowrie shell throws. First to get all pieces home wins!',
          gameBoard: <PachisiBoard onMove={() => setMoves(prev => prev + 1)} />
        }
      case 'pallanguzhi':
        return {
          name: 'Pallanguzhi',
          description: 'Ancient counting and strategy game',
          tutorialText: 'Distribute seeds around the board to capture your opponent\'s pieces. Strategy and counting skills are key!',
          gameBoard: <PallanguzhiBoard onMove={() => setMoves(prev => prev + 1)} />
        }
      default:
        return {
          name: 'Unknown Game',
          description: 'Game not found',
          tutorialText: 'This game is not available.',
          gameBoard: <div>Game not found</div>
        }
    }
  }

  const gameContent = getGameContent()

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <Button variant="secondary" onClick={onBack}>
          ← Back to Games
        </Button>
        <h2 className="text-2xl font-bold text-white">{gameContent.name}</h2>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">Time: {formatTime(timeElapsed)}</span>
          <span className="text-gray-300">Moves: {moves}</span>
          <span className="text-orange-400">Score: {score}</span>
        </div>
      </div>

      {gameState === 'tutorial' && (
        <Card className="mb-6">
          <h3 className="text-xl font-bold text-white mb-4">How to Play</h3>
          <p className="text-gray-300 mb-6">{gameContent.tutorialText}</p>
          <div className="flex justify-center">
            <Button onClick={() => setGameState('playing')}>
              Start Game
            </Button>
          </div>
        </Card>
      )}

      {gameState === 'playing' && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-white">Game in Progress</h3>
            <div className="flex space-x-2">
              <Button variant="secondary" size="sm" onClick={() => setGameState('tutorial')}>
                Tutorial
              </Button>
              <Button variant="secondary" size="sm">
                Pause
              </Button>
            </div>
          </div>
          {gameContent.gameBoard}
        </Card>
      )}

      {gameState === 'finished' && (
        <Card>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Game Complete!</h3>
            <div className="text-6xl mb-4">🏆</div>
            <p className="text-gray-300 mb-6">
              You completed {gameContent.name} in {formatTime(timeElapsed)} with {moves} moves!
            </p>
            <div className="flex justify-center space-x-4">
              <Button onClick={() => {
                setGameState('playing')
                setScore(0)
                setMoves(0)
                setTimeElapsed(0)
              }}>
                Play Again
              </Button>
              <Button variant="secondary" onClick={onBack}>
                Choose New Game
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}

// Simplified game board components
function ChaturangaBoard({ onMove }: { onMove: () => void }) {
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null)

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-8 gap-1 p-4 bg-amber-100 rounded-lg">
        {Array.from({ length: 64 }, (_, i) => {
          const row = Math.floor(i / 8)
          const col = i % 8
          const isLight = (row + col) % 2 === 0
          const squareId = `${row}-${col}`
          
          return (
            <div
              key={i}
              className={`w-12 h-12 flex items-center justify-center cursor-pointer border ${
                isLight ? 'bg-amber-50' : 'bg-amber-200'
              } ${selectedSquare === squareId ? 'ring-2 ring-orange-400' : ''}`}
              onClick={() => {
                setSelectedSquare(squareId)
                onMove()
              }}
            >
              {/* Add game pieces here */}
              {row < 2 && <span className="text-lg">♛</span>}
              {row > 5 && <span className="text-lg">♕</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function PachisiBoard({ onMove }: { onMove: () => void }) {
  return (
    <div className="flex justify-center">
      <div className="w-96 h-96 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center relative">
        <div className="text-white text-center">
          <p className="text-lg mb-4">Pachisi Board</p>
          <p className="text-sm">Click to make moves</p>
          <Button className="mt-4" onClick={onMove}>Roll Dice</Button>
        </div>
        {/* Simplified board representation */}
        <div className="absolute inset-4 border-2 border-white opacity-50 rounded"></div>
        <div className="absolute inset-8 border-2 border-white opacity-30 rounded"></div>
      </div>
    </div>
  )
}

function PallanguzhiBoard({ onMove }: { onMove: () => void }) {
  const [pits, setPits] = useState(Array(14).fill(4))

  return (
    <div className="flex justify-center">
      <div className="bg-amber-800 p-6 rounded-lg">
        <div className="grid grid-cols-7 gap-2 mb-4">
          {pits.slice(0, 7).map((seeds, idx) => (
            <div
              key={idx}
              className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-500"
              onClick={() => {
                const newPits = [...pits]
                newPits[idx] = Math.max(0, newPits[idx] - 1)
                setPits(newPits)
                onMove()
              }}
            >
              <span className="text-white font-bold">{seeds}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {pits.slice(7, 14).map((seeds, idx) => (
            <div
              key={idx + 7}
              className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-amber-500"
              onClick={() => {
                const newPits = [...pits]
                newPits[idx + 7] = Math.max(0, newPits[idx + 7] - 1)
                setPits(newPits)
                onMove()
              }}
            >
              <span className="text-white font-bold">{seeds}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
