import type { Metadata } from "next";
import Journey from "@/views/journey";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "The Karan Kothari story, told in three parts — where it began, where it stands today, and where it's headed.",
};

export default function Page() {
  return <Journey />;
}
