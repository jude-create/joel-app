import React from 'react'
import { Web2Design } from './Web2Design'
import { Web3Design } from './Web3Design'


export const Designs = () => {
  return (
    <div
     className='relative flex flex-col items-center mx-auto w-screen top-16 xl:top-16 '>
    <section className=''>
    <Web2Design />
    </section>
   
    <section className=''>
    <Web3Design />
    </section>

    </div>
  )
}
