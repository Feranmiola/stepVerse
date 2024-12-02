"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import BlueCHeck from "../Icons/BlueCHeck";
import HealthBenefits from "@/Icons/HealthBenefits";
import RealRewardsIcon from "@/Icons/RealRewardsIcon";
import InclusiveIcon from "@/Icons/InclusiveIcon";
import DataDrivenProgressIcon from "@/Icons/DataDrivenProgressIcon";

const Features = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const features = [
    {
      title: "Fitness Meets Gaming",
      description: "Make every step count with gamified features like treasure hunts, team challenges, and step competitions. StepVerse isn't just a fitness app—it's a game that keeps you engaged and moving.",
      image: "https://res.cloudinary.com/debiu7z1b/image/upload/v1732983557/Frame_562_wyv5xm.webp",
      color: "#55C056",
      leftContent: 'Proven Health Benefits',
      leftContentIcon: HealthBenefits
    },
    {
      title: "Family & Community",
      description: "Create a family or friend group to collectively track progress. Celebrate milestones, inspire each other, and build a healthier community together.",
      image: "https://res.cloudinary.com/debiu7z1b/image/upload/v1732983557/1Frame_562_gaomv8.webp",
      color: "#F63F00",
      leftContent: 'Real Rewards',
      leftContentIcon: RealRewardsIcon
    },
    {
      title: "Marketplace",
      description: "Use your SV Points to purchase tools, gear, or exclusive items in our in-app marketplace. Keep upgrading your experience to unlock more exciting rewards.",
      image: "https://res.cloudinary.com/debiu7z1b/image/upload/v1732983557/2Frame_562_nx9vcl.webp",
      color: "#55C056",
      leftContent: 'Inclusive Platform',
      leftContentIcon: InclusiveIcon
    },
    {
      title: "Leaderboard Challenges",
      description: "Stay motivated with global leaderboards. Track your rankings daily, weekly, and monthly. Compete with friends or become the ultimate StepVerse champion.",
      image: "https://res.cloudinary.com/debiu7z1b/image/upload/v1732983558/3Frame_562_zsmd7j.webp",
      color: "#E292E5",
      leftContent: 'Data-Driven Progress',
      leftContentIcon: DataDrivenProgressIcon
    },
    {
      title: "Treasure Hunts",
      description: "Explore real-world locations and uncover hidden treasures. From cash rewards to exclusive in-game perks, there's always something exciting waiting for you.",
      image: "https://res.cloudinary.com/debiu7z1b/image/upload/v1732983558/4Frame_562_mhbu0l.webp",
      color: "#E292E5",
      leftContent: '',
      leftContentIcon: null
    },
  ];

  const totalScrollLength = features.length;

  if (!isDesktop) {
    return (
      <div className="flex flex-col items-center justify-center py-8 w-full">
        <div className="w-full max-w-[95%] px-4">
          <p className="text-[#55C056] text-[15px] mb-4">Features</p>
          <p className="text-[24px] font-medium leading-tight mb-8">
            Turn your steps into fun challenges and real rewards.
          </p>
          {features.map((feature, index) => (
            <div key={index} className="pb-8 flex flex-col items-start">
              <div className="w-full flex justify-center mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full max-w-[378px] h-[280px] object-cover rounded-2xl"
                />
              </div>
              <h2 className="text-[#191918] font-semibold text-[19px] mb-2">{feature.title}</h2>
              <p className="text-base text-[#4C4C4C] mb-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative" style={{ height: `${totalScrollLength * 100}vh` }}>
      <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="flex w-full max-w-7xl px-4 h-full">
          <motion.div className="w-1/2 pr-8 flex flex-col justify-center">
            <motion.p className="text-[#55C056] text-[15px] mb-4">Features</motion.p>
            <motion.p className="text-[32px] font-medium leading-none mb-8">
              Turn your steps into fun challenges and real rewards.
            </motion.p>
            {features.map((feature, index) => {
              const progress = useTransform(
                scrollYProgress,
                [index / totalScrollLength, (index + 0.5) / totalScrollLength],
                [0, 1]
              );
              const opacity = useTransform(progress, [0, 0.5, 1], [0, 1, 1]);
              const y = useTransform(progress, [0, 0.5, 1], [20, 0, 0]);

              return (
                <motion.div
                  key={index}
                  className="flex flex-row space-x-2 items-center mb-4"
                  style={{ opacity, y }}
                >
                  {feature.leftContentIcon && <feature.leftContentIcon />}
                  <p className="text-base text-[#424242]">{feature.leftContent}</p>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="w-1/2 relative h-full flex items-center justify-center overflow-hidden">
            {features.map((feature, index) => {
              const isLast = index === features.length - 1;
              const progress = useTransform(
                scrollYProgress,
                [index / totalScrollLength, (index + 1) / totalScrollLength],
                [0, 1]
              );
              const opacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, isLast ? 1 : 0]);
              const y = useTransform(progress, [0, 0.2, 0.8, 1], ["50%", "0%", "0%", isLast ? "0%" : "-50%"]);
              const scale = useTransform(progress, [0, 0.2, 0.8, 1], [0.8, 1, 1, isLast ? 1 : 0.8]);

              return (
                <motion.div
                  key={index}
                  style={{ 
                    opacity,
                    scale,
                    y,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    pointerEvents: progress.get() > 0.5 ? "auto" : "none",
                  }}
                  className="flex flex-col items-center justify-center p-8"
                >
                  <div className="w-full max-h-[50vh] rounded-2xl overflow-hidden mb-6">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={590}
                      height={280}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <h2 className="text-[#191918] font-semibold text-[19px] mb-2">{feature.title}</h2>
                    <p className="text-base text-[#4C4C4C]">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

