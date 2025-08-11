'use client'

import { useState } from 'react'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

export default function ChronicleEditor() {
  const [entry, setEntry] = useState('')
  const [prompt, setPrompt] = useState("What is one small, proactive step you can take today towards your goals?")
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const saveEntry = async () => {
    if (!entry.trim()) return
    
    setIsAnalyzing(true)
    // Simulate API call for sentiment analysis
    setTimeout(() => {
      console.log('Entry saved and analyzed:', entry)
      setEntry('')
      setIsAnalyzing(false)
    }, 2000)
  }

  const generateNewPrompt = () => {
    const prompts = [
      "What is one small, proactive step you can take today towards your goals?",
      "Reflect on a moment today when you felt truly present. What contributed to that feeling?",
      "What challenged you today, and how did you respond to it?",
      "What are you most grateful for in this moment?",
      "How did you practice the principles of effectiveness today?"
    ]
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)]
    setPrompt(randomPrompt)
  }

  return (
    <Card>
      <h2 className="text-2xl font-bold text-white mb-6">Today's Reflection</h2>
      
      {/* Daily Prompt */}
      <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-orange-400">Today's Prompt</h3>
          <Button variant="text" onClick={generateNewPrompt} className="text-sm">
            New Prompt
          </Button>
        </div>
        <p className="text-gray-300 italic">{prompt}</p>
      </div>

      {/* Text Editor */}
      <div className="mb-6">
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Start writing your thoughts..."
          className="w-full h-64 p-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 resize-none"
        />
      </div>

      {/* Word Count and Actions */}
      <div className="flex justify-between items-center">
        <span className="text-gray-400 text-sm">
          {entry.length} characters
        </span>
        <div className="flex space-x-2">
          <Button 
            variant="secondary" 
            onClick={() => setEntry('')}
            disabled={!entry.trim()}
          >
            Clear
          </Button>
          <Button 
            onClick={saveEntry}
            disabled={!entry.trim() || isAnalyzing}
          >
            {isAnalyzing ? 'Analyzing...' : 'Save Entry'}
          </Button>
        </div>
      </div>

      {/* Recent Entries Preview */}
      <div className="mt-8 pt-6 border-t border-white/10">
        <h3 className="text-lg font-semibold text-white mb-4">Recent Entries</h3>
        <div className="space-y-2">
          <div className="p-3 bg-white/5 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-400">Yesterday</span>
              <span className="text-sm text-green-400">Optimistic</span>
            </div>
            <p className="text-gray-300 text-sm">Felt really focused during my morning meditation session...</p>
          </div>
          <div className="p-3 bg-white/5 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-400">2 days ago</span>
              <span className="text-sm text-yellow-400">Reflective</span>
            </div>
            <p className="text-gray-300 text-sm">Thinking about how to better manage my time...</p>
          </div>
        </div>
      </div>
    </Card>
  )
}
