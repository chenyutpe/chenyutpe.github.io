import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // This tells Next.js to generate raw HTML/CSS/JS
  images: { unoptimized: true }, // GitHub Pages can't optimize images
  trailingSlash: true,
};

export default nextConfig;
