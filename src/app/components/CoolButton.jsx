import React from 'react';
import Link from 'next/link';

export const CoolButton = ({ text, link }) => {
  return (
    <div className='box1 flex flex-wrap place-content-center bg-navy'>
      {link.startsWith('#') ? (
        <Link className="box2 bg-gray hover:bg-yellow flex flex-wrap place-content-center cursor-crosshair transition-transform-background text-2xl" href={link}>
          {text}
        </Link>
      ) : (
        <Link className="box2 bg-gray hover:bg-yellow flex flex-wrap place-content-center cursor-crosshair transition-transform-background text-2xl" href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </Link>
      )}
    </div>
  );
};