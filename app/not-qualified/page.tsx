import { FloatingGrid } from "@/components/cyresells/floating-grid"
import Script from "next/script"

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
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
        <p className="text-[#C9A84C] font-bold text-xl md:text-2xl lg:text-3xl uppercase tracking-wider">
          Application Received
        </p>
        <p className="text-white/90 text-base md:text-lg leading-relaxed">
          Thank you for applying. Based on your current budget, we're unable to offer a strategy call at this time. We'll review your application and contact you if we're a good fit.
        </p>
        <p
          className="mt-6 text-3xl md:text-5xl font-extrabold text-[#FFD966] leading-snug"
          style={{
            textShadow:
              "0 0 10px rgba(255,217,102,0.9), 0 0 25px rgba(255,217,102,0.7), 0 0 45px rgba(201,168,76,0.6), 0 0 80px rgba(201,168,76,0.45)",
          }}
        >
          Watch this full Free Training to prepare for the future chance to qualify
        </p>
        <div className="w-full max-w-2xl mt-4">
          <div className="wistia_responsive_padding" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <div className="wistia_responsive_wrapper" style={{ height: "100%", left: 0, position: "absolute", top: 0, width: "100%" }}>
              <div className="wistia_embed wistia_async_qnr1yuymkc seo=true videoFoam=true" style={{ height: "100%", position: "relative", width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
      <Script src="https://fast.wistia.com/embed/medias/qnr1yuymkc.jsonp" strategy="lazyOnload" />
      <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="lazyOnload" />
    </main>
  )
}
