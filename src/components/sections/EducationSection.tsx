"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData, certificationData } from "@/data/education";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  School,
  FileCheck2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// RSCIT official curriculum competencies
const rscitCompetencies = [
  "Office Automation & Excel",
  "Computer Fundamentals & OS",
  "Database & Data Management",
  "Cyber Awareness & IT Ethics",
];

export function EducationSection() {
  return (
    <section id="education" className="relative overflow-hidden pt-4 sm:pt-6 pb-14 sm:pb-20 lg:pb-24 w-full">
      {/* ── Background Animated Elements (z-0: Ascending Bottom-to-Top Streams) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Subtle Technical Milestone Grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.055]"
          style={{
            backgroundImage: "radial-gradient(circle at 1.5px 1.5px, currentColor 1.5px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Upward Floor Energy Gradient */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-primary/10 via-primary/3 to-transparent pointer-events-none" />

        {/* Vertical Guideline Tracks */}
        <div className="absolute inset-0 flex justify-around opacity-15 dark:opacity-10 pointer-events-none">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
          <div className="w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
          <div className="w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
          <div className="w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent" />
        </div>

        {/* ── Ascending Bottom-to-Top Light Streams ── */}
        {/* Stream 1 (Mint - Left) */}
        <motion.div
          animate={{ y: ["100vh", "-20vh"], opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "linear", delay: 0 }}
          className="absolute w-[2px] h-44 bg-gradient-to-t from-transparent via-mint-glow to-transparent blur-[1px] left-[18%]"
        />

        {/* Stream 2 (Amber - Mid Left) */}
        <motion.div
          animate={{ y: ["100vh", "-20vh"], opacity: [0, 0.85, 0.85, 0] }}
          transition={{ duration: 9.5, repeat: Infinity, ease: "linear", delay: 2.2 }}
          className="absolute w-[2.5px] h-52 bg-gradient-to-t from-transparent via-amber-bright to-transparent blur-[1.5px] left-[38%]"
        />

        {/* Stream 3 (Mint - Mid Right) */}
        <motion.div
          animate={{ y: ["100vh", "-20vh"], opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 8.2, repeat: Infinity, ease: "linear", delay: 4.5 }}
          className="absolute w-[2px] h-40 bg-gradient-to-t from-transparent via-primary to-transparent blur-[1px] left-[62%]"
        />

        {/* Stream 4 (Amber - Right) */}
        <motion.div
          animate={{ y: ["100vh", "-20vh"], opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: 10.5, repeat: Infinity, ease: "linear", delay: 1.2 }}
          className="absolute w-[2.5px] h-48 bg-gradient-to-t from-transparent via-amber to-transparent blur-[1.5px] left-[84%]"
        />

        {/* ── Rising Colorful Achievement Bubbles (Bottom-to-Top) ── */}
        {[
          { left: "4%", size: 24, color: "from-emerald-400/45 via-teal-400/30 to-teal-500/20 border-teal-300/50", glow: "bg-emerald-400/25", duration: 9.5, delay: 0, xWobble: 14 },
          { left: "10%", size: 38, color: "from-amber-400/45 via-orange-400/30 to-orange-500/20 border-amber-300/60", glow: "bg-amber-400/30", duration: 11.5, delay: 2.2, xWobble: -18 },
          { left: "16%", size: 18, color: "from-cyan-400/45 via-sky-400/30 to-blue-500/20 border-cyan-300/55", glow: "bg-cyan-400/25", duration: 8, delay: 4.5, xWobble: 12 },
          { left: "22%", size: 44, color: "from-purple-400/40 via-fuchsia-400/30 to-indigo-500/20 border-purple-300/50", glow: "bg-purple-400/30", duration: 13, delay: 1.2, xWobble: -20 },
          { left: "29%", size: 28, color: "from-rose-400/45 via-pink-400/30 to-rose-500/20 border-rose-300/55", glow: "bg-rose-400/25", duration: 9, delay: 3.5, xWobble: 16 },
          { left: "36%", size: 16, color: "from-teal-400/45 via-mint-glow/35 to-emerald-500/20 border-mint-glow/60", glow: "bg-mint-glow/30", duration: 7.5, delay: 5.8, xWobble: -10 },
          { left: "42%", size: 48, color: "from-amber-400/45 via-yellow-400/30 to-amber-500/20 border-amber-300/55", glow: "bg-amber-400/30", duration: 12, delay: 0.5, xWobble: 22 },
          { left: "49%", size: 22, color: "from-blue-400/45 via-indigo-400/30 to-cyan-500/20 border-blue-300/50", glow: "bg-blue-400/25", duration: 8.5, delay: 2.8, xWobble: -14 },
          { left: "56%", size: 36, color: "from-emerald-400/40 via-teal-400/30 to-teal-500/20 border-teal-300/50", glow: "bg-emerald-400/25", duration: 10.5, delay: 6.2, xWobble: 18 },
          { left: "63%", size: 24, color: "from-purple-400/45 via-indigo-400/30 to-violet-500/20 border-purple-300/55", glow: "bg-purple-400/25", duration: 9.2, delay: 1.8, xWobble: -15 },
          { left: "70%", size: 42, color: "from-cyan-400/45 via-sky-400/30 to-teal-500/20 border-cyan-300/60", glow: "bg-cyan-400/30", duration: 11, delay: 4, xWobble: 20 },
          { left: "77%", size: 18, color: "from-rose-400/45 via-red-400/30 to-pink-500/20 border-rose-300/50", glow: "bg-rose-400/20", duration: 7.8, delay: 0.3, xWobble: -11 },
          { left: "83%", size: 34, color: "from-amber-400/45 via-orange-400/30 to-amber-500/20 border-amber-300/55", glow: "bg-amber-400/30", duration: 10, delay: 3.2, xWobble: 17 },
          { left: "89%", size: 46, color: "from-teal-400/45 via-emerald-400/30 to-cyan-500/20 border-teal-300/55", glow: "bg-teal-400/30", duration: 12.8, delay: 5.2, xWobble: -21 },
          { left: "95%", size: 22, color: "from-fuchsia-400/45 via-pink-400/30 to-rose-500/20 border-fuchsia-300/50", glow: "bg-fuchsia-400/25", duration: 8.8, delay: 2, xWobble: 13 },
          { left: "98%", size: 30, color: "from-emerald-400/40 via-teal-400/30 to-cyan-500/20 border-emerald-300/50", glow: "bg-emerald-400/20", duration: 9.6, delay: 4.2, xWobble: -16 },
        ].map((bubble, bIdx) => (
          <motion.div
            key={`bubble-${bIdx}`}
            animate={{
              y: ["105vh", "-20vh"],
              x: [-bubble.xWobble, bubble.xWobble, -bubble.xWobble],
              scale: [0.85, 1.1, 0.95, 1],
              opacity: [0, 0.85, 0.9, 0],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            }}
            style={{
              left: bubble.left,
              width: bubble.size,
              height: bubble.size,
            }}
            className={`absolute rounded-full bg-gradient-to-tr ${bubble.color} border shadow-lg backdrop-blur-xs flex items-start justify-start p-1 pointer-events-none`}
          >
            {/* Specular glass bubble reflection */}
            <div className="w-1/3 h-1/3 rounded-full bg-white/75 blur-[0.5px]" />
            {/* Colored ambient glow */}
            <div className={`absolute -inset-1 rounded-full ${bubble.glow} blur-xs -z-10`} />
          </motion.div>
        ))}

        {/* Soft Ambient Center Glows */}
        <div className="absolute -top-20 -left-20 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-gradient-to-br from-primary/20 via-mint-glow/10 to-transparent blur-3xl opacity-60 dark:opacity-30 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-gradient-to-tl from-amber-bright/20 via-amber/10 to-transparent blur-3xl opacity-60 dark:opacity-30 pointer-events-none" />
      </div>

      {/* ── Main Content Container (z-10) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ── Academic Education (Left 7 Cols) ── */}
          <div className="lg:col-span-7">
            <SectionHeader title="Academic Education" count="3 Milestones" />

            <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/25 dark:border-primary/20 space-y-6 mt-6">
              {educationData.map((edu, idx) => {
                const isCurrent = edu.period.includes("Present");
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -5, scale: 1.01 }}
                    className="neumorphic-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 relative group"
                  >
                    {/* Timeline Node on Left Border */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-7 w-5 h-5 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-md group-hover:scale-125 transition-transform duration-300">
                      <span className={`w-2 h-2 rounded-full ${isCurrent ? "bg-mint-glow animate-ping" : "bg-primary"}`} />
                    </div>

                    <div className="flex items-start gap-4 sm:gap-5">
                      {/* Media Icon Box */}
                      <div className="media-icon-box w-12 h-12 rounded-2xl bg-spruce text-white flex items-center justify-center flex-none shadow-md mb-0 group-hover:scale-105 group-hover:bg-primary transition-all duration-300">
                        {idx === 0 ? (
                          <GraduationCap className="w-6 h-6 text-mint-glow" />
                        ) : (
                          <School className="w-6 h-6 text-mint-glow" />
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        {/* Header with Degree & Period Pill */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                          <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                            {edu.degree}
                          </h3>
                          <span className="font-mono text-xs text-primary font-semibold px-3 py-1 rounded-full bg-primary/10 border border-primary/25 neumorphic-inset inline-flex items-center gap-1.5">
                            <Calendar className="w-3 h-3 text-primary" />
                            {edu.period}
                          </span>
                        </div>

                        {/* Institution Name */}
                        {edu.institution && (
                          <p className="text-xs sm:text-sm text-foreground/80 font-medium">
                            {edu.institution}
                          </p>
                        )}

                        {/* Status / Score Badges */}
                        <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-border/50">
                          {isCurrent ? (
                            <span className="text-[11px] font-mono text-[#0c312a] dark:text-mint-glow font-bold inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 dark:bg-primary/10 border border-primary/30 dark:border-primary/25 neumorphic-inset">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary dark:bg-mint-glow animate-pulse" />
                              Currently Enrolled &amp; Pursuing
                            </span>
                          ) : (
                            <span className="text-[11px] font-mono text-foreground/85 font-semibold inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container border border-border/40 neumorphic-inset">
                              Academic Score: <strong className="text-primary font-bold">{edu.score}</strong>
                            </span>
                          )}

                          <span className="text-[11px] font-mono text-muted-foreground inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container/60">
                            <CheckCircle2 className="w-3 h-3 text-primary" /> Verified Record
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Professional Certifications (Right 5 Cols) ── */}
          <div id="certifications" className="lg:col-span-5">
            <SectionHeader title="Certifications" count="Government Verified" />

            <div className="space-y-6 mt-6">
              {certificationData.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="neumorphic-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden group"
                >
                  {/* Subtle Amber Glow Accent */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-amber-bright/10 blur-xl pointer-events-none" />

                  {/* Header Badge */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="font-mono text-[11px] text-amber-bright uppercase font-bold tracking-wider inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-soft border border-amber-border neumorphic-inset">
                      <Sparkles className="w-3.5 h-3.5 text-amber-bright" />
                      State Recognized IT Credential
                    </span>
                    <span className="text-[11px] font-mono text-primary font-bold px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                      {cert.date}
                    </span>
                  </div>

                  {/* Main Title & Icon */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="media-icon-box w-14 h-14 rounded-2xl bg-spruce text-white flex items-center justify-center flex-none shadow-md mb-0 group-hover:scale-105 group-hover:bg-primary transition-all duration-300">
                      <Award className="w-7 h-7 text-amber-bright" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/80 mt-1 leading-snug">
                        {cert.description}
                      </p>
                    </div>
                  </div>

                  {/* Authority / Issuer Box */}
                  <div className="p-4 rounded-2xl bg-surface-container/70 border border-border/60 neumorphic-inset mb-5">
                    <div className="text-[11px] font-mono text-muted-foreground uppercase font-semibold block mb-1">
                      Issued By Authority
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-foreground flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>

                  {/* Core IT Competencies Covered */}
                  <div className="mb-6">
                    <div className="text-[11px] font-mono text-muted-foreground uppercase font-semibold mb-2.5">
                      Curriculum Competencies
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {rscitCompetencies.map((comp, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-center gap-2 p-2 rounded-xl bg-surface-container/50 border border-border/40 text-[11px] font-mono text-foreground/85 neumorphic-inset"
                        >
                          <FileCheck2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span className="truncate">{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Verification Footer */}
                  <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono">
                    <span className="text-muted-foreground font-semibold">Credential Status</span>
                    <span className="text-[#0c312a] dark:text-mint-glow font-bold inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 neumorphic-inset">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Officially Verified
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

