import Image from 'next/image'
import React from 'react'

function OtherSocials() {
  return (
    <div className='flex flex-col items-center justify-center font-unigeo space-y-14'>
    <p className='text-lg text-[#8AC7CA] tracking-widest' >CONNECT WITH ME ON SOCIALS</p>
    <div className="md:flex  items-center grid grid-cols-2 gap-16">
     <div className='font-unigeo' >
     <a
        href="https://linkedin.com/in/joelmgbikeh"
        target="_blank"
        rel="noopener noreferrer"
         className='flex flex-col items-center justify-center'
      >
        <Image
          src="/images/linked.png"
          alt="linkedin-logo"
          width={52}
          height={52}
        />
         <p className='pt-4 text-center'>Joel Mgbikeh</p>
      </a>
     
     </div>
     
     <div>
      <a
        href="https://x.com/joelmgbikeh"
        target="_blank"
        rel="noopener noreferrer"
        className='flex flex-col items-center justify-center'
      >
        <Image
          src="/images/twitter.png"
          alt="x-logo"
          width={48}
          height={48}
        />
        <p className='pt-4 text-center'>joelmgbikeh</p>
      </a>
      
      </div>

      <div>
      <a
        href="https://instagram.com/joelmgbikeh"
        target="_blank"
        rel="noopener noreferrer"
         className='flex flex-col items-center justify-center'
      >
        <Image
          src="/images/instagram.png"
          alt="instagram-logo"
          width={50}
          height={50}
        />
         <p className='pt-4 text-center'>joelmgbikeh</p>
      </a>
     
      </div>

      <div className=''>
      <a
        href="https://facebook.com/joelmgbikeh"
        target="_blank"
        rel="noopener noreferrer"
        className='flex flex-col items-center justify-center'
      >
        <Image
          src="/images/facebook.png"
          alt="facebook-logo"
          width={50}
          height={50}
        />
        <p className='pt-4 text-center'>Joel Mgbikeh</p>
      </a>
      
      </div>
    </div>
</div>
  
  
  )
}

export default OtherSocials