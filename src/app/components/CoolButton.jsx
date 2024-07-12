import React from 'react';
import Link from 'next/link';

const CoolButton = ({ text, link }) => {
  return (
    <div className='box1 flex flex-wrap place-content-center bg-navy'>
      <Link className="box2 bg-gray flex flex-wrap place-content-center cursor-crosshair" href={ link } target="_blank" rel="noopener noreferrer">
        {text}    
      </Link>
    </div>
  );
};

export default CoolButton;