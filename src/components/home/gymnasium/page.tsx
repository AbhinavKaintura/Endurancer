import React from 'react';

const Gymnasium: React.FC = () => {
  const exercises = [
    {
      id: 1,
      name: 'Chaturanga',
      subtitle: 'Reseilts cerarce',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          {/* Grid/Board pattern */}
          <rect x="3" y="3" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M7 3v18M11 3v18M15 3v18M19 3v18"/>
          <path d="M3 7h18M3 11h18M3 15h18M3 19h18"/>
          <circle cx="8" cy="8" r="1"/>
          <circle cx="16" cy="16" r="1"/>
        </svg>
      ),
    },
    {
      id: 2,
      name: 'Clirtimisha',
      subtitle: 'Pesdile berarcs',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          {/* Spiral pattern */}
          <path d="M12 2C8 2 5 5 5 9c0 2 1 4 3 5-1 1-2 3-1 5 1 1 3 1 4 0 1 1 3 1 4 0 1-2 0-4-1-5 2-1 3-3 3-5 0-4-3-7-7-7z"/>
          <circle cx="12" cy="9" r="2"/>
          <path d="M9 14c1 1 2 1 3 0s2 1 3 0"/>
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Vattert',
      subtitle: 'Folasils caserce',
      icon: (
        <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
          {/* Geometric flower pattern */}
          <path d="M12 2l2 4 4-2-2 4 4 2-4 2 2 4-4-2-2 4-2-4-4 2 2-4-4-2 4-2-2-4 4 2z"/>
          <circle cx="12" cy="12" r="3"/>
          <circle cx="12" cy="12" r="1"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="px-6 py-8 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-red-600 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              The Gymnasium
            </h2>
          </div>
          <button className="text-gray-600 hover:text-gray-800 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Exercise Cards */}
        <div className="space-y-4">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Icon Container */}
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center">
                    {exercise.icon}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {exercise.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {exercise.subtitle}
                    </p>
                  </div>
                </div>

                {/* Add Button */}
                <button className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gymnasium;
