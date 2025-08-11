import Card from '@/components/ui/Card'
import Link from 'next/link'

const meditations = [
  {
    id: 1,
    title: "Vedic Meditation",
    duration: "20 min",
    level: "Beginner",
    description: "Deep rest through mantra-based practice"
  },
  {
    id: 2,
    title: "Trataka Practice", 
    duration: "10 min",
    level: "Intermediate",
    description: "Concentration through focused gazing"
  },
  {
    id: 3,
    title: "Nada Yoga",
    duration: "15 min", 
    level: "Advanced",
    description: "Meditation on inner sound"
  }
]

export default function MeditationLibrary() {
  return (
    <Card>
      <h3 className="text-xl font-semibold text-white mb-4 text-center">Meditation</h3>
      <div className="space-y-3">
        {meditations.map((meditation) => (
          <Link key={meditation.id} href={`/sanctuary/meditation/${meditation.id}`}>
            <div className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors cursor-pointer">
              <h4 className="text-white font-medium mb-1">{meditation.title}</h4>
              <p className="text-gray-400 text-sm mb-2">{meditation.description}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{meditation.duration}</span>
                <span>{meditation.level}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  )
}
