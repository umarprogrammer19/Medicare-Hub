'use client';
import Image from "next/image";
import { PiStethoscope } from "react-icons/pi";

// Hero Section For Whole Landing Page
function HeroSection() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }} className="relative flex items-center justify-between gap-12 px-10 py-12 h-[520px]">
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center mt-5">
        <div className="flex items-center gap-2 text-[#243567] font-semibold uppercase text-4xl mb-2">
          <PiStethoscope className="text-4xl" /> 
          YOUR HEALTH
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-black">
          Our Priority
        </h1>
        <p className="text-black mt-4 text-lg font-semibold">
          Providing expert medical care with <br />compassion and advanced technology
        </p>
        <div>
            <button className="mt-6 cursor-pointer px-7 py-4 border border-black text-white bg-[#243567] text-lg font-serif font-medium hover:bg-white hover:text-[#243567]  transition">
            Discover More
            </button>
        </div>
        </div>
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 w-[500px] h-[500px] hidden md:block">
        <div className="relative w-full h-full rounded-full overflow-hidden border-1 border-[#243567] shadow-xl">
          <Image
            src="/Home1.jpg"
            alt="Doctor"
            width={550}
            height={550}
            className="w-full h-full object-cover"/>
        </div>
        <div className="absolute bottom-3 left-0 w-48 h-48 rounded-full bg-white flex items-center justify-center shadow-md border border-[#243567]">
          <Image
            src="/Home2.png"
            alt="Badge Icon"
            width={65}
            height={72}
            className="w-30 h-30"/>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
