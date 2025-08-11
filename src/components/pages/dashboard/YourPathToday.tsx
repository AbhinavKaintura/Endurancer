import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function YourPathToday() {
  // This would be populated by AI recommendations in a real app
  const recommendations = [
    {
      title: "10-minute Trataka Session",
      description: "Based on your goal to improve focus, try this concentration practice",
      pillar: "Sanctuary",
      duration: "10 min",
      points: 15,
      image: "🧘‍♀️"
    },
    {
      title: "Chaturanga Challenge",
      description: "Exercise your strategic thinking with this ancient game",
      pillar: "Gymnasium", 
      duration: "15 min",
      points: 20,
      image: "♟️"
    },
    {
      title: "Reflect on Your Progress",
      description: "Take a moment to journal about your recent experiences",
      pillar: "Chronicle",
      duration: "5 min", 
      points: 10,
      image: "📝"
    }
  ]

  return (
    <Card>
      <h2 className="text-2xl font-bold text-white mb-6">Your Path Today</h2>
      <p className="text-gray-300 mb-6">
        Personalized recommendations based on your goals and recent activity
      </p>
      
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
            <div className="flex items-start space-x-4">
              <div className="text-3xl">{rec.image}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">{rec.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{rec.description}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{rec.pillar}</span>
                  <span>•</span>
                  <span>{rec.duration}</span>
                  <span>•</span>
                  <span className="text-orange-400">{rec.points} EP</span>
                </div>
              </div>
              <Button size="sm">Start</Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
