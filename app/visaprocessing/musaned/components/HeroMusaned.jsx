import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const HeroMusaned = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pic/JPZhandshake.jpg" // Replace with your actual image path
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            JPZ Manpower Musaned
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your Trusted Partner in Professional Manpower Solutions
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://facebook.com/jpzinternationaltravels" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="https://twitter.com/jpztravels" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="https://instagram.com/jpz.travels" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMusaned;