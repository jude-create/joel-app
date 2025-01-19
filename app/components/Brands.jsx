import Image from 'next/image'
import React from 'react'

export const Brands = () => {
  return (
    <div
    className='h-screen relative flex flex-col items-center mx-auto w-screen top-28'>
   
   <div className="md:flex ">
        <p className="text-center text-[#74EDF4] text-lg font-normal tracking-wider  ">
        BRANDS I WORK WITH
        </p>
        <div className="mt-4 flex flex-col items-center md:mt-3">
          <div className="border-2 border-[#FFFFFF] bg-[#FFFFFF] w-28" />
          <div className="border-2 border-[#158E95] bg-[#158E95] w-28" />
        </div>
      </div>

      <div className='mt-10'>
        <Image
        className='w-full h-[80%]'
        src="/images/brands.png"
        alt='brands'
        width={339}
        height={700}
         />
      </div>

   </div>
  )
}
