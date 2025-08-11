interface StressAssessmentProps {
  selectedLevel: string
  onLevelChange: (level: string) => void
}

export default function StressAssessment({ selectedLevel, onLevelChange }: StressAssessmentProps) {
  const levels = [
    {
      id: 'several-times-daily',
      title: 'Several times a day',
      description: 'I feel overwhelmed frequently throughout the day',
      color: 'from-red-500 to-red-600',
      intensity: 4
    },
    {
      id: 'daily',
      title: 'Daily',
      description: 'I experience stress or overwhelm most days',
      color: 'from-orange-500 to-orange-600',
      intensity: 3
    },
    {
      id: 'few-times-week',
      title: 'A few times a week',
      description: 'Stress comes and goes, manageable most of the time',
      color: 'from-yellow-500 to-yellow-600',
      intensity: 2
    },
    {
      id: 'rarely',
      title: 'Rarely',
      description: 'I generally feel calm and in control',
      color: 'from-green-500 to-green-600',
      intensity: 1
    }
  ]

  return (
    <div className="space-y-4">
      {levels.map((level) => (
        <button
          key={level.id}
          onClick={() => onLevelChange(level.id)}
          className={`w-full text-left p-6 rounded-lg transition-all ${
            selectedLevel === level.id
              ? 'bg-white/20 border-2 border-orange-400 scale-105'
              : 'bg-white/10 hover:bg-white/15 border-2 border-transparent hover:scale-102'
          }`}
        >
          <div className="flex items-center space-x-4">
            <div className={`w-12 h-12 bg-gradient-to-r ${level.color} rounded-full flex items-center justify-center`}>
              <div className="flex space-x-1">
                {Array.from({ length: level.intensity }, (_, i) => (
                  <div key={i} className="w-1.5 h-6 bg-white rounded-full opacity-80" />
                ))}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-1">{level.title}</h3>
              <p className="text-gray-300 text-sm">{level.description}</p>
            </div>
            {selectedLevel === level.id && (
              <div className="text-orange-400 text-xl">✓</div>
            )}
          </div>
        </button>
      ))}
    </div>
  )
}
