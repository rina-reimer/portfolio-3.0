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
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <h1>{t('languages')}</h1>
      {/*<Carousel ssr itemClass="image-item" responsive={responsive}>
        {["python", "python", "python"].map((item, index) => {
          return (
            //<Tooltip key={index} className="bg-navy text-gray p-2 rounded-full" content={t(`langs-name`, { returnObjects: true })[index]}>
              <div className="flex relative h-40 aspect-square bg-gray border-2 border-navy  rounded-full">
                <Image src={`https://img.icons8.com/color/50/${item}.png`} fill={true}></Image>
              </div>
            //</Tooltip>
          );
        })}
      </Carousel>
       <h1>{t('frameworks')}</h1>
      <Carousel ssr itemClass="image-item" responsive={responsive}>
        {t(`fmwks`) ? t(`fmwks`, { returnObjects: true }).stack?.map((item, index) => {
          return (
            <Tooltip key={index} className="bg-navy text-gray p-2 rounded-full" content={t(`fmwks-name`, { returnObjects: true })[index]}>
              <div className="flex relative h-full aspect-square bg-gray border-2 border-navy  rounded-full">
                <Image src={`https://img.icons8.com/color/50/${item}.png`} fill={true}></Image>
              </div>
            </Tooltip>
          );
        }) : <div />}
      </Carousel>; */}
    </div>
  );
};

export default Toolbox;