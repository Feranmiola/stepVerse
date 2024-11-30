"use client"

import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

const useCounter = (initial: number, target: number, duration: number, isAnimating: boolean) => {
  const count = useSpring(initial, { duration: duration * 1000 })

  useEffect(() => {
    count.set(isAnimating ? target : initial)
  }, [count, initial, target, isAnimating])

  return useTransform(count, (value) => Math.max(Math.round(value), initial))
}

export const AnimatedCounterProgress: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const progress = useSpring(0.5, { stiffness: 100, damping: 30 })
  const count = useCounter(1000, 2500, 1, isHovered)

  const handleHover = (hovering: boolean) => {
    setIsHovered(hovering)
    progress.set(hovering ? 1 : 0.5)
  }

  const width = 120
  const strokeWidth = 6
  const center = width / 2
  const radius = center - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  const dashArray = circumference * 0.8 // 80% of the circle
  const dashOffset = useTransform(progress, (value) => circumference * 0.8 * (1 - value))

  return (
    <div 
      className="relative inline-flex items-center justify-center w-[120px] h-[120px]"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <svg 
        width={width} 
        height={width} 
        viewBox={`0 0 ${width} ${width}`} 
        style={{ overflow: 'visible' }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#f0f0f0" // Lighter background color
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          strokeDashoffset="0"
          strokeLinecap="round"
          transform={`rotate(130 ${center} ${center})`}
        />
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#55C056"
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          transform={`rotate(130 ${center} ${center})`}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <motion.p
          className="text-[30.89px] text-black tracking-tight leading-none font-semibold"
        >
          {count}
        </motion.p>
        <p className="text-black text-[10.81px] mt-1">Steps</p>
      </div>
    </div>
  )
}

