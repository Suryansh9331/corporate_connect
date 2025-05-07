// import React from 'react';
// import statsImage from '../../assets/143m.svg'; // Replace with actual image path

// const StatsSection = () => {
//   return (
//    <section className="pl-24 pr-24 pt-16">
//    <div className="bg-[#F3F2EF] w-full  mb-10  rounded py-8  ">
//       <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
//         {/* Left: Image */}
//         <div className="w-full lg:w-1/2 flex justify-center content-left">
//           <img
//             src={statsImage}
//             alt="143M+ members"
//             className="w-full max-w-[700px] h-auto object-contain"
//           />
//         </div>
        

//         {/* Right: Text */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left">
//           <p className="text-xl md:text-3xl font-light text-black-1s00 leading-relaxed">
//             With <strong>143M+ active members</strong> in India, you can find and hire the right people
//             to grow your business and make it thrive.
//           </p>
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// };

// export default StatsSection;

import React from 'react';
import statsImage from '../../assets/images/143m.svg'; // Replace with actual image path

const StatsSection = () => {
  return (
    <section className="px-8 md:px-2 lg:px-35 pt-20 md:pt-8 lg:pt-15 ">
      <div className="bg-[#F3F2EF] w-full mb-10 rounded-lg py-6 px-4 md:px-6 lg:pt-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src={statsImage}
              alt="143M+ members"
              className="w-full max-w-[700px] h-auto object-contain"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
            <p className="text-lg sm:text-xl md:text-xl lg:text-3xl font-light text-black leading-relaxed">
              With <strong>143M+ active members</strong> in India, you can find and hire the right people
              to grow your business and make it thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
