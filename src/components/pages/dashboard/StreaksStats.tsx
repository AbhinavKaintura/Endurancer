import Card from '@/components/ui/Card'
import ProgressBarThemed from '@/components/ui/ProgressBarThemed'

export default function StreaksStats() {
  return (
    <div className="space-y-6">
      <Card>
        <ProgressBarThemed
          currentLevel="Annamaya"
          endurancePoints={150}
          pointsToNextLevel={100}
        />
      </Card>
      
      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">Your Progress</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Current Streak</span>
            <span className="text-2xl font-bold text-orange-400">7 days</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Total Sessions</span>
            <span className="text-white font-semibold">42</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">This Week</span>
            <span className="text-white font-semibold">12 sessions</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-300">Favorite Pillar</span>
            <span className="text-white font-semibold">Sanctuary</span>
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">Recent Achievements</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="text-xl">🏆</div>
            <div>
              <p className="text-white text-sm font-medium">First Week Complete!</p>
              <p className="text-gray-400 text-xs">Completed 7 consecutive days</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-xl">⭐</div>
            <div>
              <p className="text-white text-sm font-medium">Focus Master</p>
              <p className="text-gray-400 text-xs">Completed 10 Trataka sessions</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
