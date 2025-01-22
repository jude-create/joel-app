import React from 'react'
import WhatsappSocial from './WhatsappSocial'
import OtherSocials from './OtherSocials'

export const Socials = () => {
  return (
    <div
    className=' relative flex flex-col items-center mx-auto w-screen top-20 px-2 md:top-56 pb-56 '>
    <div className='space-y-28 md:space-y-40'>
        <WhatsappSocial />
        <OtherSocials />
        
    </div>
    </div>
  )
}
