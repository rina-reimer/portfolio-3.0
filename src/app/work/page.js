"use client"
import Link from 'next/link'
import {Divider} from "@nextui-org/divider";
import data from '/src/lib/en.json';
import ProjectCard from "../components/ProjectCard.jsx";

export default function Work() {

  return (
    <main className="flex flex-row bg-beige min-h-screen">
      
      <div className="flex flex-col lg:w-5/6 lg:ml-36 w-full space-y-10">
        <div className="grid grid-row h-1/2 lg:ml-36 lg:place-items-center">
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