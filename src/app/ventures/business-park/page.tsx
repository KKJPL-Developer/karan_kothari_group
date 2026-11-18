import type { Metadata } from "next";
import BusinessPark from "@/views/business-park";

export const metadata: Metadata = {
  title: "Business Park",
  description:
    "Karan Kothari Business Park — a modern commercial destination in Nagpur, planned around connectivity and accessibility.",
};

export default function Page() {
  return <BusinessPark />;
}
