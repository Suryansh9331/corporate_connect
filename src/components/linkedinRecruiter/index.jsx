// import React, { useRef, useState } from "react";

// export default function LinkedInRecruiter({
//   heading,
//   title,
//   description,
//   bullets,
//   videoSrc,
//   bgImage,
//   primaryBtnText,
//   secondaryBtnText,
// }) {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlayPause = () => {
//     if (videoRef.current) {
//       isPlaying ? videoRef.current.pause() : videoRef.current.play();
//       setIsPlaying(!isPlaying);
//     }
//   };

//   return (
//     <div className="w-full px-8 font-sans ">
//       {/* Heading */}
//       <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-20">
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center text-gray-800 mt-20 mb-10 ml-10">
//           {heading}
//         </h1>
//       </div>

//       <div className="relative w-full">
//         {/* Desktop background image */}
//         <img
//           src={bgImage}
//           alt="Background"
//           className="hidden lg:block absolute inset-0 w-full h-auto object-cover z-0"
//         />

//         {/* Mobile layout */}
//         <div className="block lg:hidden bg-[#FBF1E2] w-full h-full">
//           <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-10 flex flex-col items-center z-10 relative">
//             <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#4B4843] mb-4 text-center">
//               {title}
//             </h2>
//             <p className="text-gray-700 text-center text-lg sm:text-xl font-light mb-6">
//               {description}
//             </p>

//             {/* Bullets */}
//             <div className="w-full space-y-6 text-base sm:text-lg">
//               {bullets.map((item, i) => (
//                 <div key={i} className="flex items-start">
//                   <span className="text-black mr-2 text-xl">•</span>
//                   <p>
//                     <span className="font-medium">{item.title}</span> {item.text}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Video & Buttons */}
//             <div className="mt-10 w-full flex flex-col items-center gap-6">
//               <div className="relative w-full max-w-md rounded-xl overflow-hidden  ">
//                 <video
//                   ref={videoRef}
//                   className="w-full h-auto rounded-xl"
//                   controls={false}
//                   muted
//                 >
//                   <source src={videoSrc} type="video/mp4" />
//                 </video>
//                 <button
//                   onClick={togglePlayPause}
//                   className="absolute -bottom-3 -right-3 bg-gray-500 border text-white hover:bg-black rounded-full w-12 h-12 flex items-center justify-center"
//                 >
//                   {isPlaying ? (
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6" />
//                     </svg>
//                   ) : (
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M6 4l15 8-15 8z" />
//                     </svg>
//                   )}
//                 </button>
//               </div>

//               <div className="flex flex-wrap justify-center gap-4">
//                 <button className="bg-[#485d69] text-white px-6 py-2 hover:bg-[#4d8abe] transition text-sm font-medium">
//                   {primaryBtnText}
//                 </button>
//                 <button className="border border-[#485d69] text-[#485d69] px-6 py-2 hover:bg-[#4d8abe] transition text-sm font-medium">
//                   {secondaryBtnText}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Desktop layout */}
//         <div className="hidden lg:flex items-center justify-center px-12 relative z-10 min-h-screen ">
//           <div className="max-w-[1600px] w-full flex i justify-between gap-4 ">
//             <div className="w-1/3 space-y-6 text-black md:ml-30">
//               <h2 className="text-4xl font-bold text-[#4B4843] md:mb-20">
//                 {title}
//               </h2>
//               <p className="text-2xl font-light text-gray-800">{description}</p>

//               {bullets.map((item, i) => (
//                 <div key={i} className="flex items-start">
//                   <span className="text-black mr-2 text-xl">•</span>
//                   <p>
//                     <span className="font-medium">{item.title}</span> {item.text}
//                   </p>
//                 </div>
//               ))}

//               <div className="flex gap-4 mt-6">
//                 <button className="bg-[#485d69] text-white px-6 py-2 hover:bg-[#4d8abe] transition text-sm font-medium">
//                   {primaryBtnText}
//                 </button>
//                 <button className="border border-[#485d69] text-[#485d69] px-6 py-2 hover:bg-[#4d8abe] transition text-sm font-medium">
//                   {secondaryBtnText}
//                 </button>
//               </div>
//             </div>

