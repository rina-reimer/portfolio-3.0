"use client"
import Image from "next/image";
import {Divider} from "@nextui-org/divider";
import {Tooltip} from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "@/app/i18n/client";
import { SparklesIcon, BookOpenIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ name, projectNum, lng }) => {
  const { t } = useTranslation(lng, 'common');
  const { stack } = t(`project${projectNum}`, {returnObjects: true});
  const [flip, setFlip] = useState(false);

  return (
    <div className={`card ${flip ? "flip" : ""} relative flex flex-col bg-gray h-[600px] w-[400px] border-2 border-navy rounded-[32px] overflow-clip shadow-xl`}>
      
{/* ------------------------- FRONTSIDE ------------------------- */}
      <div className="front bg-gray w-[400px] space-y-3 justify-content-center" onClick={() => setFlip(!flip)}>
        {/* upper decoration */}
        <div className="flex flex-row gap-2 pt-4 px-4">
          <SparklesIcon className="size-12 text-navy"></SparklesIcon>
          <div className="text-navy lg:text-md text-sm self-center">{name}</div>
          <Divider className="text-navy self-center border-1 border-navy"></Divider>
          <div className="text-navy lg:text-md text-sm self-center">no. 0{projectNum}</div>
        </div>
        {/* title */}
        <div className="px-4 h-16 content-center">
          <div className="text-navy text-2xl text-fraunces self-start">{t(`project${projectNum}.title`)}</div>
        </div>
        {/* image */}
        <div className="flex flex-col relative w-[368px] mx-4 aspect-[3/2] border-2 border-navy rounded-[24px] self-center">
          <Image className="rounded-[24px]" src={`/project-${projectNum}.png`} fill={true} sizes="" />
          {/* status */}
          <div className={`absolute flex w-1/3 h-1/6 rounded-full border-2 border-navy mr-[5%] mt-[-5%] ${t(`project${projectNum}.active`, {returnObjects: true}) ? "bg-active" : "bg-inactive"} self-end place-content-center overflow-hidden`}>
            <div className="sm:text-xs text-sm self-center justify-center text-gray">{t(`project${projectNum}.active`) ? "ACTIVE" : "INACTIVE"}</div>
          </div>
        </div>
        {/* self info */}
        <div className="flex flex-row h-16 gap-2 py-2 px-4">
          {/* role */}
          <div className="flex w-56 h-full rounded-full border-2 border-navy bg-yellow self-end place-content-center overflow-hidden">
            <div className="text-base self-center justify-center text-navy">{t(`project${projectNum}.role`)}</div>
          </div>
        {/* dev stack */}
          <div className="flex flex-row -space-x-4">
            {/* t(`project${projectNum}.stack`) */}
            {stack.map((item, index) => {
              return (
                <Tooltip key={index} className="bg-navy text-gray p-2 rounded-full" content={`${t(`project${projectNum}.stack`, {returnObjects: true})[index]}`}>
                  <div key={index} className="flex relative h-full aspect-square bg-gray border-2 border-navy z-10 hover:z-20 rounded-full">
                    <Image src={`https://img.icons8.com/color/50/${item}.png`} fill={true}></Image>
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
        {/* short desc */}
        <div className={`h-24 mx-4 p-2 border-2 border-navy rounded-[24px] text-navy ${flip ? "" : "overflow-scroll overscroll-auto"}`}>
          {t(`project${projectNum}.desc`)}
        </div>
      </div>

{/* ------------------------- BACKSIDE ------------------------- */}

      <div className="back flex flex-col bg-gray" onClick={() => setFlip(!flip)}>
        {/* upper decoration */}
        <div className="flex flex-row gap-2 py-2">
          <SparklesIcon className="size-12 text-navy"></SparklesIcon>
          <div className="text-navy lg:text-md text-sm self-center">{name}</div>
          <Divider className="text-navy self-center border-1 border-navy"></Divider>
          <div className="text-navy lg:text-md text-sm self-center">no. {projectNum < 10 ? "0" : ""}{projectNum}</div>
        </div>
        {/* title */}
        <div className="text-navy text-2xl text-fraunces px-4 pb-4 self-start">{t(`project${projectNum}.title`)}</div>


        {/* long desc */}
        <div className={`mx-4 mb-4 p-2 border-2 border-navy rounded-[24px] text-navy text-balance ${flip ? "overflow-scroll overscroll-auto h-[470px]" : "h-0 overflow-hidden"}`}>
          <p dangerouslySetInnerHTML={{ __html: t(`project${projectNum}.longdesc`) }}></p>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
