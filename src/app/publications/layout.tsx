import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Publications",
  "Browse Yu Chen's research publications in human-computer interaction and XR, including work presented at CHI, UIST, DIS, and MobileHCI.",
  "/publications/",
);

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
