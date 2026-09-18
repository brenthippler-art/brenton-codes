"use client";

import { useState } from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const EMAIL = "brenton@brentoncodes.dev";

export default function Contact() {
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
    <section
      aria-labelledby="contact-heading"
      className="mx-auto max-w-[1040px] px-8 py-[72px]"
    >
      <div className="mb-3.5 text-[13px] font-semibold text-indigo">
        Contact
      </div>
      <h2
        id="contact-heading"
        className="font-display mb-10 text-[28px] font-semibold"
      >
        Get in touch
      </h2>
      <p className="mb-6 max-w-[52ch] text-[17px] text-ink-soft">
        Based in Bowling Green, Kentucky. Open to freelance work and new
        projects — reach out any time.
      </p>

      <div className="mt-1 flex flex-col items-start gap-3">
        <p className="m-0 text-[13px] font-semibold text-indigo">Email</p>
        <div className="group relative">
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Email copied" : "Copy email address"}
            className="m-0 inline-block cursor-pointer border-none bg-transparent pb-8 text-[22px] font-semibold text-ink transition-transform duration-150 ease-out hover:scale-105 hover:text-indigo-dark active:scale-95"
          >
            {EMAIL}
          </button>
          <span className="pointer-events-none absolute bottom-[125%] left-0 whitespace-nowrap rounded bg-indigo px-2.5 py-1.5 text-sm text-paper opacity-0 transition-all group-hover:-translate-y-1 group-hover:opacity-100">
            {copied ? "Copied!" : "Click to copy"}
          </span>
          <span className="sr-only" role="status">
            {copied ? "Email address copied to clipboard" : ""}
          </span>
        </div>

        <p className="m-0 text-[13px] font-semibold text-indigo">Links</p>
        <div className="flex gap-5">
          <a
            href="https://github.com/brenthippler-art"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel text-ink transition-transform duration-150 ease-out hover:scale-110 hover:border-indigo hover:bg-indigo hover:text-paper hover:shadow-[0_4px_12px_rgba(46,62,104,0.3)] active:scale-95"
          >
            <FaGithubSquare size={20} aria-hidden="true" />
            <span className="pointer-events-none absolute bottom-[125%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-indigo px-2.5 py-1.5 text-sm text-paper opacity-0 transition-all group-hover:-translate-y-1 group-hover:opacity-100 group-focus-visible:-translate-y-1 group-focus-visible:opacity-100">
              GitHub
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/brenton-hippler-818b6397/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-line bg-panel text-ink transition-transform duration-150 ease-out hover:scale-110 hover:border-indigo hover:bg-indigo hover:text-paper hover:shadow-[0_4px_12px_rgba(46,62,104,0.3)] active:scale-90"
          >
            <FaLinkedin size={20} aria-hidden="true" />
            <span className="pointer-events-none absolute bottom-[125%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-indigo px-2.5 py-1.5 text-sm text-paper opacity-0 transition-all group-hover:-translate-y-1 group-hover:opacity-100 group-focus-visible:-translate-y-1 group-focus-visible:opacity-100">
              LinkedIn
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
