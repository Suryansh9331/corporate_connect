import { Clock, Users, Building2 } from 'lucide-react'; 
import React from 'react';
import whyus1 from "../../assets/images/whyus1.svg"
import whyus2 from "../../assets/images/whyus2.svg"
const WhyUsSection = () => {
  return (
    <section className="px-4 py-16 bg-[] text-center">
      <h2 className="text-4xl md:text-4xl  font-light sm:text-2xl  text-black mb-20">
        What makes us different
      </h2>

      {/* Main content */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-32 mb-24">
        {/* Insights block */}
        <div className="max-w-md">
          <img
            src={whyus1}
            alt="Insights to help you hire"
            className="mx-auto mb-6 w-68 md:w-78"
          />
          <h3 className="text-2xl font-bold text-[#4c4c4c] mb-8">
            Insights to help you hire
          </h3>
          <p className="text-gray-600 text-md">
            Our products are powered by real-time data to target the right people,
            inform your hiring goals, and see things like who’s interested in your company.
          </p>
        </div>

        {/* Community block */}
        <div className="max-w-sm">
          <img
            src={whyus2}
            alt="A dynamic community"
            className="mx-auto mb-6 w-68 md:w-78"
          />
          <h3 className="text-2xl font-bold text-[#4c4c4c] mb-8">
            A dynamic community
          </h3>
          <p className="text-gray-600 text-md">
            Access the world’s largest professional network: Over 1 billion professionals
            in over 200 countries and territories who come to  to find jobs and build careers.
          </p>
        </div>
      </div>

      {/* Stats boxes */}
   
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-white">
  {/* Stat 1 */}
  <div className="bg-[#0a243b] p-6 rounded flex flex-col items-center text-center">
    <Clock size={36} className="mb-4" />
    <p className="text-lg font-bold mb-4">Every minute</p>
    <p className="text-sm mb-1">6 people are hired on LinkedIn</p>
  </div>

  {/* Stat 2 */}
  <div className="bg-[#5a6f82] p-6 rounded flex flex-col items-center text-center">
    <Users size={32} className="mb-4" />
    <p className="text-lg mb-4 font-bold">6M+</p>
    <p className="text-sm mb-1">
      qualified candidates are delivered in India every week.
    </p>
  </div>

  {/* Stat 3 */}
  <div className="bg-[#7890a5] p-6 rounded flex flex-col items-center text-center">
    <Building2 size={32} className="mb-4" />
    <p className="text-lg  font-bold mb-4">1.1M+</p>
    <p className="text-sm mb-1">
      companies use corporate connect to source and hire
    </p>
  </div>
</div>

      {/* Source */}
      <div className="flex justify-end"> 
        <p className="text-md text-gray-900 mt-6 lg:mr-50 ">
        Source: corporate connect data, April 2024
      </p></div>
     
    </section>
  );
};

export default WhyUsSection;
