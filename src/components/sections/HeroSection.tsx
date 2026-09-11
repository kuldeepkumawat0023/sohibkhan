"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profileData } from "@/data/profile";
import { RunlogTerminal } from "@/components/interactive/RunlogTerminal";
import {
  Download,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Bug,
  Sparkles,
  Play,
} from "lucide-react";
import {
  FaGitAlt,
  FaGithub,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import {
  SiMysql,
  SiPostman,
  SiSelenium,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// Hover Bouncing Text Effect from reference
const HoverText = ({
  text,
  className,
  isGradient,
}: {
  text: string;
  className?: string;
  isGradient?: boolean;
}) => {
  return (
    <span className={`inline-flex flex-wrap ${className || ""}`}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex mr-[0.25em] last:mr-0">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              whileHover={{ y: -10, scale: 1.15 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`inline-block origin-bottom cursor-default ${isGradient
                ? "text-gradient-primary py-1"
                : ""
                }`}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

// Magnetic Button Wrapper from reference
function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX * 0.28);
    y.set(middleY * 0.28);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface FloatingSkillItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  left: string;
  delay: number;
  duration: number;
  scale: number;
}

export function HeroSection() {
  // Global Mouse Parallax tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window !== "undefined") {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) * 2 - 1);
      mouseY.set((clientY / innerHeight) * 2 - 1);
    }
  };

  // Smooth springs for parallax
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Transforms for background elements
  const bgX = useTransform(smoothMouseX, [-1, 1], [-25, 25]);
  const bgY = useTransform(smoothMouseY, [-1, 1], [-25, 25]);

  const particle1X = useTransform(smoothMouseX, [-1, 1], [40, -40]);
  const particle1Y = useTransform(smoothMouseY, [-1, 1], [40, -40]);

  const particle2X = useTransform(smoothMouseX, [-1, 1], [-55, 55]);
  const particle2Y = useTransform(smoothMouseY, [-1, 1], [-55, 55]);

  const cardParallaxX = useTransform(smoothMouseX, [-1, 1], [-10, 10]);
  const cardParallaxY = useTransform(smoothMouseY, [-1, 1], [-10, 10]);

  // Tech Skills Data for Floating Background Animation (Bottom to Top Stream)
  const [floatingSkills, setFloatingSkills] = useState<FloatingSkillItem[]>([]);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const availableSkills = [
      { name: "Selenium", icon: <SiSelenium size={20} color="#43B02A" /> },
      { name: "Playwright", icon: <Play size={18} className="text-primary fill-primary" /> },
      { name: "HTML5", icon: <FaHtml5 size={20} color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt size={20} color="#1572B6" /> },
      { name: "Postman", icon: <SiPostman size={20} color="#FF6C37" /> },
      { name: "Manual Testing", icon: <CheckCircle2 size={18} className="text-primary" /> },
      { name: "Core Java", icon: <FaJava size={20} color="#E76F00" /> },
      { name: "MySQL", icon: <SiMysql size={20} color="#4479A1" /> },
      { name: "Git", icon: <FaGitAlt size={20} color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub size={20} className="text-foreground" /> },
      { name: "VS Code", icon: <VscVscode size={20} color="#007ACC" /> },
      { name: "Regression QA", icon: <ShieldCheck size={18} className="text-amber-bright" /> },
      { name: "API Testing", icon: <SiPostman size={20} color="#FF6C37" /> },
      { name: "Automation QA", icon: <Bug size={18} className="text-amber-bright" /> },
    ];

    const generated = Array.from({ length: 18 }).map((_, i) => {
      const skill = availableSkills[i % availableSkills.length];
      return {
        id: i,
        name: skill.name,
        icon: skill.icon,
        left: `${(i * 5.2) + (Math.random() * 3)}%`,
        delay: Math.random() * 6,
        duration: Math.random() * 8 + 10, // 10s to 18s smooth float
        scale: Math.random() * 0.25 + 0.8,
      };
    });

    setFloatingSkills(generated);
  }, []);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="hero-spruce text-foreground min-h-screen flex items-center pt-20 pb-10 sm:pt-24 sm:pb-12 relative overflow-hidden select-none"
    >
      {/* ── Background Parallax Ambient Glow Shapes ── */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute top-0 right-0 w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full bg-primary/10 dark:bg-primary/5 blur-[100px] pointer-events-none z-0"
      />

      <motion.div
        style={{ x: particle2X, y: particle2Y }}
        className="absolute bottom-10 left-[5%] w-[240px] h-[240px] rounded-full bg-amber/10 dark:bg-amber/5 blur-[90px] pointer-events-none z-0"
      />

      {/* ── Animated floating particles with Parallax ── */}
      <motion.div
        style={{ x: particle1X, y: particle1Y }}
        className="absolute top-28 left-[12%] w-3 h-3 rounded-full bg-primary/40 dark:bg-primary/60 pointer-events-none z-0"
      >
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="w-full h-full rounded-full"
        />
      </motion.div>

      <motion.div
        style={{ x: particle2X, y: particle2Y }}
        className="absolute top-44 left-[22%] w-2 h-2 rounded-full bg-amber/50 dark:bg-amber/40 pointer-events-none z-0"
      >
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 3, delay: 0.8 }}
          className="w-full h-full rounded-full"
        />
      </motion.div>

      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute bottom-36 left-[8%] w-3.5 h-3.5 rounded-full bg-primary/30 dark:bg-primary/40 pointer-events-none z-0"
      >
        <motion.div
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ repeat: Infinity, duration: 3.8 }}
          className="w-full h-full rounded-full"
        />
      </motion.div>

      {/* ── Bottom-right rotated accent square with Parallax ── */}
      <motion.div
        style={{ x: particle1X, y: particle1Y }}
        className="absolute -bottom-16 -right-16 md:-bottom-24 md:-right-24 w-[160px] md:w-[220px] h-[160px] md:h-[220px] bg-gradient-to-br from-[#48A293]/15 to-[#368578]/10 dark:from-[#48A293]/10 dark:to-[#183D36]/20 rounded-[44px] rotate-45 pointer-events-none z-0 opacity-70 shadow-2xl"
      />

      {/* ── Animated Floating Tech Skill Badges (Bottom to Top Stream) ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        {floatingSkills.map((item) => (
          <motion.div
            key={`floating-skill-${item.id}`}
            className="absolute bottom-[-80px] flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-card/75 dark:bg-card/85 backdrop-blur-md border border-primary/25 dark:border-primary/30 shadow-md shadow-primary/5"
            style={{
              left: item.left,
              scale: item.scale,
            }}
            initial={{ y: "10vh", opacity: 0, rotate: 0 }}
            animate={{
              y: ["10vh", "-120vh"],
              opacity: [0, 0.85, 0.85, 0],
              rotate: [-10, 10, -10],
            }}
            transition={{
              y: {
                duration: item.duration,
                repeat: Infinity,
                ease: "linear",
                delay: item.delay,
              },
              opacity: {
                duration: item.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
              rotate: {
                duration: item.duration * 0.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              },
            }}
          >
            <div className="w-5 h-5 flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <span className="text-[11px] font-bold font-mono text-foreground whitespace-nowrap">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* ── Main Content Container ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (Main Headline, Intro, CTAs) */}
          <div className="lg:col-span-7 flex flex-col items-start relative z-10">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2 mb-3.5">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/25 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>{profileData.status}</span>
              </div>

              <div className="rating-badge">
                <span className="stars">★★★★★</span>
                <span>5.0 (QA Certified)</span>
              </div>
            </div>

            {/* Interactive Spring Bouncing Headline (Matching Reference) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1] mb-3.5">
              <HoverText text="Sohib Khan" className="text-foreground" />
              <span className="block mt-1">
                <HoverText text="QA Specialist" isGradient={true} />
              </span>
            </h1>

            {/* Tagline / Value Proposition */}
            <p className="text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed max-w-xl mb-4 font-normal">
              {profileData.tagline}
            </p>

            {/* Live Automated Suite Runner Terminal in authentic CLI container */}
            <div className="w-full max-w-lg p-2.5 sm:p-3 rounded-2xl bg-[#0B0F14] border border-white/10 shadow-xl mb-5">
              <RunlogTerminal />
            </div>

            {/* Magnetic Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
              <MagneticButton>
                <a
                  href={profileData.contact.resumePdf}
                  download="Sohib_Khan_Resume.pdf"
                  className="amber-button px-5 py-3 rounded-full text-xs sm:text-sm font-mono inline-flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#projects"
                  className="px-5 py-3 rounded-full text-xs sm:text-sm font-mono inline-flex items-center justify-center gap-2 bg-card hover:bg-surface-container text-foreground border border-border/80 shadow-sm transition-all duration-200"
                >
                  <Play className="w-3.5 h-3.5 text-primary fill-primary" />
                  <span>View test reports</span>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="px-4 py-3 rounded-full text-xs sm:text-sm font-mono inline-flex items-center justify-center gap-2 bg-card hover:bg-surface-container text-foreground border border-border/80 shadow-sm transition-all duration-200"
                >
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <span>Email</span>
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-full text-xs sm:text-sm font-mono inline-flex items-center justify-center gap-2 bg-card hover:bg-surface-container text-foreground border border-border/80 shadow-sm transition-all duration-200"
                >
                  <FaLinkedin className="w-3.5 h-3.5 text-primary" />
                  <span>LinkedIn</span>
                </a>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: QA Profile Showcase Card with Parallax Depth */}
          <div className="lg:col-span-5 hidden lg:block relative z-10">
            {/* Golden Sparkles Decoration */}
            <div className="absolute -top-3 -right-2 text-amber-bright text-lg font-bold animate-pulse">✦</div>
            <div className="absolute top-1/2 -left-5 text-primary text-base font-bold animate-pulse">✦</div>
            <div className="absolute -bottom-2 right-1/4 text-amber-bright text-xs font-bold animate-pulse">✦</div>

            <motion.div
              style={{ x: cardParallaxX, y: cardParallaxY }}
              className="p-6 sm:p-7 rounded-3xl bg-card border border-border/80 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-spruce text-white flex items-center justify-center shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-mint-glow" />
                  </div>
                  <div>
                    <h3 className="font-mono text-xs sm:text-sm font-bold text-foreground">Full Stack QA Profile</h3>
                    <p className="text-[11px] text-primary font-mono font-medium">Artifact Geeks • Feb 2026 — Present</p>
                  </div>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/25 font-semibold">
                  ACTIVE
                </span>
              </div>

              {/* Quality Checklist Matrix */}
              <div className="space-y-2.5 font-mono text-xs text-foreground/90">
                <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-surface-container/70 border border-border/50">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Cross-Browser Validation</span>
                  </div>
                  <span className="text-xs text-primary font-bold">100% PASS</span>
                </div>

                <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-surface-container/70 border border-border/50">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>API Contracts (Postman)</span>
                  </div>
                  <span className="text-xs text-primary font-bold">VERIFIED</span>
                </div>

                <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-surface-container/70 border border-border/50">
                  <div className="flex items-center gap-2">
                    <Bug className="w-4 h-4 text-amber-bright" />
                    <span>Pre-Release Defect Intercept</span>
                  </div>
                  <span className="text-xs text-amber-bright font-bold">25+ Caught</span>
                </div>

                <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-surface-container/70 border border-border/50">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>Automation Transition</span>
                  </div>
                  <span className="text-xs text-muted-foreground">Selenium &amp; Playwright</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-xs font-mono text-muted-foreground">
                <span>Core Methodology</span>
                <span className="text-primary font-semibold">Manual + Automation</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
