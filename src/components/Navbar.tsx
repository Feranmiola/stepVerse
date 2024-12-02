'use client'
import { useRouter } from "next-nprogress-bar";
import {  usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const isHomePage = pathname === '/';
    
    if (!isHomePage) {
      router.push(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80; // Adjust this value based on your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  useEffect(() => {
    if (pathname.includes('#')) {
      const sectionId = pathname.split('#')[1];
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80; // Adjust this value based on your navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <>
      <div className="w-full flex flex-row max-md:hidden items-center py-5 bg-white bg-opacity-80 backdrop-blur-md justify-center space-x-[20rem] z-[9999] fixed">
        <p 
          className="text-[#191918] text-[22.01px] cursor-pointer"
          onClick={() => router.push('/')}
        >
          StepVerse
        </p>

        <div className="flex flex-row items-center space-x-10">
          <p 
            className="text-[#6B6B6B] cursor-pointer hover:text-black transition ease-in-out text-sm"
            onClick={() => scrollToSection('how-it-works')}
          >
            How it Works
          </p>
          <p 
            className="text-[#6B6B6B] cursor-pointer hover:text-black transition ease-in-out text-sm"
            onClick={() => scrollToSection('features')}
          >
            Features
          </p>
          <p 
            className="text-[#6B6B6B] cursor-pointer hover:text-black transition ease-in-out text-sm"
            onClick={() => scrollToSection('faqs')}
          >
            FAQs
          </p>
          <p 
            className="text-[#6B6B6B] cursor-pointer hover:text-black transition ease-in-out text-sm"
            onClick={() => scrollToSection('community')}
          >
            Community
          </p>
        </div>

        <div 
          className="w-[173px] h-[48px] rounded-[41.77px] bg-[#191918] cursor-pointer border-[1px] border-transparent hover:border-white transition ease-in-out flex items-center justify-center space-x-1"
          onClick={() => window.open('https://t.me/StepVerseApp', '_blank')}
        >
          <p className="text-white text-[14px]">Launch on Telegram</p>
        </div>
      </div>

      <div className="w-full flex flex-row md:hidden items-center py-5 bg-white justify-between px-5 bg-opacity-80 backdrop-blur-md z-[9999] fixed">
        <p 
          className="text-[#191918] text-[20.9px] font-bold leading-none cursor-pointer"
          onClick={() => router.push('/')}
        >
          Step<br/>Verse
        </p>

        <div 
          className="w-[199px] h-[44px] rounded-[41.77px] bg-[#191918] cursor-pointer border-[1px] border-transparent hover:border-white transition ease-in-out flex items-center justify-center space-x-1"
          onClick={() => window.open('https://t.me/StepVerseApp', '_blank')}
        >
          <p className="text-white text-[14px]">Launch on Telegram</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

