import HeroSection from '@/components/pages/welcome/HeroSection'
import PillarCards from '@/components/pages/welcome/PillarCards'
import FeaturedContent from '@/components/pages/welcome/FeaturedContent'
import Link from 'next/link'

export default function WelcomePage() {
  return (
    <div className="bg-gray-900">
      <HeroSection />
      <FeaturedContent />
      <PillarCards />
      <div className="py-12">
        <div className="container mx-auto px-6">
         <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Previous test</h2>
            <Link 
              href='/previous-home' 
              className="inline-block bg-white/90 transition-transform hover:to-white/60 hover:text-shadow-gray-900 duration-600 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:shadow-lg cursor-pointer mr-4"
            >
              Previous Version Dashboard
            </Link>
          This section is all created by AI, view just for reference.
        </div>
      </div>
    </div>
  )
}
