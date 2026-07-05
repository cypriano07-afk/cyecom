import { FloatingGrid } from "@/components/cyresells/floating-grid"

export const metadata = {
  title: "Application Received | AI Digital Ecom",
}

export default function NotQualifiedPage() {
  return (
    <main className="bg-[#0E0D09] min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 text-center relative overflow-hidden">
      <FloatingGrid />
      <div
        className="absolute right-[-200px] top-[-200px] w-[900px] h-[900px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.08) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
        <p className="text-[#C9A84C] font-bold text-xl md:text-2xl lg:text-3xl uppercase tracking-wider">
          Application Received
        </p>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">
          Thank you for applying. Based on your current budget, we're unable to offer a strategy call at this time. We'll review your application and contact you if we're a good fit.
        </p>
      </div>
    </main>
  )
}
