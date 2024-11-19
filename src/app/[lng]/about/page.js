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
      <div className="flex flex-col w-full space-y-10 py-10">
        {/* Hero Section */}
        <div className="flex md:flex-row flex-col-reverse lg:w-5/6 w:full h-lvh lg:ml-36 mt-24 place-items-center px-2">
          {/* image */}
          <div className="relative aspect-square md:w-1/3 md:h-[44lvw] w-3/4 h-[100lvw] place-content-center">
            <Image src={'/profile.jpeg'} fill={true} sizes="4/3"></Image>
          </div>
          {/* Tab selection */}
          <div className="md:w-1/2 w-full h-full flex flex-col">
            <div className="grid grid-cols-4">
              <Button onClick={() => setTab(0)}>{t('home')}</Button>
              <Button onClick={() => setTab(1)}>{t('about')}</Button>
              <Button onClick={() => setTab(2)}>{t('toolbox')}</Button>
              <Button onClick={() => setTab(3)}>{t('etc')}</Button>
            </div>
            <Divider></Divider>
            <div>
              {chooseTab(tab)}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

function chooseTab(tabNum) {
  switch (tabNum) {
    case 0:
      return (<BasicInfo />);
    case 1:
      return (<SelfDescription />);
    case 2:
      return (<Toolbox />);
    case 3:
      return (<Extras />);
    default:
      return(<p>error</p>);
  }
}