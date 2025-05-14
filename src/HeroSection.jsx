import React from 'react';

export const HeroSection = () => {
  return (
    <section className="flex  w-full  h-130">
      
      <div className="w-1/2 flex justify-center items-center ">
        <img 
          src="/sec2.jpg" 
          alt="Hero"
          className="max-w-3/4 object-cover "  
        />
      </div>
      <div className="w-1/2  flex flex-col justify-center items-start p-8 bg-gray-100">
      <div class="w-24 h-2 bg-yellow-800 mb-4 ml-20"></div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 w-110 ml-20">This is my third and latest post</h1>
        <p className="text-sm text-gray-600 mb-6 text-wrap w-95 ml-20">
        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution
        </p>
        <button className="bg-gray-100 text-orange-900 py-2 px-6 hover:bg-orange-900 hover:text-white border-2 transition-all ml-20">
          READ MORE
        </button>
      </div>
    </section>
    
  );
}

export default HeroSection;
