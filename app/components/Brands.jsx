import Image from "next/image";
import React from "react";

export const Brands = () => {
  return (
    <div className=" relative  mx-auto w-screen top-24  md:mb-0 md:top-40">
      {/* Heading Section */}
      <div className="md:flex  md:px-10 md:space-x-2   xl:px-24 xl:space-x-2   ">
        <p className="text-center text-[#74EDF4] text-lg md:text-xl lg:text-2xl font-normal tracking-wider md:w-1/3  xl:w-[30%]">
          BRANDS I WORK WITH
        </p>
        <div className="mt-5 flex flex-col items-center md:mt-3 w-full md:w-2/3 xl:w-[70%]">
          <div className="border-2 border-[#FFFFFF] bg-[#FFFFFF] w-[25%]  md:w-full " />
          <div className="border-2 border-[#158E95] bg-[#158E95] w-[25%]  md:w-full " />
        </div>
      </div>

      {/*Mobile Image Section */}
      <div className="flex flex-col items-center  md:mx-auto md:hidden px-14 py-11">
        <Image
          className="  brightness-110 contrast-125 "
          src="/images/brands.png"
          alt="brands"
          width={339}
          height={700}
          priority
        />
        
      </div>

       {/*Desktop Image Section */}
       <div className="mt-10  relative md:mx-auto md:flex justify-center md:px-10 hidden lg:px-16  flex-col items-center ">
        <Image
          className="w-[85%]   brightness-110 contrast-125 shadow-lg"
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
