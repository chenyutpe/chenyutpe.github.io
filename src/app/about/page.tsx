"use client";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import Image from "next/image";

export default function AboutPage() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto px-8 pt-32 pb-20"
    >
      {/* 1. Hero Intro */}
      <section className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-24">
        <motion.div variants={itemVariants} className="md:col-span-3 space-y-6">
          <h1 className="text-5xl font-bold tracking-tighter">Hi, I&apos;m <span className="text-organic-strong">Yu Chen</span>.</h1>
          <div className="text-lg opacity-80 leading-relaxed space-y-4 font-light">
            <p>
              I am a Master's graduate in Computer Science from National Taiwan University (CSIE), with a focus on Human-Computer Interaction (HCI) and Creative Technology.
            </p>
            <p>
              I consider myself a <span className="text-organic-strong font-bold">meticulous observer</span> and a <span className="text-organic-strong font-bold">critical thinker</span>, and have found that this sensitivity allows me to identify nuances that others might overlook.
            </p>
            <p>
              This approach drove my academic research. Alongside contributing to nine publications across top HCI venues (CHI, UIST, DIS, and MobileHCI) with two Honorable Mention Awards, Most recently, I received a <span className="text-organic-strong font-bold">Best Paper Award at CHI 2026</span> for my debut first-author work.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-2">
          {/* Placeholder for an informal photo (e.g., at a conference or lab) */}
          <div className="aspect-4/5 relative rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-slate-200 dark:bg-slate-800">
             <Image src="/CHI_PHOTO_LOGO.jpg" alt="Yu Chen at CHI 2026" fill className="object-cover" />
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}