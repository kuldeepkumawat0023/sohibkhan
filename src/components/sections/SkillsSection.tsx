"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { skillsData } from "@/data/skills";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BrandLogo } from "@/components/ui/BrandLogos";
import {
  Cpu,
  Code2,
  ShieldCheck,
  Workflow,
} from "lucide-react";

// Flattened list of verified skills for Sohib Khan only
interface FlatSkillItem {
  name: string;
  category: string;
  tag: string;
  color: "mint" | "amber" | "spruce";
}

const allSkillsList: FlatSkillItem[] = [
  { name: "Selenium WebDriver", category: "Automation", tag: "E2E Testing", color: "amber" },
  { name: "Playwright", category: "Automation", tag: "Cross-Browser", color: "mint" },
  { name: "Manual Testing", category: "Testing & QA", tag: "Test Design", color: "mint" },
  { name: "Postman", category: "API Validation", tag: "REST APIs", color: "amber" },
  { name: "API Testing", category: "Testing & QA", tag: "Payload / Status", color: "mint" },
  { name: "Git & GitHub", category: "Version Control", tag: "CI/CD Workflows", color: "spruce" },
  { name: "Core Java", category: "Programming", tag: "OOP / Frameworks", color: "amber" },
  { name: "JavaScript", category: "Programming", tag: "Async / Test Scripts", color: "amber" },
  { name: "Software Testing", category: "Testing & QA", tag: "SDLC & STLC", color: "mint" },
  { name: "Automation Testing", category: "Automation", tag: "Script Execution", color: "amber" },
  { name: "MySQL", category: "Database", tag: "Relational Queries", color: "spruce" },
  { name: "MongoDB", category: "Database", tag: "NoSQL / Collections", color: "mint" },
  { name: "IntelliJ IDEA", category: "Tools", tag: "Java IDE", color: "spruce" },
  { name: "VS Code", category: "Tools", tag: "Code Editor", color: "spruce" },
  { name: "Excel / Test Plans", category: "Documentation", tag: "RTM & Defect Logs", color: "mint" },
  { name: "HTML5", category: "Web Standards", tag: "DOM Tree", color: "amber" },
  { name: "CSS3", category: "Web Standards", tag: "UI Locators", color: "spruce" },
  { name: "C (Basic)", category: "Programming", tag: "Syntax & Logic", color: "mint" },
];

function getCategoryIcon(category: string) {
  if (category.toLowerCase().includes("qa") || category.toLowerCase().includes("testing") || category.toLowerCase().includes("manual")) {
    return <ShieldCheck className="w-5 h-5 text-mint-glow" />;
  }
  if (category.toLowerCase().includes("automation") || category.toLowerCase().includes("tools")) {
    return <Cpu className="w-5 h-5 text-mint-glow" />;
  }
  if (category.toLowerCase().includes("language") || category.toLowerCase().includes("database") || category.toLowerCase().includes("core")) {
    return <Code2 className="w-5 h-5 text-amber-bright" />;
  }
  return <Workflow className="w-5 h-5 text-mint-glow" />;
}

// Mac OS Dock Item Component for Marquee
interface DockItemProps {
  skill: FlatSkillItem;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mouseX: any;
  index: number;
}

