"use client";

import { useState } from "react";
import Link from "next/link";

const EMAIL = "brenton@brentoncodes.dev";

export default function NotFound() {
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
      aria-labelledby="notfound-heading"
      className="mx-auto max-w-[1040px] px-8 py-[72px]"
    >
      <div className="mb-3.5 text-[13px] font-semibold text-indigo">404</div>
      <h2
        id="notfound-heading"
        className="font-display mb-10 text-[28px] font-semibold"
      >
        This route never made it to production
      </h2>
      <p className="mb-6 max-w-[52ch] text-[17px] text-ink-soft">
        Somewhere between the URL bar and this page, the shipment got lost —
        which is a little on the nose for a guy who used to work in logistics.
        There&apos;s no tracking number for this one, but{" "}
        <Link href="/" className="text-indigo hover:text-indigo-dark">
          the way back home
        </Link>{" "}
        is right here.
      </p>

      <div className="mt-1 flex flex-col items-start gap-3">
        <p className="m-0 text-[13px] font-semibold text-indigo">
          Found a broken link? Let me know:
        </p>
        <div className="group relative">
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Email copied" : "Copy email address"}
            className="m-0 inline-block cursor-pointer border-none bg-transparent p-0 text-[22px] font-semibold text-indigo transition-transform duration-150 ease-out hover:scale-105 hover:text-indigo-dark active:scale-95"
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
      </div>
    </section>
  );
}
