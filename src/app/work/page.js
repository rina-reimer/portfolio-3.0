"use client"
import { HomeIcon, IdentificationIcon, ArchiveBoxIcon, SparklesIcon, BookOpenIcon } from "@heroicons/react/24/solid";
import Link from 'next/link'
import {Divider} from "@nextui-org/divider";
import data from '/src/lib/en.json';
import ProjectCard from "../components/ProjectCard";

export default function Work() {

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
        <div className="card-grid grid md:grid-cols-2 grid-cols-1 gap-12 justify-items-center">
          <ProjectCard name={[data.name]} projectNum={[6]} />
          <ProjectCard name={[data.name]} projectNum={[5]} />
          <ProjectCard name={[data.name]} projectNum={[4]} />
          <ProjectCard name={[data.name]} projectNum={[3]} />
          <ProjectCard name={[data.name]} projectNum={[2]} />
          <ProjectCard name={[data.name]} projectNum={[1]} />
        </div>

      </div>
    </main>
  );
}