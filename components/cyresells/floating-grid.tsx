"use client"

import { motion } from "framer-motion"

const CELLS = [
  { x: "8%",  y: "12%", delay: 0,    duration: 4 },
  { x: "22%", y: "60%", delay: 0.8,  duration: 5 },
  { x: "38%", y: "25%", delay: 1.6,  duration: 4.5 },
  { x: "55%", y: "72%", delay: 0.3,  duration: 6 },
  { x: "70%", y: "18%", delay: 1.2,  duration: 5 },
  { x: "82%", y: "50%", delay: 0.6,  duration: 4 },
  { x: "91%", y: "80%", delay: 2,    duration: 5.5 },
  { x: "14%", y: "85%", delay: 1.4,  duration: 4.5 },
  { x: "48%", y: "45%", delay: 0.5,  duration: 6 },
  { x: "65%", y: "38%", delay: 1.8,  duration: 5 },
  { x: "78%", y: "90%", delay: 0.9,  duration: 4 },
  { x: "32%", y: "8%",  delay: 2.2,  duration: 5.5 },
]

const GRID_LINES = [
  { x: "5%",  y: "0%",  w: "18%", h: "28%" },
  { x: "30%", y: "55%", w: "22%", h: "32%" },
  { x: "62%", y: "10%", w: "16%", h: "24%" },
  { x: "78%", y: "60%", w: "20%", h: "30%" },
]

export function FloatingGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Subtle dashed grid regions */}
      {GRID_LINES.map((g, i) => (
        <motion.div
          key={`grid-${i}`}
          className="absolute"
          style={{ left: g.x, top: g.y, width: g.w, height: g.h }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.06, 0] }}
          transition={{
            duration: 8,
            delay: i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            {[...Array(6)].map((_, row) =>
              [...Array(8)].map((_, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={col * 36}
                  y={row * 36}
                  width="35"
                  height="35"
                  fill="none"
                  stroke="#8FCB9B"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                  strokeOpacity="0.6"
                />
              ))
            )}
          </svg>
        </motion.div>
      ))}

      {/* Floating accent cells */}
      {CELLS.map((cell, i) => (
        <motion.div
          key={`cell-${i}`}
          className="absolute w-8 h-8 rounded-sm"
          style={{
            left: cell.x,
            top: cell.y,
            background: "rgba(143,203,155,0.08)",
            border: "1px solid rgba(143,203,155,0.2)",
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.7, 0.4, 0.7, 0],
            y: [0, -12, -6, -14, 0],
          }}
          transition={{
            duration: cell.duration,
            delay: cell.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gold ambient glow — left side for content section */}
      <div
        className="absolute left-[-100px] top-[20%] w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(143,203,155,0.06) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </div>
  )
}