//             <div className="w-1/2 relative">
//               <div className="relative w-[520px] pt-5 rounded-xl ">
//                 <video
//                   ref={videoRef}
//                   className="w-full h-auto rounded-xl"
//                   controls={false}
//                   muted
//                 >
//                   <source src={videoSrc} type="video/mp4" />
//                 </video>
//                 <button
//                   onClick={togglePlayPause}
//                   className="absolute -bottom-3 -right-3 bg-gray-500 border text-white hover:bg-black rounded-full w-12 h-12 flex items-center justify-center"
//                 >
//                   {isPlaying ? (
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6" />
//                     </svg>
//                   ) : (
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                       <path d="M6 4l15 8-15 8z" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useRef, useState } from "react";

export default function LinkedInRecruiter({
  heading,
  title,
  description,
  bullets,
  videoSrc,
  bgImage,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full px-8 font-sans">
      {/* Heading */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-20">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-center text-gray-800 mt-20 mb-10 ml-10">
          {heading}
        </h1>
      </div>

      <div className="relative w-full">
        {/* Desktop background image */}
        <img
          src={bgImage}
          alt="Background"
          className="hidden lg:block absolute inset-0 w-full h-auto object-cover z-0"
        />

        {/* Mobile layout */}
        <div className="block lg:hidden bg-[#FBF1E2] w-full h-full">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 py-10 flex flex-col items-center z-10 relative">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-[#4B4843] mb-4 text-center">
              {title}
            </h2>
            <p className="text-gray-700 text-center text-lg sm:text-xl font-light mb-6">
              {description}
            </p>

            {/* Bullets */}
            <div className="w-full space-y-6 text-base sm:text-lg">
              {bullets.map((item, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-black mr-2 text-xl">•</span>
                  <p>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Video & Buttons */}
            <div className="mt-10 w-full flex flex-col items-center gap-6">
              <div className="relative w-full max-w-md rounded-xl overflow-hidden">
                <video
                  ref={videoRef}
                  className="w-full h-auto rounded-xl"
                  controls={false}
                  muted
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
                <button
                  onClick={togglePlayPause}
                  className="absolute -bottom-3 -right-3 bg-gray-500 border text-white hover:bg-black rounded-full w-12 h-12 flex items-center justify-center"
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4l15 8-15 8z" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href={primaryBtnLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#485d69] text-white px-6 py-2 hover:bg-[#4d8abe] transition text-sm font-medium">
                    {primaryBtnText}
                  </button>
                </a>
                <a href={secondaryBtnLink} target="_blank" rel="noopener noreferrer">
                  <button className="border border-[#485d69] text-[#485d69] px-6 py-2 hover:bg-[#4d8abe] transition text-sm font-medium">
                    {secondaryBtnText}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex items-center justify-center px-12 relative z-10 min-h-screen">
          <div className="max-w-[1600px] w-full flex justify-between gap-4">
            <div className="w-1/3 space-y-6 text-black md:ml-30">
              <h2 className="text-4xl font-bold text-[#4B4843] md:mb-20">
                {title}
              </h2>
              <p className="text-2xl font-light text-gray-800">{description}</p>

              {bullets.map((item, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-black mr-2 text-xl">•</span>
                  <p>
                     {item.text}
                  </p>
                </div>
              ))}

              <div className="flex gap-4 mt-6">
                <a href={primaryBtnLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#485d69] text-white px-6 py-2 hover:bg-[#4d8abe] transition text-sm font-medium">
                    {primaryBtnText}
                  </button>
                </a>
                <a href={secondaryBtnLink} target="_blank" rel="noopener noreferrer">
                  <button className="border border-[#485d69] text-[#485d69] px-6 py-2 hover:bg-[#4d8abe] transition text-sm font-medium">
                    {secondaryBtnText}
                  </button>
                </a>
              </div>
            </div>

            <div className="w-1/2 relative">
              <div className="relative w-[520px] pt-5 rounded-xl">
                <video
                  ref={videoRef}
                  className="w-full h-auto rounded-xl"
                  controls={false}
                  muted
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
                <button
                  onClick={togglePlayPause}
                  className="absolute -bottom-3 -right-3 bg-gray-500 border text-white hover:bg-black rounded-full w-12 h-12 flex items-center justify-center"
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9v6m4-6v6" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4l15 8-15 8z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



