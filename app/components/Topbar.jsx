import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="bg-secondary text-white hidden sm:block">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 flex-col sm:space-y-2 sm:text-center lg:flex-row lg:space-x-6">
        {/* Location */}
        <div className="flex items-center lg:text-center space-x-2 transition-colors duration-500">
          <MapPin className="text-white" size={18} />
          <a
            href="https://maps.app.goo.gl/npEP5hTBq45Jepm47"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            Office No 99 Jinnah Stadium, Civil Lines, Gujranwala Pakistan.
          </a>
        </div>
        {/* Opening Hours */}
        <div className="flex items-center lg:text-center !m-0 space-x-2 ">
          <Clock className="text-white" size={18} />
          <span className="text-white text-center m-0">Mon-Sat: 10:30 AM - 8:30 PM. Sunday CLOSED </span>
        </div>
        {/* Phone */}
        <div className="flex space-x-2 items-center !m-0 transition-all duration-500">
          <Phone className="text-white" size={18} />
          <a
            href="tel:+923006407345"
            className="hover:text-gray-300 transition-all duration-500"
          >
            +923006407345
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
