"use client";

import { useState } from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const EMAIL = "brenton@brentoncodes.dev";

export default function Footer() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = EMAIL;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer className="mx-auto flex max-w-[1040px] flex-col items-center gap-6 border-t border-line px-8 pb-16 pt-12 text-center text-[14.5px] text-ink-soft md:flex-row md:flex-wrap md:items-stretch md:justify-between md:gap-y-5 md:text-left">
      <div>Bowling Green, KY</div>

      <div className="group relative">
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Email copied" : "Copy email address"}
          className="m-0 inline-block cursor-pointer border-none bg-transparent p-0 text-inherit transition-transform duration-150 ease-out hover:scale-105 hover:text-indigo active:scale-95"
        >
          {EMAIL}
        </button>
        <span className="pointer-events-none absolute bottom-[125%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-indigo px-2.5 py-1.5 text-sm text-paper opacity-0 transition-all group-hover:-translate-y-1 group-hover:opacity-100">
          {copied ? "Copied!" : "Click to copy"}
        </span>
        <span className="sr-only" role="status">
          {copied ? "Email address copied to clipboard" : ""}
        </span>
      </div>

      <div className="hidden basis-full md:block" aria-hidden="true" />

      <div className="text-[13px] text-ink-soft" suppressHydrationWarning>
        © {year} Brenton Hippler. All rights reserved.
      </div>

      <div className="flex gap-4">
        <a
          href="https://github.com/brenthippler-art"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-panel text-ink-soft transition-transform duration-150 ease-out hover:scale-105 hover:border-indigo hover:text-indigo active:scale-95"
        >
          <FaGithubSquare size={18} aria-hidden="true" />
        </a>

        <a
          href="https://www.linkedin.com/in/brenton-hippler-818b6397/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-panel text-ink-soft transition-transform duration-150 ease-out hover:scale-105 hover:border-indigo hover:text-indigo active:scale-95"
        >
          <FaLinkedin size={18} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
