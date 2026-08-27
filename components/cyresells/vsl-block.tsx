"use client"

import Script from "next/script"
import { useEffect } from "react"
import { AnimatedSection } from "./animated-section"

const WISTIA_ID = "zvdenmbtkm"
const TALLY_FORM_ID = "eqP5JE"

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

// Embeds the Tally lead qualification form (official Tally embed method).
// Qualification logic (budget-based) and redirects (Calendly for qualified
// leads, /not-qualified for unqualified leads) are configured inside the
// Tally form itself via conditional logic + "Redirect on completion".
function TallyFrame() {
  useEffect(() => {
    const loadEmbeds = () => {
      // @ts-ignore
      if (window.Tally) {
        // @ts-ignore
        window.Tally.loadEmbeds()
      }
    }

    // @ts-ignore
    if (window.Tally) {
      loadEmbeds()
      return
    }

    const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]')
    if (existingScript) {
      existingScript.addEventListener("load", loadEmbeds)
      return () => existingScript.removeEventListener("load", loadEmbeds)
    }
  }, [])

  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds()
          }
        }}
      />
      <iframe
        data-tally-src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
        loading="lazy"
        width="100%"
        height="1050"
        title="Ai Digital Ecom Application"
        className="w-full"
        style={{ border: "none" }}
      />
    </>
  )
}

export function VslStep1() {
  return (
    <AnimatedSection delay={0.1} className="w-full max-w-[95vw] md:max-w-[65vw] mx-auto">
      <div className="flex flex-col gap-5">
        <p className="text-[#8FCB9B] font-bold text-xl md:text-2xl lg:text-3xl uppercase tracking-wider text-center">
          Step 1 of 2: Watch This Video ⬇️
        </p>
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(143,203,155,0.35)",
            boxShadow: "0 0 25px rgba(143,203,155,0.18), 0 0 60px rgba(143,203,155,0.07), 0 20px 60px rgba(0,0,0,0.6)",
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
        <p className="text-[#8FCB9B] font-bold text-xl md:text-2xl lg:text-3xl uppercase tracking-wider text-center">
          Step 2 of 2: Apply To Learn AI Digital Ecom ⬇️
        </p>
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: "1px solid rgba(143,203,155,0.35)",
            boxShadow: "0 0 25px rgba(143,203,155,0.18), 0 0 60px rgba(143,203,155,0.07), 0 20px 60px rgba(0,0,0,0.6)",
          }}
        >
          <TallyFrame />
        </div>
      </div>
    </AnimatedSection>
  )
}
