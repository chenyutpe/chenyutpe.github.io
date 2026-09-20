"use client";
import { useTheme } from "next-themes";
import { SunMedium, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all active:scale-90"
    >
      <SunMedium className="w-5 h-5 text-organic-dark block dark:hidden" />
      <Moon className="w-5 h-5 text-organic-strong hidden dark:block" />
      <span className="sr-only">Toggle Theme</span>
    </button>
  );
}
