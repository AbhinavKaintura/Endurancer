import SoundscapePlayer from '@/components/pages/soundscape/SoundscapePlayer'

export default function SoundscapePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">The Soundscape</h1>
          <p className="text-xl text-gray-300">Focus-enhancing audio environments and music</p>
        </header>
        <SoundscapePlayer />
      </div>
    </div>
  )
}
