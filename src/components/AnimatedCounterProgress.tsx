"use client"

import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useAnimate } from 'framer-motion'

const useCounter = (initial: number, target: number, duration: number, isAnimating: boolean) => {
  const [scope, animate] = useAnimate()
  const count = useMotionValue(initial)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    animate(count, isAnimating ? target : initial, {
      duration: isAnimating ? duration : duration / 2,
      ease: "easeInOut"
    })
  }, [animate, count, initial, target, duration, isAnimating])

  return { scope, rounded }
}

export const AnimatedCounterProgress: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const progress = useSpring(0.5, { stiffness: 100, damping: 30 })
  const { scope, rounded } = useCounter(1000, 2500, 1, isHovered)

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
  const tipAngle = useTransform(progress, [0, 1], [0, 288])

  return (
    <div 
      className="relative inline-flex items-center justify-center w-[120px] h-[120px]"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
    >
      <svg 
        width={width} 
        height={width} 
        viewBox={`-5 -5 ${width + 10} ${width + 10}`} 
        style={{ overflow: 'visible' }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          strokeDashoffset="0"
          strokeLinecap="round"
          transform={`rotate(130 ${center} ${center})`}
          style={{ filter: 'drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.2))' }}
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
        <motion.circle
          cx={0}
          cy={0}
          r={3}
          fill="white"
          style={{
            originX: '50%',
            originY: '50%',
          }}
          //@ts-ignore
          animate={{
            translateX: radius,
            rotate: tipAngle,
          }}
          transformTemplate={({ translateX, rotate }) => `rotate(130) rotate(${rotate}) translate(${translateX}, 0)`}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center" ref={scope}>
        <AnimatePresence mode="wait">
          <motion.p
            key={rounded.get()}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="text-[30.89px] text-black tracking-tight leading-none font-semibold"
          >
            {rounded}
          </motion.p>
        </AnimatePresence>
        <p className="text-black text-[10.81px] mt-1">Steps</p>
      </div>
    </div>
  )
}

