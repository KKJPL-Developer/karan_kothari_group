import type { ReactNode } from "react";

// Remounted on every navigation, so each page fades in softly.
export default function Template({ children }: { children: ReactNode }) {
  return <div className="animate-page-in">{children}</div>;
}
