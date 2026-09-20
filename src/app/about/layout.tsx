import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "About",
  "Learn about Yu Chen's background in human-computer interaction and XR, and his interest in creating meaningful and reflective interactions.",
  "/about/",
);

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
