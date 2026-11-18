import type { Metadata } from "next";
import Contact from "@/views/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Karan Kothari Group for general or business enquiries.",
};

const first = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value);

export default async function Page(props: PageProps<"/contact">) {
  const { venture, type } = await props.searchParams;
  return <Contact venture={first(venture)} type={first(type)} />;
}
