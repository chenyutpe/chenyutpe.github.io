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
      className="max-w-4xl mx-auto px-8 pt-26 pb-20"
    >
      {/* TOP SECTION: BIO & PHOTO */}
      <section className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-24">
        {/* TEXT SIDE */}
        <motion.div variants={itemVariants} className="md:col-span-3 space-y-6">
          <h1 className="text-5xl font-bold tracking-tighter"><span className="theme-text">Hi, I&apos;m </span><span className="whitespace-nowrap theme-text text-organic-strong">Yu Chen.</span></h1>
          <div className="text-lg opacity-80 leading-relaxed space-y-4 font-light">
            <p className="theme-text">
              I am a Master&apos;s graduate in Computer Science from National Taiwan University (CSIE), specializing in Human-Computer Interaction (HCI) and Extended Reality (XR).
            </p>
            <p>
              <span className="theme-text">I consider myself a </span><span className="theme-text text-organic-strong font-bold">meticulous observer</span><span className="theme-text"> and a </span><span className="theme-text text-organic-strong font-bold">critical thinker</span><span className="theme-text">. This mindset allows me to identify nuances that others might overlook.
              With this sensitivity, I contributed to ten publications across top HCI venues (ACM CHI, UIST, DIS, MobileHCI), receiving two Honorable Mentions. Most recently, my debut first-author work was recognized with a  </span><span className="theme-text text-organic-strong font-bold">Best Paper Award at CHI 2026</span><span className="theme-text">.</span>
            </p>
            <p className="theme-text">
              I currently work as a Software Engineer at TSMC, exploring a new domain and taking on real-world engineering challenges where reliability, precision, and thoughtful decisions matter.
            </p>
          </div>
        </motion.div>

        {/* PHOTO SIDE */}
        <motion.div variants={itemVariants} className="md:col-span-2">
          <div className="aspect-4/5 relative rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl rotate-2 hover:rotate-0 motion-reduce:rotate-0 transition-transform duration-500 bg-slate-200 dark:bg-slate-800">
            <picture>
              <source
                srcSet="/images/chi-photo-720.webp 720w, /images/chi-photo-1440.webp 1440w"
                sizes="(min-width: 768px) 320px, calc(100vw - 64px)"
                type="image/webp"
              />
              <Image src="/images/chi-photo-720.webp" alt="Yu Chen at CHI 2026" fill className="object-cover" />
            </picture>
          </div>
        </motion.div>
        
      </section>

      {/* BOTTOM SECTION: THE SLOGAN */}
      <motion.section 
        variants={itemVariants} 
        className="w-full mx-auto text-center flex flex-col gap-3 md:gap-4"
      >
        <h2 className="text-2xl md:text-3xl font-light tracking-tight text-balance">
          <span className="theme-text">My goal is to create </span><span className="inline-block max-w-full font-semibold theme-text text-organic-strong">meaningful and reflective interactions</span>
        </h2>
        <p className="text-base md:text-lg font-light theme-text text-foreground/80 tracking-wide">
          Experiences that endure despite the rapid cycles of emerging technology.
        </p>
      </motion.section>

    </motion.div>
  );
}
