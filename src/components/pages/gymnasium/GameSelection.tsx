import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'

const games = [
  {
    id: 'chaturanga',
    title: 'Chaturanga',
    description: 'The ancient precursor to chess. Develop strategic thinking and foresight.',
    difficulty: 'Intermediate',
    benefits: ['Strategic Planning', 'Problem Solving', 'Spatial Reasoning'],
    image: '♟️',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'pachisi',
    title: 'Pachisi',
    description: 'Traditional Indian board game combining strategy and probability.',
    difficulty: 'Beginner',
    benefits: ['Risk Management', 'Tactical Thinking', 'Probability'],
    image: '🎯',
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'pallanguzhi',
    title: 'Pallanguzhi',
    description: 'Ancient counting game that enhances mathematical thinking.',
    difficulty: 'Beginner',
    benefits: ['Mathematical Skills', 'Logical Deduction', 'Planning'],
    image: '⚪',
    color: 'from-orange-500 to-red-600'
  }
]

export default function GameSelection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {games.map((game) => (
        <Card key={game.id} className="hover:scale-105 transition-transform">
          <div className={`text-6xl mb-4 p-4 rounded-lg bg-gradient-to-r ${game.color} w-fit mx-auto`}>
            {game.image}
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2 text-center">{game.title}</h3>
          
          <p className="text-gray-300 text-center mb-4">{game.description}</p>
          
          <div className="mb-4">
            <span className="inline-block bg-white/10 text-orange-400 px-3 py-1 rounded-full text-sm">
              {game.difficulty}
            </span>
          </div>
          
          <div className="mb-6">
            <h4 className="text-white font-semibold mb-2">Cognitive Benefits:</h4>
            <div className="flex flex-wrap gap-2">
              {game.benefits.map((benefit) => (
                <span key={benefit} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                  {benefit}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Link href={`/gymnasium/${game.id}/learn`} className="flex-1">
              <Button variant="secondary" className="w-full">Learn to Play</Button>
            </Link>
            <Link href={`/gymnasium/${game.id}/play`} className="flex-1">
              <Button className="w-full">Play Now</Button>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  )
}
