import React from 'react';

const Banner = ({text}) => {
  return (
    <div className="checkered grid bg-gray w-lvw h-[120px] place-items-center">
      <div className="p-4 text-navy text-2xl bg-beige rounded-lg border-4 border-navy">{text}</div>
    </div>
  );
};

export default Banner;