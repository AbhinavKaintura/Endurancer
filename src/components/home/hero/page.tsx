import React from 'react';
import Image from 'next/image';
import hero_img from '../../../../public/hero.jpg'; // Update this path to your actual image

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
      {/* Header */}
      <Image
              src={hero_img}// <-- UPDATE THIS PATH
              alt="Meditation silhouette with sunset"
              fill
              className="object-contain"
              priority
            />
      <header className="flex items-center justify-between p-6 relative z-10">
        <div className="flex items-center space-x-4">
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <button className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center space-x-2 text-white">
          <span className="text-sm font-medium">MIII Daolutha</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-12 relative z-10">
        {/* Left Content */}
        <div className="flex-1 max-w-md mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
            Namaste, Abhi
          </h1>
          <p className="text-orange-400 text-lg mb-6">
            Ina Stiocal Apr Feore
          </p>
          
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            Cosalo stectaned accotating or deligbring and losig, and anally agent the worle at losah and oldag, prodesald the sindling chesh Inolin loces.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors duration-200">
              Sentere
            </button>
            <button className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-800 rounded-full transition-colors duration-200 font-medium">
              Centrl
            </button>
            <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-colors duration-200 relative">
              Slecthan
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
            </button>
          </div>

          {/* Bottom Icons */}
          <div className="flex space-x-4">
            <button className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>
            <button className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            <button className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px]">
            {/* Replace this src with your actual image path */}
            
          </div>
        </div>
      </div>

      {/* Orange Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full">
          <path 
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" 
            fill="#f97316"
            className="drop-shadow-lg"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;