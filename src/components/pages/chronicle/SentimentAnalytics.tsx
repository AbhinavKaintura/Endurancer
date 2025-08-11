'use client'

import Card from '@/components/ui/Card'

export default function SentimentAnalytics() {
  // Mock data - in real app this would come from API
  const currentMood = {
    score: 7.2,
    primary: 'Optimistic',
    secondary: ['Focused', 'Grateful']
  }

  const weeklyTrend = [
    { day: 'Mon', score: 6.5, mood: 'Calm' },
    { day: 'Tue', score: 5.8, mood: 'Stressed' },
    { day: 'Wed', score: 7.1, mood: 'Focused' },
    { day: 'Thu', score: 6.9, mood: 'Content' },
    { day: 'Fri', score: 7.8, mood: 'Energetic' },
    { day: 'Sat', score: 8.2, mood: 'Joyful' },
    { day: 'Sun', score: 7.2, mood: 'Optimistic' }
  ]

  const insights = [
    "Your mood has been trending upward this week (+12%)",
    "You tend to feel most positive on weekends",
    "Meditation sessions correlate with improved mood scores"
  ]

  const getMoodColor = (score: number) => {
    if (score >= 8) return 'text-green-400'
    if (score >= 6) return 'text-yellow-400'
    if (score >= 4) return 'text-orange-400'
    return 'text-red-400'
  }

  const getMoodBarColor = (score: number) => {
    if (score >= 8) return 'bg-green-400'
    if (score >= 6) return 'bg-yellow-400'
    if (score >= 4) return 'bg-orange-400'
    return 'bg-red-400'
  }

  return (
    <div className="space-y-6">
      {/* Current Mood */}
      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">Current Mood Analysis</h3>
        
        <div className="text-center mb-4">
          <div className={`text-4xl font-bold ${getMoodColor(currentMood.score)} mb-2`}>
            {currentMood.score}/10
          </div>
          <div className="text-xl text-white mb-2">{currentMood.primary}</div>
          <div className="flex justify-center space-x-2">
            {currentMood.secondary.map((mood) => (
              <span key={mood} className="text-sm bg-white/10 text-gray-300 px-2 py-1 rounded">
                {mood}
              </span>
            ))}
          </div>
        </div>

        {/* Mood Scale Visual */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>Very Low</span>
            <span>Neutral</span>
            <span>Very High</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-full ${getMoodBarColor(currentMood.score)} transition-all duration-500`}
              style={{ width: `${(currentMood.score / 10) * 100}%` }}
            />
          </div>
        </div>
      </Card>

      {/* Weekly Trend */}
      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">Weekly Trend</h3>
        
        <div className="space-y-3">
          {weeklyTrend.map((day) => (
            <div key={day.day} className="flex items-center space-x-3">
              <span className="text-sm text-gray-400 w-8">{day.day}</span>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-white">{day.mood}</span>
                  <span className={`text-sm ${getMoodColor(day.score)}`}>
                    {day.score}
                  </span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1">
                  <div 
                    className={`h-full ${getMoodBarColor(day.score)} rounded-full transition-all duration-300`}
                    style={{ width: `${(day.score / 10) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Insights */}
      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">AI Insights</h3>
        
        <div className="space-y-3">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="text-orange-400 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm text-gray-300">{insight}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Emotion Distribution */}
      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">Emotion Patterns</h3>
        
        <div className="space-y-2">
          {[
            { emotion: 'Joy', percentage: 35, color: 'bg-green-400' },
            { emotion: 'Calm', percentage: 28, color: 'bg-blue-400' },
            { emotion: 'Focus', percentage: 20, color: 'bg-purple-400' },
            { emotion: 'Gratitude', percentage: 12, color: 'bg-orange-400' },
            { emotion: 'Stress', percentage: 5, color: 'bg-red-400' }
          ].map((item) => (
            <div key={item.emotion} className="flex items-center space-x-3">
              <span className="text-sm text-gray-300 w-16">{item.emotion}</span>
              <div className="flex-1 bg-white/20 rounded-full h-2">
                <div 
                  className={`h-full ${item.color} rounded-full transition-all duration-500`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
              <span className="text-sm text-gray-400 w-8">{item.percentage}%</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">Wellness Actions</h3>
        
        <div className="space-y-2">
          <button className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <span className="text-xl">📊</span>
              <div>
                <p className="text-white text-sm font-medium">View Detailed Analytics</p>
                <p className="text-gray-400 text-xs">See your complete mood history</p>
              </div>
            </div>
          </button>
          
          <button className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <span className="text-xl">💡</span>
              <div>
                <p className="text-white text-sm font-medium">Get Personalized Tips</p>
                <p className="text-gray-400 text-xs">AI suggestions based on your patterns</p>
              </div>
            </div>
          </button>
          
          <button className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
            <div className="flex items-center space-x-3">
              <span className="text-xl">📤</span>
              <div>
                <p className="text-white text-sm font-medium">Export Data</p>
                <p className="text-gray-400 text-xs">Download your wellness report</p>
              </div>
            </div>
          </button>
        </div>
      </Card>
    </div>
  )
}
