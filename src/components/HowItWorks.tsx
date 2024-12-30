"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCounterProgress } from "./AnimatedCounterProgress";
import EarnRewardsContent from "./EarnRewardsContent";
import FitnessJourneyContent from "./FitnexxJourneyContent";
import SideOne from "@/Icons/SideOne";
import SideTwo from "@/Icons/SideTwo";
import SideThree from "@/Icons/SideThree";
import SideThreeMobile from "@/Icons/SideThreeMobile";
import { ComplexProgressBar } from "@/components/ComplexProgressBar";
import { WalkIconGray } from "@/Icons/SideOne";
import { FireActiveStreak } from "@/Icons/SideOne";
import LeaderboardPodium from "./LeaderBoardPodium";
import SpeedyIcon from "@/Icons/SpeedyIcon";
import AvatarOne from "./AvatarOne";
import AvatarTwo from "./AvatarTwo";
import AvatarThree from "./AvatarThree";
import TrophyBlue from "@/Icons/TrophyBlue";
import GoalBg from "@/Icons/GoalBg";
import GoalBgHex from "@/Icons/GoalBgHex";
import StepVerseIconMini from "@/Icons/StepVerseIconMini";

const HowItWorks: React.FC = () => {
  const [hoverStates, setHoverStates] = useState([false, false, false]);
  const [autoAnimationComplete, setAutoAnimationComplete] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSteps, setCurrentSteps] = useState(1000);
  const [currentStreak, setCurrentStreak] = useState(10);
  const [currentDistance, setCurrentDistance] = useState(500);
  const [currentCalories, setCurrentCalories] = useState(1500);
  const [animatingPodium, setAnimatingPodium] = useState(false);
  const [podiumState, setPodiumState] = useState([
    {
      username: "theyVid",
      steps: 0,
      position: 1,
      color: "#B8EEFF",
      icon: AvatarOne,
    },
    {
      username: "TopBoyRayy",
      steps: 0,
      position: 2,
      color: "#FFE7FF",
      icon: AvatarTwo,
    },
    {
      username: "DesignerGirl",
      steps: 0,
      position: 3,
      color: "#C1FBD7",
      icon: AvatarThree,
    },
  ]);
  const [rewardSteps, setRewardSteps] = useState(2000);
  const maxRewardSteps = 5000;

  const finalPodiumState = {
    normal: [
      {
        username: "theyVid",
        steps: 8500,
        position: 1,
        color: "#B8EEFF",
        icon: AvatarOne,
      },
      {
        username: "TopBoyRayy",
        steps: 6200,
        position: 2,
        color: "#FFE7FF",
        icon: AvatarTwo,
      },
      {
        username: "DesignerGirl",
        steps: 5400,
        position: 3,
        color: "#C1FBD7",
        icon: AvatarThree,
      },
    ],
    animated: [
      {
        username: "theyVid",
        steps: 12500,
        position: 2,
        color: "#B8EEFF",
        icon: AvatarOne,
      },
      {
        username: "TopBoyRayy",
        steps: 11200,
        position: 3,
        color: "#FFE7FF",
        icon: AvatarTwo,
      },
      {
        username: "DesignerGirl",
        steps: 15400,
        position: 1,
        color: "#C1FBD7",
        icon: AvatarThree,
      },
    ],
  };

  const initialSteps = 1000;
  const initialStreak = 10;
  const initialDistance = 500;
  const initialCalories = 1500;

  const goal = 2500;
  const maxStreak = 20;
  const maxDistance = 870;
  const maxCalories = 2500;

  // Function to animate counting up
  const animateUp = () => {
    setIsAnimating(true);

    let steps = currentSteps;
    let streak = currentStreak;
    let distance = currentDistance;
    let calories = currentCalories;

    const interval = setInterval(() => {
      if (steps < goal) {
        steps += 25;
        setCurrentSteps(steps);
      }
      if (streak < maxStreak) {
        streak += 1;
        setCurrentStreak(streak);
      }
      if (distance < maxDistance) {
        distance += 5;
        setCurrentDistance(distance);
      }
      if (calories < maxCalories) {
        calories += 20;
        setCurrentCalories(calories);
      }

      if (
        steps >= goal &&
        streak >= maxStreak &&
        distance >= maxDistance &&
        calories >= maxCalories
      ) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  };

  // Function to animate counting down
  const animateDown = () => {
    setIsAnimating(false);

    let steps = currentSteps;
    let streak = currentStreak;
    let distance = currentDistance;
    let calories = currentCalories;

    const interval = setInterval(() => {
      if (steps > initialSteps) {
        steps -= 25;
        setCurrentSteps(steps);
      }
      if (streak > initialStreak) {
        streak -= 1;
        setCurrentStreak(streak);
      }
      if (distance > initialDistance) {
        distance -= 5;
        setCurrentDistance(distance);
      }
      if (calories > initialCalories) {
        calories -= 20;
        setCurrentCalories(calories);
      }

      if (
        steps <= initialSteps &&
        streak <= initialStreak &&
        distance <= initialDistance &&
        calories <= initialCalories
      ) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  };

  // Function to animate podium
  const animatePodium = () => {
    setAnimatingPodium(true);

    let currentSteps = podiumState.map((user) => user.steps);
    const targetSteps = finalPodiumState.animated.map((user) => user.steps);

    const interval = setInterval(() => {
      currentSteps = currentSteps.map((steps, index) => {
        if (steps < targetSteps[index]) {
          return steps + 200;
        }
        return steps;
      });

      setPodiumState((prev) =>
        prev.map((user, index) => ({
          ...finalPodiumState.animated[index],
          steps: currentSteps[index],
        }))
      );

      if (currentSteps.every((steps, index) => steps >= targetSteps[index])) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  };

  // Function to animate podium back
  const animatePodiumDown = () => {
    setAnimatingPodium(false);

    let currentSteps = podiumState.map((user) => user.steps);
    const targetSteps = finalPodiumState.normal.map((user) => user.steps);

    const interval = setInterval(() => {
      currentSteps = currentSteps.map((steps, index) => {
        if (steps > targetSteps[index]) {
          return steps - 200;
        }
        return steps;
      });

      setPodiumState((prev) =>
        prev.map((user, index) => ({
          ...finalPodiumState.normal[index],
          steps: currentSteps[index],
        }))
      );

      if (currentSteps.every((steps, index) => steps <= targetSteps[index])) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  };

  // Function to animate reward steps
  const animateRewardSteps = (up: boolean) => {
    const startValue = up ? 2000 : maxRewardSteps;
    const endValue = up ? maxRewardSteps : 2000;
    const step = up ? 50 : -50;

    let current = startValue;
    const interval = setInterval(() => {
      if ((up && current >= endValue) || (!up && current <= endValue)) {
        clearInterval(interval);
        setRewardSteps(endValue);
      } else {
        current += step;
        setRewardSteps(current);
      }
    }, 50);

    return () => clearInterval(interval);
  };

  // Handle initial animation
  useEffect(() => {
    if (!autoAnimationComplete) {
      const animationSequence = [
        // Index 0 animation
        () => {
          setHoverStates([true, false, false]);
          animateUp();
          setTimeout(() => {
            setHoverStates([false, false, false]);
            animateDown();
          }, 1500);
        },
        // Index 1 animation
        () => {
          setHoverStates([false, true, false]);
          animatePodium();
          setTimeout(() => {
            setPodiumState(finalPodiumState.animated);
            setHoverStates([false, false, false]);
          }, 1500);
        },
        // Index 2 animation
        () => {
          setHoverStates([false, false, true]);
          animateRewardSteps(true);
          setTimeout(() => {
            setHoverStates([false, false, false]);
            animateRewardSteps(false);
          }, 1500);
        }
      ];

      animationSequence.forEach((animation, index) => {
        setTimeout(() => {
          animation();
          if (index === animationSequence.length - 1) {
            setAutoAnimationComplete(true);
          }
        }, index * 2000); // Increased to 2000ms to account for internal timeouts
      });
    }
  }, [autoAnimationComplete]);

  // Handle hover animation
  useEffect(() => {
    let cleanup: () => void;

    if (hoverStates[1]) {
      cleanup = animatePodium();
    } else {
      cleanup = animatePodiumDown();
    }

    return () => cleanup();
  }, [hoverStates[1]]);

  const handleMouseEnter = (index: number) => {
    if (autoAnimationComplete) {
      const newHoverStates = [false, false, false];
      newHoverStates[index] = true;
      setHoverStates(newHoverStates);
      
      if (index === 0) {
        animateUp();
      } else if (index === 1) {
        animatePodium();
      } else if (index === 2) {
        animateRewardSteps(true);
      }
    }
  };

  const handleMouseLeave = () => {
    if (autoAnimationComplete) {
      setHoverStates([false, false, false]);
      animateDown();
      animatePodiumDown();
      animateRewardSteps(false);
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

  const [selectedTab, setSelectedTab] = useState(1);

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
                  className={`w-[387px] h-[360px] rounded-2xl flex items-center justify-center bg-[#FBFAF9]`}
                >
                  <AnimatePresence>
                    {index === 0 && (
                      <div className="h-[295.29px] w-[282.15px] bg-white rounded-[16px] border border-[#F0F2F5] flex flex-col items-center justify-between">
                        <div className="w-full flex relative flex-1 items-center justify-center">
                          <div className="absolute w-full h-full flex items-center justify-center z-0">
                            <ComplexProgressBar
                              current={currentSteps}
                              goal={goal}
                            />
                          </div>

                          <div className="absolute w-full h-full flex flex-col items-center justify-center space-y-2">
                            <WalkIconGray />
                            <div className="-space-y-1 flex flex-col items-center justify-center">
                              <AnimatedCounterProgress
                                start={currentSteps}
                                end={isAnimating ? goal : currentSteps}
                                duration={1.5}
                                className="text-[40px] text-black font-bold font-inter leading-none"
                              />
                              <p className="text-black font-inter text-sm leading-none">
                                steps
                              </p>
                            </div>
                          </div>

                          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 transform">
                            <div className="px-3 h-[25px] rounded-[50px] border-[1px] border-[#E7F2FF] bg-[#F7FBFF] flex flex-row items-center justify-center space-x-1">
                              <p className="text-[#919191] text-[9.28px]">
                                Current Streak:
                              </p>
                              <FireActiveStreak />
                              <AnimatedCounterProgress
                                start={currentStreak}
                                end={isAnimating ? maxStreak : currentStreak}
                                duration={1.5}
                                className="font-bold font-inter text-[12px] text-[#151515]"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row border-t-[1px] w-full border-[#F4F4F4] h-[84px] items-center justify-between">
                          <div className="flex flex-1 justify-center items-center h-full">
                            <div className="flex-col space-y-1 flex">
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                Today's Goal
                              </p>
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                <span
                                  className={`text-black font-inter text-[16.23px] ${
                                    isAnimating ? "line-through" : ""
                                  }`}
                                >
                                  {goal}
                                </span>{" "}
                                steps
                              </p>
                            </div>
                          </div>
                          <div className="w-[103px] h-full border-l-[1px] flex items-center justify-center border-r-[1px] border-l-[#F4F4F4] border-r-[#F4F4F4]">
                            <div className="flex-col space-y-1 flex items-end">
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                Distance
                              </p>
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                <AnimatedCounterProgress
                                  start={currentDistance}
                                  end={
                                    isAnimating ? maxDistance : currentDistance
                                  }
                                  duration={1.5}
                                  className="text-black font-inter text-[16.23px]"
                                />{" "}
                                mi
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-1 justify-center items-center h-full">
                            <div className="flex-col space-y-1 flex items-end">
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                Calories Burnt
                              </p>
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                <AnimatedCounterProgress
                                  start={currentCalories}
                                  end={
                                    isAnimating ? maxCalories : currentCalories
                                  }
                                  duration={1.5}
                                  className="text-black font-inter text-[16.23px]"
                                />{" "}
                                kcal
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className=" w-[306.27px] bg-white rounded-[16px] border border-[#F0F2F5] flex flex-col p-3 space-y-3">
                        <div className="flex flex-row space-x-1 items-center">
                          <div
                            onClick={() => setSelectedTab(1)}
                            className={`${
                              selectedTab === 1
                                ? "bg-black text-white"
                                : "bg-[#F5F5F5] text-[#BBBBBB]"
                            } w-[60.44px] h-[28.86px] text-[11.22px] rounded-full flex items-center justify-center`}
                          >
                            Friends
                          </div>
                          <div
                            onClick={() => setSelectedTab(2)}
                            className={`${
                              selectedTab === 2
                                ? "bg-black text-white"
                                : "bg-[#F5F5F5] text-[#BBBBBB]"
                            } w-[51.24px] h-[28.86px] text-[11.22px] rounded-full flex items-center justify-center`}
                          >
                            Global
                          </div>
                        </div>
                        <LeaderboardPodium users={podiumState} />
                        <div>
                          <div className="flex flex-row items-center justify-between w-full px-3 h-[44.89px] bg-[#F8F8F8] rounded-[12px]">
                            <div className="flex flex-row items-center space-x-1">
                              <p className="text-[11.22px] text-[#313131] font-inter">
                                {selectedTab === 1 ? "4" : "1293"}
                              </p>
                              <SpeedyIcon />
                              <p className="text-[11.22px] text-[#313131] font-inter">
                                @SuperSpeedy
                                <span className="text-[#007CFF] pl-1 text-[11.22px] font-inter">
                                  (you)
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="w-[306px] h-[276px] bg-white rounded-[16px] border border-[#F0F2F5] flex flex-col relative items-center justify-end space-y-3">
                         <div className="flex flex-col space-y-1 items-center absolute -top-5 justify-center">
                            <motion.div
                              initial={{ scale: 0, rotate: 0 }}
                              animate={{ 
                                scale: hoverStates[2] ? 1.1 : 1, 
                                rotate: hoverStates[2] ? 360 : 180 
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                              }}
                            >
                              <GoalBg />
                            </motion.div>
                            <motion.div
                              className="absolute"
                            >
                              <GoalBgHex />
                            </motion.div>
                            <motion.div
                              className="absolute z-10"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ 
                                opacity: 1, 
                                y: 0,
                                scale: hoverStates[2] ? 1.1 : 1
                              }}
                              transition={{ 
                                duration: 0.5,
                                scale: { duration: 0.3 }
                              }}
                            >
                              <div className="flex flex-col space-y-2 items-center justify-center">
                                <TrophyBlue />
                                <div className="flex flex-col space-y-1 items-center justify-center">
                                  <p className="font-inter font-bold text-white leading-none text-[34.71px]">
                                    {goal}
                                  </p>
                                  <p className="text-white font-inter text-[10.09px] leading-none">
                                    steps
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          </div>

                        <div className="flex flex-col pb-5 w-full items-center justify-center space-y-5">
                          <div className="flex flex-col items-center justify-center space-y-2">
                            <p className="font-inter text-[10.46px] text-[#636363] leading-none">
                              Reward Earned
                            </p>

                            <motion.div 
                              className="w-[89.42px] h-[32.95px] rounded-[66.77px] border-[1px] border-[#C4F0FC] bg-[#EDFBFF] flex flex-row items-center justify-center space-x-1"
                              animate={{
                                scale: hoverStates[2] ? 1.1 : 1,
                                backgroundColor: hoverStates[2] ? "#E0F7FF" : "#EDFBFF"
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <StepVerseIconMini />
                              <AnimatedCounterProgress
                                start={2000}
                                end={rewardSteps}
                                duration={1.5}
                                className="text-black text-[14.95px]"
                              />
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    )}
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
                    {index === 0 &&
                      "Join StepVerse through Telegram using your email, WhatsApp, or Telegram account. You're ready to play in minutes!"}
                    {index === 1 &&
                      "Engage in friendly competitions, treasure hunts, and leaderboard rankings to make fitness a fun, interactive, and rewarding experience."}
                    {index === 2 &&
                      "Turn your steps into SV Points, which can be used to unlock premium features, tools, and other exciting rewards in our marketplace."}
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
                      <div className="h-[295.29px] w-[282.15px] bg-white rounded-[16px] border border-[#F0F2F5] flex flex-col items-center justify-between">
                        <div className="w-full flex relative flex-1 items-center justify-center">
                          <div className="absolute w-full h-full flex items-center justify-center z-0">
                            <ComplexProgressBar
                              current={currentSteps}
                              goal={goal}
                            />
                          </div>

                          <div className="absolute w-full h-full flex flex-col items-center justify-center space-y-2">
                            <WalkIconGray />
                            <div className="-space-y-1 flex flex-col items-center justify-center">
                              <AnimatedCounterProgress
                                start={currentSteps}
                                end={isAnimating ? goal : currentSteps}
                                duration={1.5}
                                className="text-[40px] text-black font-bold font-inter leading-none"
                              />
                              <p className="text-black font-inter text-sm leading-none">
                                steps
                              </p>
                            </div>
                          </div>

                          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 transform">
                            <div className="px-3 h-[25px] rounded-[50px] border-[1px] border-[#E7F2FF] bg-[#F7FBFF] flex flex-row items-center justify-center space-x-1">
                              <p className="text-[#919191] text-[9.28px]">
                                Current Streak:
                              </p>
                              <FireActiveStreak />
                              <AnimatedCounterProgress
                                start={currentStreak}
                                end={isAnimating ? maxStreak : currentStreak}
                                duration={1.5}
                                className="font-bold font-inter text-[12px] text-[#151515]"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-row border-t-[1px] w-full border-[#F4F4F4] h-[84px] items-center justify-between">
                          <div className="flex flex-1 justify-center items-center h-full">
                            <div className="flex-col space-y-1 flex">
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                Today's Goal
                              </p>
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                <span
                                  className={`text-black font-inter text-[16.23px] ${
                                    isAnimating ? "line-through" : ""
                                  }`}
                                >
                                  {goal}
                                </span>{" "}
                                steps
                              </p>
                            </div>
                          </div>
                          <div className="w-[103px] h-full border-l-[1px] flex items-center justify-center border-r-[1px] border-l-[#F4F4F4] border-r-[#F4F4F4]">
                            <div className="flex-col space-y-1 flex items-end">
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                Distance
                              </p>
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                <AnimatedCounterProgress
                                  start={currentDistance}
                                  end={
                                    isAnimating ? maxDistance : currentDistance
                                  }
                                  duration={1.5}
                                  className="text-black font-inter text-[16.23px]"
                                />{" "}
                                mi
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-1 justify-center items-center h-full">
                            <div className="flex-col space-y-1 flex items-end">
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                Calories Burnt
                              </p>
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                <AnimatedCounterProgress
                                  start={currentCalories}
                                  end={
                                    isAnimating ? maxCalories : currentCalories
                                  }
                                  duration={1.5}
                                  className="text-black font-inter text-[16.23px]"
                                />{" "}
                                kcal
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className=" w-[306.27px] bg-white rounded-[16px] border border-[#F0F2F5] flex flex-col p-3 space-y-3">
                        <div className="flex flex-row space-x-1 items-center">
                          <div
                            onClick={() => setSelectedTab(1)}
                            className={`${
                              selectedTab === 1
                                ? "bg-black text-white"
                                : "bg-[#F5F5F5] text-[#BBBBBB]"
                            } w-[60.44px] h-[28.86px] text-[11.22px] rounded-full flex items-center justify-center`}
                          >
                            Friends
                          </div>
                          <div
                            onClick={() => setSelectedTab(2)}
                            className={`${
                              selectedTab === 2
                                ? "bg-black text-white"
                                : "bg-[#F5F5F5] text-[#BBBBBB]"
                            } w-[51.24px] h-[28.86px] text-[11.22px] rounded-full flex items-center justify-center`}
                          >
                            Global
                          </div>
                        </div>
                        <LeaderboardPodium users={podiumState} />
                        <div>
                          <div className="flex flex-row items-center justify-between w-full px-3 h-[44.89px] bg-[#F8F8F8] rounded-[12px]">
                            <div className="flex flex-row items-center space-x-1">
                              <p className="text-[11.22px] text-[#313131] font-inter">
                                {selectedTab === 1 ? "4" : "1293"}
                              </p>
                              <SpeedyIcon />
                              <p className="text-[11.22px] text-[#313131] font-inter">
                                @SuperSpeedy
                                <span className="text-[#007CFF] pl-1 text-[11.22px] font-inter">
                                  (you)
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 2 && (
                    <SideThree/>
                    )}
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
                    {index === 0 &&
                      "Join StepVerse through Telegram using your email, WhatsApp, or Telegram account. You're ready to play in minutes!"}
                    {index === 1 &&
                      "Engage in friendly competitions, treasure hunts, and leaderboard rankings to make fitness a fun, interactive, and rewarding experience."}
                    {index === 2 &&
                      "Turn your steps into SV Points, which can be used to unlock premium features, tools, and other exciting rewards in our marketplace."}
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
