/* eslint-disable */ 
// @ts-nocheck
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Movement from "@/components/Movement";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import LeftIcons from "../Icons/LeftIcons";
import RightIcons from "../Icons/RightIcons";
import TelegramIcon from "../Icons/TelegramIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import FAQ from "@/components/FAQ";

export default function Home() {
  useEffect(() => { // Ensure this only runs in the browser if (typeof window === "undefined") return;

    let scrollTimer = 0;
    
    // Function to update scrollbar properties
    function updateScrollbar() {
      const scrollPercentage =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      const scrollbarHeight =
        (window.innerHeight / document.documentElement.scrollHeight) *
        window.innerHeight;
      const scrollTop =
        scrollPercentage * (window.innerHeight - scrollbarHeight);
    
      document.body.style.setProperty("--scroll-top", `${scrollTop}px`);
      document.body.style.setProperty(
        "--scrollbar-height",
        `${scrollbarHeight}px`
      );
    
      document.body.classList.add("is-scrolling");
    
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.body.classList.remove("is-scrolling");
      }, 1000);
    }
    
    // Add event listeners for scroll and resize
    window.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);
    
    // Initial call to set the correct scrollbar size
    updateScrollbar();
    
    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
    };
    }, [])




  return (
    <div className="bg-white w-screen flex flex-col">
 
      <div className="flex flex-row w-full pt-[10rem] items-center justify-between">
        <LeftIcons />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center space-y-7"
        >
          <div className="flex flex-col w-[513.86px] space-y-5">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center text-[60px] font-geist font-medium leading-[3.5rem] text-[#191918]"
            >
              Get Active, Stay Healthy, and Win Rewards.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[17px] w-full text-center text-[#4C4C4C]"
            >
              StepVerse is the ultimate fitness gaming experience built on
              Telegram Mini App where we make staying active fun and rewarding.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-row items-center space-x-5"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[188.35px] h-[48px] rounded-[41.77px] bg-[#191918] cursor-pointer border-[1px] border-transparent hover:border-white transition ease-in-out flex items-center justify-center space-x-1"
            >
              <TelegramIcon />
              <p className="text-white text-[16.71px]">Join on Telegram</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[188.35px] h-[48px] rounded-[41.77px] bg-[#FBFAF9] cursor-pointer border-[1px] border-transparent hover:border-black transition ease-in-out flex items-center justify-center space-x-1"
            >
              <TwitterIcon />
              <p className="text-[#080808] text-[16.71px]">Follow on twitter</p>
            </motion.div>
          </motion.div>
        </motion.div>
        <RightIcons />
      </div>

      <HowItWorks />
      <Features />
      <Movement />
      <FAQ />
    </div>
  );
}

