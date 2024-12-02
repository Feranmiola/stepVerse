'use client'

import Row1 from "@/Icons/For1";
import RackTop from "@/Icons/RackTop";
import Row2 from "@/Icons/Row2";
import Row3 from "@/Icons/Row3";
import Row4 from "@/Icons/Row4";
import Row5 from "@/Icons/Row5";
import Splitter from "@/Icons/Splitter";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FitnessJourneyContent: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const [showRow4, setShowRow4] = useState(false);
  const [showRow5, setShowRow5] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isHovered) {
      setShowRow4(true);
      timer = setTimeout(() => setShowRow5(true), 800);
    } else {
      setShowRow4(false);
      setShowRow5(false);
    }

    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <div className="w-[262.22px] rounded-[10.98px] p-3 flex flex-col bg-white space-y-3">
      <RackTop />

      <div className="flex flex-col space-y-2 items-center justify-center w-full">
        <Row1 />
        <Splitter />
        <Row2 />
        <Splitter />
        <Row3 />
        
        <AnimatePresence>
          {(showRow4 || showRow5) && (
            <>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, exit: { duration: 0.4 } }}
              >
                <Splitter />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, exit: { duration: 0.4 } }}
              >
                <Row4 />
              </motion.div>
            </>
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {showRow5 && (
            <>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, exit: { duration: 0.4 } }}
              >
                <Splitter />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, exit: { duration: 0.4 } }}
              >
                <Row5 />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FitnessJourneyContent;

