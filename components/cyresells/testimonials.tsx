"use client"

import { AnimatedSection } from "./animated-section"

const testimonials = [
  {
    name: "Kian",
    amount: "$11,107",
    videoId: "-i708XatP8U",
  },
  {
    name: "Sai",
    amount: "$5,232",
    videoId: "xuYP5DpTRBM",
  },
]

function TestimonialVideoCard({
  name,
  amount,
  videoId,
}: {
  name: string
  amount: string
  videoId: string
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="text-white font-bold text-base md:text-lg text-center">
        How{" "}
        <span className="text-[#C9A84C]">{name}</span>{" "}
        Made{" "}
        <span className="text-[#C9A84C]">{amount}</span>{" "}
        Last Month with AI Digital Ecom:
      </p>

      {/* Laptop frame */}
      <div className="rounded-2xl border border-white/10 bg-[#0a0908] shadow-2xl shadow-black/60 overflow-hidden">
        {/* Screen bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10 bg-[#111009]">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>

        {/* Video area */}
        <div className="relative w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={`How ${name} Made ${amount}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export function CyresellsTestimonials() {
  return (
    <section className="w-full max-w-5xl mx-auto pb-20 flex flex-col gap-8">
      <AnimatedSection>
        <div className="text-center mb-2">
          <p className="text-white/50 text-sm uppercase tracking-widest font-semibold mb-2">
            Results from real people
          </p>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
            They&apos;re already doing it.{" "}
            <span className="text-[#C9A84C]">You could be next.</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.15}>
            <TestimonialVideoCard {...t} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
