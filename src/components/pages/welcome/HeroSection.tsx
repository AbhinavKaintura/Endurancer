import Button from '@/components/ui/Button'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
          Reclaim Your Focus. Build Your Endurance.
        </h1>
        <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          Break free from digital distraction and cognitive decline. Experience the perfect fusion of ancient wisdom and modern neuroscience.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/register">
            <Button>Start Your Journey for Free</Button>
          </Link>
          <Link href="/login">
            <Button variant="secondary">Log In</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
