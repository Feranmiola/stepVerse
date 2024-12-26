'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCounterProgress } from "./AnimatedCounterProgress";
import EarnRewardsContent from "./EarnRewardsContent";
import FitnessJourneyContent from "./FitnexxJourneyContent";
import SideOne from "@/Icons/SideOne";
import SideTwo from "@/Icons/SideTwo";
import SideThree from "@/Icons/SideThree";

const HowItWorks: React.FC = () => {
  const [hoverStates, setHoverStates] = useState([false, false, false]);
  const [autoAnimationComplete, setAutoAnimationComplete] = useState(false);

  useEffect(() => {
    if (!autoAnimationComplete) {
      const animationSequence = [
        () => setHoverStates([true, false, false]),
        () => setHoverStates([false, true, false]),
        () => setHoverStates([false, false, true]),
        () => setHoverStates([false, false, false])
      ];

      animationSequence.forEach((animation, index) => {
        setTimeout(() => {
          animation();
          if (index === animationSequence.length - 1) {
            setAutoAnimationComplete(true);
          }
        }, index * 1000);
      });
    }
  }, [autoAnimationComplete]);

  const handleMouseEnter = (index: number) => {
    if (autoAnimationComplete) {
      const newHoverStates = [false, false, false];
      newHoverStates[index] = true;
      setHoverStates(newHoverStates);
    }
  };

  const handleMouseLeave = () => {
    if (autoAnimationComplete) {
      setHoverStates([false, false, false]);
    }
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const titleVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div 
        initial="initial"
        animate="animate"
        className="w-full flex py-20 -mt-[12rem] items-center max-md:hidden justify-center"
      >
        <div className="w-[1200px] flex flex-col space-y-10">
          <motion.div 
            className="flex flex-col space-y-2"
            variants={titleVariants}
            transition={{ duration: 0.5 }}
          >
            <motion.p 
              className="text-[#007CFF] text-[15px]"
              variants={contentVariants}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              How it works
            </motion.p>
            <motion.p 
              className="text-[32px] w-[341px] font-medium font-inter leading-none"
              variants={contentVariants}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Transform Your Health, One Step at a Time.
            </motion.p>
          </motion.div>

          <div className="flex w-full justify-between flex-row items-center">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="h-[486px] w-full flex flex-col justify-between"
              >
                <motion.div 
                  className={`w-[377px] h-[360px] rounded-2xl flex items-center justify-center bg-[#FBFAF9]`}
                >
                  <AnimatePresence>
                    {index === 0 && (
                      <motion.div 
                        key="card1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        // className="w-[295px] h-[203.1px] flex flex-col justify-evenly rounded-[12.36px] bg-white"
                      >
                        {/* <p className="text-black text-[10.81px] px-3">Step Counter</p> */}
                        <div className="flex items-center justify-center">
                          {/* <AnimatedCounterProgress isHovered={hoverStates[0]} /> */}
                          <SideOne/>
                        </div>
                        {/* <div className="w-full flex flex-row items-center justify-between pt-3 px-3 border-t-[1.7px] border-[#F4F4F4]">
                          <p className="text-[#989898] text-[10.81px]">Today's Goal</p>
                          <p className="text-black text-[10.81px] px-5">2,500 steps</p>
                        </div> */}
                      </motion.div>
                    )}
                    {index === 1 && 
                    // <FitnessJourneyContent isHovered={hoverStates[1]} />
                    <SideTwo/>
                    }
                    {index === 2 && 
                    // <EarnRewardsContent isHovered={hoverStates[2]} />
                    <SideThree/>
                    }
                  </AnimatePresence>
                </motion.div>

                <motion.div 
                  className="flex flex-col w-[387px] h-[101px] justify-between"
                  variants={contentVariants}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                >
                  <p className="text-[19px] font-semibold text-[#191918]">
                    {index === 0 && "Sign Up and Start Moving"}
                    {index === 1 && "Gamify Your Fitness Journey"}
                    {index === 2 && "Earn Rewards"}
                  </p>
                  <p className="text-[16px] w-full lg:max-w-[347px] text-[#4C4C4C]">
                    {index === 0 && "Join StepVerse through Telegram using your email, WhatsApp, or Telegram account. You're ready to play in minutes!"}
                    {index === 1 && "Engage in friendly competitions, treasure hunts, and leaderboard rankings to make fitness a fun, interactive, and rewarding experience."}
                    {index === 2 && "Turn your steps into SV Points, which can be used to unlock premium features, tools, and other exciting rewards in our marketplace."}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial="initial"
        animate="animate"
        className="w-full flex py-20 items-center md:hidden justify-center min-h-screen"
      >
        <div className="w-full max-w-[95%] px-5 flex flex-col space-y-10">
          <motion.div 
            className="flex flex-col space-y-2"
            variants={titleVariants}
            transition={{ duration: 0.5 }}
          >
            <motion.p 
              className="text-[#007CFF] text-[15px]"
              variants={contentVariants}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              How it works
            </motion.p>
            <motion.p 
              className="text-[24px] w-full font-medium font-inter leading-none"
              variants={contentVariants}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Transform Your Health, One Step at a Time.
            </motion.p>
          </motion.div>

          <div className="flex w-full justify-center flex-col space-y-8 items-center">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.3, delay: index * 0.2 }}
                className="w-full max-w-[387px] flex flex-col justify-between"
              >
                <motion.div 
                  className={`w-full h-[360px] rounded-2xl flex items-center justify-center bg-[#FBFAF9]`}
                >
                  <AnimatePresence>
                    {index === 0 && (
                      <motion.div 
                        key="card1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-[295px] h-[203.1px] flex flex-col justify-evenly rounded-[12.36px] bg-white"
                      >
                        <p className="text-black text-[10.81px] px-3">Step Counter</p>
                        <div className="flex items-center justify-center">
                          <AnimatedCounterProgress isHovered={hoverStates[0]} />
                        </div>
                        <div className="w-full flex flex-row items-center justify-between pt-3 px-3 border-t-[1.7px] border-[#F4F4F4]">
                          <p className="text-[#989898] text-[10.81px]">Today's Goal</p>
                          <p className="text-black text-[10.81px] px-5">2,500 steps</p>
                        </div>
                      </motion.div>
                    )}
                    {index === 1 && <FitnessJourneyContent isHovered={hoverStates[1]} />}
                    {index === 2 && <EarnRewardsContent isHovered={hoverStates[2]} />}
                  </AnimatePresence>
                </motion.div>

                <motion.div 
                  className="flex flex-col w-full mt-4 justify-between"
                  variants={contentVariants}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                >
                  <p className="text-[19px] font-semibold text-[#191918] mb-2">
                    {index === 0 && "Sign Up and Start Moving"}
                    {index === 1 && "Gamify Your Fitness Journey"}
                    {index === 2 && "Earn Rewards"}
                  </p>
                  <p className="text-[16px] w-full text-[#4C4C4C]">
                    {index === 0 && "Join StepVerse through Telegram using your email, WhatsApp, or Telegram account. You're ready to play in minutes!"}
                    {index === 1 && "Engage in friendly competitions, treasure hunts, and leaderboard rankings to make fitness a fun, interactive, and rewarding experience."}
                    {index === 2 && "Turn your steps into SV Points, which can be used to unlock premium features, tools, and other exciting rewards in our marketplace."}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HowItWorks;

