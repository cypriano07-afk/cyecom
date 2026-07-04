export const metadata = {
  title: "Application Received | AI Digital Ecom",
}

export default function NotQualifiedPage() {
  return (
    <main className="bg-[#0E0D09] min-h-screen flex flex-col items-center justify-center px-4 md:px-6 py-20 text-center">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
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
