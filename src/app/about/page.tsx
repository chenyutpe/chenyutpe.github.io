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
              Over my academic career, I contributed to nine publications across top HCI venues—including CHI, UIST, DIS, and MobileHCI—earning two Honorable Mention Awards along the way. Most recently, this focus culminated in a <span className="text-organic-strong font-bold">Best Paper Award at CHI 2026</span> for my debut first-author work.
            </p>
            <p>
                
            </p>
            <p>
                
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-2">
          {/* Placeholder for an informal photo (e.g., at a conference or lab) */}
          <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-slate-200 dark:bg-slate-800">
             {/* <Image src="/about-photo.jpg" alt="Yu Chen at Lab" fill className="object-cover" /> */}
             <div className="absolute inset-0 flex items-center justify-center text-xs opacity-20 italic">Photo Placeholder</div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}