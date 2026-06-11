"use client"

import Script from "next/script"
import { AnimatedSection } from "./animated-section"

const VSL_VIDEO_ID = "z7HnekuD3KY"
const CALENDLY_URL = "https://calendly.com/cyresellss1/1-1-discovery-call-with-cy-resells"

function VideoFrame({ videoId }: { videoId: string }) {
  if (videoId) {
    return (
      <div className="relative w-full aspect-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="VSL"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-video bg-[#111009] flex items-center justify-center rounded-xl overflow-hidden border border-white/10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/5 to-transparent" />
      <div className="flex flex-col items-center gap-3 z-10">
        <div className="w-16 h-16 rounded-full bg-[#C9A84C] flex items-center justify-center shadow-lg shadow-[#C9A84C]/30">
          <Play className="w-7 h-7 text-black fill-black ml-1" />
        </div>
        <p className="text-white/40 text-sm">Video coming soon</p>
      </div>
    </div>
  )
}

function CalendlyFrame() {
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget w-full"
        data-url={CALENDLY_URL}
        style={{ minWidth: "320px", height: "clamp(900px, 120vw, 1100px)" }}
      />
    </>
  )
}

export function VslStep1() {
  return (
    <AnimatedSection delay={0.1} className="w-full max-w-[95vw] md:max-w-[65vw] mx-auto">
      <div className="flex flex-col gap-5">
        <p className="text-[#C9A84C] font-bold text-xl md:text-2xl lg:text-3xl uppercase tracking-wider text-center">
          Step 1 of 2: Watch This Video ⬇️
        </p>
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(201,168,76,0.35)",
            boxShadow: "0 0 25px rgba(201,168,76,0.18), 0 0 60px rgba(201,168,76,0.07), 0 20px 60px rgba(0,0,0,0.6)",
          }}
        >
          <VideoFrame videoId={VSL_VIDEO_ID} />
        </div>
      </div>
    </AnimatedSection>
  )
}

export function VslStep2() {
  return (
    <AnimatedSection delay={0.1} className="w-full max-w-[95vw] md:max-w-[65vw] mx-auto">
      <div id="cyresells-step2" className="flex flex-col gap-5">
        <p className="text-[#C9A84C] font-bold text-xl md:text-2xl lg:text-3xl uppercase tracking-wider text-center">
          Step 2 of 2: Apply To Learn AI Reselling ⬇️
        </p>
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(201,168,76,0.35)",
            boxShadow: "0 0 25px rgba(201,168,76,0.18), 0 0 60px rgba(201,168,76,0.07), 0 20px 60px rgba(0,0,0,0.6)",
          }}
        >
          <CalendlyFrame />
        </div>
      </div>
    </AnimatedSection>
  )
}
