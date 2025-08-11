'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import MediaPlayer from '@/components/ui/MediaPlayer'
import Button from '@/components/ui/Button'

const yogaPoses = [
  {
    id: 1,
    name: "Padmasana",
    title: "Lotus Pose",
    description: "The foundational sitting pose for meditation and pranayama practice",
    duration: "5 min",
    difficulty: "Beginner",
    benefits: ["Improves posture", "Calms the mind", "Enhances focus"],
    videoUrl: "/videos/padmasana.mp4",
    thumbnail: "/images/padmasana-thumb.jpg",
    instructions: [
      "Sit on the floor with legs extended",
      "Bend right knee and place right foot on left thigh",
      "Bend left knee and place left foot on right thigh",
      "Keep spine straight and hands in mudra position",
      "Breathe deeply and maintain the pose"
    ]
  },
  {
    id: 2,
    name: "Vrikshasana",
    title: "Tree Pose",
    description: "A standing balance pose that builds focus and stability",
    duration: "8 min",
    difficulty: "Beginner",
    benefits: ["Improves balance", "Strengthens legs", "Enhances concentration"],
    videoUrl: "/videos/vrikshasana.mp4", 
    thumbnail: "/images/vrikshasana-thumb.jpg",
    instructions: [
      "Stand tall with feet together",
      "Shift weight to left foot",
      "Place right foot on inner left thigh",
      "Bring hands to prayer position at chest",
      "Focus on a fixed point ahead"
    ]
  },
  {
    id: 3,
    name: "Sarvangasana",
    title: "Shoulder Stand",
    description: "An inversion pose that increases blood flow to the brain",
    duration: "12 min",
    difficulty: "Intermediate",
    benefits: ["Improves circulation", "Calms nervous system", "Enhances mental clarity"],
    videoUrl: "/videos/sarvangasana.mp4",
    thumbnail: "/images/sarvangasana-thumb.jpg",
    instructions: [
      "Lie flat on your back",
      "Lift legs and hips off the ground",
      "Support lower back with hands",
      "Straighten legs vertically",
      "Hold and breathe steadily"
    ]
  }
]

export default function YogaPage() {
  const [selectedPose, setSelectedPose] = useState(yogaPoses[0])
  const [currentView, setCurrentView] = useState<'library' | 'practice'>('library')

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">Yoga Practice</h1>
          <p className="text-xl text-gray-300">Ancient postures for modern wellness</p>
        </header>

        {currentView === 'library' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {yogaPoses.map((pose) => (
              <Card key={pose.id} className="hover:scale-105 transition-transform cursor-pointer">
                <div className="aspect-video bg-gradient-to-r from-blue-400 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🧘‍♀️</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{pose.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{pose.description}</p>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-orange-400 font-medium">{pose.duration}</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    pose.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                    pose.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {pose.difficulty}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {pose.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-orange-400 mr-2">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  className="w-full"
                  onClick={() => {
                    setSelectedPose(pose)
                    setCurrentView('practice')
                  }}
                >
                  Practice Now
                </Button>
              </Card>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <Button 
                variant="secondary" 
                onClick={() => setCurrentView('library')}
              >
                ← Back to Library
              </Button>
              <h2 className="text-2xl font-bold text-white">{selectedPose.title}</h2>
              <div></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <MediaPlayer
                  src={selectedPose.videoUrl}
                  type="video"
                  title={selectedPose.title}
                  thumbnail={selectedPose.thumbnail}
                />
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-white mb-4">Instructions</h3>
                <ol className="text-gray-300 space-y-3">
                  {selectedPose.instructions.map((instruction, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                        {idx + 1}
                      </span>
                      {instruction}
                    </li>
                  ))}
                </ol>

                <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                  <h4 className="text-orange-400 font-semibold mb-2">Safety Note</h4>
                  <p className="text-gray-300 text-sm">
                    Listen to your body and never force a position. If you experience pain or discomfort, 
                    gently come out of the pose. Consult a healthcare provider before starting any new 
                    exercise routine.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
