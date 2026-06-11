import React from "react"
import { FloatingGrid } from "./floating-grid"

export function CyresellsHero() {
  return (
    <section className="flex flex-col items-center text-center relative w-full
      h-[320px] md:h-[380px] lg:h-[440px] px-4 overflow-hidden">
      {/* SVG Grid Background */}
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1220 810"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g>
            <mask
              id="cy-mask0"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="10"
              y="-1"
              width="1200"
              height="812"
            >
              <rect
                x="10"
                y="-0.84668"
                width="1200"
                height="811.693"
                fill="url(#cy-paint0)"
              />
            </mask>
            <g mask="url(#cy-mask0)">
              {[...Array(35)].map((_, i) => (
                <React.Fragment key={`cy-row-${i}`}>
                  {[9.2, 45.2, 81.2, 117.2, 153.2, 189.2, 225.2, 261.2, 297.2,
                    333.2, 369.2, 405.2, 441.2, 477.2, 513.2, 549.2, 585.2,
                    621.2, 657.2, 693.2, 729.2, 765.2].map((y) => (
                    <rect
                      key={`${i}-${y}`}
                      x={-20.0891 + i * 36}
                      y={y}
                      width="35.6"
                      height="35.6"
                      stroke="#e5e5e5"
                      strokeOpacity="0.08"
                      strokeWidth="0.4"
                      strokeDasharray="2 2"
                    />
                  ))}
                </React.Fragment>
              ))}
              {/* Accent filled cells */}
              <rect x="699.711" y="81"  width="36" height="36" fill="#e5e5e5" fillOpacity="0.05" />
              <rect x="195.711" y="153" width="36" height="36" fill="#e5e5e5" fillOpacity="0.06" />
              <rect x="1023.71" y="153" width="36" height="36" fill="#e5e5e5" fillOpacity="0.06" />
              <rect x="123.711" y="225" width="36" height="36" fill="#e5e5e5" fillOpacity="0.06" />
              <rect x="1095.71" y="225" width="36" height="36" fill="#e5e5e5" fillOpacity="0.06" />
              <rect x="951.711" y="297" width="36" height="36" fill="#e5e5e5" fillOpacity="0.06" />
              <rect x="231.711" y="333" width="36" height="36" fill="#e5e5e5" fillOpacity="0.04" />
              <rect x="303.711" y="405" width="36" height="36" fill="#e5e5e5" fillOpacity="0.04" />
              <rect x="519.711" y="405" width="36" height="36" fill="#e5e5e5" fillOpacity="0.05" />
              <rect x="771.711" y="405" width="36" height="36" fill="#e5e5e5" fillOpacity="0.06" />
            </g>

            {/* Gold glow — bottom-right quadrant */}
            <g filter="url(#cy-filter0)">
              <path
                d="M1447.45 -87.02V-149.03H1770V1248.85H466.158V894.269C1008.11 894.269 1447.45 454.931 1447.45 -87.02Z"
                fill="url(#cy-paint1)"
              />
            </g>
            <g filter="url(#cy-filter1)">
              <path
                d="M1383.45 -151.02V-213.03H1706V1184.85H402.158V830.269C944.109 830.269 1383.45 390.931 1383.45 -151.02Z"
                fill="url(#cy-paint2)"
                fillOpacity="0.5"
              />
            </g>
          </g>

          <defs>
            <filter id="cy-filter0" x="147" y="-468" width="1941" height="2035" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="159" result="effect1_foregroundBlur" />
            </filter>
            <filter id="cy-filter1" x="-554" y="-1169" width="3216" height="3310" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="478" result="effect1_foregroundBlur" />
            </filter>
            <linearGradient id="cy-paint0" x1="35" y1="23" x2="903" y2="632" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e5e5e5" stopOpacity="0" />
              <stop offset="1" stopColor="#e5e5e5" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="cy-paint1" x1="1118" y1="-149" x2="1118" y2="1248" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e5e5e5" />
              <stop offset="0.4" stopColor="#E8CC7A" />
              <stop offset="1" stopColor="#C9A84C" />
            </linearGradient>
            <linearGradient id="cy-paint2" x1="1054" y1="-213" x2="1054" y2="1184" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e5e5e5" />
              <stop offset="0.4" stopColor="#E8CC7A" />
              <stop offset="1" stopColor="#C9A84C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated floating grid cells */}
      <FloatingGrid />

      {/* Gold ambient blob — full right side */}
      <div
        className="absolute right-[-200px] top-[-200px] w-[900px] h-[900px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.08) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3 md:gap-4 lg:gap-5
        w-full px-6 mt-10 md:mt-16 lg:mt-20
        max-w-[360px] md:max-w-[85vw] lg:max-w-[1140px] mx-auto">
        {/* Eyebrow */}
        <p className="text-xs md:text-sm font-semibold tracking-widest text-white/60 uppercase">
          ⏳ Early Access ⏳
        </p>

        {/* Headline */}
        <h1 className="text-[1.85rem] leading-[1.2] md:text-[2.6rem] md:leading-[1.15] lg:text-[3.4rem] lg:leading-[1.1] font-bold text-white">
          Learn The{" "}
          <span className="text-[#C9A84C]">AI Digital Ecom Method</span>{" "}
          Entrepreneurs Are Using To Hit Consistent{" "}
          <span className="text-[#C9A84C]">£10k–£25k+/Months</span>
        </h1>

        {/* Subheadline */}
        <p className="text-sm md:text-base lg:text-lg text-[#C9A84C] italic font-medium mt-1">
          And How You&apos;re Early to The AI Digital Ecom
        </p>
      </div>
    </section>
  )
}
