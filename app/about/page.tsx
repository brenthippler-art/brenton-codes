import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About — Brenton J Hippler",
  description:
    "Frontend developer in Bowling Green, Kentucky, with a background in logistics before transitioning to Next.js and Firebase development.",
};

export default function AboutPage() {
  return <About />;
}
