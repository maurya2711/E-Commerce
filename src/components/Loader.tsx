import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative">
        <div className="w-12 h-12 bg-black rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-0 left-0 w-12 h-12 bg-black rounded-full opacity-25"></div>
      </div>
    </div>
  );
};

export default Loader;
