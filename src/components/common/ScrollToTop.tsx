"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

// Colorful confetti bubble particles positioned completely outside the button radius (38px - 58px)
// Perfectly matching the user's reference screenshot layout and palette
const CONFETTI_PARTICLES = [
  // Top-Left Cluster
  { x: -44, y: -42, size: 12, color: "bg-[#FBBF24]", delay: 0 },
  { x: -32, y: -50, size: 14, color: "bg-[#EF4444]", delay: 0.1 },
  { x: -50, y: -26, size: 8, color: "bg-[#3B82F6]", delay: 0.2 },
  { x: -54, y: -10, size: 7, color: "bg-[#10B981]", delay: 0.15 },
  { x: -36, y: -32, size: 10, color: "bg-[#F97316]", delay: 0.25 },
  { x: -22, y: -54, size: 8, color: "bg-[#8B5CF6]", delay: 0.05 },

  // Top Cluster
  { x: -10, y: -46, size: 15, color: "bg-[#EF4444]", delay: 0.08 },
  { x: 2, y: -56, size: 11, color: "bg-[#F59E0B]", delay: 0.18 },
  { x: 14, y: -48, size: 13, color: "bg-[#FBBF24]", delay: 0.12 },
  { x: 6, y: -38, size: 8, color: "bg-[#3B82F6]", delay: 0.3 },

  // Top-Right Cluster
  { x: 28, y: -44, size: 14, color: "bg-[#EF4444]", delay: 0.14 },
  { x: 40, y: -34, size: 9, color: "bg-[#8B5CF6]", delay: 0.22 },
  { x: 50, y: -18, size: 13, color: "bg-[#FBBF24]", delay: 0.16 },
  { x: 44, y: -4, size: 9, color: "bg-[#F97316]", delay: 0.28 },

  // Left & Bottom-Left Cluster
  { x: -44, y: 16, size: 9, color: "bg-[#10B981]", delay: 0.35 },
  { x: -36, y: 34, size: 15, color: "bg-[#10B981]", delay: 0.18 },
  { x: -18, y: 44, size: 11, color: "bg-[#14B8A6]", delay: 0.24 },
  { x: -4, y: 46, size: 8, color: "bg-[#FBBF24]", delay: 0.32 },

  // Bottom-Right Accent
  { x: 34, y: 28, size: 8, color: "bg-[#3B82F6]", delay: 0.4 },
  { x: 42, y: 12, size: 7, color: "bg-[#10B981]", delay: 0.26 },
];

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible, { passive: true });
    toggleVisible();
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-24 right-6 sm:bottom-28 sm:right-8 z-50 flex items-center justify-center group"
        >
          {/* ── Soft Ambient Glow Halo behind button ── */}
          <div className="absolute w-28 h-28 rounded-full bg-[#2A7569]/20 blur-xl pointer-events-none select-none" />

          {/* ── Surrounding Burst of Colorful Confetti Particles ── */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            {CONFETTI_PARTICLES.map((particle, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [-2, 2, -2],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2.5 + (idx % 3) * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: particle.delay,
                }}
                className={`absolute rounded-full ${particle.color} shadow-xs opacity-95`}
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  transform: `translate(${particle.x}px, ${particle.y}px)`,
                }}
              />
            ))}
          </div>

          {/* ── Deep Teal Circular Button ── */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            title="Scroll to top"
            className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#2A7569] hover:bg-[#22665B] text-white shadow-[0_8px_24px_rgba(42,117,105,0.45)] hover:shadow-[0_12px_30px_rgba(42,117,105,0.6)] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer pointer-events-auto border border-white/25"
          >
            <ArrowUp className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.2] transition-transform duration-200 group-hover:-translate-y-1" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
