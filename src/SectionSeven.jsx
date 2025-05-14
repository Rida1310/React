import React from 'react';

export const SectionSeven = () => {
  return (
    <div className="relative w-full h-130 flex flex-col justify-center items-center overflow-hidden">

      <div className="absolute inset-0 bg-[url('./Sec7.jpg')] bg-cover bg-center z-0"></div>

      <div className="relative z-10 flex flex-col items-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Endlessly customizable
        </h1>

        <p className="text-white font-semibold max-w-xxl mb-6">
          Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
        </p>

        <button className="bg-orange-900 hover:bg-white hover:text-orange-900 text-white px-8 py-3 font-semibold uppercase tracking-wide">
          Read the blog
        </button>
      </div>
      
    </div>
  );
};

export default SectionSeven;
