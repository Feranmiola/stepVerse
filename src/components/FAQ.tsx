// @ts-nocheck
"use client";

import React, { useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import ForwardIcon from "@/Icons/ForwardIcon";
import { useRouter } from "next-nprogress-bar";

const FAQ = () => {
  const router = useRouter();
  const ref = React.useRef(null);

  useEffect(() => { // Ensure this only runs in the browser if (typeof window === "undefined") return;

    let scrollTimer = 0;
    
    // Function to update scrollbar properties
    function updateScrollbar() {
      const scrollPercentage =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      const scrollbarHeight =
        (window.innerHeight / document.documentElement.scrollHeight) *
        window.innerHeight;
      const scrollTop =
        scrollPercentage * (window.innerHeight - scrollbarHeight);
    
      document.body.style.setProperty("--scroll-top", `${scrollTop}px`);
      document.body.style.setProperty(
        "--scrollbar-height",
        `${scrollbarHeight}px`
      );
    
      document.body.classList.add("is-scrolling");
    
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        document.body.classList.remove("is-scrolling");
      }, 1000);
    }
    
    // Add event listeners for scroll and resize
    window.addEventListener("scroll", updateScrollbar);
    window.addEventListener("resize", updateScrollbar);
    
    // Initial call to set the correct scrollbar size
    updateScrollbar();
    
    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", updateScrollbar);
      window.removeEventListener("resize", updateScrollbar);
    };
    }, [])




  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const accordionVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full py-20 flex items-center justify-center"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-[1200px] flex justify-between flex-row">
        <motion.div
          className="h-[103px] flex flex-col justify-between w-[285px]"
          variants={itemVariants}
        >
          <motion.p
            className="text-[15px] text-[#55C056]"
            variants={itemVariants}
          >
            Got questions?
          </motion.p>
          <motion.p
            className="text-[32px] leading-none text-[#191918] font-medium w-full"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.p>
        </motion.div>
        <div className="h-[396px]">
          <motion.div
            className="w-[590px] h-[396px] flex flex-col justify-between"
            variants={accordionVariants}
          >
            <Accordion type="single" collapsible>
              <motion.div variants={itemVariants}>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div variants={itemVariants}>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div variants={itemVariants}>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div variants={itemVariants}>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div variants={itemVariants}>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            </Accordion>

            <motion.div
              className="flex flex-row space-x-2 items-center cursor-pointer pt-5"
              variants={itemVariants}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              onClick={() => router.push('/faq')}
            >
              <p className="text-[#55C056]  text-[18px]">See more</p>
              <ForwardIcon />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
