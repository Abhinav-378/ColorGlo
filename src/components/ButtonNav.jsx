import React from "react";

function ButtonNav() {
  return (
    <button className="md:px-5 z-0 after:-z-10 md:py-2 bg-blue-500 rounded-2xl text-white relative font-medium after:absolute after:h-1 after:w-1 after:bg-white after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-2xl after:hover:scale-[300] after:transition-all after:duration-700 transition-all duration-700 hover:bg-white hover:text-blue-500 text-base md:text-base px-3 py-2">
      Get a Quote
    </button>
  );
}

export default ButtonNav;
