'use client'

import { useState, useEffect } from 'react'

interface BreathingVisualizerProps {
  inhaleTime: number
  exhaleTime: number
  holdTime?: number
  isActive: boolean
}

export default function BreathingVisualizer({ 
  inhaleTime, 
  exhaleTime, 
  holdTime = 0, 
  isActive 
}: BreathingVisualizerProps) {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale')
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (!isActive) return

    const cycle = async () => {
      // Inhale
      setPhase('inhale')
      setScale(1.5)
      await new Promise(resolve => setTimeout(resolve, inhaleTime * 1000))

      // Hold (if specified)
      if (holdTime > 0) {
        setPhase('hold')
        await new Promise(resolve => setTimeout(resolve, holdTime * 1000))
      }

      // Exhale
      setPhase('exhale')
      setScale(1)
      await new Promise(resolve => setTimeout(resolve, exhaleTime * 1000))
    }

    const interval = setInterval(cycle, (inhaleTime + holdTime + exhaleTime) * 1000)
    cycle() // Start immediately

    return () => clearInterval(interval)
  }, [inhaleTime, exhaleTime, holdTime, isActive])

  const getPhaseText = () => {
    switch (phase) {
      case 'inhale': return 'Breathe In'
      case 'hold': return 'Hold'
      case 'exhale': return 'Breathe Out'
    }
  }

  const getPhaseColor = () => {
    switch (phase) {
      case 'inhale': return 'from-blue-400 to-cyan-500'
      case 'hold': return 'from-purple-400 to-indigo-500'
      case 'exhale': return 'from-orange-400 to-red-500'
    }
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-8 p-8">
      <div className="relative">
        <div 
          className={`w-32 h-32 rounded-full bg-gradient-to-br ${getPhaseColor()} transition-transform duration-1000 ease-in-out shadow-2xl`}
          style={{ 
            transform: `scale(${scale})`,
            filter: 'blur(0.5px)',
            boxShadow: `0 0 40px rgba(251, 146, 60, 0.5)`
          }}
        />
        <div 
          className={`absolute inset-0 w-32 h-32 rounded-full bg-gradient-to-br ${getPhaseColor()} opacity-30 transition-transform duration-1000 ease-in-out`}
          style={{ 
            transform: `scale(${scale * 1.2})`,
            filter: 'blur(8px)'
          }}
        />
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-white mb-2">{getPhaseText()}</h3>
        <div className="flex space-x-1">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className={`w-2 h-2 rounded-full bg-orange-400 transition-opacity duration-300 ${
                isActive ? 'animate-pulse' : 'opacity-50'
              }`}
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
