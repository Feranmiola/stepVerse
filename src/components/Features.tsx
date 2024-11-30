"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BlueCHeck from "../Icons/BlueCHeck";

const Features = () => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="relative flex flex-row justify-center items-start space-x-[10rem] py-20 lg:min-h-screen"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div
        id="leftText"
        className="sticky top-20 flex flex-col space-y-4 h-[calc(100vh-30rem)]"
        variants={containerVariants}
      >
        <motion.p
          className="text-[#55C056] text-[15px]"
          variants={itemVariants}
        >
          Features
        </motion.p>
        <motion.p
          className="text-[32px] w-[414px] font-medium leading-none"
          variants={itemVariants}
        >
          Turn your steps into fun challenges and real rewards.
        </motion.p>
        <motion.div
          className="flex flex-row space-x-2 items-center"
          variants={itemVariants}
        >
          <BlueCHeck />
          <p className="text-base text-[#424242]">Proven Health Benefits</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex flex-col space-y-16"
        variants={containerVariants}
      >
        <motion.div
          className="w-[590px] flex flex-col space-y-6"
          variants={itemVariants}
        >
          <div className="w-full h-[280px] rounded-2xl bg-neutral-400">
            <Image
              src="https://res.cloudinary.com/debiu7z1b/image/upload/v1732983557/Frame_562_wyv5xm.webp"
              alt="Fitness Meets Gaming"
              width={590}
              height={280}
              className="rounded-2xl"
            />
          </div>
          <div className="w-[512px] flex flex-col space-y-2">
            <p className="text-[#191918] font-semibold text-[19px]">
              Fitness Meets Gaming
            </p>
            <p className="text-base text-[#4C4C4C]">
              Make every step count with gamified features like treasure hunts,
              team challenges, and step competitions. StepVerse isn't just a
              fitness app—it's a game that keeps you engaged and moving.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-[590px] flex flex-col space-y-6"
          variants={itemVariants}
        >
          <div className="w-full h-[280px] rounded-2xl bg-neutral-400">
            <Image
              src="https://res.cloudinary.com/debiu7z1b/image/upload/v1732983557/1Frame_562_gaomv8.webp"
              alt="Real-World Rewards"
              width={590}
              height={280}
              className="rounded-2xl"
            />
          </div>
          <div className="w-[512px] flex flex-col space-y-2">
            <p className="text-[#191918] font-semibold text-[19px]">
              Family & Community
            </p>
            <p className="text-base text-[#4C4C4C]">
              Create a family or friend group to collectively track progress.
              Celebrate milestones, inspire each other, and build a healthier
              community together.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-[590px] flex flex-col space-y-6"
          variants={itemVariants}
        >
          <div className="w-full h-[280px] rounded-2xl bg-neutral-400">
            <Image
              src="https://res.cloudinary.com/debiu7z1b/image/upload/v1732983557/2Frame_562_nx9vcl.webp"
              alt="Social Connectivity"
              width={590}
              height={280}
              className="rounded-2xl"
            />
          </div>
          <div className="w-[512px] flex flex-col space-y-2">
            <p className="text-[#191918] font-semibold text-[19px]">
              Marketplace
            </p>
            <p className="text-base text-[#4C4C4C]">
              Use your SV Points to purchase tools, gear, or exclusive items in
              our in-app marketplace. Keep upgrading your experience to unlock
              more exciting rewards.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-[590px] flex flex-col space-y-6"
          variants={itemVariants}
        >
          <div className="w-full h-[280px] rounded-2xl bg-neutral-400">
            <Image
              src="https://res.cloudinary.com/debiu7z1b/image/upload/v1732983558/3Frame_562_zsmd7j.webp"
              alt="Personalized Health Insights"
              width={590}
              height={280}
              className="rounded-2xl"
            />
          </div>
          <div className="w-[512px] flex flex-col space-y-2">
            <p className="text-[#191918] font-semibold text-[19px]">
              Leaderboard Challenges
            </p>
            <p className="text-base text-[#4C4C4C]">
              Stay motivated with global leaderboards. Track your rankings
              daily, weekly, and monthly. Compete with friends or become the
              ultimate StepVerse champion.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-[590px] flex flex-col space-y-6"
          variants={itemVariants}
        >
          <div className="w-full h-[280px] rounded-2xl bg-neutral-400">
            <Image
              src="https://res.cloudinary.com/debiu7z1b/image/upload/v1732983558/4Frame_562_mhbu0l.webp"
              alt="Seamless Device Integration"
              width={590}
              height={280}
              className="rounded-2xl"
            />
          </div>
          <div className="w-[512px] flex flex-col space-y-2">
            <p className="text-[#191918] font-semibold text-[19px]">
              Treasure Hunts
            </p>
            <p className="text-base text-[#4C4C4C]">
              Explore real-world locations and uncover hidden treasures. From
              cash rewards to exclusive in-game perks, there’s always something
              exciting waiting for you.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Features;
