interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  onClick, 
  className = "",
  disabled = false,
  type = 'button'
}: ButtonProps) {
  const baseStyles = "font-medium transition-all duration-300 rounded-lg"
  
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg"
  }
  
  const variants = {
    primary: "bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
    secondary: "bg-white/10 hover:bg-white/20 text-white border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed",
    text: "text-orange-400 hover:text-orange-300 disabled:opacity-50 disabled:cursor-not-allowed"
  }

  return (
    <button 
      type={type}
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
