"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { emailLink } from "@/lib/content";

export function Navigation({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const prefix = home ? "" : "/";
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === "Escape" && open) { setOpen(false); button.current?.focus(); } };
    const outside = (event: PointerEvent) => { if (nav.current && !nav.current.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => { document.removeEventListener("keydown", close); document.removeEventListener("pointerdown", outside); };
  }, [open]);
  return <header className="site-header" ref={nav}>
    <Link href="/" className="brand" aria-label="Precious Godwin Chukwu home">
      <span className="logo-crop"><img src="/images/precious-logo.webp" alt="" width="1165" height="912" /></span>
      <span>Precious<br />Godwin Chukwu</span>
    </Link>
    <nav className="desktop-nav" aria-label="Main navigation">
      <a href={`${prefix}#work`}>Work</a><a href={`${prefix}#services`}>Services</a><a href={`${prefix}#about`}>About</a>
    </nav>
    <a href={emailLink()} className="header-contact">Let’s talk <span aria-hidden="true">↗</span></a>
    <button ref={button} className="menu-toggle" aria-expanded={open} aria-controls={open ? "mobile-nav" : undefined} onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
    <AnimatePresence>{open && <motion.nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, y: reduced ? 0 : -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      {["Work", "Services", "About", "Contact"].map(name => <a key={name} href={`${prefix}#${name.toLowerCase()}`} onClick={() => setOpen(false)}>{name}</a>)}
    </motion.nav>}</AnimatePresence>
  </header>;
}
