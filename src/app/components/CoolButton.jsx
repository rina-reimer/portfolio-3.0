import React from 'react';
import Link from 'next/link';

const CoolButton = ({ text, link }) => {
  return (
    <div className='box1 flex flex-wrap place-content-center bg-navy'>
      {link.startsWith('#') ? (
        <Link className="box2 bg-gray flex flex-wrap place-content-center cursor-crosshair transition-transform-background" href={link}>
          {text}
        </Link>
      ) : (
        <Link className="box2 bg-gray flex flex-wrap place-content-center cursor-crosshair" href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </Link>
      )}
    </div>
  );
};

export default CoolButton;