import Image from 'next/image'
import React from 'react'
import Header from './Header'

export const Hero = () => {
  return (
   <>
     
     
    <div className=' flex flex-col items-center 
    text-center overflow-hidden z-0 '>
      
      
    <div className=' mt-6 sm:mt-16 md:hidden'>
    <Image src="/images/hero-mobile.png"
        className='w-full'
        alt=''
        width={393}
        height={664}
        />
    </div>

    <div className='  hidden md:block '>
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
