"use client"

import { motion } from "framer-motion"

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const FIELD_STAR_COUNT = 35
const ARM_COUNT = 3
const ARM_STAR_COUNT = 60
const CORE_STAR_COUNT = 22
const DUST_PER_ARM = 7
const SPIRAL_TURNS = 2.2
const MAX_RADIUS = 46
const DISC_SIZE = 640

const FIELD_STARS = Array.from({ length: FIELD_STAR_COUNT }, (_, i) => {
  const n = i + 1
  const x = seededRandom(n * 11.13) * 100
  const y = seededRandom(n * 71.71) * 100
  const size = 1 + seededRandom(n * 41.3) * 1.6
  const isGreen = seededRandom(n * 29.7) > 0.7
  const delay = seededRandom(n * 88.4) * 4
  const duration = 3 + seededRandom(n * 15.2) * 3
  return { x, y, size, isGreen, delay, duration }
})

function armPoint(i, jitterAmount) {
  const n = i + 1
  const arm = i % ARM_COUNT
  const t = seededRandom(n * 3.71)
  const radius = 8 + t * MAX_RADIUS
  const angle =
    arm * ((2 * Math.PI) / ARM_COUNT) +
    t * SPIRAL_TURNS * 2 * Math.PI +
    (seededRandom(n * 5.19) - 0.5) * 0.4
  const jitter = jitterAmount ? (seededRandom(n * 9.53) - 0.5) * (3 + t * 9) : 0
  const r = radius + jitter
  const x = 50 + r * Math.cos(angle)
  const y = 50 + r * Math.sin(angle)
  return { x, y, t }
}

const ARM_STARS = Array.from({ length: ARM_STAR_COUNT }, (_, i) => {
  const n = i + 1
  const { x, y, t } = armPoint(i, true)
  const size = 1.2 + seededRandom(n * 2.17) * 2.4
  const isGreen = seededRandom(n * 6.61) > 0.6
  const delay = seededRandom(n * 8.43) * 4
  const duration = 2.5 + seededRandom(n * 4.29) * 3
  return { x, y, size, isGreen, delay, duration }
})

const CORE_STARS = Array.from({ length: CORE_STAR_COUNT }, (_, i) => {
  const n = i + 200
  const radius = seededRandom(n * 3.71) * 9
  const angle = seededRandom(n * 5.19) * 2 * Math.PI
  const x = 50 + radius * Math.cos(angle)
  const y = 50 + radius * Math.sin(angle)
  const size = 1.8 + seededRandom(n * 2.17) * 2.6
  const isGreen = seededRandom(n * 6.61) > 0.5
  const delay = seededRandom(n * 8.43) * 3
  const duration = 2 + seededRandom(n * 4.29) * 2.5
  return { x, y, size, isGreen, delay, duration }
})

const GALAXY_STARS = [...ARM_STARS, ...CORE_STARS]

const DUST_BANDS = Array.from({ length: ARM_COUNT * DUST_PER_ARM }, (_, i) => {
  const arm = i % ARM_COUNT
  const step = Math.floor(i / ARM_COUNT)
  const t = step / (DUST_PER_ARM - 1)
  const radius = 10 + t * MAX_RADIUS
  const angle = arm * ((2 * Math.PI) / ARM_COUNT) + t * SPIRAL_TURNS * 2 * Math.PI
  const x = 50 + radius * Math.cos(angle)
  const y = 50 + radius * Math.sin(angle)
  const size = 46 + t * 70
  return { x, y, size }
})

function Star({ star, keyPrefix, i }) {
  return (
    <motion.div
      key={`${keyPrefix}-${i}`}
      className="absolute rounded-full"
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: star.size,
        height: star.size,
        background: star.isGreen ? "#8FCB9B" : "#ffffff",
        boxShadow: star.isGreen
          ? "0 0 6px rgba(143,203,155,0.95)"
          : "0 0 6px rgba(255,255,255,0.95)",
      }}
      initial={{ opacity: 0.3 }}
      animate={{
        opacity: [0.3, 1, 0.4, 0.9, 0.3],
        scale: [1, 1.4, 1, 1.3, 1],
      }}
      transition={{
        duration: star.duration,
        delay: star.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

export function FloatingGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ambient nebula glows */}
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

      {/* Distant background stars */}
      {FIELD_STARS.map((star, i) => (
        <Star star={star} keyPrefix="field" i={i} key={`field-${i}`} />
      ))}

      {/* Tilted spiral galaxy disc, fixed size so it always reads as one shape */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "rotate(18deg)" }}>
        <div style={{ width: DISC_SIZE, height: DISC_SIZE, position: "relative", transform: "scaleY(0.42)" }}>
          {/* Bright galactic core glow */}
          <motion.div
            className="absolute rounded-full"
            style={{
              left: "50%",
              top: "50%",
              width: 260,
              height: 260,
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(235,255,240,0.75) 0%, rgba(180,230,190,0.4) 30%, rgba(143,203,155,0.18) 55%, transparent 75%)",
              filter: "blur(3px)",
            }}
            animate={{ opacity: [0.75, 1, 0.75], scale: [0.9, 1.08, 0.9] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div
            className="absolute rounded-full"
            style={{
              left: "50%",
              top: "50%",
              width: 60,
              height: 60,
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(255,255,255,0.95) 0%, transparent 75%)",
              filter: "blur(1px)",
            }}
          />

          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          >
            {/* Glowing dust lanes tracing the spiral arms */}
            {DUST_BANDS.map((d, i) => (
              <div
                key={`dust-${i}`}
                className="absolute rounded-full"
                style={{
                  left: `${d.x}%`,
                  top: `${d.y}%`,
                  width: d.size,
                  height: d.size,
                  transform: "translate(-50%, -50%)",
                  background: "radial-gradient(circle, rgba(143,203,155,0.16) 0%, transparent 70%)",
                  filter: "blur(6px)",
                }}
              />
            ))}
            {GALAXY_STARS.map((star, i) => (
              <Star star={star} keyPrefix="galaxy" i={i} key={`galaxy-${i}`} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
