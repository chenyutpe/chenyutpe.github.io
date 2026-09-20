import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "CV",
  "Yu Chen's curriculum vitae, including education, research and professional experience, and skills in development, creative work, and research.",
  "/cv/",
);

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return children;
}
