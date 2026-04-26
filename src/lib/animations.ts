// src/lib/animations.ts
import { Variants } from "framer-motion";

/**
 * Parent container that staggers the appearance of its children
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/**
 * Standard entrance for individual items (cards, headers, text blocks)
 */
export const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 15 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] // Custom "quintic" ease-out for a more premium feel
    }
  },
};

/**
 * Subtle fade for backgrounds or decorative elements
 */
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 1 }
  }
};