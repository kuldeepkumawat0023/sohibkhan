"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ShieldCheck,
  SearchCheck,
  CheckCircle2,
  ArrowRight,
  Bug,
  CheckCheck,
  Cpu,
} from "lucide-react";

const QA_PILL_METRICS = [
  {
    label: "Defect Intercept",
    metric: "100%",
    icon: <ShieldCheck className="w-3.5 h-3.5 text-primary" />,
  },
  {
    label: "Zero Critical Escapes",
    metric: "0 BUGS",
    icon: <Bug className="w-3.5 h-3.5 text-amber-bright" />,
  },
  {
    label: "Regression Suite",
    metric: "PASSED",
    icon: <CheckCheck className="w-3.5 h-3.5 text-primary" />,
  },
  {
    label: "Edge Cases Covered",
    metric: "TESTED",
    icon: <SearchCheck className="w-3.5 h-3.5 text-amber-bright" />,
  },
  {
    label: "User Workflow Audit",
    metric: "VERIFIED",
    icon: <Cpu className="w-3.5 h-3.5 text-primary" />,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden pt-4 sm:pt-6 pb-14 sm:pb-20 lg:pb-24 w-full">
      {/* ── Background Animated Elements (Clearly Visible at z-0) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Ambient Radial Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(currentColor 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Floating Mint-Teal Ambient Glow Orb (Top Left) */}
        <motion.div
          animate={{
            x: [-25, 30, -25],
            y: [-20, 25, -20],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -left-20 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-gradient-to-br from-primary/30 via-mint-glow/20 to-transparent blur-3xl opacity-70 dark:opacity-40"
        />

        {/* Floating Amber Ambient Glow Orb (Bottom Right) */}
        <motion.div
          animate={{
            x: [25, -30, 25],
            y: [20, -25, 20],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 -right-20 w-80 sm:w-[420px] h-80 sm:h-[420px] rounded-full bg-gradient-to-tl from-amber-bright/30 via-amber/20 to-transparent blur-3xl opacity-70 dark:opacity-40"
        />

        {/* Floating Rotated Clay Squircles */}
        <motion.div
          animate={{
            rotate: [45, 65, 45],
            y: [-14, 14, -14],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 -left-6 w-24 h-24 rounded-3xl bg-card/60 dark:bg-card/40 border border-primary/25 shadow-lg backdrop-blur-xs hidden md:block"
        />

        <motion.div
          animate={{
            rotate: [-45, -25, -45],
            y: [14, -14, 14],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-16 -right-6 w-28 h-28 rounded-3xl bg-card/60 dark:bg-card/40 border border-amber-bright/25 shadow-lg backdrop-blur-xs hidden md:block"
        />
      </div>

      {/* Main Content Container (z-10) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full relative z-10">
        <SectionHeader title="About QA Mindset" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Core Quality Philosophy (Neumorphic) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="neumorphic-card rounded-2xl sm:rounded-3xl p-7 sm:p-9 flex flex-col justify-between group"
          >
            <div>
              <div className="media-icon-box w-12 h-12 rounded-2xl bg-spruce text-white flex items-center justify-center shadow-md mb-5 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 text-mint-glow" />
              </div>

              <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider block mb-2">
                Defect Intercept &amp; Prevention
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 leading-snug">
                Breaking Software So Users Never Have To
              </h3>

              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6">
                {profileData.summary[0]}
              </p>
            </div>

            <div className="pt-4 border-t border-border/50 flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground flex items-center gap-1.5 px-3 py-1 rounded-full neumorphic-inset">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Full Stack QA Intern</span>
              </span>
              <span className="font-mono text-xs text-primary font-semibold">Artifact Geeks</span>
            </div>
          </motion.div>

          {/* Card 2: Manual to Automation Transition (Neumorphic) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6 }}
            className="neumorphic-card rounded-2xl sm:rounded-3xl p-7 sm:p-9 flex flex-col justify-between group"
          >
            <div>
              <div className="media-icon-box w-12 h-12 rounded-2xl bg-spruce text-white flex items-center justify-center shadow-md mb-5 group-hover:scale-105 transition-transform">
                <SearchCheck className="w-6 h-6 text-amber-bright" />
              </div>

              <span className="font-mono text-xs text-amber-bright font-bold uppercase tracking-wider block mb-2">
                Frameworks &amp; Test Execution
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 leading-snug">
                Manual Precision to Scaled Automation
              </h3>

              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-6">
                {profileData.summary[1]}
              </p>
            </div>

            <div className="pt-4 border-t border-border/50 flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground flex items-center gap-1.5 px-3 py-1 rounded-full neumorphic-inset">
                <CheckCircle2 className="w-4 h-4 text-amber-bright" />
                <span>Selenium &amp; Playwright</span>
              </span>
              <a
                href="#projects"
                className="font-mono text-xs text-primary hover:text-mint-glow inline-flex items-center gap-1 font-semibold transition-colors"
              >
                <span>Explore validated apps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Crisp Floating QA Mindset Metrics Strip */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {QA_PILL_METRICS.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.2 + idx * 0.08 }}
              animate={{
                y: idx % 2 === 0 ? [-3, 3, -3] : [3, -3, 3],
              }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="px-3.5 sm:px-4 py-2 rounded-2xl bg-card border border-border/80 dark:border-border/70 shadow-md flex items-center gap-2.5 cursor-default transition-all duration-200"
            >
              <div className="w-6 h-6 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                {badge.icon}
              </div>
              <span className="font-mono text-xs font-semibold text-foreground">
                {badge.label}
              </span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                {badge.metric}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

