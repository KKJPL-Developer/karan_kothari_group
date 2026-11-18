import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Self-hosted (latin, variable wght 400–600). Google sometimes serves Cormorant
// from `/l/font?kit=…` URLs, which Turbopack's next/font/google loader can't resolve.
const cormorant = localFont({
  variable: "--font-cormorant",
  src: [
    { path: "./fonts/CormorantGaramond.woff2", weight: "400 600", style: "normal" },
    { path: "./fonts/CormorantGaramond-Italic.woff2", weight: "400 600", style: "italic" },
  ],
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: {
    default: "Karan Kothari Group | Jewellery, Commercial Real Estate & Warehousing",
    template: "%s | Karan Kothari Group",
  },
  description:
    "Karan Kothari Group is a Nagpur-based business group with interests in jewellery, commercial real estate and warehousing infrastructure.",
  keywords: [
    "Karan Kothari Group",
    "Karan Kothari Jewellers",
    "Karan Kothari Business Park",
    "True Value Spaces",
    "Nagpur",
  ],
  openGraph: {
    title: "Karan Kothari Group",
    description:
      "A Nagpur-based business group with interests in jewellery, commercial real estate and warehousing infrastructure.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <noscript>
          <style>{`.reveal, .reveal .stagger > *, .reveal .draw-x { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <div id="main" className="flex-1">
          {children}
        </div>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
