'use client'

import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";

const Movement = () => {
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

  return (
    <motion.div
      ref={ref}
      className="w-full pt-20 flex flex-col items-center justify-center -space-y-14"
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

        <motion.div
          className="w-[172px] h-[46px] rounded-[45px] flex items-center justify-center cursor-pointer transition ease-in-out text-white font-medium text-base hover:text-[#191918] bg-[#191918] hover:bg-transparent border-transparent border-[1px] hover:border-[#191918]"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Join Community
        </motion.div>
      </motion.div>

      <motion.div
        className="w-[1200px] flex items-center justify-center flex-col space-y-10"
        variants={imageVariants}
      >
        <Image
          src="https://res.cloudinary.com/debiu7z1b/image/upload/v1732981477/Frame_651_byhmpy.webp"
          alt="Movement Image"
          width={1200}
          height={550}
        />
      </motion.div>
    </motion.div>
  );
};

export default Movement;

