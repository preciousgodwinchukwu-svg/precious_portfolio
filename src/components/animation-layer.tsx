"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export function AnimationLayer() {
  const pathname = usePathname();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        if (document.querySelector(".hero")) {
          gsap.from(".hero-name .name-line", { yPercent: 32, opacity: 0.65, duration: 1, ease: "expo.out", stagger: 0.09 });
          gsap.from(".hero-description, .hero-picture", { y: 20, duration: 0.9, ease: "power3.out", stagger: 0.1 });
        }
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.from(el, { y: el.matches("h2, h3, h4") ? 28 : 18, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 94%", once: true } });
        });
        gsap.utils.toArray<HTMLElement>(".project-image").forEach((el) => {
          gsap.from(el, { scale: 1.04, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 92%", once: true } });
        });
      });
      return () => context.revert();
    });
    media.add("(min-width: 900px) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({ lerp: 0.12, smoothWheel: true, anchors: true });
      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      const context = gsap.context(() => {
        if (document.querySelector(".hero")) {
          gsap.to(".hero-picture img", { yPercent: 6, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
        }
        gsap.to(".footer-name", { yPercent: -7, ease: "none", scrollTrigger: { trigger: ".site-footer", start: "top bottom", end: "bottom bottom", scrub: true } });
      });
      return () => { context.revert(); gsap.ticker.remove(tick); lenis.destroy(); };
    });
    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(refresh);
    window.addEventListener("load", refresh);
    return () => { window.removeEventListener("load", refresh); media.revert(); };
  }, [pathname]);
  return null;
}
