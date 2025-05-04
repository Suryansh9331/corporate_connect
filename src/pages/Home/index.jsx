import React from 'react';

const Home = () => {
  return (
    <section className="w-full bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Welcome to <span className="text-[rgb(72,93,105)]">Talent Connect</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover top talent and connect with the best professionals across industries. 
            Streamline your hiring process with our powerful recruitment tools.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="/about"
              className="px-6 py-3 bg-[rgb(72,93,105)] text-white rounded-lg hover:bg-opacity-90 transition duration-200"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-[rgb(72,93,105)] text-[rgb(72,93,105)] rounded-lg hover:bg-[rgb(72,93,105)] hover:text-white transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
