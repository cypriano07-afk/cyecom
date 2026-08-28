import { CyresellsHero } from "@/components/cyresells/hero"
import { VslStep1, VslStep2 } from "@/components/cyresells/vsl-block"
import { CyresellsTestimonials } from "@/components/cyresells/testimonials"
import { CyresellsCta } from "@/components/cyresells/cta-section"
import { FloatingGrid } from "@/components/cyresells/floating-grid"

function BottomBlend({ to }: { to: string }) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-20"
      style={{ background: `linear-gradient(to bottom, transparent, ${to})` }}
    />
  )
}

export default function CyresellsPage() {
  return (
    <main className="bg-[#0E0D09] min-h-screen overflow-x-hidden flex flex-col items-center">

      <div className="relative w-full">
        <CyresellsHero />
        <BottomBlend to="#10100D" />
      </div>

      <div className="relative w-full bg-[#10100D] flex flex-col items-center pt-8 pb-20 md:pt-10 md:pb-24 px-4 md:px-6">
        <FloatingGrid position="bottom-left" />
        <div className="relative z-10 w-full max-w-[1220px]">
          <VslStep1 />
        </div>
        <BottomBlend to="#080807" />
      </div>

      <div className="relative w-full bg-[#080807] flex flex-col items-center py-20 md:py-24 px-4 md:px-6">
        <FloatingGrid position="left" />
        <div className="relative z-10 w-full max-w-[1220px]">
          <VslStep2 />
        </div>
        <BottomBlend to="#131210" />
      </div>

      <div className="relative w-full bg-[#131210] flex flex-col items-center py-20 md:py-24 px-4 md:px-6">
        <FloatingGrid position="bottom-right" />
        <div className="relative z-10 w-full max-w-[1220px]">
          <CyresellsTestimonials />
        </div>
        <BottomBlend to="#090908" />
      </div>

      <div className="relative w-full bg-[#090908] flex flex-col items-center py-20 md:py-24 px-4 md:px-6">
        <FloatingGrid position="top-left" />
        <div className="relative z-10 w-full max-w-[1220px]">
          <CyresellsCta />
        </div>
      </div>

    </main>
  )
}
