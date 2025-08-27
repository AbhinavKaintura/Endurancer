import Card from '@/components/ui/Card'
import Link from 'next/link'

const pillars = [
  {
    title: "The Sanctuary",
    description: "Restore your mind with meditation, yoga, and breathwork",
    icon: "/icons/meditation_pillar.png",
    href: "/sanctuary"
  },
  {
    title: "The Mentor", 
    description: "AI-driven guidance based on proven life principles",
    icon: "/icons/helping_hand.png",
    href: "/mentor"
  },
  {
    title: "The Gymnasium",
    description: "Train your mind with traditional cognitive games",
    icon: "/icons/brain.png",
    href: "/gymnasium"
  },
  {
    title: "The Chronicle",
    description: "Reflect and track your mental wellness journey",
    icon: "/icons/books-stack-of-three.png",
    href: "/chronicle"
  },
  {
    title: "The Soundscape",
    description: "Focus-enhancing audio environments and music",
    icon: "/icons/wave-sound.png",
    href: "/soundscape"
  }
]

export default function PillarCards() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-center mb-12">The Five Pillars of Endurance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Link key={pillar.title} href={pillar.href}>
              <Card className="hover:scale-105 cursor-pointer h-[380px] ">
                <div className={`text-4xl mb-4 p-2 rounded   flex items-center justify-center `}>
                  <img
                  src={pillar.icon}
                  alt="windy Image"
                  className="h-[170px] w-[180px] text-white bg-transparent rounded-3xl p-2  "
                />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{pillar.title}</h3>
                <p className="text-gray-300 text-center">{pillar.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
