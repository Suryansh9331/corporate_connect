import React from "react";

const CTASection = ({
  headline = "Start hiring with LinkedIn Talent Solutions.",
  buttonText = "Contact us",
  buttonLink = "#",
  bgColor = "#56687a",
}) => {
  return (
    <div style={{ backgroundColor: bgColor }} className="text-white px-4 py-20 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h2 className="text-2xl md:text-4xl font-light leading-snug">
          {headline}
        </h2>
        <a
          href={buttonLink}
          className="bg-white text-gray-800 px-6 py-3 mt-8 hover:bg-gray-100 transition font-medium text-sm md:text-base"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default CTASection;
