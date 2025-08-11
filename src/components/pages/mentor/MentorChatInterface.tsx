'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

interface Message {
  id: number
  text: string
  sender: 'user' | 'mentor'
  timestamp: Date
}

export default function MentorChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI Mentor, here to guide you on your path to effectiveness. I'm trained in the principles of Stephen Covey's 7 Habits. What would you like to work on today?",
      sender: 'mentor',
      timestamp: new Date()
    }
  ])
  const [newMessage, setNewMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = async () => {
    if (!newMessage.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setNewMessage('')
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const mentorResponse: Message = {
        id: messages.length + 2,
        text: "That's a great question. Let's explore this using the principle of 'Begin with the End in Mind.' What outcome are you hoping to achieve?",
        sender: 'mentor',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, mentorResponse])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Card className="h-[600px] flex flex-col">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/10 text-gray-200'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className="text-xs opacity-70 mt-1">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/10 text-gray-200 max-w-xs px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="flex space-x-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Ask your mentor anything..."
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1"
        />
        <Button onClick={sendMessage} disabled={isLoading}>
          Send
        </Button>
      </div>

      {/* Quick Prompts */}
      <div className="mt-4">
        <p className="text-gray-300 text-sm mb-2">Quick topics:</p>
        <div className="flex flex-wrap gap-2">
          {['Time Management', 'Goal Setting', 'Stress Management', 'Focus Issues'].map((topic) => (
            <button
              key={topic}
              onClick={() => setNewMessage(`Help me with ${topic.toLowerCase()}`)}
              className="px-3 py-1 bg-white/10 hover:bg-white/20 text-gray-300 text-xs rounded-full transition-colors"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </Card>
  )
}