function DockItem({ skill, mouseX, index }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const scaleSync = useTransform(distance, [-120, 0, 120], [1, 1.4, 1]);
  const scale = useSpring(scaleSync, { mass: 0.1, stiffness: 220, damping: 14 });

  return (
    <div
      style={{
        animation: "wave-bob 2.8s ease-in-out infinite",
        animationDelay: `-${index * 0.2}s`,
      }}
      className="group-hover/marquee:[animation-play-state:paused]"
    >
      <motion.div
        ref={ref}
        style={{ scale }}
        className="flex flex-col items-center min-w-[90px] sm:min-w-[110px] group cursor-pointer origin-bottom z-10 relative select-none"
      >
        {/* Large Tactile Squircle Tile with High-Resolution Brand Logo */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl neumorphic-card flex items-center justify-center p-3 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-2xl relative overflow-hidden">
          {/* Subtle colored glow corner */}
          <div
            className={`absolute top-0 right-0 w-7 h-7 rounded-full blur-xs opacity-35 ${
              skill.color === "amber"
                ? "bg-amber-bright"
                : skill.color === "mint"
                ? "bg-mint-glow"
                : "bg-primary"
            }`}
          />

          <div className="transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
            <BrandLogo name={skill.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-xs object-contain drop-shadow-md" />
          </div>
        </div>

        {/* Floating Tooltip with Full Unclipped Name & Category */}
        <div className="absolute -bottom-9 sm:-bottom-10 flex flex-col items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 z-30 transform group-hover:translate-y-0.5">
          <div className="bg-card/95 dark:bg-[#121720]/95 backdrop-blur-xs border border-border/75 text-foreground px-2.5 sm:px-3 py-1 rounded-full shadow-2xl flex items-center gap-1.5 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-[11px] sm:text-xs font-semibold text-foreground">{skill.name}</span>
            <span className="text-[8.5px] sm:text-[9.5px] font-mono text-muted-foreground uppercase px-1.5 py-0.2 rounded bg-surface-container tracking-wider">
              {skill.category}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function SkillsSection() {
  const mouseX = useMotionValue(Infinity);

  return (
    <section id="skills" className="relative overflow-hidden pt-4 sm:pt-6 pb-14 sm:pb-20 lg:pb-24 w-full">
      {/* ── Background Animated Elements (z-0) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Technical Square Grid Matrix */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.065]"
          style={{
            backgroundImage: "radial-gradient(circle at 1.5px 1.5px, currentColor 1.5px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Floating Teal Ambient Glow Orb (Top Right) */}
        <motion.div
          animate={{
            x: [25, -20, 25],
            y: [-20, 25, -20],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -right-20 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full bg-gradient-to-bl from-primary/30 via-mint-glow/20 to-transparent blur-3xl opacity-70 dark:opacity-40"
        />

        {/* Floating Warm Amber Ambient Glow Orb (Bottom Left) */}
        <motion.div
          animate={{
            x: [-20, 25, -20],
            y: [20, -25, 20],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-24 -left-24 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full bg-gradient-to-tr from-amber-bright/30 via-amber/20 to-transparent blur-3xl opacity-70 dark:opacity-40"
        />
      </div>

      {/* ── Main Content Container (z-10) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full relative z-10">
        <SectionHeader title="Skills & Testing Stack" />

        {/* 4-Category Neumorphic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {skillsData.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="neumorphic-card rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Spruce Squircle Icon Box */}
                <div className="media-icon-box w-12 h-12 rounded-2xl bg-spruce text-white flex items-center justify-center shadow-md mb-4 group-hover:scale-105 group-hover:bg-primary transition-all duration-200">
                  {getCategoryIcon(group.category)}
                </div>

                <div className="flex items-center justify-between pb-3 mb-4 border-b border-dashed border-border/70">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                    {group.category}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
                </div>

                <ul className="space-y-2.5 m-0 p-0 list-none">
                  {group.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="group/item flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-surface-container/85 text-foreground/90 text-xs sm:text-sm font-medium border border-border/40 transition-all duration-200 hover:bg-primary/10 hover:border-primary/40 hover:translate-x-1.5 neumorphic-inset"
                    >
                      <span className="flex-none transition-transform duration-200 group-hover/item:scale-110">
                        <BrandLogo name={skill.name} className="w-5 h-5 rounded-xs shrink-0" />
                      </span>
                      <span className="truncate font-mono">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Infinite QA Skills Marquee / Mac OS Dock Ribbon ── */}
      <div className="mt-14 sm:mt-18 w-full overflow-hidden relative border-y border-border/60 py-8 sm:py-10 bg-card/30 dark:bg-card/15 backdrop-blur-xs z-10">
        {/* Edge fading gradient masks */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Badge Label */}
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8 px-4">
          <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-primary px-3.5 py-1 rounded-full bg-primary/10 border border-primary/25 neumorphic-inset inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-bright animate-ping" />
            Interactive QA Skill Deck • Hover to Magnify
          </span>
        </div>

        {/* Continuous Animated Marquee Track */}
        <div
          className="flex w-max items-center gap-6 sm:gap-10 pr-6 sm:pr-10 animate-logo-marquee hover:[animation-play-state:paused] items-end pt-3 pb-8 sm:pb-10 group/marquee cursor-grab active:cursor-grabbing"
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
        >
          {/* Duplicate array twice for seamless infinite loop */}
          {[...allSkillsList, ...allSkillsList].map((skill, i) => (
            <DockItem
              key={`marquee-${skill.name}-${i}`}
              skill={skill}
              mouseX={mouseX}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



