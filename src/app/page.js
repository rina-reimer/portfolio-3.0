"use client"
import Image from "next/image";
import data from '/src/lib/en.json';
import Animation from "./components/Animation";
import { CoolButton } from "./components/CoolButton";
import Banner from "./components/Banner";
import AutoplayCarousel from "./components/AutoplayCarousel";
import CourseCard from "./components/CourseCard";
import FeaturedProject from "./components/FeaturedProject";

export default function Home() {
  return (
    <main className="bg-beige flex flex-row min-h-screen">
      
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <div className="flex flex-row lg:w-5/6 w:full lg:h-dvh h-lvh lg:ml-36 lg:place-items-center">
          {/* profile image or 3d model */}
          <div className="relative w-1/3 aspect-square self-center justify-self-center px-8">
            <Animation />
          </div>
          {/* hero text */}
          <div className="flex flex-col space-y-6 w-2/3 place-content-center">
            <div className="text-4xl text-purple pb-4">{data.hero}</div>
            <div className="text-navy pb-8">{data.abt1}</div>
            {/* start and resume button */}
            <div className="grid grid-cols-2 justify-between w-full">
              <CoolButton text={"START"} link={"#about-section"} />
              <CoolButton text={"RESUMÉ"} link={"/resume.pdf"} />
            </div>
          </div>
        </div>

        {/* what i do banner */}
        <AutoplayCarousel />

        {/* featured projects banner */}
        <Banner text={"featured projects"} />

        {/* featured projects  */}
        <div className="bg-pink grid grid-col w-full py-10 space-y-10 -pt-10 items-center">
          <div className="grid lg:ml-32 lg:w-5/6">
            <FeaturedProject projectNum={6}> </FeaturedProject>
            <FeaturedProject projectNum={5}> </FeaturedProject>
          </div>
        </div>

        {/* featured courses banner */}
        <Banner text={"featured courses"} />

        {/* featured projects  */}
        <div className="w-full lg:pl-40 px-8 py-10 space-y-10 justify-end">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-16">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => {
              return (
                <CourseCard classNum={item}></CourseCard>
              );
            })}
            
          </div>
        </div>
      </div>
    </main>
  );
}