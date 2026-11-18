import type { Metadata } from "next";
import Businesses from "@/views/ventures";

export const metadata: Metadata = {
  title: "Ventures",
  description:
    "Karan Kothari Jewellers, Karan Kothari Business Park and True Value Spaces — the ventures built under the Karan Kothari Group.",
};

export default function Page() {
  return <Businesses />;
}
