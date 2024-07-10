"use client"
import Image from "next/image";
import { HomeIcon, IdentificationIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";
import Link from 'next/link'
import { Divider } from "@nextui-org/divider";

export default function About() {
  return (
    <main className="bg-beige ">
      {/* Navbar */}
      <div className="fixed object-center lg:py-[25vh] py-8 lg:px-8 px-[25vw]">
        <div className="flex lg:h-[50vh] h-24 lg:w-24 w-[50vw] lg:flex-col flex-row justify-center items-center lg:space-y-16 lg:space-x-0 space-y-0 space-x-16 bg-navy rounded-lg text-white font-extrabold">
          <Link href="/"><HomeIcon className="size-16 text-beige basis-1/3 left"></HomeIcon></Link>
          <Link href="/about"><IdentificationIcon className="size-16 text-navy bg-beige rounded-lg basis-1/3"></IdentificationIcon></Link>
          <Link href="/work"><ArchiveBoxIcon className="size-16 text-beige basis-1/3"></ArchiveBoxIcon></Link>
        </div>
      </div>

      
      {/*  Rest of page */}
      <div className="flex flex-col w-full space-y-10 py-10">
        {/* Hero Section */}
        <div className="flex flex-row lg:w-5/6 w:full h-5/6 lg:ml-36 lg:place-items-center">
          <div className="grid w-2/3 place-items-center">
            <h1 className="text-navy">Hero Section</h1>
          </div>
          <div className="w-1/3 h-96 bg-navy self-center justify-self-center border-navy border-4 px-8">
            <h1>Photo</h1>
          </div>
        </div>

        {/* what i do banner */}
        <div className="grid bg-gray w-lvw h-32 place-items-center border-navy border-y-4">
          <h1 className="px-60 text-navy">what i do banners</h1>
        </div>

        <div className="flex flex-row lg:w-5/6 w:full h-2/3 lg:ml-36 lg:place-items-center space-x-8">
          <div className="grid bg-yellow border-4 border-navy w-2/3 place-items-center">
            <h1 className="text-navy">technical skills</h1>
          </div>
          <div className="w-1/3 h-96 bg-navy self-center justify-self-center border-navy border-4 px-8">
            <h1>hobbies</h1>
          </div>
        </div>
      </div> 
    </main>
  );
}