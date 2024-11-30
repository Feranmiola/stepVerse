import Image from "next/image";
import React from "react";

const Movement = () => {
  return (
    <div className="w-full pt-20 flex flex-col items-center justify-center -space-y-14">
      <div className="flex flex-col space-y-5 items-center justify-center">
        <div className="w-[481px] h-[109px] flex flex-col justify-between items-center">
          <p className="text-[#191918] text-[32px] font-medium">
            Be Part of the Movement
          </p>
          <p className="text-center w-full text-[#4C4C4C] text-base">
            Join a growing community of users committed to better health. <br />{" "}
            Together, we can reduce sedentary behavior and build <br />{" "}
            healthier, happier lives for millions around the globe.
          </p>{" "}
        </div>

        <div className="w-[172px] h-[46px] rounded-[45px] flex items-center justify-center cursor-pointer transition ease-in-out  text-white font-medium text-base hover:text-[#191918] bg-[#191918] hover:bg-transparent border-transparent border-[1px] hover:border-[#191918] ">
          Join Community
        </div>
      </div>

      <div className="w-[1200px] flex items-center justify-center flex-col space-y-10">
        <Image
          src="https://res.cloudinary.com/debiu7z1b/image/upload/v1732981477/Frame_651_byhmpy.webp"
          alt="Movement Image"
          width={1200}
          height={550}
        />
      </div>
    </div>
  );
};

export default Movement;
