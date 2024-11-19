'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import {Button} from '@nextui-org/button';
import { useTranslations } from 'next-intl';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export default function LanguageSwitcher({ lng }) {
  const router = useRouter();
  const t = useTranslations();
  console.log("Rendering LanguageSwitcher:", lng);

  const handleLanguageChange = (language) => {
    router.push(`/${language}`);
  };

  return (
    <div className='fixed right-0 top-0 z-[1000000]'>
      <Dropdown>
        <DropdownTrigger> Lang
          {/* <Button>
            <GlobeAltIcon className='h-10 w-10 m-10 text-navy outline-2 outline-navy' />
          </Button> */}
        </DropdownTrigger>
        <DropdownMenu aria-label="Language Selection">
          <DropdownItem key="en" href='/en'>
            <span className={`${lng === 'en' ? 'text-yellow' : 'text-navy'}`}>EN</span>
          </DropdownItem>
          <DropdownItem key="de" href='/de'>
            <span className={`${lng === 'de' ? 'text-yellow' : 'text-navy'}`}>DE</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}