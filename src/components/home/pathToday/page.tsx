import React from 'react';

const PathToday: React.FC = () => {
  return (
    <div className="px-6 py-8 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            Your Path Today
            <svg className="w-6 h-6 ml-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </h2>
          <button className="text-gray-600 hover:text-gray-800 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-4">
          <div className="flex">
            {/* Profile Image */}
            <div className="w-24 h-24 m-4 rounded-2xl overflow-hidden bg-gradient-to-br from-orange-200 to-amber-300 flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-orange-300 to-amber-400 flex items-center justify-center">
                <div className="w-16 h-20 bg-gray-700 rounded-full relative">
                  {/* Meditation pose silhouette */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-700 rounded-full"></div>
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-700 rounded-t-full"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                lokagje to.cus
              </h3>
              <div className="w-8 h-1 bg-orange-500 mb-3"></div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Nel at a groy of lifli bee, and grean meet harkets, and bog a silending yoga, consirue of proustes the.
              </p>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center">
          <div className="w-3 h-3 bg-orange-500 rounded-full shadow-lg transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default PathToday;
