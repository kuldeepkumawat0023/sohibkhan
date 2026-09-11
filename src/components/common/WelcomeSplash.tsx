"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WelcomeSplashProps {
  onComplete?: () => void;
}

interface CrackerSpark {
  id: number;
  angle: number;
  distance: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  rotation: number;
}

// Generate 120+ multi-colored festive cracker fireworks sparks
const generateCrackerSparks = (count: number): CrackerSpark[] => {
  const COLOR_PALETTE = [
    "#F59E0B", // Golden Amber
    "#FFB703", // Vivid Sun Gold
    "#6FE0B0", // Electric Mint
    "#00F5D4", // Radiant Cyan
    "#38BDF8", // Sky Blue
    "#F43F5E", // Neon Crimson
    "#EC4899", // Vivid Magenta
    "#A855F7", // Cyber Violet
    "#FCD34D", // Pale Gold
    "#FFFFFF", // Diamond White
  ];

  return Array.from({ length: count }).map((_, i) => {
    const angle = Math.random() * Math.PI * 2;
    // Radial distribution spreading wide across the desktop viewport
    const distance = 200 + Math.random() * 520;
    const size = 3.5 + Math.random() * 6.5;

    return {
      id: i,
      angle,
      distance,
      size,
      color: COLOR_PALETTE[i % COLOR_PALETTE.length],
      delay: Math.random() * 0.2,
      duration: 1.2 + Math.random() * 0.7,
      rotation: Math.random() * 720 - 360,
    };
  });
};

export function WelcomeSplash({ onComplete }: WelcomeSplashProps) {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<"enter" | "burst" | "exit" | "done">("enter");
  const [sparks, setSparks] = useState<CrackerSpark[]>([]);

  useEffect(() => {
    setMounted(true);
    setSparks(generateCrackerSparks(125));
    // Respect reduced motion
    if (typeof window !== "undefined") {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReduced) {
        setPhase("done");
        if (onComplete) onComplete();
        return;
      }
    }

    // Lock body scrolling during intro sequence
    const originalBodyOverflow = document.body.style.overflow;
    const originalDocOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // 1. Enter -> Cracker burst ignition at 300ms
    const tBurst = setTimeout(() => {
      setPhase("burst");
    }, 300);

    // 2. Burst -> 3D Zoom Exit at 2150ms
    const tExit = setTimeout(() => {
      setPhase("exit");
    }, 2150);

    // 3. Exit -> Complete at 2650ms
    const tDone = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalDocOverflow;
      if (onComplete) onComplete();
    }, 2650);

    return () => {
      clearTimeout(tBurst);
      clearTimeout(tExit);
      clearTimeout(tDone);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalDocOverflow;
    };
  }, [onComplete]);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="fullscreen-cracker-welcome-splash"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070A0E] text-white overflow-hidden select-none px-4 sm:px-8 pointer-events-auto"
          style={{ perspective: 1200 }}
        >
          {/* ── Background Subtle Ambient Glow & Dot Texture ── */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1100px] h-[500px] bg-gradient-to-r from-primary/30 via-[#6FE0B0]/20 to-primary/30 rounded-full blur-[160px]"
            />

            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1.5px 1.5px, #6FE0B0 1px, transparent 0)",
                backgroundSize: "36px 36px",
              }}
            />
          </div>

          {/* ══════════════════════════════════════════════════════════════
              COLORFUL CRACKER / FIREWORKS BURST (Behind & Around Text)
              ══════════════════════════════════════════════════════════════ */}
          {(phase === "burst" || phase === "enter") && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
              {/* Central Firecracker Ignition Flash */}
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: [0, 2.8, 4.2], opacity: [1, 0.65, 0] }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#6FE0B0] to-[#EC4899] blur-3xl"
              />

              {/* 125+ Cracker Sparks radiating across desktop viewport */}
              {sparks.map((spark) => {
                const targetX = Math.cos(spark.angle) * spark.distance;
                const targetY = Math.sin(spark.angle) * spark.distance;

                return (
                  <motion.div
                    key={spark.id}
                    initial={{
                      x: 0,
                      y: 0,
                      scale: 0,
                      opacity: 1,
                      rotate: 0,
                    }}
                    animate={
                      phase === "burst"
                        ? {
                            x: targetX,
                            y: targetY + 35, // realistic gravity curve
                            scale: [0, 1.45, 0.85, 0],
                            opacity: [1, 1, 0.75, 0],
                            rotate: spark.rotation,
                          }
                        : {}
                    }
                    transition={{
                      duration: spark.duration,
                      delay: spark.delay,
                      ease: [0.12, 0.82, 0.32, 1], // explosive shockwave, natural friction
                    }}
                    style={{
                      width: `${spark.size}px`,
                      height: `${spark.size}px`,
                      backgroundColor: spark.color,
                      boxShadow: `0 0 14px 2px ${spark.color}`,
                    }}
                    className="absolute rounded-full"
                  />
                );
              })}
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════
              BIG DESKTOP HEADLINE (NO CARD CONTAINER)
              ══════════════════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={
              phase === "exit"
                ? {
                    opacity: 0,
                    scale: 1.25,
                    z: 220,
                    filter: "blur(14px)",
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  }
                : {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
                  }
            }
            className="relative z-20 flex flex-col items-center justify-center text-center w-full max-w-6xl mx-auto px-4"
          >
            {/* ── Giant Desktop Headline: Welcome to My Portfolio ── */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-7 leading-none">
              {/* Welcome to */}
              <span className="text-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.3)]">
                Welcome to
              </span>

              {/* My Portfolio in vibrant glowing brand gradient */}
              <span className="bg-gradient-to-r from-[#5BBBB0] via-[#48A293] to-[#368578] bg-clip-text text-transparent drop-shadow-[0_0_45px_rgba(72,162,147,0.75)]">
                My Portfolio
              </span>
            </h1>

            {/* ── Luminous Horizon Laser Beam Underline ── */}
            <div className="relative mt-6 sm:mt-9 w-full max-w-[320px] sm:max-w-[540px] md:max-w-[720px] h-[3px] flex items-center justify-center">
              {/* Core light beam */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#6FE0B0] to-transparent shadow-[0_0_25px_#6FE0B0]"
              />

              {/* Ambient Glow Aura */}
              <div className="absolute inset-0 h-[8px] bg-gradient-to-r from-transparent via-[#8BEAC3]/70 to-transparent blur-[6px]" />

              {/* Central Glare Flare */}
              <motion.div
                animate={{
                  x: [-160, 160, -160],
                  opacity: [0.4, 0.95, 0.4],
                }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-24 h-2.5 bg-white/90 blur-xs rounded-full pointer-events-none"
              />
            </div>

            {/* ── Candidate Name & Role Subline ── */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-6 sm:mt-8 font-mono text-xs sm:text-sm md:text-base text-foreground/80 tracking-wider uppercase font-semibold"
            >
              Sohib Khan <span className="text-[#6FE0B0] mx-2">•</span> Full Stack QA &amp; Automation Specialist
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
