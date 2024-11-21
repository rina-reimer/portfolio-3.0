"use client"
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useTranslations } from 'next-intl';
import BasicInfo from "../components/about/BasicInfo";
import SelfDescription from "../components/about/SelfDescription";
import Toolbox from "../components/about/Toolbox";
import Extras from "../components/about/Extras";

export default function About({ lng }) {
  const t = useTranslations();
  const [tab, setTab] = useState(0);

  return (
    <main className="bg-beige ">
      {/*  Rest of page */}
      <div className="flex w-full md:h-screen space-y-10 py-10">
        {/* Hero Section */}
        <div className="flex md:flex-row flex-col-reverse lg:w-5/6 w-full lg:ml-36 lg:mt-0 mt-32 self-center px-2">
          {/* image */}
          <div className="relative aspect-square md:w-1/3 md:h-[44lvw] w-3/4 h-[100dvw] self-center">
            <Image src={'/profile.jpeg'} fill={true} sizes="4/3" alt='Photo of Rina Reimer'></Image>
          </div>
          {/* Tab selection */}
          <div className="md:w-2/3 h-full w-full flex flex-col p-8 self-start">
            <div className="grid grid-cols-3 space-x-1 ">
              <Button className={`${tab === 0 ? "text-beige bg-navy" : "text-navy bg-beige"} border-navy border-2 rounded-b-none`} onClick={() => setTab(0)}>{t('home')}</Button>
              <Button className={`${tab === 1 ? "text-beige bg-navy" : "text-navy bg-beige"} border-navy border-2 rounded-b-none`} onClick={() => setTab(1)}>{t('about')}</Button>
              <Button className={`${tab === 2 ? "text-beige bg-navy" : "text-navy bg-beige"} border-navy border-2 rounded-b-none`} onClick={() => setTab(2)}>{t('toolbox')}</Button>
              {/* <Button className="rounded-b-none" onClick={() => setTab(3)}>{t('other')}</Button> */}
            </div>
            <Divider></Divider>
            <div className="">
              {chooseTab(tab, lng)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

function chooseTab(tabNum, lng) {
  switch (tabNum) {
    case 0:
      return (<BasicInfo lng={lng}/>);
    case 1:
      return (<SelfDescription lng={lng}/>);
    case 2:
      return (<Toolbox lng={lng}/>);
    // case 3:
    //   return (<Extras lng={lng}/>);
    default:
      return(<p>error</p>);
  }
}