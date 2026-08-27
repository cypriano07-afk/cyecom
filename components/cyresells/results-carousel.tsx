"use client"

import { createElement as h } from "react"
import { AnimatedSection } from "./animated-section"

const results = [
    "/images/results/result-1.png",
    "/images/results/result-2.png",
    "/images/results/result-3.png",
    "/images/results/result-4.png",
    "/images/results/result-5.png",
    "/images/results/result-6.png",
    "/images/results/result-7.png",
    "/images/results/result-8.png",
    "/images/results/result-9.png",
    "/images/results/result-10.png",
    ]

function ResultCard({ src, index }) {
    const isChat = index === 3

return h(
    "div",
    {
        className:
            "relative shrink-0 w-[190px] md:w-[230px] h-[300px] md:h-[360px] rounded-2xl border border-white/10 bg-[#0a0908] shadow-2xl shadow-black/60 overflow-hidden flex items-center justify-center",
    },
    h("img", {
        src: src,
        alt: "Student result screenshot " + (index + 1),
        className: isChat
        ? "w-full h-full object-cover object-bottom"
            : "w-full h-full object-contain",
        loading: "lazy",
    })
    )
}

export function ResultsCarousel() {
    const loop = [...results, ...results]

return h(
    "div",
    { className: "w-full flex flex-col gap-8" },
    h(
        AnimatedSection,
        null,
        h(
            "div",
            { className: "text-center" },
            h(
                "p",
                {
                    className:
                        "text-white/50 text-sm uppercase tracking-widest font-semibold mb-2",
                },
                "The proof keeps coming in"
                ),
            h(
                "h2",
                {
                    className:
                        "text-[#8FCB9B] text-2xl md:text-3xl lg:text-4xl font-bold",
                },
                "More Student Results"
                )
            )
        ),
    h(
        AnimatedSection,
        { delay: 0.1 },
        h(
            "div",
            {
                className:
                    "relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
            },
            h(
                "div",
                { className: "flex gap-6 w-max animate-results-scroll" },
                loop.map((src, i) =>
                    h(ResultCard, { key: i, src: src, index: i % results.length })
                         )
                )
            )
        )
    )
}
