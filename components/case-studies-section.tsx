const caseStudies = [
  { id: "xuYP5DpTRBM", title: "Client Case Study 1" },
  { id: "-i708XatP8U", title: "Client Case Study 2" },
]

export function CaseStudiesSection() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14">
      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]">
            Client case studies
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-relaxed">
            See how our clients are achieving real results
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-6 max-w-[1100px] mx-auto">
        {caseStudies.map((video) => (
          <div key={video.id} className="flex-1 w-full overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] outline outline-1 outline-border outline-offset-[-1px] bg-card">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
