"use client"

import { motion } from "framer-motion"

const CELLS = [
  { x: "4%", y: "10%", delay: 0, duration: 4, size: 32 },
  { x: "9%", y: "34%", delay: 0.4, duration: 5, size: 24 },
  { x: "6%", y: "68%", delay: 0.9, duration: 4.5, size: 40 },
  { x: "15%", y: "88%", delay: 1.3, duration: 5.5, size: 28 },
  { x: "20%", y: "18%", delay: 1.8, duration: 4, size: 36 },
  { x: "26%", y: "52%", delay: 0.2, duration: 6, size: 24 },
  { x: "33%", y: "8%", delay: 2.1, duration: 5, size: 32 },
  { x: "36%", y: "76%", delay: 0.6, duration: 4.5, size: 40 },
  { x: "43%", y: "30%", delay: 1.1, duration: 5, size: 28 },
  { x: "46%", y: "60%", delay: 1.6, duration: 6, size: 36 },
  { x: "50%", y: "14%", delay: 2.4, duration: 4, size: 24 },
  { x: "56%", y: "44%", delay: 0.3, duration: 5.5, size: 32 },
  { x: "60%", y: "80%", delay: 0.8, duration: 4.5, size: 40 },
  { x: "66%", y: "22%", delay: 1.4, duration: 5, size: 28 },
  { x: "70%", y: "56%", delay: 1.9, duration: 6, size: 36 },
  { x: "76%", y: "12%", delay: 2.2, duration: 4, size: 24 },
  { x: "79%", y: "40%", delay: 0.5, duration: 5.5, size: 32 },
  { x: "83%", y: "73%", delay: 1.0, duration: 4.5, size: 40 },
  { x: "87%", y: "28%", delay: 1.5, duration: 5, size: 28 },
  { x: "91%", y: "52%", delay: 2.0, duration: 6, size: 36 },
  { x: "94%", y: "82%", delay: 0.7, duration: 4, size: 24 },
  { x: "13%", y: "48%", delay: 1.2, duration: 5.5, size: 32 },
  { x: "40%", y: "90%", delay: 1.7, duration: 4.5, size: 28 },
  { x: "63%", y: "6%", delay: 2.3, duration: 5, size: 36 },
]

const GRID_LINES = [
  { x: "5%", y: "0%", w: "18%", h: "28%" },
  { x: "30%", y: "55%", w: "22%", h: "32%" },
  { x: "62%", y: "10%", w: "16%", h: "24%" },
  { x: "78%", y: "60%", w: "20%", h: "30%" },
  { x: "45%", y: "5%", w: "18%", h: "22%" },
  { x: "10%", y: "62%", w: "20%", h: "26%" },
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
          animate={{ opacity: [0, 0.08, 0] }}
          transition={{
            duration: 8,
            delay: i * 1.3,
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

      {/* Floating accent squares */}
      {CELLS.map((cell, i) => (
        <motion.div
          key={`cell-${i}`}
          className="absolute rounded-sm"
          style={{
            left: cell.x,
            top: cell.y,
            width: cell.size,
            height: cell.size,
            background:
              i % 2 === 0
                ? "rgba(143,203,155,0.1)"
                : "rgba(176,224,184,0.1)",
            border:
              i % 2 === 0
                ? "1px solid rgba(143,203,155,0.25)"
                : "1px solid rgba(176,224,184,0.25)",
            boxShadow: "0 0 12px rgba(143,203,155,0.15)",
          }}
          initial={{ opacity: 0, y: 0, scale: 0.8, rotate: 0 }}
          animate={{
            opacity: [0, 0.85, 0.5, 0.85, 0],
            y: [0, -18, -8, -20, 0],
            scale: [0.8, 1.15, 1, 1.1, 0.8],
            rotate: [0, 10, -6, 8, 0],
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
