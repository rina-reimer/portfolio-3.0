import React from 'react';
import {Link} from '@/i18n/routing';

export const CoolButton = ({ text, link }) => {
  return (
    <div className='box1 flex flex-wrap place-content-center bg-navy'>
      {link.startsWith('/about') ? (
        <Link className="box2 bg-gray hover:bg-yellow flex flex-wrap place-content-center cursor-crosshair transition-transform-background text-xl" href={link}>
          {text}
        </Link>
      ) : (
        <Link className="box2 bg-gray hover:bg-yellow flex flex-wrap place-content-center cursor-crosshair transition-transform-background text-xl" href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </Link>
      )}
    </div>
  );
};