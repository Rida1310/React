import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#414652] text-white py-12 w-full h-120">
      <div className=" px-4 flex flex-col md:flex-row justify-between">

        <div className="mt-15 ml-10">
          <h1 className="text-3xl font-bold tracking-wide text-gray-300">IMPULSE</h1>
        </div>

        <div className="flex flex-col flex-row gap-60 mr-40 mt-15">

          <div>
            <h3 className="text-sm font-bold tracking-widest mb-3">MORE INFO</h3>
            <ul className="text-sm text-gray-400">
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">INFO</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-widest mb-3">HELPFUL LINKS</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">INFO</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold tracking-widest mb-3">FIND OUT MORE</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#">ABOUT</a></li>
              <li><a href="#">INFO</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className="text-center text-lg text-gray-400 mt-20 tracking-wide">
        ©2021 DESIGN BY NOVOLIO. IMAGES BY UNSPLASH
      </div>
    </footer>
  );
};

export default Footer;
