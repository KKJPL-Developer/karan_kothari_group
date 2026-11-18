import type { Metadata } from "next";
import About from "@/views/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Karan Kothari Group's story, legacy and shared philosophy — the thinking that connects jewellery, commercial real estate and warehousing infrastructure under one Group.",
};

export default function Page() {
  return <About />;
}
