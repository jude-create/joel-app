import React from "react";
import Header from "../components/Header";
import Image from "next/image";

export default function TheJmPodcast() {
  return (
    <>
      <main
        className="bg-combined-radial min-h-screen text-white overflow-x-hidden scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#74EDF4]/80 flex flex-col"
      >
        <Header />
        <section className="flex flex-col justify-between flex-grow lg:mt-8 ">
          {/* Main Content */}
          <div className="flex flex-col justify-center items-center space-y-10 font-unigeo flex-grow lg:mb-8">
            <div className="flex space-x-1">
              <Image src="/images/logo2.png" alt="logo" width={39} height={44} />
              <Image
                src="/images/Subtract.png"
                alt="logo2"
                height={35}
                width={42}
              />
            </div>

            <p className="font-semibold text-3xl md:text-6xl md:font-bold">
              Coming soon...
            </p>
            <p className="text-base md:text-2xl w-64 md:w-full text-center">
              Stay connected to receive updates when the podcast begins.
            </p>

            <div className="pt-7 space-y-8 flex flex-col items-center justify-center lg:pt-4 md:flex md:flex-row md:space-x-14">
            <a
                  href="https://www.youtube.com/@the-jm-podcast"
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <button className="bg-[#FF0000] flex items-center justify-center px-8 py-4 rounded-full space-x-2 md:mt-8">
                <p className="md:font-medium md:text-lg">
                  Subscribe to Youtube channel
                </p>
                
                  <Image
                    className="w-4 h-3"
                    src="/images/youtube.png"
                    alt="youtube"
                    height={14}
                    width={10}
                  />
                
              </button>
              </a>
          
              <a
                  href="https://creators.spotify.com/pod/show/joel-mgbikeh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
              <button className="bg-[#158E95] flex items-center justify-center px-8 py-4 rounded-full space-x-2">
                <p className="md:font-medium md:text-lg">Follow on Spotify</p>
               
                  <Image
                    className=""
                    src="/images/spotify.png"
                    alt="spotify"
                    height={14}
                    width={10}
                  />
               
              </button>
              </a>
            </div>
            </div>

            <div className="  w-full flex flex-col  ">
              <div className="border-4 border-[#FFFFFF] w-full" />
              <div className="border-4 border-[#172F31] bg-[#172F31] w-full h-[29px]" />
              <div className="border-4 border-[#0C1818] bg-[#0C1818] w-full h-[29px]" />
            </div>
          
        </section>
      </main>
    </>
  );
}
