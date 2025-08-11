'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import GoalSelection from './GoalSelection'
import StressAssessment from './StressAssessment'
import AspirationalGoal from './AspirationalGoal'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface OnboardingData {
  goals: string[]
  stressLevel: string
  aspirationalGoals: string[]
}

export default function OnboardingFlow() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    goals: [],
    stressLevel: '',
    aspirationalGoals: []
  })

  const steps = [
    {
      title: 'Welcome to Endurance',
      subtitle: 'Let\'s personalize your journey',
      component: <WelcomeStep />
    },
    {
      title: 'Why are you here?',
      subtitle: 'Select all that apply to you',
      component: <GoalSelection 
        selectedGoals={onboardingData.goals}
        onGoalsChange={(goals) => setOnboardingData(prev => ({ ...prev, goals }))}
      />
    },
    {
      title: 'How often do you feel stressed?',
      subtitle: 'Help us understand your current state',
      component: <StressAssessment
        selectedLevel={onboardingData.stressLevel}
        onLevelChange={(level) => setOnboardingData(prev => ({ ...prev, stressLevel: level }))}
      />
    },
    {
      title: 'How would you like to feel?',
      subtitle: 'Choose your aspirational states',
      component: <AspirationalGoal
        selectedGoals={onboardingData.aspirationalGoals}
        onGoalsChange={(goals) => setOnboardingData(prev => ({ ...prev, aspirationalGoals: goals }))}
      />
    }
  ]

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      completeOnboarding()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const completeOnboarding = async () => {
    try {
      // Send onboarding data to backend
      console.log('Onboarding completed:', onboardingData)
      
      // Redirect to dashboard
      router.push('/dashboard')
    } catch (error) {
      console.error('Error completing onboarding:', error)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 0: return true
      case 1: return onboardingData.goals.length > 0
      case 2: return onboardingData.stressLevel !== ''
      case 3: return onboardingData.aspirationalGoals.length > 0
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-300 mb-2">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        <Card>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">{steps[currentStep].title}</h1>
            <p className="text-gray-300">{steps[currentStep].subtitle}</p>
          </div>

          {steps[currentStep].component}

          <div className="flex justify-between mt-8">
            <Button 
              variant="secondary"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              Previous
            </Button>
            
            <Button
              onClick={nextStep}
              disabled={!canProceed()}
            >
              {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

function WelcomeStep() {
  return (
    <div className="text-center">
      <div className="text-6xl mb-6">🧘‍♀️</div>
      <p className="text-gray-300 text-lg mb-6">
        Welcome to Endurance, where ancient wisdom meets modern neuroscience. 
        In the next few steps, we'll personalize your journey to cognitive wellness.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="bg-white/10 p-4 rounded-lg">
          <h3 className="text-orange-400 font-semibold mb-2">Personalized Experience</h3>
          <p className="text-gray-300">Your responses will help us tailor content specifically for you</p>
        </div>
        <div className="bg-white/10 p-4 rounded-lg">
          <h3 className="text-orange-400 font-semibold mb-2">Privacy First</h3>
          <p className="text-gray-300">Your data is encrypted and never shared with third parties</p>
        </div>
      </div>
    </div>
  )
}
