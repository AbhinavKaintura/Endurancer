interface ProgressBarThemedProps {
  currentLevel: string
  endurancePoints: number
  pointsToNextLevel: number
  className?: string
}

export default function ProgressBarThemed({ 
  currentLevel, 
  endurancePoints, 
  pointsToNextLevel,
  className = "" 
}: ProgressBarThemedProps) {
  const progress = (endurancePoints / (endurancePoints + pointsToNextLevel)) * 100

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">Path of Endurance</h3>
        <span className="text-orange-400 font-medium">{currentLevel}</span>
      </div>
      
      <div className="relative">
        <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          >
            <div className="h-full bg-gradient-to-r from-orange-300 to-orange-500 opacity-50 animate-pulse"></div>
          </div>
        </div>
        
        {/* Glow effect */}
        <div 
          className="absolute top-0 h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-30 blur-sm transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between text-sm text-gray-300">
        <span>{endurancePoints} EP</span>
        <span>{pointsToNextLevel} EP to next level</span>
      </div>
    </div>
  )
}
