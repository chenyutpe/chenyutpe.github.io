"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Publications", href: "/publications" },
  // { name: "Projects", href: "/projects" },
  { name: "CV", href: "/cv" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <header onKeyDown={(event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    }} className="fixed top-0 w-full z-50 bg-cosmic-latte/40 dark:bg-cosmic-blue/40 backdrop-blur-xl shadow-sm dark:shadow-2xl border-b border-black/5 dark:border-white/5 theme-transition">
      <div className="flex justify-between items-center h-20 px-8 md:px-24 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold tracking-tighter">Yu Chen</Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            
            const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
            
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                aria-current={isActive ? "page" : undefined}
                className={`navbar-link text-sm font-medium relative py-1
                  ${isActive 
                    ? "text-organic-strong opacity-100"
                    : "text-foreground hover:text-organic-strong"
                  }`}
              >
                {link.name}
                
                {/* The Subtle Active Indicator*/}
                {/* {isActive && (
                  <span className=" absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-[2px] rounded-sm bg-organic-green shadow-[0_0_8px_rgba(160,212,160,0.8)]" />
                )} */}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-2 md:hidden ml-auto">
          <ThemeToggle />
          <button 
            ref={menuButton}
            type="button"
            aria-label="Navigation"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-foreground hover:text-organic-strong rounded-full hover:bg-black/5 dark:hover:bg-white/10 active:scale-90"
          >
            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>
      
      {/* MOBILE MENU DRAWER */}
      <div id="mobile-navigation">
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            aria-label="Main navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden backdrop-blur-2xl border-b border-black/5 dark:border-white/5"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname?.startsWith(`${link.href}/`);
                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsOpen(false)} 
                    className={`navbar-link text-2xl font-bold tracking-tight transition-colors flex items-center justify-between
                      ${isActive 
                      ? "text-organic-strong opacity-100"
                      : "text-foreground hover:text-organic-strong"
                    }`}
                  >
                    {link.name}
                    {/* {isActive && (
                      <motion.span 
                        layoutId="activeDotMobile"
                        className="w-2 h-2 bg-organic-green rounded-full shadow-[0_0_10px_rgba(160,212,160,0.8)]" 
                      />
                    )} */}
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      </div>
    </header>
  );
}
