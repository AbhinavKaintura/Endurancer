import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function FeaturedContent() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Experience the Quality
          </h2>
          <p className="text-gray-300 mb-8">
            Try a sample of our content before you begin your journey
          </p>
          
          <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-lg p-8 mb-6">
            <div className="text-white text-center">
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="text-xl font-semibold mb-2">
                Nadi Shodhana: Alternate Nostril Breathing
              </h3>
              <p className="text-orange-100 mb-4">
                A 2-minute introduction to this powerful balancing technique
              </p>
              <Button variant="secondary">
                Try Sample Content
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="text-white">
              <div className="text-2xl mb-2">🎯</div>
              <p className="text-sm">For Beginners</p>
            </div>
            <div className="text-white">
              <div className="text-2xl mb-2">😌</div>
              <p className="text-sm">Reduce Stress</p>
            </div>
            <div className="text-white">
              <div className="text-2xl mb-2">🧠</div>
              <p className="text-sm">Improve Focus</p>
            </div>
            <div className="text-white">
              <div className="text-2xl mb-2">🌙</div>
              <p className="text-sm">Sleep Better</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
