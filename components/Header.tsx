"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBars3, HiXMark } from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      firstLinkRef.current?.focus();
    } else {
      buttonRef.current?.focus();
    }
  }, [menuOpen]);
  return (
    <header className="relative mx-auto flex max-w-[1040px] items-center justify-between px-8 pt-9">
      <a
        href="#main-content"
        className="absolute left-[-999px] top-auto z-[100] rounded-[3px] bg-indigo px-4 py-2.5 text-paper focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Link
        href="/"
        className="-m-1.5 inline-block rounded p-1.5 text-[16px] font-semibold text-ink transition-transform hover:scale-105 active:scale-95 hover:text-indigo]"
      >
        Brenton J Hippler
      </Link>

      <div className="hidden items-center gap-6 md:flex">
        <nav aria-label="Primary">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`ml-7 text-[14.5px] transition-colors ${
                  isActive
                    ? "font-semibold text-indigo"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>

      <button
        ref={buttonRef}
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-panel text-ink transition-colors hover:border-indigo hover:text-indigo md:hidden"
      >
        {menuOpen ? (
          <HiXMark size={20} aria-hidden="true" />
        ) : (
          <HiBars3 size={20} aria-hidden="true" />
        )}
      </button>

      {menuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="absolute left-0 right-0 top-full z-50 mx-8 mt-3 flex flex-col gap-1 rounded-md border border-line bg-panel p-4 shadow-[0_8px_24px_rgba(0,0,0,0.12)] md:hidden"
        >
          <nav aria-label="Primary" className="flex flex-col">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded px-2 py-2.5 text-[15px] transition-colors ${
                    isActive
                      ? "font-semibold text-indigo"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-2 flex items-center justify-between border-t border-line px-2 pt-3">
            <span className="text-[13px] text-ink-soft">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
