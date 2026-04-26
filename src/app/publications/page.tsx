"use client";

import { motion, Variants } from "framer-motion";
import { allPublications} from "@/data/works";
import { FormatAuthors, AwardBadge } from "@/components/academic/ProjectUtils";
import { containerVariants, itemVariants } from "@/lib/animations";

// Using Month-based grouping
const getYear = (dateStr: string) => dateStr.split('-')[0];

export default function PublicationsPage() {
  
  const years = Array.from(new Set(allPublications.map(p => getYear(p.date)))).sort().reverse();

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto px-8 pt-10 pb-20"
    >
      <motion.header variants={itemVariants} className="mb-16"> {/* Reduced from mb-16 */}
        <h1 className="text-5xl font-bold tracking-tighter mb-2">Publications</h1>
      </motion.header>

      <div className="space-y-16">
        {years.map(year => (
          <motion.section key={year} variants={itemVariants} className="flex flex-col md:flex-row gap-6 md:gap-12">
            {/* YEAR SIDEBAR - Increased width slightly for string years */}
            <div className="md:w-28 shrink-0">
              <h2 className="text-xl md:text-2xl font-bold text-organic-green sticky top-28">
                {year}
              </h2>
            </div>

            {/* PUBLICATIONS LIST */}
            <div className="flex-1 space-y-10">
              {allPublications
                .filter(p => getYear(p.date) === year)
                .sort((a, b) => b.date.localeCompare(a.date))
                .map(pub => (
                  <a 
                    key={pub.id} 
                    href={pub.doi ? `https://doi.org/${pub.doi}` : "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block p-4 -mx-4 my-0 rounded-2xl transition-all duration-500
                      hover:bg-black/2 dark:hover:bg-white/3
                      hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]
                      border border-transparent hover:border-black/5 dark:hover:border-white/10
                      hover:-translate-x-1"
                  >
                    <div key={pub.id} className="group flex flex-col sm:flex-row gap-6 md:gap-10 items-start">
                      {/* COMPACT MEDIA THUMBNAIL */}
                      {pub.mediaUrl && (
                        <div className="w-60 md:w-48 aspect-auto self-start shrink-0 rounded-xl overflow-hidden bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-sm">
                          {pub.mediaType === 'video' ? (
                            <video src={pub.mediaUrl} autoPlay loop muted playsInline className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                          ) : (
                            <img src={pub.mediaUrl} alt={pub.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                          )}
                        </div>
                      )}

                      {/* TEXT CONTENT */}
                      <div className="flex-1 min-w-0 space-y-1">
                        {/* Venue & Awards */}
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <span className="text-[10px] font-bold tracking-widest">
                            {pub.venue}
                          </span>
                          <AwardBadge type={pub.awardType || 'NONE'} />
                        </div>

                        {/* Title */}
                        <div className="text-md font-bold leading-tight group-hover:text-organic-green theme-transition">
                          {pub.title}
                        </div>

                        {/* Authors */}
                        <FormatAuthors authors={pub.authors}  textSize="xs" />
                      </div>
                    </div>
                  </a>
                ))}
            </div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
}