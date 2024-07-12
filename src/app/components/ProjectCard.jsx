import Image from "next/image";
import {Divider} from "@nextui-org/divider";
import {Tooltip} from "@nextui-org/react";
import { useState } from "react";
import data from '/src/lib/en.json';
import { SparklesIcon, BookOpenIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ projectNum }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div className={`card ${flip ? "flip" : ""} relative flex flex-col bg-gray h-[600px] w-[400px] border-2 border-navy rounded-[32px] overflow-clip shadow-xl`}>
      
{/* ------------------------- FRONTSIDE ------------------------- */}
      
      <div className="front bg-gray w-[400px] space-y-3 justify-content-center" onClick={() => setFlip(!flip)}>
        {/* upper decoration */}
        <div className="flex flex-row gap-2 pt-4 px-4">
          <SparklesIcon className="size-12 text-navy"></SparklesIcon>
          <div className="text-navy lg:text-md text-sm self-center">{data.name}</div>
          <Divider className="text-navy self-center border-1 border-navy w-36"></Divider>
          <div className="text-navy lg:text-md text-sm self-center">no. 0{projectNum}</div>
        </div>
        {/* title */}
        <div className="px-4 h-16 content-center">
          <div className="text-navy text-2xl text-fraunces self-start">{data[`project${projectNum}`]?.title}</div>
        </div>
        {/* image */}
        <div className="flex flex-col relative w-[368px] mx-4 aspect-[3/2] border-2 border-navy rounded-[24px] self-center">
          <Image className="rounded-[24px]" src={`/project-${projectNum}.png`} fill={true} sizes=""></Image>
          {/* icon */}
          <div className="absolute flex w-1/4 h-1/3 rounded-full border-2 border-gray border-b-navy border-r-navy bg-gray ml-[-4%] mt-[-4%] place-content-center">
            <BookOpenIcon className="text-navy size-1/2 self-center py-1/4"></BookOpenIcon>
          </div>
          {/* status */}
          <div className={`absolute flex w-1/3 h-1/6 rounded-full border-2 border-navy mr-[5%] mt-[-5%] ${data[`project${projectNum}`]?.active ? "bg-active" : "bg-inactive"} self-end place-content-center overflow-hidden`}>
            <div className="sm:text-xs text-sm self-center justify-center text-gray">{data[`project${projectNum}`]?.active ? "ACTIVE" : "INACTIVE"}</div>
          </div>
        </div>
        {/* self info */}
        <div className="flex flex-row h-16 gap-2 py-2 px-4">
          {/* role */}
          <div className="flex w-56 h-full rounded-full border-2 border-navy bg-yellow self-end place-content-center overflow-hidden">
            <div className="text-base self-center justify-center text-navy">{data[`project${projectNum}`]?.role}</div>
          </div>
        {/* dev stack */}
          <div className="flex flex-row -space-x-4">
            {data[`project${projectNum}`]?.stack.map((item, index) => {
              return (
                <Tooltip className="bg-navy text-gray p-2 rounded-full" content={`${data[`project${projectNum}`].stack[index]}`}>
                  <div key={index} className="flex relative h-full aspect-square bg-gray border-2 border-navy z-10 hover:z-20 rounded-full">
                    <Image src={`https://img.icons8.com/color/50/${item}.png`} fill={true}></Image>
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
        {/* short desc */}
        <div className="h-24 mx-4 p-2 border-2 border-navy rounded-[24px] text-navy overflow-scroll">
          {data[`project${projectNum}`]?.desc}
        </div>
      </div>

{/* ------------------------- BACKSIDE ------------------------- */}

      <div className="back flex flex-col bg-gray" onClick={() => setFlip(!flip)}>
        {/* upper decoration */}
        <div className="flex flex-row gap-2 py-2">
          <SparklesIcon className="size-12 text-navy"></SparklesIcon>
          <div className="text-navy lg:text-md text-sm self-center">{data.name}</div>
          <Divider className="text-navy self-center border-1 border-navy"></Divider>
          <div className="text-navy lg:text-md text-sm self-center">no. {projectNum < 10 ? "0" : ""}{projectNum}</div>
        </div>
        {/* title */}
        <div className="text-navy text-2xl text-fraunces px-4 pb-4 self-start">{data[`project${projectNum}`]?.title}</div>


        {/* long desc */}
        <div className="h-[470px] mx-4 mb-4 p-2 border-2 border-navy rounded-[24px] text-navy text-balance overflow-scroll overscroll-auto">
          <p dangerouslySetInnerHTML={{ __html: data[`project${projectNum}`]?.longdesc }}></p>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
