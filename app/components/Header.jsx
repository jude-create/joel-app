"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {  XMarkIcon } from '@heroicons/react/24/solid'
import Link from "next/link";
import { usePathname } from "next/navigation";
import {motion} from "framer-motion";



const Header = () => {
    const pathname = usePathname(); // Get the current path
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user scrolled down
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-3 bg-transparent  p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center ${
        isScrolled ? "bg-combined-radial shadow-md " : "bg-transparent " } z-50`}>
      {/* Logo */}
      <motion.div
      initial={{
        y:-400,
        opacity:0,
        scale: 0.5
      
      }}
      animate={{
        y:0,
        opacity:1,
        scale: 1
      }}
      transition={{duration: 1.8}}>
      <Link href="/#hero">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={162}
          height={30}
          className="cursor-pointer"
        />
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex md:space-x-5 lg:space-x-8 md:items-center md:justify-center">
      <Link
            href="#designs"
            className={`text-[#FFFFFF] font-normal hover:text-[#74EDF4] transition ease-in-out duration-300 ${
             pathname === "/designs"
             ? "text-white"
             :  "text-[#74EDF4]"
            }`}
              onClick={() => setMenuOpen(false)}
          >
            DESIGN PORTFOLIO
          </Link>
          <Link
            href="#brands"
            className={`text-[#FFFFFF] font-normal hover:text-[#74EDF4]  transition ease-in-out duration-300 ${
             pathname === "/brands"
             ? "text-white"
             :  "text-[#74EDF4]"
            }`}
            onClick={() => setMenuOpen(false)}
          >
            BRANDS
          </Link>

          <Link
            href="/theJmPodcast"
            className={`text-[#FFFFFF] font-normal hover:text-[#74EDF4]  transition ease-in-out duration-300 ${
             pathname === "/theJmPodcast"
             ? "text-white"
             :  "text-[#74EDF4]"
            }`}
           onClick={() => setMenuOpen(false)}
          >
           THE JM PODCAST
          </Link>

          <Link
            href="#socials"
            className={`text-[#FFFFFF] font-normal hover:text-[#74EDF4]  transition ease-in-out duration-300 ${
             pathname === "/socials"
             ? "text-white"
             :  "text-[#74EDF4]"
            }`}  onClick={() => setMenuOpen(false)}
          >
           SOCIALS
          </Link>
      </nav>

      {/* Mobile Menu Icon */}
       <motion.div
      initial={{
        y:-400,
      opacity:0,
      scale:0.3
      }}
      animate={{
        y:0,
        opacity:1,
        scale:1
      }}
      transition={{duration : 1.8}} className="md:hidden">
        <Image
          src="/images/menu.png"
          alt="menu"
          width={35}
          height={35}
          onClick={toggleMenu}
          className="cursor-pointer"
        />
      </motion.div>

      {/* Mobile Slide-Out Menu */}
     
      <div
  className={`fixed top-0 left-0 h-full w-full bg-combined-radial shadow-lg z-50 transition-transform duration-700 transform ${
    menuOpen ? "-translate-x-0" : "-translate-x-full"
  } flex flex-col justify-between`}
>
  {/* Top Section */}
  <div>
    <div className="flex justify-between items-center p-5">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={162}
        height={30}
        className="cursor-pointer"
      />
      <XMarkIcon
        onClick={() => setMenuOpen(false)}
        className="h-8 w-8 text-white cursor-pointer"
      />
    </div>
    <div className="p-6 flex flex-col space-y-10 mt-10">
      <Link
        href="/#designs"
        className={`text-[#FFFFFF] font-normal hover:text-[#74EDF4] transition ease-in-out duration-300 ${
          pathname === "/designs" ? "text-white" : "text-[#74EDF4]"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        DESIGN PORTFOLIO
      </Link>
      <Link
        href="/#brands"
        className={`text-[#FFFFFF] font-normal hover:text-[#74EDF4] transition ease-in-out duration-300 ${
          pathname === "/brands" ? "text-white" : "text-[#74EDF4]"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        BRANDS
      </Link>
      <Link
        href="/theJmPodcast"
        className={`text-[#FFFFFF] font-normal hover:text-[#74EDF4] transition ease-in-out duration-300 ${
          pathname === "/theJmPodcast" ? "text-white" : "text-[#74EDF4]"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        THE JM PODCAST
      </Link>
      <Link
        href="/#socials"
        className={`text-[#FFFFFF] font-normal hover:text-[#74EDF4] transition ease-in-out duration-300 ${
          pathname === "/socials" ? "text-white" : "text-[#74EDF4]"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        SOCIALS
      </Link>
    </div>
  </div>

  {/* Social Media Icons at the Bottom */}
  <div className="flex justify-between p-6 items-center ">
    <div className="flex space-x-6 items-center">
      <a
        href="https://linkedin.com/in/joelmgbikeh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/linked.png"
          alt="linkedin-logo"
          width={30}
          height={30}
        />
      </a>
      <a
        href="https://x.com/joelmgbikeh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/twitter.png"
          alt="x-logo"
          width={28}
          height={28}
        />
      </a>
      <a
        href="https://instagram.com/joelmgbikeh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/instagram.png"
          alt="instagram-logo"
          width={30}
          height={30}
        />
      </a>
      <a
        href="https://facebook.com/joelmgbikeh"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/facebook.png"
          alt="facebook-logo"
          width={30}
          height={30}
        />
      </a>
    </div>

    <div>
      <Image
        src="/images/logo2.png"
        alt="logo"
        width={30}
        height={30}
      />
    </div>
  </div>
</div>


      {/* Overlay to close menu */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
