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
        className="sticky top-20 flex flex-col space-y-4 h-[calc(100vh-5rem)]"
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
              src="/placeholder.svg?height=280&width=590"
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
              src="/placeholder.svg?height=280&width=590"
              alt="Real-World Rewards"
              width={590}
              height={280}
              className="rounded-2xl"
            />
          </div>
          <div className="w-[512px] flex flex-col space-y-2">
            <p className="text-[#191918] font-semibold text-[19px]">
              Real-World Rewards
            </p>
            <p className="text-base text-[#4C4C4C]">
              Your steps aren't just numbers—they're currency. Earn points for
              your activity and redeem them for exclusive discounts, gift cards,
              and merchandise from our partner brands.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-[590px] flex flex-col space-y-6"
          variants={itemVariants}
        >
          <div className="w-full h-[280px] rounded-2xl bg-neutral-400">
            <Image
              src="/placeholder.svg?height=280&width=590"
              alt="Social Connectivity"
              width={590}
              height={280}
              className="rounded-2xl"
            />
          </div>
          <div className="w-[512px] flex flex-col space-y-2">
            <p className="text-[#191918] font-semibold text-[19px]">
              Social Connectivity
            </p>
            <p className="text-base text-[#4C4C4C]">
              Connect with friends, join communities, and participate in global
              events. StepVerse makes fitness a shared adventure, motivating you
              to push further together.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-[590px] flex flex-col space-y-6"
          variants={itemVariants}
        >
          <div className="w-full h-[280px] rounded-2xl bg-neutral-400">
            <Image
              src="/placeholder.svg?height=280&width=590"
              alt="Personalized Health Insights"
              width={590}
              height={280}
              className="rounded-2xl"
            />
          </div>
          <div className="w-[512px] flex flex-col space-y-2">
            <p className="text-[#191918] font-semibold text-[19px]">
              Personalized Health Insights
            </p>
            <p className="text-base text-[#4C4C4C]">
              Get tailored recommendations and insights based on your activity
              patterns. Our AI-powered system helps you understand your health
              trends and suggests ways to improve.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="w-[590px] flex flex-col space-y-6"
          variants={itemVariants}
        >
          <div className="w-full h-[280px] rounded-2xl bg-neutral-400">
            <Image
              src="/placeholder.svg?height=280&width=590"
              alt="Seamless Device Integration"
              width={590}
              height={280}
              className="rounded-2xl"
            />
          </div>
          <div className="w-[512px] flex flex-col space-y-2">
            <p className="text-[#191918] font-semibold text-[19px]">
              Seamless Device Integration
            </p>
            <p className="text-base text-[#4C4C4C]">
              StepVerse works with a wide range of fitness trackers and
              smartwatches. Sync your favorite devices effortlessly and keep all
              your health data in one place.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Features;
