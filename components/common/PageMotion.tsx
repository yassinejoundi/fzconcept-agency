"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function PageMotion() {
  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("[data-fz-image]").forEach((image) => {
        gsap.fromTo(image, { scale: 0.94, opacity: 0.7 }, {
          scale: 1, opacity: 1, ease: "none",
          scrollTrigger: { trigger: image, start: "top bottom", end: "center 55%", scrub: true },
        })
      })
      gsap.utils.toArray<HTMLElement>("[data-fz-pin]").forEach((chapter) => {
        const heading = chapter.querySelector<HTMLElement>("[data-fz-pin-heading]")
        if (!heading) return
        ScrollTrigger.create({ trigger: chapter, pin: heading, pinSpacing: false, start: "top 110px", end: "bottom 70%" })
      })
    })
    return () => media.revert()
  })

  return null
}
