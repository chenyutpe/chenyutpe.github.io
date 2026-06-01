"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { SiGooglescholar, SiGithub } from "react-icons/si";

const socials = [
  { icon: MdEmail, href: "mailto:chenyutpe@gmail.com" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/chenyutpe" },
  { icon: SiGooglescholar, href: "https://scholar.google.com.tw/citations?user=GCgPzX8AAAAJ" },
  { icon: SiGithub, href: "https://github.com/chenyutpe" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[45vh] flex flex-col md:flex-row items-center justify-center px-8 md:px-24 gap-8 md:gap-12 max-w-5xl mx-auto pt-24 md:pt-10">
      
      {/* Profile Pic - Closer Proximity */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative w-52 h-52 md:w-70 md:h-70 shrink-0">
        <div className="absolute inset-0 bg-organic-green/20 rounded-full blur-3xl" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-organic-green/30 shadow-xl">
          <Image src="/profile.png" alt="Yu Chen" fill className="object-cover" priority />
        </div>
      </motion.div>

      {/* Text Content */}
      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 text-center md:text-left space-y-4">
        <div>
          <h1 className="text-6xl font-bold tracking-tighter pb-1.5">Yu Chen</h1>
          <p className="text-lg font-medium tracking-widest uppercase text-organic-green">HCI & XR | Creative Technology</p>
        </div>
        
        <div className="max-w-xl text-sm md:text-base leading-relaxed opacity-70 font-light space-y-3">
          <p>I am a CS Master&apos;s graduate from National Taiwan University, specializing in Human-Computer Interaction (HCI) and Extended Reality (XR).</p>
          <p>As a meticulous observer and critical thinker, I leverage this sensitivity to identify nuances that others might overlook.</p>
        </div>

        <div className="flex gap-6 pt-2 justify-center md:justify-start">
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link">
              <s.icon size={22} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}