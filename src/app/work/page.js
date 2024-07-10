"use client"
import Image from "next/image";
import { HomeIcon, IdentificationIcon, ArchiveBoxIcon, SparklesIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import Link from 'next/link'
import {Divider} from "@nextui-org/divider";
import { useState } from "react";

export default function Work() {
  const [flip, setFlip] = useState(false);

  return (
    <main className="flex flex-row bg-beige min-h-screen">
      <div className="fixed object-center lg:py-[25vh] py-8 lg:px-8 px-[25vw] z-[999]">
        <div className="flex lg:h-[50vh] h-24 lg:w-24 w-[50vw] lg:flex-col flex-row justify-center items-center lg:space-y-16 lg:space-x-0 space-y-0 md:space-x-16 space-x-4 bg-navy rounded-lg text-white font-extrabold">
          <Link href="/"><HomeIcon className="size-16 text-beige basis-1/3 left"></HomeIcon></Link>
          <Link href="/about"><IdentificationIcon className="size-16 text-beige basis-1/3"></IdentificationIcon></Link>
          <Link href="/work"><ArchiveBoxIcon className="size-16 text-navy bg-beige rounded-lg basis-1/3"></ArchiveBoxIcon></Link>
        </div>
      </div>
      <div className="flex flex-col lg:w-5/6 lg:ml-36 w-full space-y-10">
        <div className="grid grid-row h-1/4 lg:ml-36 lg:place-items-center">
          <h1 className="text-navy whitespace-nowrap lg:mt-0 mt-36">fun heading</h1>
        </div>
        <Divider className="text-navy w-full place-self-center "></Divider>

        {/* Projects */}
        <div className="card-grid grid md:grid-cols-2 grid-cols-1 gap-16 px-16">

          {/* Project 6 */}
          <div className={`card ${flip ? "flip" : ""} relative flex flex-col bg-gray aspect-[2/3] border-2 border-navy rounded-[32px] overflow-clip shadow-xl`}>
            <div className="front bg-gray" onClick={() => setFlip(!flip)}>
            {/* upper decoration */}
              <div className="flex flex-row gap-2 py-2">
                <SparklesIcon className="size-12 text-navy"></SparklesIcon>
                <div className="text-navy lg:text-md text-sm self-center">Rina Reimer</div>
                <Divider className="text-navy self-center border-1 border-navy"></Divider>
                <div className="text-navy lg:text-md text-sm self-center">no. 06</div>
              </div>
            {/* title */}
              <div className="text-navy text-2xl text-fraunces px-4 pb-4 self-start">PageByPage</div>
            {/* image */}
              <div className="flex flex-col relative w-full aspect-[3/2] border-2 border-navy rounded-lg self-center">
                <Image className="rounded-lg" src="/project-6.png" fill={true}></Image>
                {/* icon */}
                <div className="absolute flex w-1/4 h-1/3 rounded-full border-2 border-b-navy border-r-navy bg-gray ml-[-4%] mt-[-4%] place-content-center">
                  <BookOpenIcon className="text-navy size-1/2 self-center py-1/4"></BookOpenIcon>
                </div>
                {/* status */}
                <div className="absolute flex w-1/3 h-1/6 rounded-lg border-2 border-navy mr-[5%] mt-[-5%] bg-active self-end place-content-center overflow-hidden">
                  <div className="sm:text-xs text-sm self-center justify-center text-gray">ACTIVE</div>
                </div>
              </div>
            {/* self info */}
              <div className="flex flex-row h-[10%] gap-2 py-2 px-4">
                {/* role */}
                <div className="flex w-2/3 h-full rounded-lg border-2 border-navy bg-yellow self-end place-content-center overflow-hidden">
                  <div className="sm:text-xs text-sm self-center justify-center text-navy">Fullstack Developer</div>
                </div>
                {/* dev stack */}
                <div className="flex flex-row -space-x-2">
                  <div className="flex relative h-full aspect-square bg-gray border-2 border-navy z-10 hover:z-20 rounded-full">
                    <Image src={"https://img.icons8.com/color/50/46467A/figma--v1.png"} fill={true}></Image>
                  </div>
                  <div className="flex relative h-full aspect-square bg-gray border-2 border-navy z-10 hover:z-20 rounded-full">
                    <Image src={"https://img.icons8.com/color/50/46467A/swift.png"} fill={true}></Image>
                  </div>
                  <div className="flex relative h-full aspect-square bg-gray border-2 border-navy z-10 hover:z-20 rounded-full">
                    <Image src={"https://img.icons8.com/color/48/firebase.png"} fill={true}></Image>
                  </div>
                  <div className="flex relative h-full aspect-square bg-gray border-2 border-navy z-10 hover:z-20 rounded-full">
                    <Image src={"https://img.icons8.com/color/48/google-books.png"} fill={true}></Image>
                  </div> 
                </div>
              </div>

              {/* short desc */}
              <div className="h-2/5 mx-4 mb-4 p-2 border-2 border-navy rounded-lg text-navy">
              blah blah blah a redesign of GoodReads but shhhh we dont want them to know that we secretly call it BetterReads
              </div>
            </div>
            <div className="back flex flex-col bg-gray" onClick={() => setFlip(!flip)}>
              {/* upper decoration */}
              <div className="flex flex-row gap-2 py-2">
                <SparklesIcon className="size-12 text-navy"></SparklesIcon>
                <div className="text-navy lg:text-md text-sm self-center">Rina Reimer</div>
                <Divider className="text-navy self-center border-1 border-navy"></Divider>
                <div className="text-navy lg:text-md text-sm self-center">no. 06</div>
              </div>
            {/* title */}
              <div className="text-navy text-2xl text-fraunces px-4 pb-4 self-start">PageByPage</div>
            

              {/* short desc */}
              <div className="h-2/3 mx-4 mb-4 p-2 border-2 border-navy rounded-[24px] text-navy text-balance overscroll-auto">
              blah blah blah a redesign of GoodReads but shhhh we dont want them to know that we secretly call it BetterReads
              blah blah blah a redesign of GoodReads but shhhh we dont want them to know that we secretly call it BetterReads
              blah blah blah a redesign of GoodReads but shhhh we dont want them to know that we secretly call it BetterReads
              blah blah blah a redesign of GoodReads but shhhh we dont want them to know that we secretly call it BetterReads
              blah blah blah a redesign of GoodReads but shhhh we dont want them to know that we secretly call it BetterReads
              </div>

            </div>
          </div>
          {/* Project 5 */}
          <div className="bg-gray aspect-[2/3] border-2 border-navy rounded-[32px]">
          </div>
        </div>

      </div>
    </main>
  );
}