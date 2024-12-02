"use client";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
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

  return (
    <div className="w-screen flex items-center justify-center py-[9rem]">
      <div className="w-[794px] flex flex-col space-y-5">
        <p className="text-[#191918] text-[32px] font-medium font-inter">
          Frequently Asked Questions
        </p>

        <Accordion type="single" collapsible className="min-h-[684px]">
          <motion.div variants={itemVariants}>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is StepVerse?</AccordionTrigger>
              <AccordionContent>
                StepVerse is a Web3-powered social fitness platform designed to
                transform the sedentary lifestyles of millions by gamifying
                physical activity. Leveraging blockchain technology and Telegram
                Mini Apps, StepVerse encourages users to adopt healthier
                routines, engage in friendly fitness challenges, and earn
                rewards for their active lifestyle.
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
                blockchain technology, and wearable integrations to create a
                seamless fitness experience. Unlike traditional fitness apps,
                StepVerse uses a decentralized approach, enabling users to earn
                rewards for their activities and participate in global fitness
                competitions. Furthermore, the integration of Web3 ensures
                transparent and secure transactions.
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is StepVerse free to use?</AccordionTrigger>
              <AccordionContent>
                Yes, StepVerse is free to use for basic fitness tracking and
                participation in daily challenges. However, certain features,
                such as purchasing treasure-hunt tools or staking points for
                competitions, may require in-app purchases using the platform’s
                native token.
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
                decentralized ownership within the platform. StepVerse uses
                blockchain to tokenize rewards (SV Points), facilitate
                peer-to-peer transactions in the marketplace, and securely store
                user data.
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How do I participate in competitions or treasure hunts?
              </AccordionTrigger>
              <AccordionContent>
                To join competitions, users can invite friends or join existing
                challenges. Users set targets, timelines, and stake points
                before the competition begins. For treasure hunts, users
                purchase tools (e.g., treasure bags, telescopes) to explore
                randomized geo-locations for rewards. Both activities are
                designed to make fitness fun and engaging.
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                What health benefits can I expect from StepVerse?
              </AccordionTrigger>
              <AccordionContent>
                StepVerse aims to improve cardiovascular health, promote weight
                management, and enhance mental well-being by encouraging users
                to walk and stay active daily. Its gamified elements provide
                motivation, making fitness enjoyable while fostering long-term
                adherence to healthier habits.
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                How does StepVerse protect my personal data?
              </AccordionTrigger>
              <AccordionContent>
                StepVerse employs advanced encryption techniques and adheres to
                strict privacy standards to protect user data. Only anonymized
                data is shared for research or analytics purposes. All
                transactions are secure, and users maintain full control over
                their personal health data.
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AccordionItem value="item-8">
              <AccordionTrigger>
                What regions is StepVerse targeting for its initial launch?
              </AccordionTrigger>
              <AccordionContent>
                StepVerse plans to target Africa, Southeast Asia, and Latin
                America for its initial rollout while it is available to use
                anywhere in the world. These regions have a high prevalence of
                sedentary lifestyles and limited access to affordable
                healthcare. By addressing these challenges, StepVerse hopes to
                create significant social and economic impacts.
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AccordionItem value="item-9">
              <AccordionTrigger>
                Can StepVerse integrate with my wearable device?
              </AccordionTrigger>
              <AccordionContent>
                At the initial rollout, StepVerse was not built to integrate
                with wearable devices like Fitbit, Apple Watch, and Garmin.
                However, this is one of the important updates that are lined up
                in the future releases to improve user experience.
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AccordionItem value="item-10">
              <AccordionTrigger>
                What is the economic sustainability model of StepVerse?
              </AccordionTrigger>
              <AccordionContent>
                StepVerse's sustainability relies on its tokenized ecosystem,
                which incentivizes users and generates revenue through in-app
                purchases, partnerships with fitness brands, and corporate
                wellness programs. The platform avoids a Ponzi-like model by
                focusing on utility-driven value rather than speculative growth.
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          <motion.div variants={itemVariants}>
            <AccordionItem value="item-11">
              <AccordionTrigger>
                How can I join the StepVerse community?
              </AccordionTrigger>
              <AccordionContent>
                You can join the StepVerse community to stay updated on new
                features, competitions and announcements by joining our Telegram
                Channel and following us on Twitter (X).
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        </Accordion>
      </div>
    </div>
  );
}
