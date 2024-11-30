import LinkedInIconSOlid from "@/Icons/LinkedInIconSOlid";
import MailIcon from "@/Icons/MailIcon";
import TelegramIconSolid from "@/Icons/TelegramIconSolid";
import TwitterIcon from "@/Icons/TwitterIcon";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col space-y-5">
      <div className="w-[1333px] h-[403px] rounded-[24px] flex flex-row justify-between items-center bg-[#E2F2DF]">
        <div className="flex flex-col pl-20 w-[392px] h-[221.5px] justify-between">
          <p className="w-full font-medium tracking-tighter leading-none text-[48px] text-black">
            Together, we step towards a healthier future.
          </p>

          <div className="flex flex-col space-y-1">
            <div className="flex flex-row items-center space-x-1">
              <p className="text-[#4C4C4C] text-base">
                For investment inquiries
              </p>
              <div className="flex flex-row items-center space-x-1">
                <MailIcon />
                <p className="text-[#55C056] text-base">ir@step.com</p>
              </div>
            </div>

            <div className="flex flex-row items-center space-x-1">
              <p className="text-[#4C4C4C] text-base">For community requests</p>
              <div className="flex flex-row items-center space-x-1">
                <MailIcon />
                <p className="text-[#55C056] text-base">com@step.com</p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="https://res.cloudinary.com/debiu7z1b/image/upload/v1732971635/Group_24_icrdk4.webp"
          alt="avatars"
          className="w-[693.07px] h-full mr-5"
          width={693.07}
          height={403}
        />
      </div>

      <div className="w-[1202.29px] flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-3">
          <p className="text-black text-[13px]">
            (c) StepVerse 2024. All rights reserved.
          </p>
          <p className="text-black text-[13px]">Privacy Policy</p>
        </div>

        <div className="flex flex-row space-x-7 items-center">
          <TwitterIcon />
          <TelegramIconSolid />
          <LinkedInIconSOlid />
        </div>
      </div>
    </div>
  );
};

export default Footer;
