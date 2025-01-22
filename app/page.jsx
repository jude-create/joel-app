"use client"
import React from 'react'
import Image from "next/image";
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { Designs } from "./components/Designs";
import { Web2Design } from "./components/Web2Design";
import { Web3Design } from "./components/Web3Design";
import { Brands } from "./components/Brands";
import { Socials } from "./components/Socials";
import { Footer } from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.8, ease: "easeIn" } },
  };

  return (
    <main
      className="bg-combined-radial h-screen text-white overflow-y-scroll overflow-x-hidden   scroll-smooth scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#74EDF4]/80"
    >
      {/** Header */}
    <Header />

      {/** Hero */}
      <section
        id="hero"

        
        
        
       
      >
        <Hero />
      </section>

      {/** Divider */}
      <div
       className='hidden md:block'
      >
        <div className="border-4 border-[#FFFFFF] w-full" />
        <div className="border-4 border-[#172F31] bg-[#172F31] w-full h-[29px]" />
        <div className="border-4 border-[#0C1818] bg-[#0C1818] w-full h-[29px]" />
      </div>

      {/** Designs */}
      <motion.section
        id="designs"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Designs />
      </motion.section>

      {/** Brands */}
      <motion.section
        id="brands"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Brands />
      </motion.section>

      {/** Socials */}
      <motion.section
        id="socials"
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Socials />
      </motion.section>

      
      
      {/** Footer */}
      <section
        
        > 
        <Footer />
      </section>
    </main>
  );
}
