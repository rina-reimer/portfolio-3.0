import React, { Suspense } from 'react';
import { Space_Mono, Fraunces } from "next/font/google";
import Nav from "./components/Navbar";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Footer from "./components/Footer";
import "../globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';


export const space = Space_Mono({ subsets: ["latin"], weight: ["700"], display: "swap", });
export const fraunces = Fraunces({ subsets: ["latin"], weight: ["700"], display: "swap" });

export const metadata = {
  title: "Rina Reimer",
  description: "Hey there! I'm Rina Reimer, a software developer based out of Seattle, WA, USA!",
};

export default async function RootLayout({ children, params }) {
  const { lng } = await params;
  
  if (!routing.locales.includes(lng)) {
    notFound();
  }

  const messages = await getMessages();

  return (
      <html lang={lng} dir='ltr'>
        <body className= {`${space.className}`}>
        <NextIntlClientProvider messages={messages}>
              <Nav lng={lng} />
              <LanguageSwitcher lng={lng} />
              {children}
              <Footer lng={lng} />
          </NextIntlClientProvider>
        </body>
      </html>
  );
}
