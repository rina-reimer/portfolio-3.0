import React from 'react';
import {Link} from '@/i18n/routing';

export const CoolButton = ({ text, link }) => {
  return (
    <div className='md:box1 box1-mobile flex flex-wrap place-content-center bg-navy'>
      {link.startsWith('/about') ? (
        <Link className="md:box2 box2-mobile bg-gray hover:bg-yellow flex flex-wrap place-content-center cursor-crosshair transition-transform-background text-lg" href={link}>
          {text}
        </Link>
      ) : (
        <Link className="md:box2 box2-mobile bg-gray hover:bg-yellow flex flex-wrap place-content-center cursor-crosshair transition-transform-background text-lg" href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </Link>
      )}
    </div>
  );
};