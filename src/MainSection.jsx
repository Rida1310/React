import React from 'react'

export const MainSection = () => {
  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden">
 
    
      <div className="bg-[url('./photo.jpg')] absolute inset-0 bg-cover bg-center opacity-70 z-0"></div>

     
      <div className="bg-orange-900 bg-orange-800 text-white w-full h-screen ">

      
      <div className="relative z-10 flex flex-col">
        
        <div className="text-3xl m-5 text-white font-bold mb-4 text-center overflow-hidden relative z-10">
          Impulse
        </div>

        <h1 className="text-6xl m-45 font-bold relative text-white mb-4 flex justify-center items-center text-center ">
          A taste of every lifestyle
        </h1>
        <button className='bg-orange-900 hover:bg-white hover:text-orange-900 text-white w-45 h-14 ml-150 mt-5 font-semibold uppercase tracking-wide'>READ THE BLOG</button>
<div className='text-uppercase absolute px-50 mt-150'>
<a href="#" className="border-b border-white pb-1">Find out more</a>
</div>
<div className='text-uppercase absolute px-10 mt-150 ml-260'>
<a href="#" className="border-b border-white pb-1">Find out more</a>
</div>
      </div>
      </div>
    </div>
  )
}

export default MainSection;
