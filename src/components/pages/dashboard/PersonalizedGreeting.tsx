'use client'

import { useEffect, useState } from 'react'

export default function PersonalizedGreeting() {
  const [greeting, setGreeting] = useState('')
  const [userName] = useState('Priya') // This would come from auth context

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting('Good morning')
    else if (hour < 17) setGreeting('Good afternoon')
    else setGreeting('Good evening')
  }, [])

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white mb-2">
        Namaste, {userName}
      </h1>
      <p className="text-xl text-gray-300">
        {greeting}. Ready to build your Endurance?
      </p>
    </div>
  )
}
