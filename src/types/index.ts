export interface User {
  user_id: string
  email: string
  username?: string
  age_group?: 'child' | 'teen' | 'adult'
  onboarding_stress_level?: string
  onboarding_aspirational_goal?: string
}

export interface UserProgress {
  endurance_points: number
  current_level: string
  current_streak_days: number
  total_sessions: number
}

export interface ContentItem {
  content_id: string
  pillar: string
  content_type: string
  title: string
  description: string
  age_group_tag: string
  duration_seconds?: number
  asset_url?: string
  thumbnail_url?: string
}

export interface JournalEntry {
  entry_id: string
  entry_text: string
  created_at: string
  sentiment_score?: number
  detected_emotions?: Record<string, number>
}

export interface SentimentAnalysis {
  overall_sentiment_score: number
  detected_emotions: Record<string, number>
  insights: string[]
}

export interface Recommendation {
  title: string
  description: string
  pillar: string
  content_type: string
  duration: string
  points: number
  reason: string
}

export type PillarType = 'sanctuary' | 'mentor' | 'gymnasium' | 'chronicle' | 'soundscape'

export type InteractionType = 'started' | 'completed' | 'rated' | 'favorited'

export interface UserGoal {
  goal_id: string
  goal_description: string
  is_active: boolean
  created_at: string
}

export interface WeeklyProgress {
  date: string
  day: string
  sessions: number
  mood_score?: number
}
