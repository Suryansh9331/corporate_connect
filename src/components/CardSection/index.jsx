import React from "react";
import news from "../../assets/images/news.svg";
import news2 from "../../assets/images/news2.svg";
import news3 from "../../assets/images/news3.svg";

const LinkedInHiringProducts = () => {
  return (
    <div className="bg-[#fafaf9] min-h-screen py-8 px-4 lg:mt-60">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-2xl md:text-4xl text-gray-800 font-light mb-16 lg:mt-10">
          Find which hiring products are right for you
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Jobs",
              subtitle: "Post a job",
              img: news,
              bg: "bg-[#e5eef7]",
              who: "If you need to fill an open role with limited time to hire, and are hiring fewer than 3 people a year.",
              features: [
                "Post one free job at a time",
                "Automated job targeting to relevant candidates",
                "Option to promote jobs with flexible daily budget",
              ],
              button: { text: "Post a Job", link: "/contact" },
            },
            {
              title: "Jobs + Recruiter Lite",
              subtitle: "Post a job and basic sourcing",
              img: news2,
              bg: "bg-[#fff3e6]",
              who: "If you aren't getting enough of the right candidates through job posting alone, and are hiring fewer than 5 people a year.",
              features: [
                "Limited corporate network access",
                "30 InMail messages/month",
                "20+ search filters",
              ],
              button: { text: "Get started", link: "/contact" },
            },
            {
              title: "Jobs + Recruiter",
              subtitle: "Advanced job posting.",
              img: news3,
              bg: "bg-[#ffefd3]",
              who: "If your roles are hard to fill, or you're hiring more than 5 people a year.",
              features: [
                "Unlimited corporate network access",
                "150 InMail messages/month and bulk messaging",
                "40+ advanced search filters",
                "ATS integrations",
              ],
              button: { text: "Contact us", link: "/contact" },
            },
          ].map((card, index) => (
            <div
              key={index}
              className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Header */}
              <div className={`${card.bg} pt-6   md:p-8 flex flex-col items-center`}>
                <h2 className="text-3xl md:text-3.5xl font-bold text-[#4b4843] text-center">{card.title}</h2>
                <p className="text-lg md:text-xl mt-4 text-[#4b4843] mb-4 text-center">{card.subtitle}</p>
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-68 h-46 object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-grow p-6 md:p-8">
                <div>
                  <h3 className="font-medium text-[#4c4c4c] mb-2 text-xl md:text-2xl">
                    Who it's best for
                  </h3>
                  <p className="text-md md:text-lg text-gray-700 mb-8">{card.who}</p>

                  <h3 className="font-medium text-[#4c4c4c] mb-2 text-xl md:text-2xl">
                    Key features
                  </h3>
                  <ul className="mb-6 list-disc list-inside text-md md:text-lg text-gray-700 space-y-1">
                    {card.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {card.button && (
                  <div className="mt-6 flex justify-center mb-6">
                    <a href={card.button.link}>
                      <button className="py-2 px-6 border border-[#0077b5] text-[#0077b5] font-medium hover:bg-[#0077b5] hover:text-white transition-colors text-sm md:text-base">
                        {card.button.text}
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-18">
          <a href="#">
            <button className="px-6 py-2 bg-[#0077b5] text-white font-medium rounded-full hover:bg-[#005b8a] transition-colors text-base md:text-lg">
              Compare products
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkedInHiringProducts;
