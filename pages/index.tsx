import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Header from '../components/header'
import WhatWeDo from '../components/whatWeDo'

export default function Home() {

  return (
    <>
     <div className="bg-gradient-to-r from-indigo-400 min-h-screen">
         <Header/>
      <div className="container mx-auto px-12 py-8">
         <WhatWeDo/>
      </div>
    </div>
    </>
  );
}
