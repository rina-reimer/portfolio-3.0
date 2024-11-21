"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Tooltip} from "@nextui-org/react";
import { useTranslations } from 'next-intl';
// import data from '/src/lib/en.json';

const FeaturedProject = ({ projectNum, lng }) => {
  const t = useTranslations(`project${projectNum}`)
  return (
      <div className='hover-crosshair hover:-translate-y-4 transition ease-in-out duration-[600ms] relative flex flex-row justify-center align-middle min-h-50 h-fit py-12'>
        <div className={`bg-gray min-w-24 w-5/6 py-0.5 px-5 border-navy rounded-2xl border-4 ${projectNum % 2 === 0 ? 'pr-[20%]' : 'pl-[20%]'} shadow-xl`}>
          {/* title */}
          <div className="h-16 content-center">
            <div className="text-navy text-4xl font-fraunces self-start">{t(`title`)}</div>
          </div>
          {/* dev stack */}
          <div className="flex flex-row h-10">
            {t.raw('stack').map((item, index) => {
              return (
                <Tooltip key={index} className="bg-navy text-gray p-2 rounded-full" content={t.raw(`stack-name`)[index]}>
                  <div className="flex relative h-full aspect-square bg-gray border-2 border-navy z-10 hover:z-20 rounded-full">
                    <Image src={`https://img.icons8.com/color/50/${item}.png`} fill={true} alt={`${item} icon`}></Image>
                  </div>
                </Tooltip>
              );
            })}
          </div>

          {/* short desc */}
          <div className="py-8 text-navy">
            {t(`desc`)}
          </div>
        </div>
        <div className={`absolute inset-y-0 ${projectNum % 2 === 0 ? 'right-0' : 'left-0'} w-1/3 aspect-square`}>
          <Image src={`/featured-project-${projectNum}.png`} fill={true} className='object-contain'  alt={`Project ${projectNum} Header Image`}></Image>
        </div>
        {/* <div className="absolute scale-[5] w-0 h-0 border-l-4 border-r-4 border-x-[transparent] border-t-8 border-t-navy bottom-10"></div> */}
      </div>
  );
};

export default FeaturedProject;