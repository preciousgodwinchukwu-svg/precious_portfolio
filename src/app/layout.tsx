import type { Metadata, Viewport } from "next";
import "@fontsource-variable/hanken-grotesk";
import "lenis/dist/lenis.css";
import "./globals.css";
import { AnimationLayer } from "@/components/animation-layer";

export const metadata: Metadata = {
  title: { default: "Precious Godwin Chukwu | Social Media & Content Strategy", template: "%s | Precious Godwin Chukwu" },
  description: "Social media management, content strategy and AI-assisted storytelling by Precious Godwin Chukwu. Based in Abuja, working with brands internationally.",
  openGraph: { title: "Precious Godwin Chukwu", description: "Thoughtful content. A consistent presence. Social media management and content strategy.", type: "website", locale: "en_NG" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#173f35" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a>{children}<AnimationLayer /></body></html>;
}
