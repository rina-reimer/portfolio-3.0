"use client"
import Image from "next/image";
import {Tooltip} from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from '../../i18n/client.js';

const CourseCard = ({ classNum, lng }) => {
  const { t } = useTranslation(lng, 'common');
  const [flip, setFlip] = useState(false);

  return (
    <div className={`card ${flip ? "flip" : ""} relative flex flex-col bg-gray aspect-square h-fit border-2 border-navy rounded-[32px] overflow-clip shadow-xl`}>
{/* ------------------------- FRONTSIDE ------------------------- */}
      <div className="front grid bg-gray space-y-3 justify-content-center overscroll-contain" onClick={() => setFlip(!flip)}>
        {/* title */}
        <div className="px-4 h-16 place-content-center">
          <div className="text-navy text-2xl font-fraunces font-black self-start">{t(`class${classNum}.title`)}</div>
        </div>
      </div>
{/* ------------------------- BACKSIDE ------------------------- */}
      <div className="back flex flex-col bg-gray" onClick={() => setFlip(!flip)}>
        {/* dev stack */}
        <div className="flex flex-row p-2">
          {/* (t(`class${classNum}.stack`, {returnObjects: true})) */}
          {['r'].map((item, index) => {
            if (flip) {
              return (
                <Tooltip className="bg-navy text-gray p-2 rounded-full" content={t(`class${classNum}.stack`, {returnObjects: true})[index]}>
                  <div key={index} className={`flex relative h-8 aspect-square bg-gray border-2 border-navy z-10 hover:z-20 rounded-full`}>
                    <Image src={`https://img.icons8.com/color/50/${item}.png`} fill={true}></Image>
                  </div>
                </Tooltip>
              );
            } else {
              return (
                <div key={index} className={`flex relative h-8 aspect-square bg-gray border-2 border-navy z-10 hover:z-20 rounded-full`}>
                  <Image src={`https://img.icons8.com/color/50/${item}.png`} fill={true}></Image>
                </div>
              );
            }
          })}
        </div>
        {/* desc */}
        <div className="p-2 lg:max-h-48 max-h-32 text-navy text-balance overflow-scroll overscroll-auto">
          {t(`class${classNum}.desc`)}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;