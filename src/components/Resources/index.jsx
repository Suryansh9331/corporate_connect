import React from "react";
import resources1 from "../../assets/images/resource1.png"
import resources2 from "../../assets/images/resource2.png"; 

const ResourceSection = () => {
  return (  

 <section style={{ backgroundColor: "#F3F2EF" }} className="px-8 py-8 md:py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Left Column */}
        <div className="md:col-span-1">
          <h2 className="text-3xl md:text-4xl font-light text-[#554837] leading-snug">
            Explore some resources to get you excited about Corporate Connect — and what it can do for you
          </h2>
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-8">
          {/* Resource 1 */}
          <div>
            <img src={resources1} alt="Free vs Paid" className="w-full border border-gray-300" />
            <p className="text-[#554837] font-bold mt-4 text-sm md:text-base">
              Free vs. paid hiring tools on Corporate Connect to help you find, attract, and recruit top candidates.
            </p>
            <a href="#" className="text-[#2973B1] text-sm font-bold hover:underline md:text-base mt-4 inline-block">
              Get the guide
            </a>
          </div>

          {/* Resource 2 */}
          <div>
            <img src={resources2} alt="Comparison" className="w-full border border-gray-300" />
            <p className="text-[#554837] mt-4 text-sm md:text-base font-bold">
              How Corporate Connect stacks up against other sourcing, job posting, and employer branding tools.
            </p>
            <a href="#" className="text-[#2973B1] font-bold text-sm md:text-base mt-4 inline-block hover:underline ">
              See the comparison
            </a>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default ResourceSection;
