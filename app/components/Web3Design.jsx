"use client";
import Image from "next/image";
import React, { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";

export const Web3Design = () => {
  
    const [clickedImages, setClickedImages] = useState([]); // Tracks the clicked images

    const images = [
      {
         src: "/images/web3-design1.png",
         name: "Mmuta", 
         description: "Mobile App",
          type: "EdTech",
          link: "https://www.behance.net/gallery/188815537/Mmuta-(EdTect)-Case-Study-Mobile-App-Design/modules/1067757739",
         },

      { 
        src: "/images/web3-design2.png", 
        name: "Mmuta", 
        description: "Mobile App", 
        type: "EdTech",
        link: "https://www.behance.net/gallery/194034085/Advertising-Platform-(IaaS)-Dashboard-Design/modules/1097919399",
      },

      { 
        src: "/images/web3-design3.png",
        name: "Mmuta", 
        description: "Mobile App", 
        type: "EdTech", 
        link: "https://www.behance.net/gallery/194034085/Advertising-Platform-(IaaS)-Dashboard-Design/modules/1097919399",
        },

      { src: "/images/web3-design3.png", 
        name: "Mobile App", 
        description: "Mobile App", 
        type: "EdTech",
        link: "https://www.behance.net/gallery/194034085/Advertising-Platform-(IaaS)-Dashboard-Design/modules/1097919399",
      },

      { 
        src: "/images/web3-design3.png", 
        name: "Mobile App", 
        description: "Mobile App", 
        type: "EdTech",
         link: "https://www.behance.net/gallery/194034085/Advertising-Platform-(IaaS)-Dashboard-Design/modules/1097919399",
       },

      { 
        src: "/images/web3-design3.png",
        name: "Mobile App",
        description: "Mobile App", 
        type: "EdTech" ,
        link: "https://www.behance.net/gallery/194034085/Advertising-Platform-(IaaS)-Dashboard-Design/modules/1097919399",
        },
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
      <div className="flex flex-col justify-center items-center p-4  ">
      {/**Header */}
     <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between w-full px-6  md:space-x-4 lg:space-x-6 md:px-10 ">
        <p className="text-center text-[#74EDF4] text-lg md:text-xl lg:text-2xl font-normal tracking-wider whitespace-nowrap  md:text-left">
        Web3 DESIGN PORTFOLIO
        </p>
        <div className="mt-5 md:mt-0 flex flex-col items-center w-full ">
          <div className="border-2 border-[#FFFFFF] bg-[#FFFFFF] w-[25%] md:w-full" />
          <div className="border-2 border-[#158E95] bg-[#158E95] w-[25%] md:w-full" />
        </div>
      </div>
  
        <div  className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 md:px-9 lg:px-12 xl:px-20 ">
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
                className="transition duration-75 ease-in-out filter rounded-md shadow-lg shadow-black lg:w-[500px] "
              />
  
              {/* Overlay */}
              {clickedImages.includes(index) && (
                <div
                  className="absolute h-[97%] mt-1 w-[99%]  inset-0 bg-[#000000]/80 flex flex-col justify-between 
                  z-10 transition duration-75 ease-out p-4 shadow-lg shadow-black rounded-md "
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
                    <button className="bg-[#3A777A]/80 px-12 py-1 rounded-full text-white font-medium text-sm">
                  <a
              href={image.link}
               target="_blank"
            rel="noopener noreferrer"
            className='flex flex-col items-center justify-center'
      >
                    View
               </a>
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
