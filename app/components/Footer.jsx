import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <div 
     className='px-5  relative flex flex-col items-center mx-auto w-screen top-16 pb-24 '>
    <div className='space-y-10'>
     <Image src="/images/footer.png"
     alt='footer'
     height={1200}
     width={1010}
     className='h-[270px] w-full'
     />
     <p className='text-center text-xs font-unigeo font-light text-[#666666]'>©Joel Mgbikeh, All Rights Reserved</p>
     </div>
     </div>
  )
}
