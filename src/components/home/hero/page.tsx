import React from 'react';
import Image from 'next/image';
import hero_img from '../../../../public/hero.jpg';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_theme(colors.orange.500),_transparent_70%)]"></div>
      </div>
      
      {/* Header */}
      <header className="flex items-center justify-between p-6 relative z-10">
        <div className="flex items-center space-x-3">
          {/* Lotus Icon */}
          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 4.5 3.5 5.5-.5-.5-1-1.5-1-2.5 0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5c0 1-.5 2-1 2.5 2-.5 3.5-3 3.5-5.5 0-3.5-2.5-6-6-6z"/>
              <path d="M12 10c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"/>
              <path d="M5 12c0 1.5.5 3 1.5 4 .5-1 1.5-2 3-2.5-1.5-.5-2.5-1.5-3-2.5-.5.5-1 1.5-1.5 2z"/>
              <path d="M19 12c0-1.5-.5-3-1.5-4-.5 1-1.5 2-3 2.5 1.5.5 2.5 1.5 3 2.5.5-.5 1-1.5 1.5-2z"/>
            </svg>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-white/90 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="flex flex-col items-center justify-center px-6 py-16 relative z-10 text-center">
        {/* Meditation Silhouette with Sunset */}
        <div className="relative mb-8">
          <div className="w-96 h-96 relative">
            {/* Sunset Circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-amber-600 rounded-full shadow-2xl opacity-90"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full"></div>
            
            {/* Meditation Silhouette */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-32 bg-slate-900 rounded-full relative">
                {/* Head */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-slate-900 rounded-full"></div>
                {/* Body in meditation pose */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-slate-900 rounded-t-full"></div>
                {/* Arms in meditation position */}
                <div className="absolute top-12 left-2 w-4 h-8 bg-slate-900 rounded-full transform rotate-45"></div>
                <div className="absolute top-12 right-2 w-4 h-8 bg-slate-900 rounded-full transform -rotate-45"></div>
              </div>
            </div>
            
            {/* Temple Silhouettes */}
            <div className="absolute bottom-0 left-8 w-16 h-20 bg-slate-900 opacity-60">
              <div className="w-full h-full bg-gradient-to-t from-slate-900 to-slate-700 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-slate-900"></div>
              </div>
            </div>
            <div className="absolute bottom-0 right-8 w-12 h-16 bg-slate-900 opacity-60">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-transparent border-b-slate-900"></div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 font-serif">
          Naaaste
        </h1>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Abhi
        </h2>
        
        <p className="text-orange-300 text-lg mb-8 max-w-md">
          Endracovers vinble hubed faiucrétis and brdgy
        </p>

        {/* Next Button */}
        <button className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;