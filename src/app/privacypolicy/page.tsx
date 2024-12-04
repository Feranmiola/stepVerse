"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FAQ from "@/components/FAQ";
import PrivacyPolicyMobile from "@/components/PrivacyPolicyMobile";
import SEO from "@/components/SEO";

type SectionRef = React.RefObject<HTMLDivElement>;

const sections = [
  "Data We Collect",
  "How We Use Your Data",
  "Transparency in Data Usage",
  "User Rights and Control",
  "Data Security Measures",
  "Decentralized Ownership of Rewards",
  "Compliance with Global Standards",
  "Fraud Prevention and Fairness",
  "Third-Party Integrations",
  "User Communication and Updates",
  "Children's Privacy",
  "Contact Us",
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState(-1);
  const sectionRefs = useRef<SectionRef[]>(
    sections.map(() => React.createRef<HTMLDivElement>())
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.id);
            setActiveSection(id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: `-${80}px 0px -50% 0px`,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const targetRef = sectionRefs.current[index];
    if (targetRef && targetRef.current) {
      const navbarHeight = 80;
      const scrollPadding = 20; // Add some padding to the scroll position
      const y =
        targetRef.current.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight -
        scrollPadding;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(index);
    }
  };

  return (
    <>
      <SEO
        title="StepVerse | Privacy Policy"
        description="Learn how StepVerse protects your data and privacy. Our comprehensive policy outlines data collection, usage, and your rights as a user of our fitness gaming platform."
        canonical="https://stepverse.app"
        ogImage="https://res.cloudinary.com/debiu7z1b/image/upload/v1733222710/Frame_657_emx4vk.jpg"
        ogType="website"
        twitterHandle=""
      />
      <PrivacyPolicyMobile />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-[8rem] pb-20 flex items-center justify-center flex-col max-md:hidden"
      >
        <div className="flex flex-row h-auto w-[1201px] justify-between">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-5 w-[691px]"
          >
            <div className="flex flex-col space-y-2">
              <h1 className="w-[231px] leading-none text-[#191918] text-[32px] font-inter font-medium">
                Privacy Policy for StepVerse
              </h1>
              <p className="text-[#6F6F6F] text-[15px]">
                Effective Date: 30 November, 2024
              </p>
            </div>

            <p className="w-full text-[#4C4C4C] text-base leading-tight">
              Welcome to StepVerse! At StepVerse, your privacy and data security
              are our top priorities. This Privacy Policy outlines how we
              collect, use, store, and protect your personal data when you
              access and use our platform. By using StepVerse, you consent to
              the practices described in this document.
            </p>

            <div className="flex flex-col space-y-10">
              <motion.div
                ref={sectionRefs.current[0]}
                id="0"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col space-y-2 w-full "
              >
                <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                  1. Data We Collect
                </h2>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  We collect and process only the data necessary to enhance your
                  experience and operate our services effectively:
                </p>
                <ul className="w-full pl-4 space-y-2">
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Contact Information:</span>{" "}
                    Email addresses or Telegram usernames for account creation
                    and communication.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Health and Fitness Data:</span>{" "}
                    Steps, health metrics, and activity logs submitted via
                    wearables, smartphones, or manually.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">
                      Wallet and Transaction Data:
                    </span>{" "}
                    Blockchain wallet addresses and transaction details for
                    rewards distribution.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">User-Generated Content:</span>{" "}
                    Data from competitions, challenges, and family tracking.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Aggregated Data:</span>{" "}
                    Anonymized data for research and system improvements.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                ref={sectionRefs.current[1]}
                id="1"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col space-y-2 w-full "
              >
                <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                  2. How We Use Your Data
                </h2>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  We use your data for the following purposes:
                </p>
                <ul className="w-full pl-4 space-y-2">
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Fitness Personalization:</span>{" "}
                    To enhance gamification experiences, including challenges,
                    leaderboards, and treasure hunts.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Reward Distribution:</span>{" "}
                    Tokenizing SV Points and ensuring smooth blockchain
                    transactions.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">System Improvements:</span>{" "}
                    Aggregated data is analyzed to improve StepVerse's services
                    and develop new features.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Healthcare Insights:</span>{" "}
                    Anonymized data may be used for research or shared with
                    healthcare partners for societal benefits.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Communication:</span> To send
                    updates, alerts, and service-related announcements.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                ref={sectionRefs.current[2]}
                id="2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col space-y-2 w-full "
              >
                <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                  3. Transparency in Data Usage
                </h2>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  We provide full transparency on how your data is handled:
                </p>
                <ul className="w-full pl-4 space-y-2">
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Fitness Data:</span> Used to
                    personalize your gamified experiences and provide health
                    insights.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Aggregated Data:</span>{" "}
                    Anonymized and shared only for research or with healthcare
                    partners under strict agreements.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Transaction Data:</span> Used
                    exclusively for reward payouts and marketplace activity.
                  </li>
                </ul>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  We are committed to keeping you informed about how your data
                  is used. You can access detailed information about your data
                  usage in your account settings at any time.
                </p>
              </motion.div>

              <motion.div
                ref={sectionRefs.current[3]}
                id="3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col space-y-2 w-full "
              >
                <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                  4. User Rights and Control
                </h2>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  StepVerse ensures you maintain full control over your data:
                </p>
                <ul className="w-full pl-4 space-y-2">
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Anonymity:</span> You can
                    participate anonymously in challenges and competitions.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Data Sharing:</span> You
                    control when and with whom your data is shared.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Data Access:</span> You may
                    request a copy of your data and review it at any time.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Data Deletion:</span> You can
                    request the permanent deletion of your personal data,
                    subject to applicable laws.
                  </li>
                </ul>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  To exercise these rights, please contact our privacy team at
                  privacy@stepverse.com. We will respond to your request within
                  30 days.
                </p>
              </motion.div>

              <motion.div
                ref={sectionRefs.current[4]}
                id="4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col space-y-2 w-full "
              >
                <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                  5. Data Security Measures
                </h2>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  StepVerse implements rigorous measures to protect your data:
                </p>
                <ul className="w-full pl-4 space-y-2">
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">End-to-End Encryption:</span>{" "}
                    Data in transit is protected using AES-256 encryption.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">HIPAA Compliance:</span> Health
                    data is securely stored and accessed only by authorized
                    parties.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Fraud Prevention:</span>{" "}
                    Advanced algorithms detect and prevent artificially inflated
                    steps or manipulated transactions.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Regular Security Audits:</span>{" "}
                    Third-party cybersecurity firms conduct quarterly audits to
                    identify vulnerabilities.
                  </li>
                </ul>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  We continuously update our security measures to stay ahead of
                  potential threats and ensure the highest level of data
                  protection for our users.
                </p>
              </motion.div>

              <motion.div
                ref={sectionRefs.current[5]}
                id="5"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col space-y-2 w-full "
              >
                <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                  6. Decentralized Ownership of Rewards
                </h2>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  StepVerse is committed to ensuring true ownership of your
                  rewards:
                </p>
                <ul className="w-full pl-4 space-y-2">
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    All rewards are tokenized on blockchain infrastructure,
                    ensuring transparency and preventing manipulation.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    Users retain full ownership of SV Points and other tokenized
                    rewards.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    Rewards can be transferred, traded, or redeemed without
                    interference from StepVerse.
                  </li>
                </ul>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  This decentralized approach ensures that your rewards are
                  truly yours, aligning with our commitment to user empowerment
                  and data ownership.
                </p>
              </motion.div>

              <motion.div
                ref={sectionRefs.current[6]}
                id="6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-col space-y-2 w-full "
              >
                <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                  7. Compliance with Global Standards
                </h2>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  StepVerse adheres to:
                </p>
                <ul className="w-full pl-4 space-y-2">
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">
                      GDPR (General Data Protection Regulation):
                    </span>{" "}
                    Ensuring data privacy and user rights for European users.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">
                      CCPA (California Consumer Privacy Act):
                    </span>{" "}
                    Offering data transparency and control to U.S. users.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">
                      HIPAA (Health Insurance Portability and Accountability
                      Act):
                    </span>{" "}
                    Protecting health data contributed by users.
                  </li>
                </ul>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  We regularly review and update our practices to ensure
                  compliance with evolving global privacy standards and
                  regulations.
                </p>
              </motion.div>

              <motion.div
                ref={sectionRefs.current[7]}
                id="7"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col space-y-2 w-full "
              >
                <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                  8. Fraud Prevention and Fairness
                </h2>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  To maintain the integrity of our platform and ensure fair play
                  for all users:
                </p>
                <ul className="w-full pl-4 space-y-2">
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    StepVerse uses fraud detection algorithms to prevent misuse,
                    such as artificially inflated step counts or marketplace
                    manipulation.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    User activity is monitored to maintain a fair ecosystem for
                    all participants.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    We employ machine learning models to detect anomalies and
                    patterns indicative of fraudulent behavior.
                  </li>
                </ul>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  These measures help us maintain a trustworthy platform where
                  users can compete and earn rewards fairly.
                </p>
              </motion.div>

              <motion.div
                ref={sectionRefs.current[8]}
                id="8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-col space-y-2 w-full "
              >
                <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                  9. Third-Party Integrations
                </h2>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  To enhance functionality, we may partner with third parties.
                  Any data shared with third parties is anonymized and strictly
                  governed by agreements. Our third-party integrations include:
                </p>
                <ul className="w-full pl-4 space-y-2">
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">
                      Fitness Device Manufacturers:
                    </span>{" "}
                    To sync your activity data.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Blockchain Networks:</span> For
                    secure reward tokenization and transactions.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    <span className="text-black">Analytics Providers:</span> To
                    improve our services and user experience.
                  </li>
                </ul>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  We carefully vet all third-party partners to ensure they meet
                  our stringent data protection standards.
                </p>
              </motion.div>

              <motion.div
                ref={sectionRefs.current[9]}
                id="9"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex flex-col space-y-2 w-full "
              >
                <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                  10. User Communication and Updates
                </h2>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  We believe in keeping our users informed and engaged:
                </p>
                <ul className="w-full pl-4 space-y-2">
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    Users receive clear and concise information on how their
                    data is used.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    Any changes to this Privacy Policy will be communicated via
                    email or in-app notifications.
                  </li>
                  <li className="w-full text-[#4C4C4C] text-base leading-tight">
                    We provide regular updates on new features, challenges, and
                    community events.
                  </li>
                </ul>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  You can manage your communication preferences in your account
                  settings at any time.
                </p>
              </motion.div>

              <motion.div
                ref={sectionRefs.current[10]}
                id="10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="flex flex-col space-y-2 w-full "
              >
                <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                  11. Children's Privacy
                </h2>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  StepVerse is not intended for users under the age of 13. We do
                  not knowingly collect personal data from children. If you are
                  a parent or guardian and believe that your child has provided
                  us with personal information, please contact us immediately.
                  We will take steps to remove such information and terminate
                  the child's account.
                </p>
              </motion.div>

              <motion.div
                ref={sectionRefs.current[11]}
                id="11"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex flex-col space-y-5 w-full "
              >
                <h2 className="text-[18px] text-[#191918] font-medium font-inter">
                  12. Contact Us
                </h2>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or how your data is handled, please feel
                  free to reach out to us through the following channels:
                </p>
                <a
                  href="mailto:privacy@stepverse.com"
                  className="w-full text-[#55C056] text-base leading-tight"
                >
                  Email: privacy@stepverse.com
                </a>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  We value your feedback and are committed to addressing your
                  inquiries promptly. Whether you're seeking clarification on
                  how your data is used, requesting access to your data, or
                  initiating a data deletion request, our team is here to help.
                </p>
                <p className="w-full text-[#4C4C4C] text-base leading-tight">
                  Your privacy and trust are at the heart of StepVerse, and we
                  are dedicated to providing you with a secure and transparent
                  experience. Thank you for being a part of the StepVerse
                  community!
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sticky top-[8rem] w-[344px] h-[372px] rounded-2xl bg-[#FBFAF9] px-5 flex flex-col justify-evenly"
          >
            <p className="text-[#00BF3F] text-[13px]">Table of Contents</p>
            <ol className="space-y-1 pl-5">
              {sections.map((section, index) => (
                <li
                  key={index}
                  className={`text-sm font-inter cursor-pointer transition-all duration-300 ${
                    activeSection === index
                      ? "font-bold text-black"
                      : "font-normal text-[#6F6F6F] hover:text-black"
                  }`}
                  onClick={() => scrollToSection(index)}
                >
                  {section}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
        <FAQ />
      </motion.div>
    </>
  );
}
