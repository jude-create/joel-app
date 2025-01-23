import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <>
      {/* Mobile Footer */}
      <footer className="md:hidden px-5 relative flex flex-col items-center mx-auto w-screen pb-5">
        <div className="space-y-10">
          <Image
            src="/images/footer.png"
            alt="footer"
            height={1200}
            width={1010}
            className="h-[270px] w-full"
          />
          <p className="text-center text-xs font-unigeo font-light text-[#666666]">
            ©Joel Mgbikeh, All Rights Reserved
          </p>
        </div>
      </footer>

      {/* Divider Line for Desktop */}
      <div className="border-2 border-[#999999] hidden md:block mt-20" />

      {/* Desktop Footer */}
      <footer className="hidden md:flex justify-between items-center p-12 relative bottom-0 w-screen ">
        <Link href="/#hero">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={162}
            height={30}
            className="cursor-pointer"
          />
        </Link>
        <p className="text-xs md:text-sm font-unigeo font-light text-[#666666]">
          ©Joel Mgbikeh, All Rights Reserved
        </p>
      </footer>
    </>
  );
};
