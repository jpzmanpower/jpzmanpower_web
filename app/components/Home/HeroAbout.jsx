import Link from 'next/link';
import React from 'react';

const HeroAbout = () => {
  return (
    <div className="bg-blue-50 py-12 flex items-center justify-center">
      <div className="container px-4 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        {/* Left Column: Text Content */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to JPZ Recruitment Agency
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed text-balance">
            At JPZ, we specialize in connecting global employers with skilled manpower. With decades
            of experience, we provide trusted recruitment services to industries across the Middle East and beyond.
          </p>
        </div>

        {/* Right Column: Button */}
        <div className="flex lg:justify-center justify-center">
          <Link
            href="/about"
            className="bg-secondary hover:bg-secondarydark text-white px-6 py-2 rounded text-lg font-medium transition-colors duration-500"
          >
            About Us
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default HeroAbout;
