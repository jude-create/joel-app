"use client";
import Image from "next/image";
import React, { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

export const Web3Design = () => {
  
    const [clickedImages, setClickedImages] = useState([]); // Tracks the clicked images

    const images = [
      { src: "/images/web3-design1.png", name: "Mmuta", description: "Mobile App (Case Study)", type: "EdTech" },
      { src: "/images/web3-design2.png", name: "Illustratify", description: "Landing Page", type: "Design, Tech" },
      { src: "/images/web3-design3.png", name: "Ogilvista", description: "Web App", type: "IaaS, Ad & Marketing" },
      { src: "/images/web3-design3.png", name: "PlateGuard Pro", description: "Mobile App", type: "Tech, AI, Security" },
      { src: "/images/web3-design3.png", name: "Airly", description: "Landing Page", type: "Transportation" },
      { src: "/images/web3-design3.png", name: "eLab Academy",description: "Website", type: "Medical, Health" },
    ];
  
    const handleImageClick = (index) => {
      if (!clickedImages.includes(index)) {
        setClickedImages([...clickedImages, index]); // Add image index to clicked list
      }
    };
  
    const handleOverlayClose = (index) => {
      setClickedImages(clickedImages.filter((i) => i !== index)); // Remove image index from clicked list
    };
  
    return (
      <div className="p-4  relative flex flex-col items-center mx-auto w-screen top-14 md:items-start ">
        <div className="md:flex md:space-x-5 md:px-6">
          <p className="text-center text-[#74EDF4] text-lg md:text-xl lg:text-2xl font-normal tracking-wider">
            Web3 DESIGN PORTFOLIO
          </p>
          <div className="mt-4 flex flex-col items-center">
            <div className="border-2 border-[#FFFFFF] bg-[#FFFFFF] w-28 md:w-[540px] lg:w-[850px] xl:w-[900px] " />
            <div className="border-2 border-[#158E95] bg-[#158E95] w-28 md:w-[540px] lg:w-[850px] xl:w-[900px]" />
          </div>
        </div>
  
        <div className="relative mt-10 space-y-7 pb-48 px-5 md:px-6  md:grid grid-cols-3 md:gap-4  md:space-y-0 ">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer"
              onClick={() => handleImageClick(index)} // Handle image click
            >
              <Image
                src={image.src}
                alt={image.name}
                width={399}
                height={221}
                className="transition duration-75 ease-in-out filter rounded-md shadow-lg shadow-black lg:w-[90%]"
              />
  
              {/* Overlay */}
              {clickedImages.includes(index) && (
                <div
                  className="absolute h-[97%] mt-1 w-[99%]  inset-0 bg-[#000000]/50 flex flex-col justify-between 
                  z-10 transition duration-75 ease-out p-4 shadow-lg shadow-black rounded-md lg:w-[89%]"
                >
                  {/* Top Section */}
                  <div>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-medium md:text-xl  text-white tracking-wider">
                      {image.name}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent click from affecting parent
                        handleOverlayClose(index); // Close overlay for this image
                      }}
                      className="text-white"
                    >
                      <XCircleIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <p className="pt-2">{image.description}</p>
                </div>
                  {/* Bottom Section */}
                  <div className="flex justify-between items-center mt-4">
                    <p className=" text-sm text-[#9DF6FA]">{image.type}</p>
                    <button className="bg-[#3A777A]/60 px-12 py-2 rounded-full text-white font-medium text-sm">
                      View
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
  )
}
