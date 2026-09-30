import React from 'react';
import { Globe } from "lucide-react";

export default function Additional({ details }) {
  return (
    <div className="bg-blue-50">
      <div className="container mx-auto px-6 py-14">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 ">
          Additional Details
        </h3>
        <div className="grid md:grid-cols-3 gap-12">
          {details.map((detail, index) => (
            <div 
              key={index} 
              className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Globe className="w-8 h-8 text-secondary flex-shrink-0" />
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-gray-800">
                  {detail.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {detail.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}