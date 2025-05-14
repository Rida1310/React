import React from 'react'

export const SectionSix = () => {
  return (
    <section className="flex  w-full  h-130">
      
      <div className="w-1/2  flex flex-col justify-center items-start p-8 bg-gray-100">
      <div class="w-24 h-2 bg-yellow-800 mb-4 ml-20"></div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4 w-110 ml-20">This is my second post</h1>
        <p className="text-sm text-gray-600 mb-6 text-wrap w-75 ml-20">
        Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment</p>
        <button className="bg-gray-100 text-orange-900 py-2 px-6 hover:bg-orange-900 hover:text-white border-2 transition-all ml-20">
          READ MORE
        </button>
      </div>
      <div className="w-1/2 flex justify-center items-center ">
        <img 
          src="/sec6.jpg" 
          alt="Hero"
          className="max-w-3/4 object-cover "  
        />
      </div>
      
    </section>
  )
}
export default SectionSix