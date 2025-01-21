import Image from "next/image";
import React from "react";

export const Brands = () => {
  return (
    <div className="h-screen relative flex flex-col items-center mx-auto w-screen top-28 mb-60 md:mb-0 md:items-start xl:top-16 ">
      {/* Heading Section */}
      <div className="md:flex md:space-x-5 md:px-10">
        <p className="text-center text-[#74EDF4] text-lg md:text-xl lg:text-2xl font-normal tracking-wider">
          BRANDS I WORK WITH
        </p>
        <div className="mt-4 flex flex-col items-center md:mt-3">
          <div className="border-2 border-[#FFFFFF] bg-[#FFFFFF] w-28 md:w-[560px] lg:w-[870px] xl:w-[1000px]" />
          <div className="border-2 border-[#158E95] bg-[#158E95] w-28 md:w-[560px] lg:w-[870px] xl:w-[1000px]" />
        </div>
      </div>

      {/*Mobile Image Section */}
      <div className="mt-10 relative md:mx-auto md:hidden">
        <Image
          className="w-full h-[80%] brightness-110 contrast-125 shadow-lg"
          src="/images/brands.png"
          alt="brands"
          width={400}
          height={700}
          priority
        />
        {/* Optional: Adding a subtle glow effect */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/10 to-transparent w-fit" />
      </div>

       {/*Desktop Image Section */}
       <div className="mt-20 xl:mt-10 relative md:mx-auto md:block md:px-10 hidden">
        <Image
          className="w-[90%]   brightness-110 contrast-125 shadow-lg"
          src="/images/brands-desktop.png"
          alt="brands"
          width={3300}
          height={2500}
          priority
        />
        {/* Optional: Adding a subtle glow effect */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/10 to-transparent md:w-fit" />
      </div>
    </div>
  );
};
