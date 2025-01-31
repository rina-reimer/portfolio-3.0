"use client"
import { useEffect } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import {CoolButton} from "./components/CoolButton";
import Banner from "./components/Banner";
import Animation from "./components/Animation";
import AutoplayCarousel from "./components/AutoplayCarousel";
import CourseCard from "./components/CourseCard";
import FeaturedProject from "./components/FeaturedProject";
import { useTranslations } from 'next-intl';


export default function Home({lng}) {
  const t = useTranslations();
  console.log(typeof(t));

  return (
    <main className="bg-beige flex flex-row min-h-screen">
      
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <div className="flex flex-col lg:h-dvh h-lvh">
          <div className="flex flex-row lg:w-5/6 w-full h-[90%] lg:ml-36 pt-36 lg:place-items-center">
            {/* profile image or 3d model */}
            <div className="relative md:w-1/3 w-0 aspect-square self-center justify-self-center px-8">
              <Animation />
            </div>
            {/* hero text */}
            {/* md:w-2/3 */}
            <div className="flex flex-col md:w-2/3 space-y-2 pr-8 w-full place-content-center">
              <div className="text-navy py-2">{t('hero')}</div>
              <div className="text-[5em] text-purple font-fraunces font-extrabold">{t('name')}</div>
              <div className="text-navy pb-8">{t('abt1')}</div>
              {/* start and resume button */}
              <div className="grid grid-cols-2 justify-between w-full">
                <CoolButton text={t('start').toUpperCase()} link={`/about`} />
                <CoolButton text={t('resume').toUpperCase()} link={"/Reimer_Resume.pdf"} />
              </div>
              
            </div>
          </div>
          <div>
            <ChevronDownIcon className="h-12 w-12 place-self-center text-navy animate-bounce" />
          </div>
        </div>

        {/* what i do banner */}
        <AutoplayCarousel contents={t.raw('selftags')} />

        {/* featured projects banner */}
        <Banner text={t("featured-projects")} />

        {/* featured projects  */}
        <div className="bg-pink grid grid-col w-full py-10 space-y-10 -pt-10 items-center">
          <div className="grid lg:ml-32 lg:w-5/6">
            <FeaturedProject projectNum={6} lng={lng}> </FeaturedProject>
            <FeaturedProject projectNum={5} lng={lng}> </FeaturedProject>
          </div>
        </div>

        {/* featured courses banner */}
        <Banner text={t("featured-courses")} />

        {/* featured projects  */}
        <div className="w-full lg:pl-40 lg:px-8 px-16 py-10 space-y-10 justify-end">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => {
              return (
                <CourseCard key={item} classNum={item}></CourseCard>
              );
            })}
            
          </div>
        </div>
      </div>
    </main>
  );
}