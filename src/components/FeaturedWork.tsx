"use client";
import { featuredWorks } from "@/data/works";
import { FileText, Video, Link as LinkIcon } from "lucide-react";
import { FormatAuthors, AwardBadge } from "./academic/ProjectUtils";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";

export default function FeaturedWork() {
  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="max-w-5xl mx-auto px-8 pb-32"
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold tracking-tighter mb-16">Featured Work</motion.h2>
      
      <div className="flex flex-col gap-28">
        {featuredWorks.map((p) => (
          <motion.div key={p.id} variants={itemVariants} className="flex flex-col lg:flex-row gap-12 items-start group">
            
            {/* MEDIA - Image or Video */}
            <div className="w-full lg:w-[50%] aspect-video relative rounded-2xl overflow-hidden bg-black/5 border border-black/5 dark:border-white/5 shadow-xl shrink-0">
              {p.mediaType === 'video' ? (
                <video src={p.mediaUrl} autoPlay loop muted playsInline controls className="w-full h-full object-cover" />
              ) : (
                <img src={p.mediaUrl} alt={p.title} className="w-full h-full object-cover" />
              )}
            </div>

            {/* CONTENT */}
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-bold uppercase tracking-widest text-organic-green">{p.type}</span>
                {p.venue && <span className="text-sm font-bold">{p.venue}</span>}
                {/* CONDITIONAL METADATA */}
                {p.type === 'publication' ? (
                  ""
                ) : (
                  <span className="text-xs opacity-50 italic">{p.startDate} — {p.endDate}</span>
                )}
                <AwardBadge type={p.awardType || 'NONE'} />
              </div>

              <h3 className="text-3xl font-bold tracking-tight">{p.title}</h3>
              
              <FormatAuthors authors={p.authors} />

              <p className="text-base opacity-70 font-light leading-relaxed">{p.description}</p>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-3">
                {p.type === 'publication' && p.doi && (
                  <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" className="btn-action">
                    <FileText size={14} /> Paper
                  </a>
                )}                
                {p.videoUrl && (
                  <a href={p.videoUrl} target="_blank" rel="noopener noreferrer" className="btn-action">
                    <Video size={14} /> Video
                  </a>
                )}
                {p.externalUrl && (
                  <a href={p.externalUrl.url} target="_blank" rel="noopener noreferrer" className="btn-action">
                    <LinkIcon size={14} /> {p.externalUrl.label}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}