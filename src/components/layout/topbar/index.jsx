import React from 'react';
import { Globe } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="bg-[rgb(72,93,105)] text-white text-sm font-semibold px-6 py-2 flex justify-between items-center flex-wrap border-t border-gray-800">
      {/* Left: Language Selector */}
      <div className="flex items-center space-x-1">
        <Globe size={16} className="text-white" />
        <span>English (India)</span>
        <span className="text-xs">▼</span>
      </div>

      {/* Right: Post a job */}
      <div className="mt-2 sm:mt-0 sm:ml-auto">
        <span className="hover:underline cursor-pointer">Post a job</span>
      </div>
    </div>
  );
};

export default Topbar;
