'use client'

import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Movement = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  if (!isDesktop) {
    return (
      <div className="w-full px-4 py-10 flex flex-col items-center justify-center space-y-6">
        <div className="flex flex-col space-y-4">
          <h2 className="text-[#191918] text-2xl font-medium text-left">
            Be Part of the Movement
          </h2>
          <p className="text-left text-[#4C4C4C] text-sm">
            Join a growing community of users committed to better health. 
            Together, we can reduce sedentary behavior and build 
            healthier, happier lives for millions around the globe.
          </p>
          <a href="https://t.me/stepverse"
            target="blank" className="w-full max-w-[172px] h-[46px] rounded-[45px] flex items-center justify-center cursor-pointer transition ease-in-out text-white font-medium text-base bg-[#191918] hover:bg-transparent hover:text-[#191918] border-transparent border hover:border-[#191918]">
            Join Community
          </a>
        </div>

        <div className="w-full flex items-center justify-center">
          <Image
            src="https://res.cloudinary.com/debiu7z1b/image/upload/v1735570689/full-shot-friends-jogging-together_1_1_lm8nhm.webp"
            alt="Movement Image"
            width={377}
            height={385}
            className="w-full h-auto rounded-[12px]"
          />
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className="w-full pt-20 flex flex-col items-center justify-center -space-y-[8rem]"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="flex flex-col space-y-5 items-center justify-center" variants={itemVariants}>
        <div className="w-[481px] h-[109px] flex flex-col justify-between items-center">
          <motion.p
            className="text-[#191918] text-[32px] font-medium"
            variants={itemVariants}
          >
            Be Part of the Movement
          </motion.p>
          <motion.p
            className="text-center w-full text-[#4C4C4C] text-base"
            variants={itemVariants}
          >
            Join a growing community of users committed to better health. <br />{" "}
            Together, we can reduce sedentary behavior and build <br />{" "}
            healthier, happier lives for millions around the globe.
          </motion.p>{" "}
        </div>

        <motion.a
        href="https://t.me/stepverse"
            target="blank"
          className="w-[172px] h-[46px] z-50 rounded-[45px] flex items-center justify-center cursor-pointer transition ease-in-out text-white font-medium text-base hover:text-[#191918] bg-[#191918] hover:bg-transparent border-transparent border-[1px] hover:border-[#191918]"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Join Community
        </motion.a>
      </motion.div>

      <motion.div
        className="w-[1200px] flex items-center justify-center flex-col space-y-10"
        variants={imageVariants}
      >
        <Image
          // src="https://res.cloudinary.com/debiu7z1b/image/upload/v1732981477/Frame_651_byhmpy.webp"
          src="https://res.cloudinary.com/debiu7z1b/image/upload/v1735225053/Frame_1618869060_abtpr2.webp"
          alt="Movement Image"
          width={1200}
          height={550}
        />
      </motion.div>
    </motion.div>
  );
};

export default Movement;

