import HowItWorks from "./components/HowItWorks";
import LeftIcons from "./Icons/LeftIcons";
import RightIcons from "./Icons/RightIcons";
import TelegramIcon from "./Icons/TelegramIcon";
import TwitterIcon from "./Icons/TwitterIcon";


export default function Home() {
  return (
    <div className="bg-white w-screen flex flex-col">

      <div className="flex flex-row w-full pt-[10rem] items-center justify-between">
        <LeftIcons/>
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className="flex flex-col w-[513.86px] space-y-5">
            <p  className="text-center text-[60px] font-geist font-medium leading-[3.5rem] text-[#191918]">Get Active, Stay Healthy, and Win Rewards.</p>
            <p className="text-[17px] w-full text-center text-[#4C4C4C]">StepVerse is the ultimate fitness gaming experience built on Telegram Mini App where we make staying active fun and rewarding.</p>
          </div>
          <div className="flex flex-row items-center space-x-5">
            <div className="w-[188.35px] h-[48px] rounded-[41.77px] bg-[#191918] cursor-pointer flex items-center justify-center space-x-3">
              <TelegramIcon/>
              <p className="text-white text-[16.71px]">Join on Telegram</p>
            </div>
            <div className="w-[188.35px] h-[48px] rounded-[41.77px] bg-[#FBFAF9] cursor-pointer flex items-center justify-center space-x-3">
              <TwitterIcon/>
              <p className="text-[#080808] text-[16.71px]">Follow on twitter</p>
            </div>
          </div>

        </div>
        <RightIcons/>
      </div>

      <HowItWorks/>
    
    </div>
  );
}