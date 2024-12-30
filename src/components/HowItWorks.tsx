'use client'
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


const HowItWorks: React.FC = () => {
  const [hoverStates, setHoverStates] = useState([false, false, false]);
  const [autoAnimationComplete, setAutoAnimationComplete] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSteps, setCurrentSteps] = useState(1000);
  const [currentStreak, setCurrentStreak] = useState(10);
  const [currentDistance, setCurrentDistance] = useState(500);
  const [currentCalories, setCurrentCalories] = useState(1500);

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

      if (steps >= goal && streak >= maxStreak && 
          distance >= maxDistance && calories >= maxCalories) {
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

      if (steps <= initialSteps && streak <= initialStreak && 
          distance <= initialDistance && calories <= initialCalories) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  };

  // Handle initial animation
  useEffect(() => {
    const cleanup = animateUp();
    return () => cleanup();
  }, []);

  // Handle hover animation
  useEffect(() => {
    let cleanup: () => void;
    
    if (hoverStates[0]) {
      cleanup = animateUp();
    } else {
      cleanup = animateDown();
    }

    return () => cleanup();
  }, [hoverStates[0]]);

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
                              <p className="text-[#919191] text-[9.28px]">Current Streak:</p>
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
                              <p className="text-[#919191] leading-none text-[9.28px]">Today's Goal</p>
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                <span className={`text-black font-inter text-[16.23px] ${isAnimating ? "line-through" : ""}`}>
                                  {goal}
                                </span>{" "}
                                steps
                              </p>
                            </div>
                          </div>
                          <div className="w-[103px] h-full border-l-[1px] flex items-center justify-center border-r-[1px] border-l-[#F4F4F4] border-r-[#F4F4F4]">
                            <div className="flex-col space-y-1 flex items-end">
                              <p className="text-[#919191] leading-none text-[9.28px]">Distance</p>
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                <AnimatedCounterProgress
                                  start={currentDistance}
                                  end={isAnimating ? maxDistance : currentDistance}
                                  duration={1.5}
                                  className="text-black font-inter text-[16.23px]"
                                />
                                {" "}mi
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-1 justify-center items-center h-full">
                            <div className="flex-col space-y-1 flex items-end">
                              <p className="text-[#919191] leading-none text-[9.28px]">Calories Burnt</p>
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                <AnimatedCounterProgress
                                  start={currentCalories}
                                  end={isAnimating ? maxCalories : currentCalories}
                                  duration={1.5}
                                  className="text-black font-inter text-[16.23px]"
                                />
                                {" "}kcal
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
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
                              <p className="text-[#919191] text-[9.28px]">Current Streak:</p>
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
                              <p className="text-[#919191] leading-none text-[9.28px]">Today's Goal</p>
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                <span className={`text-black font-inter text-[16.23px] ${isAnimating ? "line-through" : ""}`}>
                                  {goal}
                                </span>{" "}
                                steps
                              </p>
                            </div>
                          </div>
                          <div className="w-[103px] h-full border-l-[1px] flex items-center justify-center border-r-[1px] border-l-[#F4F4F4] border-r-[#F4F4F4]">
                            <div className="flex-col space-y-1 flex items-end">
                              <p className="text-[#919191] leading-none text-[9.28px]">Distance</p>
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                <AnimatedCounterProgress
                                  start={currentDistance}
                                  end={isAnimating ? maxDistance : currentDistance}
                                  duration={1.5}
                                  className="text-black font-inter text-[16.23px]"
                                />
                                {" "}mi
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-1 justify-center items-center h-full">
                            <div className="flex-col space-y-1 flex items-end">
                              <p className="text-[#919191] leading-none text-[9.28px]">Calories Burnt</p>
                              <p className="text-[#919191] leading-none text-[9.28px]">
                                <AnimatedCounterProgress
                                  start={currentCalories}
                                  end={isAnimating ? maxCalories : currentCalories}
                                  duration={1.5}
                                  className="text-black font-inter text-[16.23px]"
                                />
                                {" "}kcal
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 1 && 
                    // <FitnessJourneyContent isHovered={hoverStates[1]} />
                    <SideTwo/>
                    }
                    {index === 2 && 
                    // <EarnRewardsContent isHovered={hoverStates[2]} />
                    <SideThreeMobile/>
                    }
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

