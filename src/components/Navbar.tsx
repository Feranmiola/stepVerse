import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex flex-row max-md:hidden items-center py-5 bg-white bg-opacity-80 backdrop-blur-md justify-center space-x-[20rem] z-[9999] fixed">
        <p className="text-[#191918] text-[22.01px]">StepVerse</p>

        <div className="flex flex-row items-center space-x-10">
          <p className="text-[#6B6B6B] cursor-pointer hover:text-black transition ease-in-out text-sm">
            How it Works
          </p>
          <p className="text-[#6B6B6B] cursor-pointer hover:text-black transition ease-in-out text-sm">
            Features
          </p>
          <p className="text-[#6B6B6B] cursor-pointer hover:text-black transition ease-in-out text-sm">
            FAQs
          </p>
          <p className="text-[#6B6B6B] cursor-pointer hover:text-black transition ease-in-out text-sm">
            Community
          </p>
        </div>

        <div className="w-[173px] h-[48px] rounded-[41.77px] bg-[#191918] cursor-pointer border-[1px] border-transparent hover:border-white transition ease-in-out flex items-center justify-center space-x-1">
          <p className="text-white text-[14px]">Launch on Telegram</p>
        </div>
      </div>

      <div className="w-full flex flex-row md:hidden items-center py-5 bg-white justify-between px-5 bg-opacity-80 backdrop-blur-md  z-[9999] fixed">
        <p className="text-[#191918] text-[20.9px] font-bold leading-none">Step<br/>Verse</p>

        <div className="w-[199px] h-[44px] rounded-[41.77px] bg-[#191918] cursor-pointer border-[1px] border-transparent hover:border-white transition ease-in-out flex items-center justify-center space-x-1">
          <p className="text-white text-[14px]">Launch on Telegram</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
