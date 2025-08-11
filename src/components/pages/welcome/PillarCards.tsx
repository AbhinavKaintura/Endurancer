import Card from '@/components/ui/Card'
import Link from 'next/link'

const pillars = [
  {
    title: "The Sanctuary",
    description: "Restore your mind with meditation, yoga, and breathwork",
    icon: "🧘‍♀️",
    href: "/sanctuary",
    color: "from-blue-400 to-indigo-600"
  },
  {
    title: "The Mentor", 
    description: "AI-driven guidance based on proven life principles",
    icon: "🤝",
    href: "/mentor",
    color: "from-green-400 to-teal-600"
  },
  {
    title: "The Gymnasium",
    description: "Train your mind with traditional cognitive games",
    icon: "🧠",
    href: "/gymnasium", 
    color: "from-purple-400 to-pink-600"
  },
  {
    title: "The Chronicle",
    description: "Reflect and track your mental wellness journey",
    icon: "📖",
    href: "/chronicle",
    color: "from-yellow-400 to-orange-600"
  },
  {
    title: "The Soundscape",
    description: "Focus-enhancing audio environments and music",
    icon: "🎵",
    href: "/soundscape",
    color: "from-red-400 to-rose-600"
  }
]

export default function PillarCards() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">The Five Pillars of Endurance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Link key={pillar.title} href={pillar.href}>
              <Card className="hover:scale-105 cursor-pointer h-full">
                <div className={`text-4xl mb-4 p-4 rounded-lg bg-gradient-to-r ${pillar.color} w-fit`}>
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
                <p className="text-gray-300">{pillar.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
