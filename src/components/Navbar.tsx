'use client'
import StepVerseIcon from "@/Icons/StepVerseIcon";
import StepVerseIconMobile from "@/Icons/StepVerseIconMobile";
import { useRouter } from "next-nprogress-bar";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);


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

  const downloadWhitepaper = async () => {
    if (isDownloading) return;
    setIsDownloading(true);

    try {
      const response = await fetch('/api/download-whitepaper', {
        method: 'GET',
        headers: {
          'Accept': 'application/pdf',
        },
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Whitepaper V1.0.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        toast({
          title: "Whitepaper Downloaded",
          description: "The whitepaper has been successfully downloaded.",
          action: <ToastAction altText="View whitepaper">View</ToastAction>,
        });
      } else {
        console.error('Failed to download whitepaper:', response.status, response.statusText);
        toast({
          variant: "destructive",
          title: "Download Failed",
          description: `There was an error downloading the whitepaper. Status: ${response.status}`,
        });
      }
    } catch (error) {
      console.error('Error downloading whitepaper:', error);
      // if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
      //   toast({
      //     variant: "destructive",
      //     title: "Download Blocked",
      //     description: "The download was blocked. Please disable any ad blockers or security extensions and try again.",
      //   });
      // } else {
      //   toast({
      //     variant: "destructive",
      //     title: "Download Error",
      //     description: `An unexpected error occurred: ${error.message}. Please try again later.`,
      //   });
      // }
    } finally {
      setIsDownloading(false);
    }
  };
  return (
    <>
      <div className="w-full flex flex-row max-md:hidden items-center py-5 bg-white bg-opacity-80 backdrop-blur-md justify-center space-x-[20rem] z-[9999] fixed">
        <div
          className=" cursor-pointer"
          onClick={() => router.push('/')}
        >
          <StepVerseIcon/>
        </div>

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
          onClick={downloadWhitepaper}
        >
          <p className="text-white text-[14px]">Download Whitepaper</p>
        </div>
      </div>

      <div className="w-full flex flex-row md:hidden items-center py-5 bg-white justify-between px-5 bg-opacity-80 backdrop-blur-md z-[9999] fixed">
        <div
          className="cursor-pointer"
          onClick={() => router.push('/')}
        >
          <StepVerseIconMobile/>
        </div>

        <div 
          className="w-[199px] h-[44px] rounded-[41.77px] bg-[#191918] cursor-pointer border-[1px] border-transparent hover:border-white transition ease-in-out flex items-center justify-center space-x-1"
          onClick={downloadWhitepaper}
        >
          <p className="text-white text-[14px]">Download Whitepaper</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

