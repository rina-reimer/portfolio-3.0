"use client"
import { useRouter, usePathname } from "next/navigation";
import { HomeIcon, IdentificationIcon, ArchiveBoxIcon } from "@heroicons/react/24/solid";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

const navigationRoutes = ["home", "about", "work"];
 
export default function Nav({lng}) {
  const currentPath = usePathname();
  console.log("Rendering Nav:", lng);

  return (
    <nav className="nav_container fixed object-center lg:py-[25vh] py-4 lg:px-2 px-[25vw] z-[999]">
      <div className="flex flex-col-3 lg:h-[50vh] h-24 lg:w-24 w-[50vw] lg:flex-col flex-row justify-center items-center lg:space-y-12 lg:space-x-0 space-y-0 md:space-x-12 space-x-6 bg-navy rounded-lg text-white font-extrabold">
        <Link href={`/${lng}`}>
          <HomeIcon className={`${currentPath === `/${lng}` ? "text-navy bg-beige rounded-lg" : "text-beige"} md:size-16 size-12 cursor-crosshair`} />
        </Link>
        <Link href={`/${lng}/about`}>
          <IdentificationIcon  className={`${currentPath === `/${lng}/about` ? "text-navy bg-beige rounded-lg" : "text-beige"} md:size-16 size-12 cursor-crosshair`} />
        </Link>
        <Link href={`/${lng}/work`}>
          <ArchiveBoxIcon  className={`${currentPath === `/${lng}/work` ? "text-navy bg-beige rounded-lg" : "text-beige"} md:size-16 size-12 cursor-crosshair`} />
        </Link>
      </div>  
    </nav>
  );
}


function NavigationLink({ href, text, router }) {
  const inner = (
    <HomeIcon
      className={`${
        isActive ? "text-navy bg-beige rounded-lg" : "text-beige"
      } size-16 basis-1/3`}
    ></HomeIcon>
  );

  return (
    <NavbarItem isActive>
      <Link href={href === "/home" ? "/" : href}>
        {inner}
      </Link>
    </NavbarItem>
  );

}