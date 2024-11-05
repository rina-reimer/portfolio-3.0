import Link from 'next/link';
import React from 'react';
// import { usePathname } from "next/navigation";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@nextui-org/react';
import { useTranslation } from '../../i18n';
import {GlobeAltIcon} from '@heroicons/react/24/outline';


export const LanguageSwitcher = ({lng}) => {
  const { t } =  useTranslation(lng, 'common');
  //const currentPath = usePathname();

  return (
    <div className='fixed right-0 top-0 z-[1000000]'>
      <Dropdown>
        <DropdownTrigger>
          <GlobeAltIcon className='h-10 w-10 m-10 text-navy outline-2 outline-beige'></GlobeAltIcon>
        </DropdownTrigger>
        <DropdownItem key="en">
          <Link href={`/en`} className={`${lng === 'en' ? 'text-yellow' : 'text-navy'}`}>EN</Link>
        </DropdownItem>
        <DropdownItem>
        `<Link href={`/de`} className={`${lng === 'de' ? 'text-yellow' : 'text-navy'}`}>DE</Link>,
        </DropdownItem>
      </Dropdown>
      
        
    </div>
  );
}