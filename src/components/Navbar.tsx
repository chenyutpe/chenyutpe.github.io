"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { header } from "framer-motion/m";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Publications", href: "/publications" },
  { name: "Projects", href: "/projects" },
  { name: "CV", href: "/cv" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 /* bg-cosmic-latte/40 dark:bg-cosmic-blue/40 backdrop-blur-xl shadow-sm dark:shadow-2xl border-b border-black/5 dark:border-white/5 theme-transition">
      <div className="flex justify-between items-center h-20 px-8 md:px-24 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold tracking-tighter">Yu Chen</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-organic-green transition-colors">
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <nav className="md:hidden bg-cosmic-latte dark:bg-cosmic-blue p-8 flex flex-col gap-6 border-b border-black/5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-bold">
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}