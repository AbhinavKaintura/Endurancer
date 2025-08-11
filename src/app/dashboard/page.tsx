import PersonalizedGreeting from '@/components/pages/dashboard/PersonalizedGreeting'
import YourPathToday from '@/components/pages/dashboard/YourPathToday'
import PillarQuickAccess from '@/components/pages/dashboard/PillarQuickAccess'
import StreaksStats from '@/components/pages/dashboard/StreaksStats'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 p-6">
      <div className="max-w-7xl mx-auto">
        <PersonalizedGreeting />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2">
            <YourPathToday />
          </div>
          <div>
            <StreaksStats />
          </div>
        </div>
        <PillarQuickAccess />
      </div>
    </div>
  )
}
