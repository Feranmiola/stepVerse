"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SEO from "@/components/SEO";

export default function FAQPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const faqItems = [
    {
      question: "What is StepVerse?",
      answer:
        "StepVerse is a Web3-powered social fitness platform designed to transform the sedentary lifestyles of millions by gamifying physical activity. Leveraging blockchain technology and Telegram Mini Apps, StepVerse encourages users to adopt healthier routines, engage in friendly fitness challenges, and earn rewards for their active lifestyle.",
    },
    {
      question: "How does StepVerse differ from other fitness apps?",
      answer:
        "StepVerse stands apart by combining social gamification, blockchain technology, and wearable integrations to create a seamless fitness experience. Unlike traditional fitness apps, StepVerse uses a decentralized approach, enabling users to earn rewards for their activities and participate in global fitness competitions. Furthermore, the integration of Web3 ensures transparent and secure transactions.",
    },
    {
      question: "Is StepVerse free to use?",
      answer:
        "Yes, StepVerse is free to use for basic fitness tracking and participation in daily challenges. However, certain features, such as purchasing treasure-hunt tools or staking points for competitions, may require in-app purchases using the platform's native token.",
    },
    {
      question: "What is the role of blockchain in StepVerse?",
      answer:
        "Blockchain ensures data security, transparency, and decentralized ownership within the platform. StepVerse uses blockchain to tokenize rewards (SV Points), facilitate peer-to-peer transactions in the marketplace, and securely store user data.",
    },
    {
      question: "How do I participate in competitions or treasure hunts?",
      answer:
        "To join competitions, users can invite friends or join existing challenges. Users set targets, timelines, and stake points before the competition begins. For treasure hunts, users purchase tools (e.g., treasure bags, telescopes) to explore randomized geo-locations for rewards. Both activities are designed to make fitness fun and engaging.",
    },
    {
      question: "What health benefits can I expect from StepVerse?",
      answer:
        "StepVerse aims to improve cardiovascular health, promote weight management, and enhance mental well-being by encouraging users to walk and stay active daily. Its gamified elements provide motivation, making fitness enjoyable while fostering long-term adherence to healthier habits.",
    },
    {
      question: "How does StepVerse protect my personal data?",
      answer:
        "StepVerse employs advanced encryption techniques and adheres to strict privacy standards to protect user data. Only anonymized data is shared for research or analytics purposes. All transactions are secure, and users maintain full control over their personal health data.",
    },
    {
      question: "What regions is StepVerse targeting for its initial launch?",
      answer:
        "StepVerse plans to target Africa, Southeast Asia, and Latin America for its initial rollout while it is available to use anywhere in the world. These regions have a high prevalence of sedentary lifestyles and limited access to affordable healthcare. By addressing these challenges, StepVerse hopes to create significant social and economic impacts.",
    },
    {
      question: "Can StepVerse integrate with my wearable device?",
      answer:
        "At the initial rollout, StepVerse was not built to integrate with wearable devices like Fitbit, Apple Watch, and Garmin. However, this is one of the important updates that are lined up in the future releases to improve user experience.",
    },
    {
      question: "What is the economic sustainability model of StepVerse?",
      answer:
        "StepVerse's sustainability relies on its tokenized ecosystem, which incentivizes users and generates revenue through in-app purchases, partnerships with fitness brands, and corporate wellness programs. The platform avoids a Ponzi-like model by focusing on utility-driven value rather than speculative growth.",
    },
    {
      question: "How can I join the StepVerse community?",
      answer:
        "You can join the StepVerse community to stay updated on new features, competitions and announcements by joining our Telegram Channel and following us on Twitter (X).",
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="w-full min-h-screen flex items-center justify-center py-[9rem] px-4 md:px-0"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <SEO
        title="StepVerse | FAQ"
        description="Explore some StepVerse Frequently Asked Questions."
        canonical="https://stepverse.app"
        ogImage="https://res.cloudinary.com/debiu7z1b/image/upload/v1733222710/Frame_657_emx4vk.jpg"
        ogType="website"
        twitterHandle=""
      />
      <div className="w-full max-w-[794px] flex flex-col space-y-5">
        <h1 className="text-[#191918] text-2xl md:text-[32px]  max-md:w-[188px] font-medium font-inter">
          Frequently Asked Questions
        </h1>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AccordionItem value={`item-${index + 1}`}>
                <AccordionTrigger className="text-left text-base md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
}
