const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1'

class ApiClient {
  private baseURL: string
  private token: string | null = null

  constructor(baseURL: string) {
    this.baseURL = baseURL
    // Get token from localStorage if available
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('access_token')
    }
  }

  setToken(token: string) {
    this.token = token
    if (typeof window !== 'undefined') {
      localStorage.setItem('access_token', token)
    }
  }

  clearToken() {
    this.token = null
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token')
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`
    }

    const response = await fetch(url, {
      ...options,
      headers,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new Error(error.detail || `HTTP error! status: ${response.status}`)
    }

    return response.json()
  }

  // Auth endpoints
  async login(email: string, password: string) {
    const formData = new FormData()
    formData.append('username', email)
    formData.append('password', password)

    return this.request<{ access_token: string; token_type: string }>('/auth/login', {
      method: 'POST',
      headers: {},
      body: formData,
    })
  }

  async register(email: string, password: string, username?: string) {
    return this.request<{ user_id: string; email: string }>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, password, username }),
    })
  }

  // User endpoints
  async getProfile() {
    return this.request<any>('/users/profile')
  }

  async updateProfile(data: any) {
    return this.request<{ message: string }>('/users/profile', {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async getProgress() {
    return this.request<{
      endurance_points: number
      current_level: string
      current_streak_days: number
      total_sessions: number
    }>('/users/progress')
  }

  async createGoal(goalDescription: string) {
    return this.request<{ message: string; goal_id: string }>('/users/goals', {
      method: 'POST',
      body: JSON.stringify({ goal_description: goalDescription }),
    })
  }

  async getGoals() {
    return this.request<Array<{
      goal_id: string
      goal_description: string
      created_at: string
    }>>('/users/goals')
  }

  // Content endpoints
  async getContent(pillar: string, filters?: { age_group?: string; content_type?: string }) {
    const params = new URLSearchParams()
    if (filters?.age_group) params.append('age_group', filters.age_group)
    if (filters?.content_type) params.append('content_type', filters.content_type)
    
    const queryString = params.toString()
    const endpoint = `/content/${pillar}${queryString ? `?${queryString}` : ''}`
    
    return this.request<Array<{
      content_id: string
      pillar: string
      content_type: string
      title: string
      description: string
      duration_seconds?: number
      asset_url?: string
      thumbnail_url?: string
    }>>(endpoint)
  }

  async getRecommendations(pillar: string) {
    return this.request<Array<{
      content_id: string
      title: string
      description: string
      pillar: string
      content_type: string
      duration_seconds?: number
      recommended_reason: string
    }>>(`/content/${pillar}/recommendations`)
  }

  async createInteraction(contentId: string, interactionType: string, rating?: number) {
    return this.request<{ message: string }>(`/content/${contentId}/interact`, {
      method: 'POST',
      body: JSON.stringify({ interaction_type: interactionType, rating }),
    })
  }

  // Journal endpoints
  async createJournalEntry(entryText: string) {
    return this.request<{
      message: string
      entry_id: string
      sentiment_analysis: any
    }>('/journal/entries', {
      method: 'POST',
      body: JSON.stringify({ entry_text: entryText }),
    })
  }

  async getJournalEntries(limit = 10, offset = 0) {
    return this.request<Array<{
      entry_id: string
      entry_text: string
      created_at: string
      sentiment_score?: number
      detected_emotions?: any
    }>>(`/journal/entries?limit=${limit}&offset=${offset}`)
  }

  async getSentimentAnalysis(days = 7) {
    return this.request<{
      overall_sentiment_score: number
      detected_emotions: Record<string, number>
      insights: string[]
    }>(`/journal/sentiment/analysis?days=${days}`)
  }

  async getDailyPrompt() {
    return this.request<{ prompt: string }>('/journal/prompts/daily')
  }

  // Analytics endpoints
  async getDashboardSummary() {
    return this.request<{
      endurance_points: number
      current_level: string
      current_streak: number
      weekly_sessions: number
      recent_mood: { score: number; timestamp?: string }
      activity_breakdown: Record<string, number>
    }>('/analytics/dashboard/summary')
  }

  async getPersonalizedRecommendations() {
    return this.request<{
      recommendations: Array<{
        title: string
        description: string
        pillar: string
        content_type: string
        duration: string
        points: number
        reason: string
      }>
    }>('/analytics/recommendations')
  }

  async getWeeklyProgress() {
    return this.request<{
      weekly_data: Array<{
        date: string
        day: string
        sessions: number
        mood_score?: number
      }>
    }>('/analytics/progress/weekly')
  }
}

export const apiClient = new ApiClient(API_BASE_URL)
export default apiClient
