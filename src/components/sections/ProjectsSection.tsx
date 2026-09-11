"use client";

import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TestReportDialog } from "@/components/interactive/TestReportDialog";
import { ExternalLink, Layers, CheckCircle2, ShieldAlert } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden pt-4 sm:pt-6 pb-14 sm:pb-20 lg:pb-24 w-full">
      {/* ── Background Animated Elements (Clearly Visible at z-0) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Technical Isometric Test Matrix Grid */}
        <div
          className="absolute inset-0 opacity-[0.045] dark:opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle at 1.5px 1.5px, currentColor 1.5px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Floating Mint-Teal Ambient Glow Orb (Top Left) */}
        <motion.div
          animate={{
            x: [-20, 25, -20],
            y: [-15, 20, -15],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-gradient-to-br from-primary/30 via-mint-glow/20 to-transparent blur-3xl opacity-70 dark:opacity-40"
        />

        {/* Floating Amber Ambient Glow Orb (Bottom Right) */}
        <motion.div
          animate={{
            x: [20, -25, 20],
            y: [15, -20, 15],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 -right-20 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-gradient-to-tl from-amber-bright/30 via-amber/20 to-transparent blur-3xl opacity-70 dark:opacity-40"
        />

        {/* Floating Rotated Clay Squircles */}
        <motion.div
          animate={{
            rotate: [45, 65, 45],
            y: [-12, 12, -12],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 -left-6 w-24 h-24 rounded-3xl bg-card/60 dark:bg-card/40 border border-primary/25 shadow-lg backdrop-blur-xs hidden md:block"
        />

        <motion.div
          animate={{
            rotate: [-45, -25, -45],
            y: [12, -12, 12],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 -right-6 w-28 h-28 rounded-3xl bg-card/60 dark:bg-card/40 border border-amber-bright/25 shadow-lg backdrop-blur-xs hidden md:block"
        />
      </div>

      {/* Main Content Container (z-10) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full relative z-10">
        <SectionHeader title="Validated QA Projects" count="3 test reports" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="neumorphic-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Spruce Icon Tile from Media.jpg */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="media-icon-box w-13 h-13 rounded-2xl bg-spruce text-white flex items-center justify-center shadow-md mb-0 group-hover:scale-105 group-hover:bg-primary transition-all duration-300">
                    {idx === 0 ? (
                      <Layers className="w-5 h-5 text-mint-glow" />
                    ) : idx === 1 ? (
                      <CheckCircle2 className="w-5 h-5 text-mint-glow" />
                    ) : (
                      <ShieldAlert className="w-5 h-5 text-amber-bright" />
                    )}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-primary hover:text-white font-semibold inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary border border-primary/25 neumorphic-inset transition-all duration-200"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Title & Category */}
                <span className="font-mono text-[11px] text-primary uppercase font-bold tracking-wider block mb-1">
                  {project.category || "Web Validation"}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Validated Test Tags */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  {project.validatedTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[11px] text-foreground/90 bg-surface-container/90 px-3 py-1 rounded-full border border-border/60 hover:border-primary/40 transition-all inline-flex items-center gap-1.5 neumorphic-inset"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Audit Trigger matching Media.jpg 'Read More →' link */}
              <div className="pt-4 border-t border-border/50 flex items-center justify-between mt-auto">
                <span className="font-mono text-[11px] text-muted-foreground font-semibold">
                  {project.testCaseCount ? `${project.testCaseCount} Tests Executed` : "Audit Complete"}
                </span>
                <TestReportDialog project={project} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
