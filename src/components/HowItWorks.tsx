'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCounterProgress } from "./AnimatedCounterProgress";
import EarnRewardsContent from "./EarnRewardsContent";
import FitnessJourneyContent from "./FitnexxJourneyContent";

const HowItWorks: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState(0);

  const cardVariants = {
    initial: { scale: 1, y: 50, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    hover: { scale: 1.05 },
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
    <motion.div 
      initial="initial"
      animate="animate"
      className="w-full flex py-20 items-center justify-center"
    >
      <div className="w-[1200px] flex flex-col space-y-10">
        <motion.div 
          className="flex flex-col space-y-2"
          variants={titleVariants}
          transition={{ duration: 0.5 }}
        >
          <motion.p 
            className="text-[#55C056] text-[15px]"
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
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(0)}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="h-[486px] w-full flex flex-col justify-between"
            >
              <motion.div 
                className={`w-[387px] h-[360px] rounded-2xl flex items-center justify-center bg-[#FBFAF9]`}
                whileHover={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" }}
              >
                <AnimatePresence>
                  {index === 1 && (
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
                        <AnimatedCounterProgress isHovered={hoverIndex === 1} />
                      </div>
                      <div className="w-full flex flex-row items-center justify-between pt-3 px-3 border-t-[1.7px] border-[#F4F4F4]">
                        <p className="text-[#989898] text-[10.81px]">Today's Goal</p>
                        <p className="text-black text-[10.81px] px-5">2,500 steps</p>
                      </div>
                    </motion.div>
                  )}
                  {index === 2 && <FitnessJourneyContent isHovered={hoverIndex === 2} />}
                  {index === 3 && <EarnRewardsContent isHovered={hoverIndex === 3} />}
                </AnimatePresence>
              </motion.div>

              <motion.div 
                className="flex flex-col w-[387px] h-[101px] justify-between"
                variants={contentVariants}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                <p className="text-[19px] font-semibold text-[#191918]">
                  {index === 1 && "Sign Up and Start Moving"}
                  {index === 2 && "Gamify Your Fitness Journey"}
                  {index === 3 && "Earn Rewards"}
                </p>
                <p className="text-[16px] w-full text-[#4C4C4C]">
                  {index === 1 && "Join StepVerse through Telegram using your email, WhatsApp, or Telegram account. You're ready to play in minutes!"}
                  {index === 2 && "Engage in friendly competitions, treasure hunts, and leaderboard rankings to make fitness a fun, interactive, and rewarding experience."}
                  {index === 3 && "Turn your steps into SV Points, which can be used to unlock premium features, tools, and other exciting rewards in our marketplace."}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;

