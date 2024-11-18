'use client'
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
// import { usePathname } from "next/navigation";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { useTranslation } from '../../i18n';
import {GlobeAltIcon} from '@heroicons/react/24/outline';


export default function LanguageSwitcher({lng}) {
  const router = useRouter();
  const { t } =  useTranslation(lng, 'common');
  console.log("Rendering LanguageSwitcher:", lng);

  const handleLanguageChange = (language) => {
    router.push(`/${language}`);
  };
  //const currentPath = usePathname();

  return (
    <div className='fixed right-0 top-0 z-[1000000]'>
      <Dropdown >
        <DropdownTrigger>
          <Button> Open
            {/* <GlobeAltIcon className='h-10 w-10 m-10 text-navy outline-2 outline-beige' /> */}
          </Button>
        </DropdownTrigger>
        {console.log("trigger clear")}
        <DropdownMenu aria-label="Language Selection">
          <DropdownItem key="en" href='/en'>
            EN
            {/* <span className={`${lng === 'en' ? 'text-yellow' : 'text-navy'}`}>EN</span> */}
          </DropdownItem>
          {console.log("first item")}
          <DropdownItem key="de" href='/de'>
            DE
            {/* <span className={`${lng === 'de' ? 'text-yellow' : 'text-navy'}`}>DE</span> */}
          </DropdownItem>
          {console.log("second item")}
        </DropdownMenu>
        {console.log("menu")}
      </Dropdown>
      {console.log("everything")}
    </div>
  );
}