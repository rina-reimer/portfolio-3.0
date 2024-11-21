// creds: https://daveintrotodev.hashnode.dev/how-to-create-an-infinite-autoplay-carousel-using-react-tailwind-css-and-typescript

import React from "react";
import Marquee from 'react-fast-marquee';
import "../../globals.css";

export default function AutoplayCarousel({ contents }) {
  return (
    <>
      <Marquee id="scrolled" className=" overflow-hidden grid bg-yellow ">
        {contents.map((detailKey, index) => {
            return (
            <div key={detailKey} className=" flex flex-col justify-center items-center h-24 px-20 border-x-2 border-y-4 border-navy">
              {contents[index].toUpperCase()}
            </div>
            );
        })}
      </Marquee>
    </>
  )  
}