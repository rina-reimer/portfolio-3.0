"use client"
import Image from "next/image";
import { HomeIcon, IdentificationIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";
import CoolButton from "./components/CoolButton";
import Link from 'next/link';
import data from '/src/lib/en.json';

export default function Home() {
  return (
    <main className="bg-beige flex flex-row min-h-screen">
      {/* Navbar */}
      <div className="fixed object-center lg:py-[25vh] py-8 lg:px-8 px-[25vw]">
        <div className="flex lg:h-[50vh] lg:min-h-[375px] h-24 lg:w-24 lg:min-w-24 w-[50vw] min-w-[375px] lg:flex-col flex-row justify-center items-center lg:space-y-16 lg:space-x-0 space-y-0 space-x-16 bg-navy rounded-lg text-white font-extrabold">
          <Link href="/"><HomeIcon className="size-16 text-navy bg-beige rounded-lg basis-1/3 left"></HomeIcon></Link>
          <Link href="/about"><IdentificationIcon className="size-16 text-beige basis-1/3"></IdentificationIcon></Link>
          <Link href="/work"><ArchiveBoxIcon className="size-16 text-beige basis-1/3"></ArchiveBoxIcon></Link>
        </div>
      </div>
      
      <div className="flex flex-col w-full lg:pt-0 pt-36 space-y-10">
        {/* Hero Section */}
        <div className="flex flex-row lg:w-5/6 w:full h-dvh lg:ml-36 lg:place-items-center">
          {/* profile image or 3d model */}
          <div className="relative w-1/3 aspect-square self-center justify-self-center px-8">
            <Image src={"/memoji.png"} fill={true}></Image>
          </div>
          {/* hero text */}
          <div className="flex flex-col space-y-6 w-2/3 place-content-center">
            <div className="text-4xl text-navy pb-4">{data.hero}</div>
            <div className="text-navy">{data.abt1}</div>
            {/* start and resume button */}
            <div className="grid grid-cols-2 items-center space-x-8">
              <CoolButton text={"START"} link={"/resume.pdf"} />
              <CoolButton text={"RESUMÉ"} link={"/resume.pdf"} />
            </div>
          </div>
        </div>

        {/* what i do banner */}
        <div className="grid bg-gray w-lvw h-32 place-items-center border-navy border-y-4">
          <h1 className="px-60 text-navy">what i do banners</h1>
        </div>

        {/* Short About Section */}
        <div className="bg-yellow w-2/3 h-[600px] py-0.5 ml-24 self-center justify-self-center border-navy border-4 px-8">
          <h1 className="text-navy">a lil bit about me</h1>
        </div>

        {/* featured projects banner */}
        <div className="grid bg-gray w-lvw h-32 place-items-center border-navy border-y-4">
          <h1 className="px-60 text-navy">featured projects</h1>
        </div>

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
        <div className="grid bg-gray w-lvw h-32 place-items-center border-navy border-y-4">
          <h1 className="px-60 text-navy">featured courses</h1>
        </div>

        {/* featured projects  */}
        <div className="bg-pink w-full py-10 space-y-10">
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
