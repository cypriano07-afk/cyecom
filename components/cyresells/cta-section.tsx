"use client"

import { AnimatedSection } from "./animated-section"

export function CyresellsCta() {
  function scrollToStep2() {
    const el = document.getElementById("cyresells-step2")
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="w-full max-w-3xl mx-auto pb-24 text-center">
      <AnimatedSection>
        <div className="rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/5 p-8 md:p-12 flex flex-col items-center gap-5">
          {/* Accent line */}
          <div className="w-12 h-0.5 bg-[#C9A84C] rounded-full" />

          <h2 className="text-white text-2xl md:text-3xl font-bold">
            Ready to start AI Digital Ecom?
          </h2>
          <p className="text-white/60 text-base max-w-md">
            Spots are limited. Apply now and lock in your early access before
            doors close.
          </p>

          <button
            onClick={scrollToStep2}
            className="mt-2 bg-[#C9A84C] hover:bg-[#b8973e] text-black font-bold text-base px-8 py-3 rounded-full transition-colors duration-200 shadow-lg shadow-[#C9A84C]/20"
          >
            Apply Now ⬇️
          </button>
        </div>
      </AnimatedSection>
    </section>
  )
}
