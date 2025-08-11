import MeditationLibrary from '@/components/pages/sanctuary/MeditationLibrary'
import YogaLibrary from '@/components/pages/sanctuary/YogaLibrary'
import PranayamaLibrary from '@/components/pages/sanctuary/PranayamaLibrary'

export default function Sanctuary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">The Sanctuary</h1>
          <p className="text-xl text-gray-300">Restore your mind and find inner peace</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MeditationLibrary />
          <YogaLibrary />
          <PranayamaLibrary />
        </div>
      </div>
    </div>
  )
}
