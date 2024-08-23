import React from 'react';

const Button1 = () => {
  return (
    <div className="flex justify-center items-center ">
      <button className="relative inline-block px-4 py-2 font-medium text-lg text-white bg-blue-600 border-2 border-blue-600  group rounded-full overflow-hidden">
        <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
        <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-blue-600 text-lg">
          Get a Quote
        </span>
      </button>
    </div>
  );
};

export default Button1;
