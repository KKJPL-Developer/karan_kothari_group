import type { Metadata } from "next";
import BusinessJewellery from "@/views/business-jewellery";

export const metadata: Metadata = {
  title: "Jewellery",
  description:
    "Karan Kothari Jewellers — craftsmanship, trust and timeless design, with showrooms across five cities.",
};

export default function Page() {
  return <BusinessJewellery />;
}
