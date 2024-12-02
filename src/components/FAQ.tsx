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

  useEffect(() => {
    // Ensure this only runs in the browser if (typeof window === "undefined") return;

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
  }, []);

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
    <>
      <motion.div
        ref={ref}
        className="w-full py-20 flex items-center justify-center max-md:hidden"
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
              className="w-[590px] min-h-[396px] flex flex-col justify-between"
              variants={accordionVariants}
            >
              <Accordion type="single" collapsible>
                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is StepVerse?</AccordionTrigger>
                    <AccordionContent>
                      StepVerse is a Web3-powered social fitness platform
                      designed to transform the sedentary lifestyles of millions
                      by gamifying physical activity. Leveraging blockchain
                      technology and Telegram Mini Apps, StepVerse encourages
                      users to adopt healthier routines, engage in friendly
                      fitness challenges, and earn rewards for their active
                      lifestyle.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      How does StepVerse differ from other fitness apps?
                    </AccordionTrigger>
                    <AccordionContent>
                      StepVerse stands apart by combining social gamification,
                      blockchain technology, and wearable integrations to create
                      a seamless fitness experience. Unlike traditional fitness
                      apps, StepVerse uses a decentralized approach, enabling
                      users to earn rewards for their activities and participate
                      in global fitness competitions. Furthermore, the
                      integration of Web3 ensures transparent and secure
                      transactions.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Is StepVerse free to use?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, StepVerse is free to use for basic fitness tracking
                      and participation in daily challenges. However, certain
                      features, such as purchasing treasure-hunt tools or
                      staking points for competitions, may require in-app
                      purchases using the platform’s native token.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      What is the role of blockchain in StepVerse?
                    </AccordionTrigger>
                    <AccordionContent>
                      Blockchain ensures data security, transparency, and
                      decentralized ownership within the platform. StepVerse
                      uses blockchain to tokenize rewards (SV Points),
                      facilitate peer-to-peer transactions in the marketplace,
                      and securely store user data.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      How do I participate in competitions or treasure hunts?
                    </AccordionTrigger>
                    <AccordionContent>
                      To join competitions, users can invite friends or join
                      existing challenges. Users set targets, timelines, and
                      stake points before the competition begins. For treasure
                      hunts, users purchase tools (e.g., treasure bags,
                      telescopes) to explore randomized geo-locations for
                      rewards. Both activities are designed to make fitness fun
                      and engaging.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              </Accordion>

              <motion.div
                className="flex flex-row space-x-2 items-center cursor-pointer pt-5"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                onClick={() => router.push("/faq")}
              >
                <p className="text-[#55C056]  text-[18px]">See more</p>
                <ForwardIcon />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref}
        className="w-full py-20 flex items-center max-w-[95%] px-5 justify-center md:hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="w-full flex space-y-5 flex-col">
          <motion.div
            className="flex flex-col space-y-2 w-[188px]"
            variants={itemVariants}
          >
            <motion.p
              className="text-[15px] text-[#55C056]"
              variants={itemVariants}
            >
              Got questions?
            </motion.p>

            <motion.p
              className="text-[24px] leading-none text-[#191918] font-medium w-full"
              variants={itemVariants}
            >
              Frequently Asked Questions
            </motion.p>
          </motion.div>
          <div className="h-[396px]">
            <motion.div
              className="w-full min-h-[396px] flex flex-col justify-between"
              variants={accordionVariants}
            >
              <Accordion type="single" collapsible className="">
                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-[18px] text-[#424242]">What is StepVerse?</AccordionTrigger>
                    <AccordionContent>
                      StepVerse is a Web3-powered social fitness platform
                      designed to transform the sedentary lifestyles of millions
                      by gamifying physical activity. Leveraging blockchain
                      technology and Telegram Mini Apps, StepVerse encourages
                      users to adopt healthier routines, engage in friendly
                      fitness challenges, and earn rewards for their active
                      lifestyle.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-[18px] text-[#424242]">
                      How does StepVerse differ from other fitness apps?
                    </AccordionTrigger>
                    <AccordionContent>
                      StepVerse stands apart by combining social gamification,
                      blockchain technology, and wearable integrations to create
                      a seamless fitness experience. Unlike traditional fitness
                      apps, StepVerse uses a decentralized approach, enabling
                      users to earn rewards for their activities and participate
                      in global fitness competitions. Furthermore, the
                      integration of Web3 ensures transparent and secure
                      transactions.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-[18px] text-[#424242]">
                      Is StepVerse free to use?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, StepVerse is free to use for basic fitness tracking
                      and participation in daily challenges. However, certain
                      features, such as purchasing treasure-hunt tools or
                      staking points for competitions, may require in-app
                      purchases using the platform’s native token.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-[18px] text-[#424242]">
                      What is the role of blockchain in StepVerse?
                    </AccordionTrigger>
                    <AccordionContent>
                      Blockchain ensures data security, transparency, and
                      decentralized ownership within the platform. StepVerse
                      uses blockchain to tokenize rewards (SV Points),
                      facilitate peer-to-peer transactions in the marketplace,
                      and securely store user data.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-[18px] text-[#424242]">
                      How do I participate in competitions or treasure hunts?
                    </AccordionTrigger>
                    <AccordionContent>
                      To join competitions, users can invite friends or join
                      existing challenges. Users set targets, timelines, and
                      stake points before the competition begins. For treasure
                      hunts, users purchase tools (e.g., treasure bags,
                      telescopes) to explore randomized geo-locations for
                      rewards. Both activities are designed to make fitness fun
                      and engaging.
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              </Accordion>

              <motion.div
                className="flex flex-row space-x-2 items-center cursor-pointer py-5 pb-20" 
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                onClick={() => router.push("/faq")}
              >
                <p className="text-[#55C056]  text-[18px]">See more</p>
                <ForwardIcon />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FAQ;
