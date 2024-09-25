// creds: https://daveintrotodev.hashnode.dev/how-to-create-an-infinite-autoplay-carousel-using-react-tailwind-css-and-typescript

import React from "react";
import Marquee from 'react-fast-marquee';
import "../globals.css";
import data from "../../lib/en.json";

export default function AutoplayCarousel() {
  return (
    <>
      <Marquee pauseOnHover="true" className=" overflow-hidden grid bg-yellow ">
        {Object.keys(data.selftags).map((detailKey) => {
            return (
            <div className=" flex flex-col justify-center items-center h-24 px-20 border-x-2 border-y-4 border-navy">
              {data.selftags[detailKey].toUpperCase()}
            </div>
            );
        })}
      </Marquee>
    </>
  )  
}