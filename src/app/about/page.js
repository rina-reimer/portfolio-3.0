"use client"
import Image from "next/image";
import { HomeIcon, IdentificationIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";
import Link from 'next/link'

export default function About() {
  return (
    <main className="flex flex-row min-h-screen">
      <div className="fixed object-center lg:py-[25vh] py-8 lg:px-8 px-[25vw]">
        <div className="flex lg:h-[50vh] h-24 lg:w-24 w-[50vw] lg:flex-col flex-row justify-center items-center lg:space-y-16 lg:space-x-0 space-y-0 space-x-16 bg-navy rounded-lg text-white font-extrabold">
          <Link href="/"><HomeIcon className="size-16 text-gray basis-1/3 left"></HomeIcon></Link>
          <Link href="/about"><IdentificationIcon className="size-16 text-navy bg-gray rounded-lg basis-1/3"></IdentificationIcon></Link>
          <Link href="/work"><ArchiveBoxIcon className="size-16 text-gray basis-1/3"></ArchiveBoxIcon></Link>
        </div>
      </div>
      <div>a bit about me</div>
    </main>
  );
}