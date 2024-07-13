import React from 'react';
import Link from 'next/link';

const CrossBanner = ({ banner1, banner2 }) => {
  return (
    <div className='w-lvw h-64'>
      <div className="flex flex-row bg-gray md:w-[107lvw] w-[115lvw] h-32 justify-between border-navy border-y-4 -translate-x-10 rotate-12 z-10">
        {banner1.map((text, index) => (
          <div key={index} className="h-[124px] text-navy text-xl flex flex-wrap place-content-center p-12 border-x-4 border-x-navy">
            {text.toUpperCase()}    
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 bg-pink md:w-[107lvw] w-[115lvw] h-32 -mt-28 justify-items-stretch border-navy border-y-4 -translate-x-10 -rotate-12 z-10">
      {banner2.map((text, index) => (
        <div key={index} className="h-[124px] text-navy text-xl flex flex-nowrap place-content-center p-12 border-x-2 border-x-navy">
          {text.toUpperCase()}
        </div>
      ))}
    </div>
  </div>
  );
};

export default CrossBanner;