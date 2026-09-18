import type { Metadata } from "next";
import Work from "@/components/Work";

export const metadata: Metadata = {
  title: "Work — Brenton J Hippler",
  description:
    "Selected projects by Brenton J Hippler — Next.js and Firebase applications, freelance builds, and civic tools.",
};

export default function WorkPage() {
  return <Work />;
}
