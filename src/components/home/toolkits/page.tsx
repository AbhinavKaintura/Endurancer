import React from 'react';

const Toolkits: React.FC = () => {
  const toolkits = [
    {
      id: 1,
      name: 'Ardhastion',
      icon: (
        <svg className="w-12 h-12 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
          {/* Tree/Growth symbol */}
          <path d="M12 2L8 8h8l-4-6z"/>
          <path d="M12 22v-6"/>
          <path d="M8 16h8"/>
          <path d="M6 12c0-3 2-5 6-5s6 2 6 5"/>
          <circle cx="12" cy="10" r="2"/>
        </svg>
      ),
    },
    {
      id: 2,
      name: 'Claine',
      icon: (
        <svg className="w-12 h-12 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
          {/* Mandala-style circular pattern */}
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="12" cy="12" r="2"/>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
          <path d="M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Skpests',
      icon: (
        <svg className="w-12 h-12 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
          {/* Lotus-style pattern */}
          <path d="M12 3c-2 0-4 2-4 5 0 2 1 3 2 4-1 0-2 1-2 2s1 2 2 2h4c1 0 2-1 2-2s-1-2-2-2c1-1 2-2 2-4 0-3-2-5-4-5z"/>
          <path d="M8 12c-1 0-2 1-2 2s1 2 2 2"/>
          <path d="M16 12c1 0 2 1 2 2s-1 2-2 2"/>
          <circle cx="12" cy="14" r="1"/>
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
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L8 8h8l-4-6z"/>
                <path d="M12 22v-6"/>
                <path d="M8 16h8"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              To toolkits
            </h2>
          </div>
          <button className="text-gray-600 hover:text-gray-800 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Toolkit Cards */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {toolkits.map((toolkit) => (
            <div
              key={toolkit.id}
              className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center aspect-square shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="mb-4">
                {toolkit.icon}
              </div>
              <h3 className="text-white font-medium text-center text-sm">
                {toolkit.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center">
          <div className="w-3 h-3 bg-slate-600 rounded-full shadow-lg transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default Toolkits;
