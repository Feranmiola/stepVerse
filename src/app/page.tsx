/* eslint-disable */
// @ts-nocheck
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Movement from "@/components/Movement";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import LeftIcons from "../Icons/LeftIcons";
import RightIcons from "../Icons/RightIcons";
import TelegramIcon from "../Icons/TelegramIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import FAQ from "@/components/FAQ";
import Starter from "@/components/Starter";
import SEO from "@/components/SEO";

export default function Home() {
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

  return (
    <div className="bg-white w-screen flex flex-col">
      <SEO
      title="StepVerse"
      description="StepVerse is the ultimate fitness gaming experience built on Telegram Mini App where we make staying active fun and rewarding."
      />
      <Starter />
      <div id="how-it-works" className="w-full">
        <HowItWorks />
      </div>
      <div id="features" className="w-full">
        <Features />
      </div>
      <div id="community" className="w-full">
        <Movement />
      </div>
      <div id="faqs" className="w-full">
        <FAQ />
      </div>
    </div>
  );
}
