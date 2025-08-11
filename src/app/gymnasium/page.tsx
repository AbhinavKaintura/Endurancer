import GameSelection from '@/components/pages/gymnasium/GameSelection'

export default function GymnasiumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">The Gymnasium</h1>
          <p className="text-xl text-gray-300">Train your mind with traditional cognitive games</p>
        </header>
        <GameSelection />
      </div>
    </div>
  )
}
