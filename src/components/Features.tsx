"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import HealthBenefits from "@/Icons/HealthBenefits";
import RealRewardsIcon from "@/Icons/RealRewardsIcon";
import InclusiveIcon from "@/Icons/InclusiveIcon";
import DataDrivenProgressIcon from "@/Icons/DataDrivenProgressIcon";

const Features = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const additionalItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const isInView = useInView(containerRef, { amount: 0.2, once: false });

  useEffect(() => {
    if (isInView && visibleItems < 4) {
      const timer = setTimeout(() => {
        setVisibleItems((prev) => Math.min(prev + 1, 4));
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isInView, visibleItems]);
  const features = [
    {
      title: "Fitness Meets Gaming",
      description: "Make every step count with gamified features like treasure hunts, team challenges, and step competitions. StepVerse isn't just a fitness app—it's a game that keeps you engaged and moving.",
      image: "https://res.cloudinary.com/debiu7z1b/image/upload/v1735224605/A_cygvsv.webp",
      mobileImage: 'https://res.cloudinary.com/debiu7z1b/image/upload/v1733177210/mFrame_562_gz9sqy.webp',
      color: "#55C056",
      leftContent: 'Proven Health Benefits',
      leftContentIcon: HealthBenefits
    },
    {
      title: "Family & Community",
      description: "Create a family or friend group to collectively track progress. Celebrate milestones, inspire each other, and build a healthier community together.",
      image: "https://res.cloudinary.com/debiu7z1b/image/upload/v1735224605/B_mcwczy.webp",
      mobileImage: 'https://res.cloudinary.com/debiu7z1b/image/upload/v1733177210/m2Frame_562_rfa2tx.webp',
      color: "#F63F00",
      leftContent: 'Real Rewards',
      leftContentIcon: RealRewardsIcon
    },
    {
      title: "Marketplace",
      description: "Use your SV Points to purchase tools, gear, or exclusive items in our in-app marketplace. Keep upgrading your experience to unlock more exciting rewards.",
      image: "https://res.cloudinary.com/debiu7z1b/image/upload/v1735224605/C_j5xg55.webp",
      mobileImage: 'https://res.cloudinary.com/debiu7z1b/image/upload/v1733177211/m3Frame_562_hurnry.webp',
      color: "#55C056",
      leftContent: 'Inclusive Platform',
      leftContentIcon: InclusiveIcon
    },
    {
      title: "Leaderboard Challenges",
      description: "Stay motivated with global leaderboards. Track your rankings daily, weekly, and monthly. Compete with friends or become the ultimate StepVerse champion.",
      image: "https://res.cloudinary.com/debiu7z1b/image/upload/v1735224605/D_zqm4cu.webp",
      mobileImage: 'https://res.cloudinary.com/debiu7z1b/image/upload/v1733177211/m4Frame_562_mbl7tt.webp',
      color: "#E292E5",
      leftContent: 'Data-Driven Progress',
      leftContentIcon: DataDrivenProgressIcon
    },
    // {
    //   title: "Treasure Hunts",
    //   description: "Explore real-world locations and uncover hidden treasures. From cash rewards to exclusive in-game perks, there's always something exciting waiting for you.",
    //   image: "https://res.cloudinary.com/debiu7z1b/image/upload/v1732983558/4Frame_562_mhbu0l.webp",
    //   mobileImage: 'https://res.cloudinary.com/debiu7z1b/image/upload/v1733177211/m5Frame_562_nb2rhd.webp',
    //   color: "#E292E5",
    //   leftContent: '',
    //   leftContentIcon: null
    // },
  ];


  if (!isDesktop) {
    return (
      <div className="flex flex-col items-center justify-center py-8 w-full">
        <div className="w-full max-w-[95%] px-4">
          <p className="text-[#007CFF] text-[15px] mb-4">Features</p>
          <p className="text-[24px] font-medium leading-tight mb-8">
            Turn your steps into fun challenges and real rewards.
          </p>
          {features.map((feature, index) => (
            <div key={index} className="pb-8 flex flex-col items-start">
              <div className="w-full flex justify-center mb-4">
                <img
                  src={feature.mobileImage}
                  alt={feature.title}
                  className="w-full h-[280px] object-cover rounded-2xl"
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
    <motion.div
      ref={containerRef}
      className="relative flex flex-row justify-center items-start space-x-[10rem] py-20 lg:min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        id="leftText"
        className="sticky top-[6.5rem] flex flex-col space-y-4 h-[calc(100vh-40rem)]"
        variants={containerVariants}
      >
        <motion.p
          className="text-[#007CFF] text-[15px]"
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
          <HealthBenefits/>
          <p className="text-base text-[#424242]">Proven Health Benefits</p>
        </motion.div>

        {visibleItems >= 2 && (
          <motion.div
            className="flex flex-row space-x-2 items-center"
            variants={additionalItemVariants}
            initial="hidden"
            animate="visible"
          >
            <RealRewardsIcon/>
            <p className="text-base text-[#424242]">Real Rewards</p>
          </motion.div>
        )}

        {visibleItems >= 3 && (
          <motion.div
            className="flex flex-row space-x-2 items-center"
            variants={additionalItemVariants}
            initial="hidden"
            animate="visible"
          >
            <InclusiveIcon/>
            <p className="text-base text-[#424242]">Inclusive Platform</p>
          </motion.div>
        )}

        {visibleItems >= 4 && (
          <motion.div
            className="flex flex-row space-x-2 items-center"
            variants={additionalItemVariants}
            initial="hidden"
            animate="visible"
          >
            <DataDrivenProgressIcon/>
            <p className="text-base text-[#424242]">Data-Driven Progress</p>
          </motion.div>
        )}
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
              src="https://res.cloudinary.com/debiu7z1b/image/upload/v1735224605/A_cygvsv.webp"
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
              src="https://res.cloudinary.com/debiu7z1b/image/upload/v1735224605/B_mcwczy.webp"
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
              src="https://res.cloudinary.com/debiu7z1b/image/upload/v1735224605/C_j5xg55.webp"
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
              src="https://res.cloudinary.com/debiu7z1b/image/upload/v1735224605/D_zqm4cu.webp"
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

        {/* <motion.div
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
              cash rewards to exclusive in-game perks, there's always something
              exciting waiting for you.
            </p>
          </div>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Features;
