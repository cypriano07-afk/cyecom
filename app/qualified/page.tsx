import { FloatingGrid } from "@/components/cyresells/floating-grid"

export const metadata = {
  title: "Application Qualified | AI Digital Ecom",
}

export default function QualifiedPage() {
  return (
    <main className="bg-[#0E0D09] min-h-screen flex flex-col items-center px-4 md:px-6 py-20 text-center relative overflow-hidden">
      <FloatingGrid />
      <div
        className="absolute right-[-200px] top-[-200px] w-[900px] h-[900px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.08) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
        <h1 className="text-[#C9A84C] font-bold text-xl md:text-2xl lg:text-3xl uppercase tracking-wider">
          Application Received
        </h1>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">
          Thank you for applying — you've qualified! Book a call with us below to take the next step.
        </p>
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto mt-8" style={{ height: "750px" }}>
        <iframe
          src="https://calendly.com/cyresellss1/1-on-1-discovery-call-ai-digital-ecom?month=2026-07"
          width="100%"
          height="100%"
          frameBorder={0}
          title="Book a call"
          className="rounded-lg bg-white"
        ></iframe>
      </div>
    </main>
  )
}
