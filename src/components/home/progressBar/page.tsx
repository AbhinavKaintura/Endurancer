import React from 'react';

interface ProgressBarProps {
  level?: number;
  endurancePoints?: number;
  maxPoints?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  level = 7, 
  endurancePoints = 2847, 
  maxPoints = 4000 
}) => {
  const progressPercentage = (endurancePoints / maxPoints) * 100;

  return (
    <div className="px-6 py-6 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold text-lg">Spiritual Journey</h3>
          <div className="flex items-center space-x-2">
            <span className="text-orange-400 text-sm font-medium">Level {level}</span>
            <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300 text-sm">Endurance Points</span>
            <span className="text-orange-400 text-sm font-medium">
              {endurancePoints.toLocaleString()} / {maxPoints.toLocaleString()}
            </span>
          </div>
          
          <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 h-full rounded-full shadow-lg transition-all duration-1000 ease-out"
              style={{ width: `${progressPercentage}%` }}
            >
              <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Sacred Wisdom Quote */}
        <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-2xl p-4 border border-orange-500/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c-1.27 0-2.4.33-3.29.92A4.5 4.5 0 0 0 6 8a4.5 4.5 0 0 0 2.71 4.08A4.5 4.5 0 0 0 6 16.5a4.5 4.5 0 0 0 2.71 4.08A4.5 4.5 0 0 0 12 21c1.27 0 2.4-.33 3.29-.92A4.5 4.5 0 0 0 18 16.5a4.5 4.5 0 0 0-2.71-4.08A4.5 4.5 0 0 0 18 8a4.5 4.5 0 0 0-2.71-4.08A4.5 4.5 0 0 0 12 3z"/>
              </svg>
            </div>
            <div>
              <p className="text-gray-300 text-sm italic leading-relaxed">
                "The mind is everything. What you think you become."
              </p>
              <p className="text-orange-400 text-xs mt-1">- Buddha</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
