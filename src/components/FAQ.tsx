"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import ForwardIcon from "@/Icons/ForwardIcon";
import { useRouter } from "next/navigation";

const FAQ = () => {
  const router = useRouter();
  const ref = useRef(null);
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

  const faqItems = [
    {
      question: "What is StepVerse?",
      answer: "StepVerse is a Web3-powered social fitness platform designed to transform the sedentary lifestyles of millions by gamifying physical activity. Leveraging blockchain technology and Telegram Mini Apps, StepVerse encourages users to adopt healthier routines, engage in friendly fitness challenges, and earn rewards for their active lifestyle."
    },
    {
      question: "How does StepVerse differ from other fitness apps?",
      answer: "StepVerse stands apart by combining social gamification, blockchain technology, and wearable integrations to create a seamless fitness experience. Unlike traditional fitness apps, StepVerse uses a decentralized approach, enabling users to earn rewards for their activities and participate in global fitness competitions. Furthermore, the integration of Web3 ensures transparent and secure transactions."
    },
    {
      question: "Is StepVerse free to use?",
      answer: "Yes, StepVerse is free to use for basic fitness tracking and participation in daily challenges. However, certain features, such as purchasing treasure-hunt tools or staking points for competitions, may require in-app purchases using the platform's native token."
    },
    {
      question: "What is the role of blockchain in StepVerse?",
      answer: "Blockchain ensures data security, transparency, and decentralized ownership within the platform. StepVerse uses blockchain to tokenize rewards (SV Points), facilitate peer-to-peer transactions in the marketplace, and securely store user data."
    },
    {
      question: "How do I participate in competitions or treasure hunts?",
      answer: "To join competitions, users can invite friends or join existing challenges. Users set targets, timelines, and stake points before the competition begins. For treasure hunts, users purchase tools (e.g., treasure bags, telescopes) to explore randomized geo-locations for rewards. Both activities are designed to make fitness fun and engaging."
    }
  ];

  return (
    <motion.div
      ref={ref}
      className="w-full py-20 flex items-center justify-center px-4 md:px-0"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between">
        <motion.div
          className="md:w-[285px] mb-8 md:mb-0"
          variants={itemVariants}
        >
          <motion.p
            className="text-[15px] text-[#007CFF] mb-2"
            variants={itemVariants}
          >
            Got questions?
          </motion.p>
          <motion.p
            className="text-[24px] md:text-[32px] max-md:w-[188px] leading-none text-[#191918] font-medium"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.p>
        </motion.div>
        <motion.div
          className="w-full md:w-[590px]"
          variants={accordionVariants}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-[18px] text-[#424242]">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          <motion.div
            className="flex flex-row space-x-2 items-center hover:bg-[#F2FFEF] bg-transparent transition ease-in-out w-[135px] h-[36px] rounded-[8px] justify-center cursor-pointer mt-5"
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
            onClick={() => router.push("/faq")}
          >
            <p className="text-[#007CFF] text-[18px]">See more</p>
            <ForwardIcon />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQ;

