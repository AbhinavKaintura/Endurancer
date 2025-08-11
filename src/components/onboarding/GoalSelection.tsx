interface GoalSelectionProps {
  selectedGoals: string[]
  onGoalsChange: (goals: string[]) => void
}

export default function GoalSelection({ selectedGoals, onGoalsChange }: GoalSelectionProps) {
  const goals = [
    {
      id: 'focus',
      title: 'Improve my focus and attention',
      description: 'Build concentration and reduce distractions',
      icon: '🎯'
    },
    {
      id: 'stress',
      title: 'Reduce stress and anxiety',
      description: 'Find calm and peace in daily life',
      icon: '😌'
    },
    {
      id: 'habits',
      title: 'Build healthier digital habits',
      description: 'Create a better relationship with technology',
      icon: '📱'
    },
    {
      id: 'clarity',
      title: 'Think more clearly',
      description: 'Enhance cognitive function and decision making',
      icon: '🧠'
    },
    {
      id: 'sleep',
      title: 'Sleep better',
      description: 'Improve sleep quality and nighttime routines',
      icon: '🌙'
    },
    {
      id: 'presence',
      title: 'Be more present',
      description: 'Cultivate mindfulness in everyday moments',
      icon: '🧘‍♂️'
    }
  ]

  const toggleGoal = (goalId: string) => {
    if (selectedGoals.includes(goalId)) {
      onGoalsChange(selectedGoals.filter(id => id !== goalId))
    } else {
      onGoalsChange([...selectedGoals, goalId])
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {goals.map((goal) => (
        <button
          key={goal.id}
          onClick={() => toggleGoal(goal.id)}
          className={`text-left p-4 rounded-lg transition-all ${
            selectedGoals.includes(goal.id)
              ? 'bg-orange-500/20 border-2 border-orange-400'
              : 'bg-white/10 hover:bg-white/20 border-2 border-transparent'
          }`}
        >
          <div className="flex items-start space-x-3">
            <span className="text-2xl">{goal.icon}</span>
            <div>
              <h3 className="text-white font-medium mb-1">{goal.title}</h3>
              <p className="text-gray-300 text-sm">{goal.description}</p>
            </div>
            {selectedGoals.includes(goal.id) && (
              <span className="text-orange-400 ml-auto">✓</span>
            )}
          </div>
        </button>
      ))}
    </div>
  )
}
