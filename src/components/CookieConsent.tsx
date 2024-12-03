"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Sheet, SheetContent } from "@/components/ui/sheet";

import CookiesIcon from "@/Icons/CookiesIcon";

interface CookieConsentProps {
  setShowCookieConsent: (show: boolean) => void;
}

export default function CookieConsent({
  setShowCookieConsent,
}: CookieConsentProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    const cookieChoice = localStorage.getItem("cookieConsent");
    if (cookieChoice === null) {
      setIsSheetOpen(true);
    }
  }, []);

  const handleChoice = (choice: "accept" | "decline") => {
    localStorage.setItem("cookieConsent", choice);
    setShowCookieConsent(false);
    setIsSheetOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent
          side={"bottom"}
          className="w-full rounded-t-[16px] outline-none bg-white h-[216px] flex flex-col px-5"
        >
          <div className="w-full flex flex-col space-y-5 h-full">
            <CookiesIcon />
            <p className="text-[#4C4C4C] text-[17px] w-[362px] leading-none">
              We use cookies to personalize your site experience and analyze the
              site traffic.
            </p>
            <div className="flex flex-row space-x-3 items-center">
              <button
                onClick={() => handleChoice("decline")}
                className="w-[173px] h-[46px] border-[1px] border-transparent hover:border-black transition ease-in-out flex items-center justify-center font-inter bg-[#F1F1F1] rounded-2xl text-[17px] text-black cursor-pointer"
              >
                Decline
              </button>
              <button
                onClick={() => handleChoice("accept")}
                className="w-[173px] h-[46px] border-[1px] border-transparent hover:border-black transition ease-in-out flex items-center font-medium font-inter justify-center bg-[#F7F7F7] rounded-2xl text-[17px] text-black cursor-pointer"
              >
                Accept
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 z-50">
      <div className="flex bg-white w-[1012px] h-[95px] flex-row items-center justify-between px-5 rounded-2xl shadow-lg">
        <div className="flex flex-row space-x-3 items-center">
          <CookiesIcon />
          <p className="text-[#4C4C4C] text-[17px] w-[362px] leading-none">
            We use cookies to personalize your site experience and analyze the
            site traffic.
          </p>
        </div>
        <div className="flex flex-row space-x-3 items-center">
          <button
            onClick={() => handleChoice("decline")}
            className="w-[119px] h-[55px] border-[1px] border-transparent hover:border-black transition ease-in-out flex items-center justify-center font-inter bg-[#F1F1F1] rounded-2xl text-[17px] text-black cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={() => handleChoice("accept")}
            className="w-[119px] h-[55px] border-[1px] border-transparent hover:border-black transition ease-in-out flex items-center font-medium font-inter justify-center bg-[#F7F7F7] rounded-2xl text-[17px] text-black cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
