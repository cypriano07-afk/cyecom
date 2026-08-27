"use client"

import { motion } from "framer-motion"

const NUM_STARS = 70

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const STARS = Array.from({ length: NUM_STARS }, (_, i) => {
  const n = i + 1
  const x = seededRandom(n * 12.9898) * 100
  const y = seededRandom(n * 78.233) * 100
  const size = 1 + seededRandom(n * 45.164) * 2.5
  const isGreen = seededRandom(n * 33.14) > 0.65
  const delay = seededRandom(n * 94.32) * 4
  const duration = 2.5 + seededRandom(n * 17.91) * 3
  return { x, y, size, isGreen, delay, duration }
})

export function FloatingGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Nebula ambient glows */}
      <div
        className="absolute left-[-100px] top-[20%] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(143,203,155,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute right-[-120px] bottom-[10%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Slowly rotating starfield */}
      <motion.div
        className="absolute inset-0"
        style={{ transformOrigin: "50% 50%" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
      >
        {STARS.map((star, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              background: star.isGreen ? "#8FCB9B" : "#ffffff",
              boxShadow: star.isGreen
                ? "0 0 4px rgba(143,203,155,0.9)"
                : "0 0 4px rgba(255,255,255,0.9)",
            }}
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [0.2, 1, 0.3, 0.9, 0.2],
              scale: [1, 1.4, 1, 1.3, 1],
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}
