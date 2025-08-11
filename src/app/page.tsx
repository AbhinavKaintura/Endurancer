import HeroSection from '@/components/pages/welcome/HeroSection'
import PillarCards from '@/components/pages/welcome/PillarCards'
import FeaturedContent from '@/components/pages/welcome/FeaturedContent'
import Link from 'next/link'

export default function WelcomePage() {
  return (
    <div className="bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <HeroSection />
      <FeaturedContent />
      <PillarCards />
      <div className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Previous test</h2>
            <Link 
              href='/previous-home' 
              className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              Previous Version Dashboard
            </Link>
          This section is all created by AI, view just for reference.
        </div>
      </div>
    </div>
  )
}
