


import React from 'react';
import { Globe } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-[#485d69] text-white sm:py-1 h-[40px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
        {/* Left side */}
        <div className="flex items-center">
          
          <div className="relative inline-block text-left">
           
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
