import React from "react";
import { AnimatedCounterProgress } from "./AnimatedCounterProgress";


const HowItWorks: React.FC = () => {
  return (
    <div className="w-full flex py-20 items-center justify-center">
      <div className="w-[1200px] flex flex-col space-y-10">
        <div className="flex flex-col space-y-2">
          <p className="text-[#55C056] text-[15px]">How it works</p>
          <p className="text-[32px] w-[341px] font-medium font-inter leading-none">
            Transform Your Health, One Step at a Time.
          </p>
        </div>

        <div className="flex w-full justify-between flex-row items-center">
          <div className="h-[486px] w-full flex flex-col justify-between">
            <div className="w-[387px] h-[360px] rounded-2xl flex items-center justify-center bg-[#FBFAF9]">
              <div className="w-[295px] h-[203.1px] flex flex-col justify-evenly rounded-[12.36px] bg-white">
                <p className="text-black text-[10.81px] px-3">Step Counter</p>

                <div className="flex items-center justify-center">
                  <AnimatedCounterProgress />
                </div>

                <div className="w-full flex flex-row items-center justify-between pt-3 px-3 border-t-[1.7px] border-[#F4F4F4]">
                  <p className="text-[#989898] text-[10.81px]">Today's Goal</p>
                  <p className="text-black text-[10.81px] px-5">2,500 steps</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[387px] h-[101px] justify-between">
              <p className="text-[19px] font-semibold text-[#191918]">
                Sign Up and Start Moving
              </p>
              <p className="text-[16px] w-full text-[#4C4C4C]">
                Join StepVerse through Telegram using your email, WhatsApp, or
                Telegram account. You're ready to play in minutes!
              </p>
            </div>
          </div>

          <div className="h-[486px] w-full flex flex-col justify-between">
            <div className="w-[387px] h-[360px] rounded-2xl bg-[#FBFAF9]"></div>

            <div className="flex flex-col w-[387px] h-[101px] justify-between">
              <p className="text-[19px] font-semibold text-[#191918]">
                Gamify Your Fitness Journey
              </p>
              <p className="text-[16px] w-full text-[#4C4C4C]">
                Engage in friendly competitions, treasure hunts, and leaderboard
                rankings to make fitness a fun, interactive, and rewarding
                experience.
              </p>
            </div>
          </div>

          <div className="h-[486px] w-full flex flex-col justify-between">
            <div className="w-[387px] h-[360px] rounded-2xl bg-[#FBFAF9]"></div>

            <div className="flex flex-col w-[387px] h-[101px] justify-between">
              <p className="text-[19px] font-semibold text-[#191918]">
                Earn Rewards
              </p>
              <p className="text-[16px] w-full text-[#4C4C4C]">
                Turn your steps into SV Points, which can be used to unlock
                premium features, tools, and other exciting rewards in our
                marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

