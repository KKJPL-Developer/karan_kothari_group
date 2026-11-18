import type { Metadata } from "next";
import BusinessWarehousing from "@/views/business-warehousing";

export const metadata: Metadata = {
  title: "Warehousing",
  description:
    "True Value Spaces — warehouse parks and storage infrastructure engineered for scale and reliability.",
};

export default function Page() {
  return <BusinessWarehousing />;
}
