import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Card({ children, className = "", onClick }: CardProps) {
  return (
    <div 
      className={`bg-gray-700 backdrop-blur-sm rounded-4xl p-[50px] shadow-lg border-gray-400 hover:bg-gray-600 transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
