import Image from "next/image";
import React from "react";

export const Brands = () => {
  return (
    <div className=" relative flex flex-col items-center mx-auto w-screen top-28  md:mb-0 md:top-40">
      {/* Heading Section */}
      <div className="md:flex md:space-x-4 lg:space-x-5  lg:px-12 ">
        <p className="text-center text-[#74EDF4] text-lg md:text-xl lg:text-2xl font-normal tracking-wider">
          BRANDS I WORK WITH
        </p>
        <div className="mt-5 flex flex-col items-center md:mt-3">
          <div className="border-2 border-[#FFFFFF] bg-[#FFFFFF] w-28  md:w-[400px] lg:w-[500px] xl:w-[750px]" />
          <div className="border-2 border-[#158E95] bg-[#158E95] w-28  md:w-[400px] lg:w-[500px] xl:w-[750px]" />
        </div>
      </div>

      {/*Mobile Image Section */}
      <div className="  md:mx-auto md:hidden">
        <Image
          className="w-full  brightness-110 contrast-125 "
          src="/images/brands.png"
          alt="brands"
          width={339}
          height={700}
          priority
        />
        
      </div>

       {/*Desktop Image Section */}
       <div className="mt-10  relative md:mx-auto md:flex justify-center md:px-10 hidden lg:px-16">
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
