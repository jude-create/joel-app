import Image from "next/image";
import React from "react";

export const Brands = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-screen top-32 md:top-44 mb-20">
      {/* Heading Section */}
      <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between w-full px-6  md:space-x-4 lg:space-x-6">
        <p className="text-center text-[#74EDF4] text-lg md:text-xl lg:text-2xl font-normal tracking-wider whitespace-nowrap  md:text-left">
          BRANDS I WORK WITH
        </p>
        <div className="mt-5 md:mt-0 flex flex-col items-center w-full ">
          <div className="border-2 border-[#FFFFFF] bg-[#FFFFFF] w-[25%] md:w-full" />
          <div className="border-2 border-[#158E95] bg-[#158E95] w-[25%] md:w-full" />
        </div>
      </div>

      {/* Mobile Image Section */}
      <div className=" md:hidden px-11 py-8">
        <Image
          className="brightness-110 contrast-125 mx-auto"
          src="/images/brands.png"
          alt="brands"
          width={339}
          height={700}
          priority
        />
      </div>

      {/* Desktop Image Section */}
      <div className="mt-10 hidden md:flex justify-center w-full px-10 ">
        <Image
          className="brightness-110 contrast-125 shadow-lg"
          src="/images/brands-desktop.png"
          alt="brands"
          width={1034}
          height={430}
          priority
        />
      </div>
    </div>
  );
};
