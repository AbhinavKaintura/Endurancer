import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Card({ children, className = "", onClick }: CardProps) {
  return (
    <div 
      className={`bg-white/10 backdrop-blur-sm rounded-4xl p-[50px] shadow-lg border-gray-400 hover:bg-white/20 transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
