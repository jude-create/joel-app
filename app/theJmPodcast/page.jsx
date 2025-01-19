import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'

export default function TheJmPodcast() {
  return (
    <>
      <main
        className="bg-combined-radial h-screen text-white overflow-y-auto snap-y snap-mandatory overflow-x-hidden scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#74EDF4]/80"
      >
        <Header />
        <section className="flex flex-col justify-between h-full snap-start pt-36">
          {/* Main Content */}
          <div className="flex flex-col justify-center items-center  space-y-12 font-unigeo">
            <div className="flex space-x-1">
              <Image src="/images/logo2.png" alt="logo" width={35} height={42} />
              <Image
                src="/images/Subtract.png"
                alt="logo2"
                height={35}
                width={42}
              />
            </div>

            <p className="font-semibold text-3xl">Coming soon...</p>
            <p className="text-base w-64 text-center">
              Stay connected to receive updates when the podcast begins.
            </p>

            <div className="pt-10 space-y-8 flex flex-col items-center">
              <button className="bg-[#FF0000] flex items-center justify-center px-8 py-4 rounded-full space-x-2">
                <p>Subscribe to Youtube channel</p>
                
                  <a href='https://www.youtube.com/@the-jm-podcast'
         target="_blank"
          rel="noopener noreferrer">
            <Image
                  className="w-4 h-3"
                  src="/images/youtube.png"
                  alt="youtube"
                  height={14}
                  width={10}
                  />
          </a>
               
              </button>

              <button className="bg-[#158E95] flex items-center justify-center px-8 py-4 rounded-full space-x-2">
                <p>Follow on Spotify</p>
                <a href='https://creators.spotify.com/pod/show/joel-mgbikeh'
         target="_blank"
          rel="noopener noreferrer">
            <Image
                  className="w-4 h-3"
                  src="/images/spotify.png"
                  alt="spotify"
                  height={14}
                  width={10}
                  />
          </a>
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className='pt-10'>
            <div className="border-4 border-[#FFFFFF] w-full" />
            <div className="border-4 border-[#172F31] bg-[#172F31] w-full h-[29px]" />
            <div className="border-4 border-[#0C1818] bg-[#0C1818] w-full h-[29px]" />
          </div>
        </section>
      </main>
    </>
  );
}

