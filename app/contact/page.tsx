import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — Brenton J Hippler",
  description:
    "Get in touch with Brenton J Hippler, a frontend developer in Bowling Green, Kentucky, open to freelance work and new projects.",
};

export default function ContactPage() {
  return <Contact />;
}
