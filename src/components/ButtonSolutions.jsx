import React from 'react';

function ButtonSolutions() {
  const handleClick = () => {
    const element = document.getElementById('solutions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-center items-center">
      <button 
        onClick={handleClick}
        className="relative inline-block px-4 py-2 font-medium text-lg text-white bg-blue-500 border-2 border-blue-500 group rounded-full overflow-hidden"
      >
        <span className="absolute inset-0 w-0 h-full bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
        <span className="relative z-10 transition-colors duration-300 ease-out group-hover:text-blue-500 text-lg">
          Our Specialities
        </span>
      </button>
    </div>
  );
}

export default ButtonSolutions;
