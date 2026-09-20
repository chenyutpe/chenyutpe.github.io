import type { Metadata } from "next";

export const siteUrl = "https://chenyutpe.github.io";
export const siteDescription = "Yu Chen's personal website: selected work, publications, and experience in human-computer interaction, XR, and creative technology.";

// Keep browser, search, and sharing descriptions together for each page.
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle = title === "Yu Chen" ? title : `${title} | Yu Chen`;
  const image = {
    url: "/social-preview.png",
    width: 1200,
    height: 630,
    alt: "Yu Chen — HCI & XR | Creative Technology",
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Yu Chen",
      title: fullTitle,
      description,
      url: path,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
