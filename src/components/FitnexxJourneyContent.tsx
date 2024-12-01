import Row1 from "@/Icons/For1";
import RackTop from "@/Icons/RackTop";
import Row2 from "@/Icons/Row2";
import Row3 from "@/Icons/Row3";
import Row4 from "@/Icons/Row4";
import Row5 from "@/Icons/Row5";
import Splitter from "@/Icons/Splitter";
import React from "react";

const FitnessJourneyContent = () => {
  return (
    <div className="w-[262.22px] rounded-[10.98px] p-3 flex flex-col bg-white space-y-3">
      <RackTop />

      <div className="flex flex-col space-y-2 items-center justify-center w-full">
        <Row1 />
        <Splitter />
        <Row2 />
        <Splitter />
        <Row3 />
        
        <div>
          <Splitter />
        </div>
        
        <div>
          <Row4 />
        </div>
        
        <div>
          <Splitter />
        </div>
        
        <div>
          <Row5 />
        </div>

      </div>
    </div>
  );
};

export default FitnessJourneyContent;
