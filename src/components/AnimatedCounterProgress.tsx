"use client"

import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProgressProps {
  start: number;
  end: number;
  duration?: number;
  className?: string;
}

export const AnimatedCounterProgress: React.FC<AnimatedCounterProgressProps> = ({
  start,
  end,
  className = '',
}) => {
  // Simply display the current value without animation
  return (
    <span className={className}>
      {Math.round(start)}
    </span>
  );
};

