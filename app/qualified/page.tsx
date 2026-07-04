import { FloatingGrid } from "@/components/cyresells/floating-grid"

export const metadata = {
  title: "Application Qualified | AI Digital Ecom",
}

export default function QualifiedPage() {
  return (
    <main className="bg-[#0E0D09] min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 text-center relative overflow-hidden">
      <FloatingGrid />
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-[#C9A84C] font-bold text-xl md:text-2xl lg:text-3xl uppercase tracking-wider">
          Application Received
        </h1>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">
          Thank you for applying — you've qualified! Book a call with us below to take the next step.
        </p>
        <a
          href="https://calendly.com/cyresellss1/1-on-1-discovery-call-ai-digital-ecom"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block bg-[#C9A84C] text-[#0E0D09] font-bold px-8 py-4 rounded-lg uppercase tracking-wider hover:opacity-90 transition-opacity"
        >
          Book Your Call
        </a>
      </div>
    </main>
  )
}
