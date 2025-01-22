import Image from 'next/image'
import React from 'react'

function OtherSocials() {
  return (
    <div className='flex flex-col items-center justify-center font-unigeo space-y-12 md:space-y-16 '>
    <p className='text-lg md:text-xl text-[#8AC7CA] tracking-wide' >CONNECT WITH ME ON SOCIALS</p>
    <div className="lg:flex lg:space-x-7  items-center grid grid-cols-2 gap-12 md:gap-24 ">
     <div className='font-unigeo' >
     <a
        href="https://linkedin.com/in/joelmgbikeh"
        target="_blank"
        rel="noopener noreferrer"
         className='flex flex-col items-center justify-center lg:flex-row lg:space-x-4'
      >
        <Image
        className='w-10 h-10 lg:w-7 lg:h-7'
          src="/images/linked.png"
          alt="linkedin-logo"
          width={50}
          height={50}
        />
         <p className='pt-4 text-center lg:pt-2'>Joel Mgbikeh</p>
      </a>
     
     </div>
     
     <div>
      <a
        href="https://x.com/joelmgbikeh"
        target="_blank"
        rel="noopener noreferrer"
        className='flex flex-col items-center justify-center lg:flex-row lg:space-x-4 '
      >
        <Image
        className='w-10 h-10 lg:w-7 lg:h-7'
          src="/images/twitter.png"
          alt="x-logo"
          width={48}
          height={48}
        />
        <p className='pt-4 text-center lg:pt-2'>joelmgbikeh</p>
      </a>
      
      </div>

      <div>
      <a
        href="https://instagram.com/joelmgbikeh"
        target="_blank"
        rel="noopener noreferrer"
         className='flex flex-col items-center justify-center lg:flex-row lg:space-x-4'
      >
        <Image
        className='w-10 h-10 lg:w-7 lg:h-7'
          src="/images/instagram.png"
          alt="instagram-logo"
          width={50}
          height={50}
        />
         <p className='pt-4 text-center lg:pt-2'>joelmgbikeh</p>
      </a>
     
      </div>

      <div className=''>
      <a
        href="https://facebook.com/joelmgbikeh"
        target="_blank"
        rel="noopener noreferrer"
        className='flex flex-col items-center justify-center lg:flex-row lg:space-x-4'
      >
        <Image
        className='w-10 h-10 lg:w-7 lg:h-7'
          src="/images/facebook.png"
          alt="facebook-logo"
          width={50}
          height={50}
        />
        <p className='pt-4 text-center lg:pt-2'>Joel Mgbikeh</p>
      </a>
      
      </div>
    </div>
</div>
  
  
  )
}

export default OtherSocials