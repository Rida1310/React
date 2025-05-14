import React from 'react';

export const SectionFive = () => {
  return (
    <div className='flex flex-row justify-center items-center overflow-hidden w-full'>

      <div className="relative group w-1/3 overflow-hidden">
        <img 
          src="/sec5_1.jpg" 
          alt="Hero"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"  
        />
        <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <h2 className="text-white text-xl font-semibold transition-opacity duration-300">SANDY BEACHES</h2>
        </div>
      </div>

      <div className="relative group w-1/3 overflow-hidden">
        <img 
          src="/sec5_2.jpg" 
          alt="Hero"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"  
        />
        <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <h2 className="text-white text-xl font-semibold transition-opacity duration-300">FOREST TRAILS</h2>
        </div>
      </div>

      <div className="relative group w-1/3 overflow-hidden">
        <img 
          src="/sec5_3.jpg" 
          alt="Hero"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"  
        />
        <div className="absolute inset-0 bg-stone-950/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <h2 className="text-white text-xl font-semibold transition-opacity duration-300">CITY STREETS</h2>
        </div>
      </div>

    </div>
  );
};

export default SectionFive;
