"use client"
import Link from 'next/link'
import {Divider} from "@nextui-org/divider";
import ProjectCard from "../components/ProjectCard.jsx";
import { useTranslation } from '@/app/i18n/client.js';

export default function Work({lng}) {
  const {t} = useTranslation(lng, 'common');

  return (
    <main className="flex flex-row bg-beige min-h-screen">
      
      <div className="flex flex-col lg:w-5/6 lg:ml-36 w-full space-y-10">
        <div className="grid grid-row h-1/2 lg:ml-36 lg:place-items-center">
          <h1 className="text-navy whitespace-nowrap lg:mt-0 mt-36">fun heading</h1>
        </div>
        <Divider className="text-navy w-full place-self-center "></Divider>

        {/* Projects */}
        <div className="card-grid grid md:grid-cols-2 grid-cols-1 gap-12 justify-items-center">
          {[6, 5, 4, 3, 2, 1].map((item) => {
              return (
                <ProjectCard name={t('name')} lng={lng} projectNum={[item]} />
              );
            })}
        </div>

      </div>
    </main>
  );
}