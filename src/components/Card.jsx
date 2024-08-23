import React from 'react';
function ResponsiveCard({ title, content, src, ...props }) {
  return (
    <div
      {...props} // Spread additional props like AOS attributes
      className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-auto"
    >
      {/* Image section */}
      <div className="flex-shrink-0 md:w-1/2">
        <img
          className="w-full md:h-full object-cover"
          src={src}
          alt={title}
        />
      </div>

      {/* Content section */}
      <div className="p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
}

export default ResponsiveCard;
