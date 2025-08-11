import ChronicleEditor from '@/components/pages/chronicle/ChronicleEditor'
import SentimentAnalytics from '@/components/pages/chronicle/SentimentAnalytics'

export default function ChroniclePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">The Chronicle</h1>
          <p className="text-xl text-gray-300">Reflect and track your mental wellness journey</p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ChronicleEditor />
          </div>
          <div>
            <SentimentAnalytics />
          </div>
        </div>
      </div>
    </div>
  )
}
