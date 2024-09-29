import { Space_Mono, Fraunces } from "next/font/google";
import Nav from "./components/Navbar";
import "../globals.css";
import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { Footer } from "./components/Footer";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export const space = Space_Mono({ subsets: ["latin"], weight: ["700"], display: "swap", });
export const fraunces = Fraunces({ subsets: ["latin"], weight: ["700"], display: "swap" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ 
  children,
  params: {
    lng
  } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={space.className}>
        <Nav lng={lng}/>
        {children}
        {/* insert footer here */}
        <Footer lng={lng}></Footer>
      </body>
    </html>
  );
}
