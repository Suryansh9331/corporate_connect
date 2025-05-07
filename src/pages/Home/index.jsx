import React from "react";

import HeroSection from "../../components/Hero";
import LinkedInRecruiter from "../../components/linkedinRecruiter";
import WhyUsSection from "../../components/WhyUS";
import ResourcesSection from "../../components/ResourcesSection";
import StatsSection from "../../components/143m";
import CTASection from "../../components/ContactUs";
import LinkedInHiringProducts from "../../components/CardSection";

import bg_banner from "../../assets/images/bg_banner.svg";
import bg_banner2 from "../../assets/images/bg_banner2.svg";
import bg_banner3 from "../../assets/images/bg_banner3.svg";

import profile from "../../assets/images/profile.png";

import { FaRegComments } from "react-icons/fa";

import video from "../../assets/videos/linkedin_recruiter.mp4";

const bullets = [
  {
   
    text: "with advanced search filters and intelligent matching",
  },
  {
   
    text: "through personalized messaging",
  },
  {
   
    text: "with collaboration and analytics tools",
  },
];
const bullets2 = [
  {
    title: "Hire the right people",
    text: "with advanced search filters and intelligent matching",
  },
  {
    title: "Build meaningful candidate connections",
    text: "through personalized messaging",
  },
  {
    title: "Easily manage your candidate pipeline",
    text: "with collaboration and analytics tools",
  },
];
const bullets3 = [
  {
   
    text: "with advanced search filters and intelligent matching",
  },
  {
   
    text: "through personalized messaging",
  },
  {
   
    text: "with collaboration and analytics tools",
  },
];

const Home = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />

      <LinkedInRecruiter
        heading="Get started with our core products"
        title=" Recruiter"
        description="A hiring platform to quickly source, connect with, and manage qualified candidates."
        bullets={bullets}
        videoSrc={video}
        bgImage={bg_banner}
        primaryBtnText="Learn more"
        secondaryBtnText="Contact us"
        primaryBtnLink="#"
        secondaryBtnLink="#"
      />

      <LinkedInRecruiter
        heading=" Get started with our core products "
        title=" LinkedIn Jobs"
        description="A hiring platform to quickly source, connect with, and manage qualified candidates."
        bullets={bullets2}
        videoSrc="https://business.linkedin.com/content/dam/me/business/en-us/talent-solutions-lodestone/body/videos/job-616x468.mp4"
        bgImage={bg_banner2}
        primaryBtnText="Learn more"
        secondaryBtnText="Contact us"
        primaryBtnLink="#"
        secondaryBtnLink="#"
      />
      <LinkedInRecruiter
        heading="Get started with our core products  "
        title="LinkedIn Career Pages"
        description="A hiring platform to quickly source, connect with, and manage qualified candidates."
        bullets={bullets3}
        videoSrc="https://business.linkedin.com/content/dam/me/business/en-us/talent-solutions-lodestone/body/videos/career-616x468.mp4"
        bgImage={bg_banner3}
        primaryBtnText="Learn more"
        secondaryBtnText="Contact us"
        primaryBtnLink="#"
        secondaryBtnLink="#"
      />

      <div>
        <LinkedInHiringProducts />
      </div>

      <div>
        <WhyUsSection />
      </div>

      {/* profile section */}

      <section className="bg-white px-8 py-12 md:py-20 ">
        <div className="max-w-6xl mx-auto lg:px-18 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Left Side: Image + Quote Icon */}
          <div className="relative flex-shrink-0">
            <img
              src={profile}
              alt="Poorna Pushkala"
              className="w-full h-48 md:w-full md:h-56  "
            />
          </div>

          {/* Right Side: Testimonial Text */}
          <div className="text-center md:text-left max-w-3xl">
            <p className="text-xl md:text-2xl text-gray-900 font-light leading-relaxed">
              LinkedIn Talent Solutions has helped us hire and develop talent
              that suit our vision in a seamless and effective way. As we
              continue to grow, building strength across the employee life-cycle
              will be key to sustaining our people success.”
            </p>
            <p className="mt-6 font-medium text-gray-600">Poorna Pushkala</p>
            <p className="text-md text-gray-600">
              Head of Human Resources, Samunnati
            </p>
          </div>
        </div>
      </section>

      <section className="lg:px-40 lg:pt-10 pb-20">
        <ResourcesSection />
      </section>

      <section className="lg:pb-20">
        <CTASection />
      </section>

      <div className="flex items-center justify-center space-x-2  p-10">
        <FaRegComments size={36} color="#114f7c" />
        <a
          href="#"
          className="text-[24px] font-medium  text-[#114f7c] hover:underline"
        >
          Ready to get started? Click here to chat live with a sales consultant
        </a>
      </div>
    </div>
  );
};

export default Home;
