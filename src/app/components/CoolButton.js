import React from 'react';
import Link from 'next/link';

const CoolButton = ({ text, link }) => {
  return (
    <Link className="box1 cursor-crosshair" href={ link } target="_blank" rel="noopener noreferrer">
      <div className="box2">
        <div className="box3">
          <div className="box4 grid place-content-center">
            <div className="box5">
              {text}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CoolButton;