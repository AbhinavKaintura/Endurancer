import Card from '@/components/ui/Card'
import Link from 'next/link'

const breathingExercises = [
  {
    id: 1,
    title: "Nadi Shodhana",
    duration: "8 min",
    level: "Beginner",
    description: "Alternate nostril breathing for balance"
  },
  {
    id: 2,
    title: "Bhramari",
    duration: "6 min",
    level: "Beginner",
    description: "Humming bee breath for relaxation"
  },
  {
    id: 3,
    title: "Kapalabhati",
    duration: "10 min",
    level: "Advanced",
    description: "Skull shining breath for energy"
  }
]

export default function PranayamaLibrary() {
  return (
    <Card>
      <h3 className="text-xl font-semibold text-white mb-4 text-center">Pranayama</h3>
      <div className="space-y-3">
        {breathingExercises.map((exercise) => (
          <Link key={exercise.id} href={`/sanctuary/pranayama/${exercise.id}`}>
            <div className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors cursor-pointer">
              <h4 className="text-white font-medium mb-1">{exercise.title}</h4>
              <p className="text-gray-400 text-sm mb-2">{exercise.description}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{exercise.duration}</span>
                <span>{exercise.level}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  )
}
