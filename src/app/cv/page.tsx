"use client";
import { motion } from "framer-motion";
import { education, professionalExperience, skillCategories } from "@/data/cv";
import { containerVariants, itemVariants } from "@/lib/animations";
import { FileText, MapPin, Calendar } from "lucide-react";

export default function CVPage() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto px-8 pt-10 pb-20"
    >
      {/* HEADER */}
      <motion.header variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-20">
        <div>
          <h1 className="text-6xl font-bold tracking-tighter mb-2">Curriculum Vitae</h1>
        </div>
        {/* <a 
          href="/Yu_Chen_CV.pdf" 
          download 
          className="btn-action flex items-center gap-2 px-6 py-3 bg-organic-green text-cosmic-blue font-bold rounded-full transition-transform hover:scale-105"
        >
          <FileText size={18} /> Download Full CV
        </a> */}
      </motion.header>

      <div className="space-y-24">
        
        {/* EDUCATION SECTION */}
        <section>
          <motion.h2 variants={itemVariants} className="text-xs font-bold uppercase tracking-[0.3em] text-organic-green mb-10">Education</motion.h2>
          <div className="space-y-12">
            {education.map((edu) => (
              <motion.div key={edu.id} variants={itemVariants} className="group">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-1 mb-2">
                  <h3 className="text-2xl font-bold">{edu.degree}</h3>
                  <span className="text-sm font-medium opacity-40">{edu.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-60 mb-4">
                  <span className="font-semibold">{edu.institution}</span>
                  <span>·</span>
                  <span>{edu.location}</span>
                </div>
                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-sm opacity-70 font-light leading-relaxed border-l-2 border-organic-green/20 pl-4">
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section>
          <motion.h2 variants={itemVariants} className="text-xs font-bold uppercase tracking-[0.3em] text-organic-green mb-10">Research & Professional Experience</motion.h2>
          <div className="space-y-12 border-l border-foreground/5 ml-1">
            {professionalExperience.map((exp) => (
              <motion.div key={exp.id} variants={itemVariants} className="relative pl-8">
                {/* Timeline Dot */}
                <div className="absolute -left-1.25 top-2 w-2.5 h-2.5 rounded-full bg-organic-green shadow-[0_0_10px_rgba(160,212,160,0.5)]" />
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-1 mb-2">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-sm font-medium opacity-40">{exp.date}</span>
                </div>
                <div className="text-sm font-semibold opacity-60 mb-4">{exp.company}</div>
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-sm opacity-70 font-light leading-relaxed">
                      • {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <motion.h2 variants={itemVariants} className="text-xs font-bold uppercase tracking-[0.3em] text-organic-green mb-10">Skills</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {skillCategories.map((category) => (
              <motion.div key={category.name} variants={itemVariants}>
                <h4 className="text-xs font-bold uppercase opacity-30 mb-4 tracking-widest">{category.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 rounded-md 
                                bg-organic-green/10 dark:bg-organic-green/10 
                                border border-organic-green/20 
                                text-[11px] font-medium text-foreground/70"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </motion.div>
  );
}