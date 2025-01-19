import React from 'react'
import WhatsappSocial from './WhatsappSocial'
import OtherSocials from './OtherSocials'

export const Socials = () => {
  return (
    <div
    className='h-screen relative flex flex-col items-center mx-auto w-screen top-28 px-2'>
    <div className='space-y-20'>
        <WhatsappSocial />
        <OtherSocials />
    </div>
    </div>
  )
}
