import Card from '@/components/ui/Card'
import Link from 'next/link'

const pillars = [
  {
    name: "Sanctuary",
    href: "/sanctuary",
    icon: "🧘‍♀️",
    color: "from-blue-400 to-indigo-600",
    stats: "Last session: 2 hours ago"
  },
  {
    name: "Mentor", 
    href: "/mentor",
    icon: "🤝",
    color: "from-green-400 to-teal-600",
    stats: "New guidance available"
  },
  {
    name: "Gymnasium",
    href: "/gymnasium", 
    icon: "🧠",
    color: "from-purple-400 to-pink-600",
    stats: "Best streak: 7 days"
  },
  {
    name: "Chronicle",
    href: "/chronicle",
    icon: "📖",
    color: "from-yellow-400 to-orange-600",
    stats: "Yesterday: Optimistic mood"
  },
  {
    name: "Soundscape",
    href: "/soundscape",
    icon: "🎵", 
    color: "from-red-400 to-rose-600",
    stats: "Favorite: Focus playlist"
  }
]

export default function PillarQuickAccess() {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-6">Quick Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {pillars.map((pillar) => (
          <Link key={pillar.name} href={pillar.href}>
            <Card className="hover:scale-105 cursor-pointer text-center h-full">
              <div className={`text-4xl mb-3 p-3 rounded-lg bg-gradient-to-r ${pillar.color} w-fit mx-auto`}>
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{pillar.name}</h3>
              <p className="text-sm text-gray-400">{pillar.stats}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
