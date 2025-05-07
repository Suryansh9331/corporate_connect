


import React from 'react';
import { Globe } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#485d69] text-white sm:py-1 h-[40px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        {/* Left side */}
        <div className="flex items-center">
          <span className="mr-1 sm:mr-2">
            <Globe size={18} className="sm:w-5 sm:h-5" />
          </span>
          <div className="relative inline-block text-left">
            <button type="button" className="inline-flex items-center gap-x-1 text-xs sm:text-sm font-medium">
              <span className="xs:inline">English</span> (India)
              <svg className="-mr-1 h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right side */}
        <div>
          <a
            href="#"
            className="font-sans text-white text-5px font-medium hover:underline transition-all duration-200"
          >
            Post a job
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
