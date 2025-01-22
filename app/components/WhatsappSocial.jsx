import React from 'react'

function WhatsappSocial() {
  return (
    <div className='text-center font-unigeo space-y-8 md:space-y-14 flex flex-col justify-center items-center '>
        <p className='text-lg font-semibold tracking-wider  md:text-2xl '>LET’S WORK ON YOUR PROJECT</p>
        <p className='text-base w-80 md:leading-[60px] leading-9 md:w-[700px] xl:w-[900px]  md:font-light text-center'>If you need a product designer who speaks and understands both human and business, crafting solutions that delight users and drive results,
         I'm your person. Let's work!</p>
         <button className='text-base font-semibold 
         bg-[#3A777A] shadow-xl shadow-[#3A91966B]/40 
         px-9 py-4 rounded-full md:px-16 md:text-lg md:font-bold'>
         <a href='https://wa.me/2347081361604'
         target="_blank"
          rel="noopener noreferrer">
      
         Let’s talk on WhatsApp
         </a>
         </button>
    </div>
  )
}

export default WhatsappSocial