"use client";

import React from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Globe2,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Users,
  Compass,
  Trophy,
  Cpu,
  ShieldAlert,
} from "lucide-react";

export function ExtraSection() {
  return (
    <section id="extra" className="relative overflow-hidden py-14 sm:py-20 w-full">
      {/* ── Background Animated Elements (Matching AboutSection at z-0) ── */}
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

      {/* ── Main Content Container (z-10) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full relative z-10">
        <SectionHeader title="Culture & Collaboration" count="Beyond Code" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6">
          {/* Card 1: Communication Languages & Agile Ceremonies */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="neumorphic-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
          >
            <div>
              {/* Header with Spruce Squircle */}
              <div className="flex items-start gap-4 sm:gap-5 mb-5">
                <div className="media-icon-box w-13 h-13 rounded-2xl bg-spruce text-white flex items-center justify-center flex-none shadow-md mb-0 group-hover:scale-105 group-hover:bg-primary transition-all duration-300">
                  <Globe2 className="w-6 h-6 text-mint-glow" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-primary uppercase tracking-wider font-bold block mb-1">
                    Agile Ceremonies &amp; Team Collaboration
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Communication Languages
                  </h3>
                </div>
              </div>

              {/* Language Pills with Proficiency Levels */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container/70 border border-border/50 neumorphic-inset">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base sm:text-lg font-bold text-foreground">Hindi</span>
                    <span className="text-[10px] font-mono text-primary font-semibold px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                      Native Proficiency
                    </span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">Primary &amp; Fluent</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container/70 border border-border/50 neumorphic-inset">
                  <div className="flex items-center gap-2.5">
                    <span className="text-base sm:text-lg font-bold text-foreground">English</span>
                    <span className="text-[10px] font-mono text-primary font-semibold px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20">
                      Professional Working
                    </span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">Agile Sprints &amp; Docs</span>
                </div>
              </div>

              {/* Agile Ceremony Tags */}
              <div className="mb-6">
                <span className="font-mono text-[11px] text-muted-foreground uppercase font-semibold block mb-2">
                  Cross-Functional Collaboration:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-foreground/85 px-3 py-1 rounded-full bg-surface-container/60 border border-border/40 inline-flex items-center gap-1.5 neumorphic-inset">
                    <Users className="w-3 h-3 text-primary" /> Daily Scrum Standups
                  </span>
                  <span className="text-[11px] font-mono text-foreground/85 px-3 py-1 rounded-full bg-surface-container/60 border border-border/40 inline-flex items-center gap-1.5 neumorphic-inset">
                    <MessageSquare className="w-3 h-3 text-primary" /> Defect Triage Meetings
                  </span>
                  <span className="text-[11px] font-mono text-foreground/85 px-3 py-1 rounded-full bg-surface-container/60 border border-border/40 inline-flex items-center gap-1.5 neumorphic-inset">
                    <Compass className="w-3 h-3 text-primary" /> Sprint Retrospectives
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Verification Note */}
            <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-muted-foreground mt-auto">
              <span className="flex items-center gap-1.5 text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Clear technical defect communication across developer &amp; product teams</span>
              </span>
            </div>
          </motion.div>

          {/* Card 2: Hobbies & Personal Passions */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="neumorphic-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
          >
            <div>
              {/* Header with Spruce Squircle */}
              <div className="flex items-start gap-4 sm:gap-5 mb-5">
                <div className="media-icon-box w-13 h-13 rounded-2xl bg-spruce text-white flex items-center justify-center flex-none shadow-md mb-0 group-hover:scale-105 group-hover:bg-primary transition-all duration-300">
                  <Sparkles className="w-6 h-6 text-amber-bright" />
                </div>
                <div>
                  <span className="font-mono text-[11px] text-amber-bright uppercase tracking-wider font-bold block mb-1">
                    Personal Drive &amp; QA Ethos
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Hobbies &amp; Passions
                  </h3>
                </div>
              </div>

              {/* Passion Badges with Context */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container/70 border border-border/50 neumorphic-inset">
                  <div className="flex items-center gap-2.5">
                    <Trophy className="w-4 h-4 text-amber-bright shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-foreground">Cricket</span>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">Team Strategy &amp; Focus</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container/70 border border-border/50 neumorphic-inset">
                  <div className="flex items-center gap-2.5">
                    <Cpu className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-foreground">Learning New Tech</span>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">Selenium, Playwright &amp; AI QA</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container/70 border border-border/50 neumorphic-inset">
                  <div className="flex items-center gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-amber-bright shrink-0" />
                    <span className="text-sm sm:text-base font-bold text-foreground">Breaking UI Boundaries</span>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground">Edge Cases &amp; Empathy</span>
                </div>
              </div>

              {/* QA Motto Quote */}
              <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/20 mb-6">
                <p className="text-xs sm:text-sm font-medium text-foreground/85 leading-relaxed italic">
                  &ldquo;Curious technologist exploring automation frameworks, open-source QA tools, and breaking software purposefully so users never have to.&rdquo;
                </p>
              </div>
            </div>

            {/* Bottom Verification Note */}
            <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-muted-foreground mt-auto">
              <span className="flex items-center gap-1.5 text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-amber-bright shrink-0" />
                <span>Continuous growth mindset &amp; active QA exploration</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Culture & Collaboration Mindset Strip (Matching AboutSection) */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {[
            { label: "Agile Standups", value: "SCRUM READY", icon: <Users className="w-3.5 h-3.5 text-primary" /> },
            { label: "Defect Tracking", value: "JIRA / EXCEL", icon: <CheckCircle2 className="w-3.5 h-3.5 text-amber-bright" /> },
            { label: "Bilingual Communication", value: "HINDI & ENGLISH", icon: <Globe2 className="w-3.5 h-3.5 text-primary" /> },
            { label: "Availability", value: "IMMEDIATE JOINING", icon: <Sparkles className="w-3.5 h-3.5 text-amber-bright" /> },
          ].map((badge, idx) => (
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
                {badge.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


