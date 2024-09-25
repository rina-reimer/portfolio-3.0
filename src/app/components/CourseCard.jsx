import Image from "next/image";
import {Divider} from "@nextui-org/divider";
import {Tooltip} from "@nextui-org/react";
import { useState } from "react";
import data from '/src/lib/en.json';

const CourseCard = ({ classNum }) => {
  const [flip, setFlip] = useState(false);

  return (
    <div className={`card ${flip ? "flip" : ""} relative flex flex-col bg-gray aspect-square h-fit border-2 border-navy rounded-[32px] overflow-clip shadow-xl`}>
{/* ------------------------- FRONTSIDE ------------------------- */}
      <div className="front bg-gray space-y-3 justify-content-center" onClick={() => setFlip(!flip)}>
        {/* title */}
        <div className="px-4 h-16 content-center">
          <div className="text-navy text-2xl text-fraunces self-start">{data[`class${classNum}`]?.title}</div>
        </div>
      </div>
{/* ------------------------- BACKSIDE ------------------------- */}
      <div className="back flex flex-col bg-gray" onClick={() => setFlip(!flip)}>
        {/* dev stack */}
        <div className="flex flex-row p-2">
          {data[`class${classNum}`]?.stack.map((item, index) => {
            return (
              <Tooltip className="bg-navy text-gray p-2 rounded-full" content={`${data[`class${classNum}`].stack[index]}`}>
                <div key={index} className="flex relative h-8 aspect-square bg-gray border-2 border-navy z-10 hover:z-20 rounded-full">
                  <Image src={`https://img.icons8.com/color/50/${item}.png`} fill={true}></Image>
                </div>
              </Tooltip>
            );
          })}
        </div>
        {/* desc */}
        <div className="p-2 text-navy overflow-scroll">
          {data[`class${classNum}`]?.desc}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;