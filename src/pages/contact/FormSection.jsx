import React from "react";
import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/images/step2.png";
import step3 from "../../assets/images/step3.png";
import people_talk from "../../assets/images/people_talk.png";
import { Headset, Briefcase, MessageCircle } from "lucide-react";

const FormSection = () => {
  return (
    <section className="bg-white p-6 md:p-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <div className="bg-gray-100 p-10 rounded-md shadow lg:h-5/6 md:h-5/6">
          <h2 className="text-3xl font-semibold mb-12 text-[#494949]">
            Fill out this form and we will be in touch shortly
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="First name*"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Last name*"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Current Company*"
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Work email*"
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              placeholder="Phone number*"
              className="w-full border p-2 rounded"
            />

            <select className="w-full border p-2 rounded">
              <option>India</option>
              {/* Add more countries if needed */}
            </select>

            <select className="w-full border p-2 rounded">
              <option>State/Province*</option>
              {/* Add state options */}
            </select>

            <select className="w-full border p-2 rounded">
              <option>Your current role*</option>
              {/* Add role options */}
            </select>

            <p className="text-xs text-gray-600">
              By submitting this form, you agree that we may use the data you
              provide to contact you with information related to your
              request/submission and LinkedIn's products and services. You can
              unsubscribe from LinkedIn marketing and sales emails at any time
              by clicking the unsubscribe link in the email. If you are a
              LinkedIn member, you can control the marketing messages you
              receive from LinkedIn in your settings. Your data will be used
              subject to LinkedIn's{" "}
              <a href="#" className="text-blue-600 underline">
                Privacy Policy
              </a>
              .
            </p>
            <a href="#">
              <button
                type="submit"
                className="bg-[#0073b1] text-white font-semibold px-6 py-2 mt-4 rounded hover:bg-blue-800"
              >
                Submit
              </button>
            </a>
            <p className="text-xs text-gray-500 text-right">Required fields*</p>
          </form>
        </div>

        {/* Right: Steps & Info */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <p className="text-gray-700 mb-10 text-xl">
              We will support you in finding, hiring, and retaining the right
              people for your business.It’s a long-lasting partnership and we
              look forward to getting started.
            </p>

            <h3 className="text-3xl font-light mb-8">
              Here's how to get started:
            </h3>

            <div className="space-y-10">
              <div className="flex items-start gap-8  ">
                <img src={step1} alt="Step 1" className="w-16 h-16" />
                <p className="text-gray-700 text-xl mt-4">
                  Submit this simple form.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <img src={step2} alt="Step 2" className="w-16 h-16" />
                <p className="text-gray-700 text-xl mt-4">
                  A dedicated talent consultant will get back to you shortly.*
                </p>
              </div>
              <div className="flex items-start gap-4">
                <img src={step3} alt="Step 3" className="w-16 h-16" />
                <p className="text-gray-700 text-xl mt-4">
                  We’ll partner with you to discuss business needs and how
                  LinkedIn can help.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-12 italic">
              *Forms submitted between 8:00 AM and 12:00 PM IST Monday–Friday
              will receive a response within 4 hours. Forms submitted after
              12:00 PM IST may receive a response on the next business day
              (excluding weekends and holidays).
            </p>

            <div className="mt-10 space-y-6 text-sm">
              <a
                href="#"
                className="flex items-center gap-4 text-[#0073b1] text-xl font-bold hover:underline cursor-pointer"
              >
                <Headset className="w-6 h-6 text-gray-700" />
                <span>Already a customer? Click here for support</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-[#0073b1] text-xl font-bold hover:underline cursor-pointer"
              >
                <Briefcase className="w-6 h-6 text-gray-700" />
                <span>Looking for a job? View Jobs</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-[#0073b1] text-xl font-bold hover:underline cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 text-gray-700" />
                <span>Chat live with sales</span>
              </a>
            </div>
          </div>

          {/* Bottom Illustration */}
          <img
            src={people_talk}
            alt="People talking"
            className="w-full   max-w-sm  md:mx-0 mt-6"
          />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
