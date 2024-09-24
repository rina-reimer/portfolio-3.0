"use client"
import Image from "next/image";
import data from '/src/lib/en.json';
import { Animation } from "./components/Animation";
import { CoolButton } from "./components/CoolButton";
import Banner from "./components/Banner";
import { CrossBanner } from "./components/CrossBanner";
import Journal from "./components/Journal";

export default function Home() {
  return (
    <main className="bg-beige flex flex-row min-h-screen">
      
      <div className="flex flex-col w-full">
        {/* Hero Section */}
        <div className="flex flex-row lg:w-5/6 w:full lg:h-dvh h-lvh lg:ml-36 lg:place-items-center">
          {/* profile image or 3d model */}
          <div className="relative w-1/3 aspect-square self-center justify-self-center px-8">
            {/* <Animation /> */}
          </div>
          {/* hero text */}
          <div className="flex flex-col space-y-6 w-2/3 place-content-center">
            <div className="text-4xl text-purple pb-4">{data.hero}</div>
            <div className="text-navy">{data.abt1}</div>
            {/* start and resume button */}
            <div className="grid grid-cols-2 justify-between w-full">
              {/* <CoolButton text={"START"} link={"#about-section"} />
              <CoolButton text={"RESUMÉ"} link={"/resume.pdf"} /> */}
            </div>
          </div>
        </div>

        {/* what i do banner */}
        {/* <CrossBanner banner1={data.selftags1} banner2={data.selftags2}> </CrossBanner> */}

        {/* Short About Section */}
        <div id="about-section" className="w-2/3 py-12 ml-24 my-12 self-center justify-self-center">
          <Journal />
        </div>

        {/* featured projects banner */}
        <Banner text={"featured projects"} />

        {/* featured projects  */}
        <div className="bg-pink grid grid-col w-full py-10 space-y-10 -pt-10 items-center">
          <div className="grid lg:ml-32 lg:w-5/6">
            <div className="bg-yellow min-w-24 w-2/3 h-80 py-0.5 self-center justify-self-center border-navy border-4">
              <h1 className="text-navy">featured proj 1</h1>
            </div>
            <div className="bg-yellow min-w-24 w-2/3 h-80 py-0.5 self-center justify-self-center border-navy border-4">
              <h1 className="text-navy">featured proj 2</h1>
            </div>
          </div>
        </div>

        {/* featured courses banner */}
        <Banner text={"featured courses"} />

        {/* featured projects  */}
        <div className="w-full py-10 space-y-10">
          <div className="grid grid-cols-3 gap-16 lg:ml-24 lg:w-2/3">
            <div className="bg-yellow min-w-24 w-full h-auto py-0.5 self-center justify-self-center border-navy border-4 px-16">
              <h1 className="text-navy">featured proj 1</h1>
            </div>
            <div className="bg-yellow min-w-24 w-full h-auto py-0.5 self-center justify-self-center border-navy border-4 px-8">
              <h1 className="text-navy">featured proj 2</h1>
            </div>
            <div className="bg-yellow min-w-24 w-full h-auto py-0.5 self-center justify-self-center border-navy border-4 px-8">
              <h1 className="text-navy">featured proj 2</h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}