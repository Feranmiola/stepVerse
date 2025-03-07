"use client";
import StepVerseIcon from "@/Icons/StepVerseIcon";
import StepVerseIconMobile from "@/Icons/StepVerseIconMobile";
import { useRouter } from "next-nprogress-bar";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    const isHomePage = pathname === "/";

    if (!isHomePage) {
      router.push(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80; // Adjust this value based on your navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    if (pathname.includes("#")) {
      const sectionId = pathname.split("#")[1];
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80; // Adjust this value based on your navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [pathname]);

  const viewWhitepaper = () => {
    window.open("/Whitepaper V1.0.pdf", "_blank");
  };

  return (
    <>
      <div className="w-full flex flex-row max-md:hidden items-center py-5 bg-white bg-opacity-80 backdrop-blur-md justify-center space-x-[20rem] z-[9999] fixed">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <StepVerseIcon />
        </div>

        <div className="flex flex-row items-center space-x-10">
          <p
            className="text-[#6B6B6B] cursor-pointer hover:text-black transition ease-in-out text-sm"
            onClick={() => scrollToSection("how-it-works")}
          >
            How it Works
          </p>
          <p
            className="text-[#6B6B6B] cursor-pointer hover:text-black transition ease-in-out text-sm"
            onClick={() => scrollToSection("features")}
          >
            Features
          </p>
          <p
            className="text-[#6B6B6B] cursor-pointer hover:text-black transition ease-in-out text-sm"
            onClick={() => scrollToSection("faqs")}
          >
            FAQs
          </p>
          <p
            className="text-[#6B6B6B] cursor-pointer hover:text-black transition ease-in-out text-sm"
            onClick={() => scrollToSection("community")}
          >
            Community
          </p>
        </div>

        <div
          className="w-[173px] h-[48px] rounded-[41.77px] bg-[#191918] text-white text-[14px] hover:bg-transparent hover:text-[#191918] hover:border-[#191918] hover:border-2 cursor-pointer transition ease-in-out flex items-center justify-center space-x-1"
          onClick={viewWhitepaper}
        >
          View Whitepaper
        </div>
      </div>

      <div className="w-full flex flex-row md:hidden items-center py-5 bg-white justify-between px-5 bg-opacity-80 backdrop-blur-md z-[9999] fixed">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <StepVerseIconMobile />
        </div>

        <div
          className="w-[199px] h-[44px] rounded-[41.77px] hover:bg-[#191918] bg-[#191918] text-white hover:bg-transparent text-[14px] hover:text-[#191918] cursor-pointer border-[1px] border-transparent hover:border-white transition ease-in-out flex items-center justify-center space-x-1"
          onClick={viewWhitepaper}
        >
          View Whitepaper
        </div>
      </div>
    </>
  );
};

export default Navbar;
