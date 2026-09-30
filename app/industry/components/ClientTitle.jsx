import React from 'react';

export default function ClientTitle({ content }) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <h2 className="text-2xl text-center font-bold leading-tight">
          {content.title_1}
        </h2>
        <div className="w-12 h-1 bg-secondary mx-auto !mb-1 !mt-2 rounded-md"></div>
        <div className="space-y-3 !my-3">
          {(content.description_1 || []).map((paragraph, index) => (
            <p key={index} className="text-gray-800 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
