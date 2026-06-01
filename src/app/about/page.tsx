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
          <h1 className="text-5xl font-bold tracking-tighter">Hi, I&apos;m <span className="text-organic-strong">Yu Chen.</span></h1>
          <div className="text-lg opacity-80 leading-relaxed space-y-4 font-light">
            <p>
              I am a Master's graduate in Computer Science from National Taiwan University (CSIE), specializing in Human-Computer Interaction (HCI) and Extended Reality (XR).
            </p>
            <p>
              I consider myself a <span className="text-organic-strong font-bold">meticulous observer</span> and a <span className="text-organic-strong font-bold">critical thinker</span>. This mindset allows me to identify nuances that others might overlook.
              With this sensitivity, I contributed to ten publications across top HCI venues (ACM CHI, UIST, DIS, MobileHCI), receiving two Honorable Mentions. Most recently, my debut first-author work was recognized with a  <span className="text-organic-strong font-bold">Best Paper Award at CHI 2026</span>.
            </p>
          </div>
        </motion.div>

        {/* PHOTO SIDE */}
        <motion.div variants={itemVariants} className="md:col-span-2">
          <div className="aspect-4/5 relative rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 bg-slate-200 dark:bg-slate-800">
             <Image src="/CHI_PHOTO_LOGO.jpg" alt="Yu Chen at CHI 2026" fill className="object-cover" />
          </div>
        </motion.div>
        
      </section>

      {/* BOTTOM SECTION: THE SLOGAN */}
      <motion.section 
        variants={itemVariants} 
        className="max-w-3xl mx-auto text-center flex flex-col gap-3 md:gap-4"
      >
        <h2 className="text-2xl md:text-3xl font-light text-foreground/90 tracking-tight">
          My goal is to create <span className="font-semibold text-organic-strong">meaningful and reflective interactions</span>
        </h2>
        <p className="text-base md:text-lg font-light text-foreground/50 tracking-wide">
          Experiences that endure despite the rapid cycles of emerging technology.
        </p>
      </motion.section>

    </motion.div>
  );
}