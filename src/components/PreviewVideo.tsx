"use client";

import { useEffect, useRef } from "react";

export default function PreviewVideo({ src, label, controls = false, className }: {
  src: string;
  label: string;
  controls?: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePlayback = () => {
      video.autoplay = !preference.matches;
      if (preference.matches) video.pause();
      else void video.play().catch(() => { /* Autoplay may be blocked by the browser. */ });
    };
    updatePlayback();
    preference.addEventListener("change", updatePlayback);
    return () => preference.removeEventListener("change", updatePlayback);
  }, [src]);

  return <video ref={videoRef} src={src} aria-label={label} loop muted playsInline
    preload="metadata" controls={controls} className={className} />;
}
