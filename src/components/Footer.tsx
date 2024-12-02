"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import LinkedInIconSOlid from "@/Icons/LinkedInIconSOlid";
import MailIcon from "@/Icons/MailIcon";
import TelegramIconSolid from "@/Icons/TelegramIconSolid";
import TwitterIcon from "@/Icons/TwitterIcon";
import { useRouter } from "next-nprogress-bar";
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const ref = React.useRef(null);

  const router = useRouter();
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const isDesktop = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      {isDesktop && (
        <motion.div
          ref={ref}
          className="w-full flex items-center justify-center flex-col space-y-5 my-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="w-full max-w-[1333px] h-auto min-h-[403px] rounded-[24px] flex flex-row justify-between items-center bg-[#E2F2DF] px-4"
            variants={itemVariants}
          >
            <motion.div
              className="flex flex-col pl-20 w-[392px] h-[221.5px] justify-between"
              variants={itemVariants}
            >
              <motion.p
                className="w-full font-medium tracking-tighter leading-none text-[48px] text-black"
                variants={itemVariants}
              >
                Together, we step towards a healthier future.
              </motion.p>

              <motion.div
                className="flex flex-col space-y-1"
                variants={itemVariants}
              >
                <motion.div
                  className="flex flex-row items-center space-x-1"
                  variants={itemVariants}
                >
                  <p className="text-[#4C4C4C] text-base">
                    For investment inquiries
                  </p>
                  <motion.a
                    href="mailto:ir@step.com"
                    className="flex flex-row items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MailIcon />
                    <p className="text-[#55C056] text-base">ir@step.com</p>
                  </motion.a>
                </motion.div>

                <motion.div
                  className="flex flex-row items-center space-x-1"
                  variants={itemVariants}
                >
                  <p className="text-[#4C4C4C] text-base">
                    For community requests
                  </p>
                  <motion.a
                    href="mailto:com@step.com"
                    className="flex flex-row items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MailIcon />
                    <p className="text-[#55C056] text-base">com@step.com</p>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div variants={imageVariants}>
              <Image
                src="https://res.cloudinary.com/debiu7z1b/image/upload/v1732971635/Group_24_icrdk4.webp"
                alt="avatars"
                className="w-full max-w-[693.07px] mr-5"
                width={693}
                height={403}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full max-w-[1202.29px] flex flex-row justify-between items-center px-4"
            variants={itemVariants}
          >
            <motion.div
              className="flex flex-row space-x-3"
              variants={itemVariants}
            >
              <p className="text-black text-[13px]">
                (c) StepVerse 2024. All rights reserved.
              </p>
              <motion.p
                className="text-black text-[13px] cursor-pointer"
                onClick={() => router.push("/privacypolicy")}
                whileHover={{ color: "#55C056" }}
              >
                Privacy Policy
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-row space-x-7 items-center"
              variants={itemVariants}
            >
              <motion.div variants={iconVariants} whileHover={{ scale: 1.2 }}>
                <TwitterIcon />
              </motion.div>
              <motion.div variants={iconVariants} whileHover={{ scale: 1.2 }}>
                <TelegramIconSolid />
              </motion.div>
              <motion.div variants={iconVariants} whileHover={{ scale: 1.2 }}>
                <LinkedInIconSOlid />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {isMobile && (
        <motion.div
          ref={ref}
          className="w-full flex items-center justify-center flex-col space-y-5 py-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="w-full max-w-[95%] h-auto rounded-[24px] flex flex-col justify-between items-center bg-[#E2F2DF] py-10 px-5"
            variants={itemVariants}
          >
            <motion.div
              className="flex flex-col w-full space-y-6 justify-center items-center"
              variants={itemVariants}
            >
              <motion.p
                className="w-full font-medium tracking-tighter leading-tight text-center text-[32px] text-black"
                variants={itemVariants}
              >
                Together, we step towards a healthier future.
              </motion.p>

              <motion.div
                className="flex flex-col space-y-4 items-center"
                variants={itemVariants}
              >
                <motion.div
                  className="flex flex-col items-center space-y-2"
                  variants={itemVariants}
                >
                  <p className="text-[#4C4C4C] text-base text-center">
                    For investment inquiries
                  </p>
                  <motion.a
                    href="mailto:ir@step.com"
                    className="flex flex-row items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MailIcon />
                    <p className="text-[#55C056] text-base">ir@step.com</p>
                  </motion.a>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center space-y-2"
                  variants={itemVariants}
                >
                  <p className="text-[#4C4C4C] text-base text-center">
                    For community requests
                  </p>
                  <motion.a
                    href="mailto:com@step.com"
                    className="flex flex-row items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                  >
                    <MailIcon />
                    <p className="text-[#55C056] text-base">com@step.com</p>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={imageVariants}
              className="w-full flex items-center justify-center mt-8"
            >
              <img
                src="https://res.cloudinary.com/debiu7z1b/image/upload/v1733174311/Group_24_1_bxo2y5.webp"
                alt="avatars"
                className="w-full max-w-[400px] h-auto"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full max-w-[95%] flex flex-col space-y-7 items-center"
            variants={itemVariants}
          >
            <motion.div
              className="flex flex-row space-x-7 items-center justify-center"
              variants={itemVariants}
            >
              <motion.div variants={iconVariants} whileHover={{ scale: 1.2 }}>
                <TwitterIcon />
              </motion.div>
              <motion.div variants={iconVariants} whileHover={{ scale: 1.2 }}>
                <TelegramIconSolid />
              </motion.div>
              <motion.div variants={iconVariants} whileHover={{ scale: 1.2 }}>
                <LinkedInIconSOlid />
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col space-y-3 items-center w-full"
              variants={itemVariants}
            >
              <div className="bg-[#E9E9E9] w-full h-[1px]"></div>
              <p className="text-black text-[13px] text-center">
                (c) StepVerse 2024. All rights reserved.
              </p>
              <div className="bg-[#E9E9E9] w-full h-[1px]"></div>
              <motion.p
                className="text-black text-[13px] cursor-pointer text-center"
                onClick={() => router.push("/privacypolicy")}
                whileHover={{ color: "#55C056" }}
              >
                Privacy Policy
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Footer;

