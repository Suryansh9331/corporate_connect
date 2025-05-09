import React from "react";
import heroDesktop from "../../assets/images/home_heroImage.svg";
import heroMobile from "../../assets/images/mobile_home_hero.svg";

const HeroSection = () => {
  return (
    <div className="w-full bg-white">
      {/* === Mobile Layout (column) === */}
      <div className="flex flex-col lg:hidden px-6 sm:px-10 py-12 space-y-8">
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl font-light text-gray-900 leading-snug">
            Hire the people <br /> you need
          </h1>
         <a href="#"> 
          <button className="mt-6 bg-[#0073b1] text-white font-semibold px-6 py-3 rounded hover:bg-[#485d69] transition">
            Contact us
          </button>
          </a>
        </div>

        {/* Mobile + Tablet Image */}
        <picture className="w-full">
          <img
            src={heroMobile}
            alt="Illustration"
            className="w-full max-w-[820px] h-auto object-contain"
          />
        </picture>
      </div>

      {/* === Desktop / MacBook / Large Layout (overlay) === */}
      <div className="hidden lg:block relative w-full min-h-[60vh] overflow-hidden px-6 xl:px-24 pt-16">
        {/* Background Image */}
        <div className="w-full flex justify-center">
          <img
            src={heroDesktop}
            alt="Desktop Hero"
            className="w-full max-w-[1200px] h-auto object-cover"
          />
        </div>

        {/* Overlay Text */}
        <div className="absolute top-1/8 left-16 sm:left-16 lg:left-30 xl:left-44 text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-light text-[#262626] leading-snug">
            Hire the people <br /> you need
          </h1>
         <a href="#">
          <button className="mt-6 bg-[#0073b1] text-white font-semibold px-6 py-3 rounded hover:bg-[#485d69] transition">
            Contact us
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
