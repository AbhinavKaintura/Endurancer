import MentorChatInterface from '@/components/pages/mentor/MentorChatInterface'

export default function MentorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">The Mentor</h1>
          <p className="text-xl text-gray-300">Your AI-powered guide to effective living</p>
        </header>
        <MentorChatInterface />
      </div>
    </div>
  )
}
