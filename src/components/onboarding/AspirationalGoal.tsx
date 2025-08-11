interface AspirationalGoalProps {
  selectedGoals: string[]
  onGoalsChange: (goals: string[]) => void
}

export default function AspirationalGoal({ selectedGoals, onGoalsChange }: AspirationalGoalProps) {
  const aspirationalStates = [
    { id: 'focused', label: 'Focused', emoji: '🎯', color: 'bg-blue-500' },
    { id: 'calm', label: 'Calm', emoji: '😌', color: 'bg-green-500' },
    { id: 'present', label: 'Present', emoji: '🧘‍♀️', color: 'bg-purple-500' },
    { id: 'energized', label: 'Energized', emoji: '⚡', color: 'bg-yellow-500' },
    { id: 'in-control', label: 'In Control', emoji: '🎛️', color: 'bg-indigo-500' },
    { id: 'purposeful', label: 'Purposeful', emoji: '🎪', color: 'bg-orange-500' },
    { id: 'confident', label: 'Confident', emoji: '💪', color: 'bg-red-500' },
    { id: 'peaceful', label: 'Peaceful', emoji: '☮️', color: 'bg-teal-500' },
    { id: 'creative', label: 'Creative', emoji: '🎨', color: 'bg-pink-500' },
    { id: 'balanced', label: 'Balanced', emoji: '⚖️', color: 'bg-cyan-500' },
    { id: 'joyful', label: 'Joyful', emoji: '😊', color: 'bg-lime-500' },
    { id: 'wise', label: 'Wise', emoji: '🦉', color: 'bg-amber-500' }
  ]

  const toggleGoal = (goalId: string) => {
    if (selectedGoals.includes(goalId)) {
      onGoalsChange(selectedGoals.filter(id => id !== goalId))
    } else if (selectedGoals.length < 4) { // Limit to 4 selections
      onGoalsChange([...selectedGoals, goalId])
    }
  }

  return (
    <div>
      <div className="mb-6">
        <p className="text-gray-300 text-center mb-2">
          Select up to 4 states that resonate with how you want to feel every day
        </p>
        <p className="text-orange-400 text-center text-sm">
          {selectedGoals.length}/4 selected
        </p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {aspirationalStates.map((state) => (
          <button
            key={state.id}
            onClick={() => toggleGoal(state.id)}
            disabled={!selectedGoals.includes(state.id) && selectedGoals.length >= 4}
            className={`p-4 rounded-xl transition-all ${
              selectedGoals.includes(state.id)
                ? 'bg-orange-500/20 border-2 border-orange-400 scale-105'
                : 'bg-white/10 hover:bg-white/20 border-2 border-transparent hover:scale-105'
            } ${
              !selectedGoals.includes(state.id) && selectedGoals.length >= 4
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">{state.emoji}</div>
              <div className={`${state.color} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                {state.label}
              </div>
            </div>
            {selectedGoals.includes(state.id) && (
              <div className="absolute top-1 right-1 text-orange-400 text-sm">✓</div>
            )}
          </button>
        ))}
      </div>

      {selectedGoals.length > 0 && (
        <div className="mt-6 p-4 bg-white/10 rounded-lg">
          <h4 className="text-white font-semibold mb-2">Your Aspirational States:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedGoals.map(goalId => {
              const state = aspirationalStates.find(s => s.id === goalId)
              return (
                <span key={goalId} className="flex items-center space-x-1 bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm">
                  <span>{state?.emoji}</span>
                  <span>{state?.label}</span>
                </span>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
