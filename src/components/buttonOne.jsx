import React from 'react';

const ButtonOne = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#FF6766]">
      <button className="relative w-64 h-12 text-white overflow-hidden border-t border-b border-white/50 transition-all duration-300 hover:tracking-wide">
        <span className="relative z-10 transition-all duration-300">HOVER ME</span>
        <span className="absolute inset-0 bg-white/10 transition-all duration-300 scale-x-[0.1] hover:scale-x-100"></span>
      </button>
    </div>
  );
};

export default ButtonOne;
