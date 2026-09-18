import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brentoncodes.dev"),
  title: "Brenton J Hippler — Frontend Developer",
  description:
    "Brenton J Hippler — frontend developer in Bowling Green, Kentucky. Next.js and Firebase applications.",
  alternates: {
    canonical: "https://brentoncodes.dev",
  },
  openGraph: {
    type: "website",
    url: "https://brentoncodes.dev",
    title: "Brenton J Hippler - Frontend Developer",
    description:
      "Frontend Developer in Bowling Green, Kentucky. React and Firebase applications. Open to freelance work and remote roles.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brenton J Hippler — Frontend Developer",
    description:
      "Frontend developer in Bowling Green, Kentucky. React and Firebase applications.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#171613" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var stored = localStorage.getItem("theme");
                var theme =
                  stored || (window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light");
                document.documentElement.setAttribute("data-theme", theme);
              })();
            `,
          }}
        />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
