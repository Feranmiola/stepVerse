import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import ForwardIcon from "@/Icons/ForwardIcon";

const FAQ = () => {
  return (
    <div className="w-full py-20 flex items-center justify-center">
      <div className="w-[1200px] flex justify-between flex-row">
        <div className="h-[103px] flex flex-col justify-between w-[285px]">
          <p className="text-[15px] text-[#55C056]">Got questions?</p>
          <p className="text-[32px] leading-none text-[#191918] font-medium w-full">
            Frequently Asked Questions
          </p>
        </div>

        <div className="w-[590px] h-[376px] flex flex-col justify-between">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex flex-row space-x-2 items-center">
            <p className="text-[#55C056] text-[18px]">See more</p>
            <ForwardIcon/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
