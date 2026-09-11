"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Briefcase, CheckCircle2, MapPin, Calendar } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden pt-4 sm:pt-6 pb-14 sm:pb-20 lg:pb-24 w-full">
      {/* ── Unique Experience Background: CI/CD Pipeline, Sonar Rings & Telemetry ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Distinct Diagonal Engineering Grid Pattern (Not round dots) */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Concentric Sonar Radar Rings Centered Behind Timeline Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <motion.div
            animate={{ scale: [0.95, 1.25, 0.95], opacity: [0.15, 0.04, 0.15] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] rounded-full border border-primary/20 dark:border-primary/15"
          />
          <motion.div
            animate={{ scale: [1.1, 1.45, 1.1], opacity: [0.1, 0.02, 0.1] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="w-[650px] sm:w-[950px] h-[650px] sm:h-[950px] rounded-full border border-dashed border-secondary/15 dark:border-secondary/10"
          />
          {/* Subtle Ambient Radial Center Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-primary/8 dark:bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Continuous Soft Sweeping CI/CD Automated Test Scanner Beam */}
        <motion.div
          animate={{ x: ["-30%", "130%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 w-36 bg-gradient-to-r from-transparent via-primary/8 to-transparent blur-2xl pointer-events-none"
        />
      </div>

      {/* Main Content Container (z-10) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full relative z-10">
        <SectionHeader title="Professional Experience" />

        <div className="space-y-6">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="neumorphic-card rounded-2xl sm:rounded-3xl p-6 sm:p-9 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Spruce Icon Box matching Media.jpg */}
                <div className="media-icon-box w-14 h-14 rounded-2xl bg-spruce text-white flex items-center justify-center shadow-lg flex-none mb-0 group-hover:scale-105 group-hover:bg-primary transition-all duration-300">
                  <Briefcase className="w-6 h-6 text-mint-glow" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <div>
                      <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider block mb-0.5">
                        {exp.company}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">{exp.role}</h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-primary font-semibold px-3 py-1 rounded-full bg-primary/10 border border-primary/25 neumorphic-inset">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground px-3 py-1 rounded-full bg-surface-container/80 border border-border/50 neumorphic-inset">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span>{exp.location || "Jaipur, India"}</span>
                      </span>
                    </div>
                  </div>

                  {exp.summary && (
                    <p className="text-sm sm:text-base text-foreground/80 mt-3 leading-relaxed">
                      {exp.summary}
                    </p>
                  )}

                  <ul className="mt-5 space-y-3 text-xs sm:text-sm text-foreground/85">
                    {exp.points.map((point, pIdx) => (
                      <li
                        key={pIdx}
                        className="group/point flex items-start gap-3 leading-relaxed transition-all duration-200 hover:translate-x-1.5"
                      >
                        <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center flex-none mt-0.5 transition-colors group-hover/point:bg-primary/20">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-none" />
                        </div>
                        <span className="text-foreground/90 group-hover/point:text-foreground transition-colors">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-border/50">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-card text-foreground/90 border border-border/70 hover:border-primary/50 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 font-medium cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

