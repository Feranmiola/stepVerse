"use client";

import Aicon from "@/Icons/Aicon";
import FireBlue from "@/Icons/FireBlue";
import FireGreen from "@/Icons/FireGreen";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from "framer-motion";

const EarnRewardsContent: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const [isTwoThousand, setIsTwoThousand] = useState(false);
  const [fireNumber, setFireNumber] = useState(20);
  const countRef = useRef(1000);
  const count = useMotionValue(1000);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayNumber = useTransform(rounded, (latest) => latest.toString());
  const percentageRef = useRef(50);
  const percentage = useMotionValue(50);
  const roundedPercentage = useTransform(percentage, (latest) => Math.round(latest));

  useEffect(() => {
    if (isHovered && countRef.current < 2000) {
      const animation = animate(count, 2000, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          countRef.current = latest;
          percentageRef.current = (latest / 2000) * 100;
          percentage.set(percentageRef.current);
          
          if (latest === 2000 && !isTwoThousand) {
            setIsTwoThousand(true);
            setFireNumber(21);
          }
        },
      });

      return () => animation.stop();
    } else if (!isHovered) {
      const animation = animate(count, 1000, {
        duration: 1,
        ease: "easeOut",
        onUpdate: (latest) => {
          countRef.current = latest;
          percentageRef.current = (latest / 2000) * 100;
          percentage.set(percentageRef.current);
        },
        onComplete: () => {
          setIsTwoThousand(false);
          setFireNumber(20);
        },
      });

      return () => animation.stop();
    }
  }, [isHovered, count, percentage, isTwoThousand]);

  const filledBars = useTransform(count, (latest) => Math.floor((latest / 2000) * 50));

  return (
    <div className="w-[292.26px] h-[165.44px] flex items-end justify-center relative">
      <div className="w-[271.26px] h-[143.44px] rounded-[11.36px] bg-white flex flex-col justify-evenly px-3">
        <p className="text-black pt-3 text-[9.94px]">Today's Step Count</p>

        <div className="w-full flex items-center justify-center">
          <p className="font-semibold tracking-tight text-[56.81px]">
            <motion.span>{displayNumber}</motion.span>
            <span className="text-[#ACB9C2] text-[28.4px]">/2000</span>
          </p>
        </div>

        <div className="flex flex-row w-full justify-between items-center">
          <svg
            width="212"
            height="17"
            viewBox="0 0 212 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {Array.from({ length: 50 }).map((_, index) => (
              <motion.rect
                key={index}
                x={0.912323 + index * 4.26066}
                y="0.748047"
                width="1.42022"
                height="15.6224"
                rx="0.71011"
                fill={useTransform(filledBars, (latest) => 
                  index < latest ? "#55C056" : "#E0E0E0"
                )}
              />
            ))}
          </svg>

          <motion.p className="text-black text-[9.94px]">
            {useTransform(roundedPercentage, latest => `${latest}%`)}
          </motion.p>
        </div>
      </div>

      <div className="absolute flex flex-row justify-between w-[92.64px] h-[32.03px] bg-white shadow-md rounded-[43.84px] items-center top-0 left-0">
        <Aicon />

        <div className="flex flex-row space-x-1 pr-4 items-center">
          <AnimatePresence mode="wait">
            {isTwoThousand ? (
              <motion.div
                key="blue"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FireBlue />
              </motion.div>
            ) : (
              <motion.div
                key="green"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FireGreen />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.p
            className="text-black text-[15.78px] font-semibold"
            key={fireNumber}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {fireNumber}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default EarnRewardsContent;

