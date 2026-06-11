"use client"

import Script from "next/script"
import { AnimatedSection } from "./animated-section"

const WISTIA_ID = "zvdenmbtkm"
const CALENDLY_URL = "https://calendly.com/cyresellss1/1-1-discovery-call-with-cy-resells"

function VideoFrame() {
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
      <Script src={`https://fast.wistia.com/embed/${WISTIA_ID}.js`} strategy="lazyOnload" />
      <style>{`wistia-player[media-id='${WISTIA_ID}']:not(:defined){background:center/contain no-repeat url('https://fast.wistia.com/embed/medias/${WISTIA_ID}/swatch');display:block;filter:blur(5px);}`}</style>
      <div className="relative w-full aspect-video">
        {/* @ts-ignore */}
        <wistia-player
          media-id={WISTIA_ID}
          aspect="1.7777777777777777"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </>
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
          <VideoFrame />
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
          Step 2 of 2: Apply To Learn AI Digital Ecom ⬇️
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
