import Card from '@/components/ui/Card'
import Link from 'next/link'

const yogaPoses = [
  {
    id: 1,
    title: "Padmasana",
    duration: "5 min",
    level: "Beginner",
    description: "Lotus pose for stability and focus"
  },
  {
    id: 2,
    title: "Vrikshasana",
    duration: "8 min",
    level: "Beginner", 
    description: "Tree pose for balance and concentration"
  },
  {
    id: 3,
    title: "Sarvangasana",
    duration: "12 min",
    level: "Intermediate",
    description: "Shoulderstand for brain circulation"
  }
]

export default function YogaLibrary() {
  return (
    <Card>
      <h3 className="text-xl font-semibold text-white mb-4 text-center">Yoga</h3>
      <div className="space-y-3">
        {yogaPoses.map((pose) => (
          <Link key={pose.id} href={`/sanctuary/yoga/${pose.id}`}>
            <div className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors cursor-pointer">
              <h4 className="text-white font-medium mb-1">{pose.title}</h4>
              <p className="text-gray-400 text-sm mb-2">{pose.description}</p>
              <div className="flex justify-between text-xs text-gray-500">
                <span>{pose.duration}</span>
                <span>{pose.level}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  )
}
