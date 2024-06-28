"use client"
import Image from "next/image";
import { HomeIcon, IdentificationIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";




export default function Home() {
  return (
    <main className="flex flex-row min-h-screen">
      {/* Navbar */}
      <div className="fixed object-center lg:py-[25vh] py-8 lg:px-8 px-[25vw]">
        <div className="flex lg:h-[50vh] h-24 lg:w-24 w-[50vw] lg:flex-col flex-row content-center lg:py-10 py-0 space-y-10 bg-navy rounded-lg text-white font-extrabold">
          <HomeIcon className="size-16 text-navy bg-gray rounded-lg basis-1/3"></HomeIcon>
          <IdentificationIcon className="size-16 text-gray basis-1/3"></IdentificationIcon>
          <ArchiveBoxIcon className="size-16 text-gray basis-1/3"></ArchiveBoxIcon>
        </div>
      </div>
      
      <div className="flex flex-col w-full py-10 space-y-10">
        {/* Hero Section */}
        <div className="flex flex-row w-5/6 h-svh py-24 ml-36">
          <div className="w-1/3 h-96 bg-navy self-center justify-self-center border-navy border-4 px-8">
            <h1>Photo</h1>
          </div>
          <h1 className="text-navy">Hero Section</h1>
        </div>

        {/* what i do banner */}
        <div className="bg-gray w-lvw h-64 content-center border-navy border-y-4">
          <h1 className="px-60 text-navy">what i do</h1>
        </div>

        {/* Short About Section */}
        <div className="bg-yellow w-2/3 h-5/6 py-0.5 ml-24 self-center justify-self-center border-navy border-4 px-8">
          <h1 className="text-navy">a lil bit about me</h1>
        </div>

        {/* featured projects banner */}
        <div className="bg-gray w-lvw h-64 content-center border-navy border-y-4">
          <h1 className="px-60 text-navy">featured projects</h1>
        </div>

        {/* featured projects  */}
        <div className="bg-pink flex flex-col w-full py-10 space-y-10 -pt-10">
          <div className="bg-yellow min-w-24 w-2/3 h-80 py-0.5 ml-24 self-center justify-self-center border-navy border-4 px-8">
            <h1 className="text-navy">featured proj 1</h1>
          </div>
          <div className="bg-yellow min-w-24 w-2/3 h-80 py-0.5 ml-24 self-center justify-self-center border-navy border-4 px-8">
            <h1 className="text-navy">featured proj 2</h1>
          </div>
        </div>

        {/* featured courses banner */}
        <div className="bg-gray w-lvw h-64 content-center border-navy border-y-4">
          <h1 className="px-60 text-navy">featured courses</h1>
        </div>

        {/* featured projects  */}
        <div className="flex flex-row align-end bg-pink w-full py-10 space-y-10">
          <div className="bg-yellow min-w-24 w-1/6 h-80 py-0.5 ml-24 self-center justify-self-center border-navy border-4 px-16">
            <h1 className="text-navy">featured proj 1</h1>
          </div>
          <div className="bg-yellow min-w-24 w-1/6 h-80 py-0.5 ml-24 self-center justify-self-center border-navy border-4 px-8">
            <h1 className="text-navy">featured proj 2</h1>
          </div>
          <div className="bg-yellow min-w-24 w-1/6 h-80 py-0.5 ml-24 self-center justify-self-center border-navy border-4 px-8">
            <h1 className="text-navy">featured proj 2</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
