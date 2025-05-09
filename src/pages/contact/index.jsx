import React from "react";
import profile from "../../assets/images/profile.png"
import ContactStickyButton from "../../components/ContactSticky";
import FormSection  from "./FormSection";
const ContactUs = () => {
  return (
    <div>
      <section class="bg-[#0a66c2] text-white py-8 px-6 text-center">
        <p class="text-lg sm:text-xl">
          Are you a current customer? Please{" "}
          <a
            href="#"
            class="font-semibold  hover:underline hover:text-blue-200 transition"
          >
            click here{" "}
          </a>
          for help & support.
        </p>
      </section>

      {/* Hire Banner */}
      <section className="bg-[#e2f2da] text-center py-16 px-4">
        <h1 className="text-3xl md:text-6xl font-light text-gray-900">
          Hire the right person, fast
        </h1>
        <p className="text-xl font-light md:text-2xl text-gray-700 mt-10 max-w-4xl  mx-auto">
          Learn how LinkedIn Talent Solutions can help you find the right
          candidate in India.
        </p>
      </section>
      
      <FormSection/>
       {/* testimonial section */}
           
       <div class="bg-[#f5fbf2] py-16 px-6 md:px-12 lg:px-24">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    
    {/* <!-- Testimonial 1 --> */}
    <div>
      <p class="text-2xl font-light text-gray-800 leading-relaxed mb-6">
        “LinkedIn has contributed immensely to scaling our hiring operations. We are optimistic of the value that we can deliver to our customers around the world with our global and diverse workforce.”
      </p>
      <div class="flex items-center gap-4">
        <img
          src={profile}
          alt="Damayanti Ghosh"
          class="w-35 h-25 "
        />
        <div>
          <p class="font-semibold text-gray-900">Damayanti Ghosh</p>
          <p class="text-sm text-gray-600">Head of Talent Acquisition, Vymo</p>
        </div>
      </div>
    </div>

    {/* <!-- Testimonial 2 --> */}
    <div>
      <p class="text-2xl font-light text-gray-800 leading-relaxed mb-6">
        “LinkedIn Talent Solutions has helped us hire and develop talent that suit our vision in a seamless and effective way. As we continue to grow, building strength across the employee life-cycle will be key to sustaining our people success.”
      </p>
      <div class="flex items-center gap-4">
        <img
          src={profile}
          alt="Poorna Pushkala"
          class="w-35 h-25"
        />
        <div>
          <p class="font-semibold text-gray-900">Poorna Pushkala</p>
          <p class="text-sm text-gray-600">Head of Human Resources, Samunnati</p>
        </div>
      </div>
    </div>

  </div>
</div>
 
<ContactStickyButton/>
    </div>
  );
};

export default ContactUs;
