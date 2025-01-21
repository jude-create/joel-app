import Image from 'next/image'
import React from 'react'
import Header from './Header'

export const Hero = () => {
  return (
   <>
    {/** Header */}
    <Header  
       />
    <div className='h-screen flex flex-col items-center 
    justify-center text-center overflow-hidden z-0 '>
      
      
    <div className=' md:mt-1 sm:mt-16 md:hidden'>
    <Image src="/images/hero-mobile.png"
        className='w-full h-[600px]'
        alt=''
        width={393}
        height={500}
        />
    </div>

    <div className=' xl:mt-2 hidden md:block px-8'>
    <Image src="/images/hero-desktop.png"
        className='w-full  lg:h-[700px]'
        alt=''
        width={1000}
        height={800}
        />
    </div>

     </div>
     </>
  )
}
