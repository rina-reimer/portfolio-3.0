import React from 'react';
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Tooltip} from "@nextui-org/react";
import { useTranslations } from 'next-intl';

const Toolbox = ({lng}) => {
  const t = useTranslations();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
      slidesToSlide: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 6,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <div className='px-4 space-y-8 mt-8'>
      {/* languages */}
      <div>
        <h1 className='text-xl'>{t('languages')}</h1>
        <Carousel ssr itemClass="image-item"
          swipeable={true}
          draggable={true}
        responsive={responsive}>
          {t.raw(`langs`).map((item, index) => {
            return (
              <Tooltip key={index} className="bg-navy text-gray p-2 rounded-full" content={t.raw(`langs-name`)[index]}>
                <div className="flex relative h-16 aspect-square bg-gray border-2 border-navy  rounded-lg">
                  <Image src={`https://img.icons8.com/color/50/${item}.png`} fill={true} alt={item}></Image>
                </div>
              </Tooltip>
            );
          })}
        </Carousel>
      </div>


      {/* frameworks */}
      <div>
       <h1 className='text-xl'>{t('frameworks')}</h1>
        <Carousel ssr itemClass="image-item" 
        swipeable={true}
        draggable={true}
        responsive={responsive}>
        {t.raw(`fmwks`).map((item, index) => {
          return (
            <Tooltip key={index} className="bg-navy text-gray p-2 rounded-full" content={t.raw(`fmwks-name`)[index]}>
              <div className="flex relative h-16 aspect-square bg-gray border-2 border-navy  rounded-lg">
                <Image src={`https://img.icons8.com/color/50/${item}.png`} fill={true}alt={item}></Image>
              </div>
            </Tooltip>
            );
          })}
        </Carousel>
      </div>


      {/* etc */}
      <div>
       <h1 className='text-xl'>{t('other')}</h1>
        <Carousel ssr itemClass="image-item" 
        swipeable={true}
        draggable={true}
        responsive={responsive}>
        {t.raw(`etc`).map((item, index) => {
          return (
            <Tooltip key={index} className="bg-navy text-gray p-2 rounded-full" content={t.raw(`etc-name`)[index]}>
              <div className="flex relative h-16 aspect-square bg-gray border-2 border-navy  rounded-lg">
                <Image src={`https://img.icons8.com/color/50/${item}.png`} fill={true}alt={item}></Image>
              </div>
            </Tooltip>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Toolbox;