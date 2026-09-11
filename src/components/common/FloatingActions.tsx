"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const PHONE_NUMBER = "+919145921300";
const WHATSAPP_URL =
  "https://wa.me/919145921300?text=Hi%20Sohib%2C%20I%20saw%20your%20QA%20portfolio%20and%20would%20like%20to%20connect!";

// Colorful confetti bubble particles positioned around the scroll button radius
const CONFETTI_PARTICLES = [
  // Top-Left Cluster
  { x: -38, y: -36, size: 10, color: "bg-[#FBBF24]", delay: 0 },
  { x: -28, y: -44, size: 12, color: "bg-[#EF4444]", delay: 0.1 },
  { x: -44, y: -22, size: 7, color: "bg-[#3B82F6]", delay: 0.2 },
  { x: -46, y: -8, size: 6, color: "bg-[#10B981]", delay: 0.15 },
  { x: -32, y: -26, size: 9, color: "bg-[#F97316]", delay: 0.25 },
  { x: -18, y: -46, size: 7, color: "bg-[#8B5CF6]", delay: 0.05 },

  // Top Cluster
  { x: -8, y: -40, size: 13, color: "bg-[#EF4444]", delay: 0.08 },
  { x: 2, y: -48, size: 10, color: "bg-[#F59E0B]", delay: 0.18 },
  { x: 12, y: -42, size: 11, color: "bg-[#FBBF24]", delay: 0.12 },
  { x: 6, y: -32, size: 7, color: "bg-[#3B82F6]", delay: 0.3 },

  // Top-Right Cluster
  { x: 24, y: -38, size: 12, color: "bg-[#EF4444]", delay: 0.14 },
  { x: 34, y: -28, size: 8, color: "bg-[#8B5CF6]", delay: 0.22 },
  { x: 42, y: -14, size: 11, color: "bg-[#FBBF24]", delay: 0.16 },
  { x: 38, y: -2, size: 8, color: "bg-[#F97316]", delay: 0.28 },

  // Left & Bottom-Left Cluster
  { x: -38, y: 14, size: 8, color: "bg-[#10B981]", delay: 0.35 },
  { x: -30, y: 28, size: 13, color: "bg-[#10B981]", delay: 0.18 },
  { x: -14, y: 38, size: 9, color: "bg-[#14B8A6]", delay: 0.24 },
  { x: -2, y: 40, size: 7, color: "bg-[#FBBF24]", delay: 0.32 },

  // Bottom-Right Accent
  { x: 28, y: 24, size: 7, color: "bg-[#3B82F6]", delay: 0.4 },
  { x: 36, y: 10, size: 6, color: "bg-[#10B981]", delay: 0.26 },
];

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col items-center gap-3 sm:gap-3.5 pointer-events-auto select-none">
      {/* ── 1. Phone Call Action Button (Sky Blue #4D82E8 - Top) ── */}
      <div
        className="relative flex items-center justify-end"
        onMouseEnter={() => setHoveredButton("phone")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <AnimatePresence>
          {hoveredButton === "phone" && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-1.5 rounded-full bg-[#0B0F14]/90 dark:bg-[#0B0F14]/95 text-white text-xs font-mono border border-white/15 shadow-xl backdrop-blur-md pointer-events-none whitespace-nowrap absolute right-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#4D82E8] animate-pulse" />
              <span>Call: +91 91459 21300</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Direct Phone Call to Sohib Khan (+91 91459 21300)"
          title="Call (+91 91459 21300)"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#4D82E8] hover:bg-[#3D72D8] text-white shadow-[0_6px_18px_rgba(77,130,232,0.4)] hover:shadow-[0_10px_24px_rgba(77,130,232,0.6)] flex items-center justify-center cursor-pointer transition-all duration-200 border border-white/25"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-xs" />
        </motion.a>
      </div>

      {/* ── 2. WhatsApp Chat Action Button (Soft Emerald Green #57CD81 - Middle) ── */}
      <div
        className="relative flex items-center justify-end"
        onMouseEnter={() => setHoveredButton("whatsapp")}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <AnimatePresence>
          {hoveredButton === "whatsapp" && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.15 }}
              className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-1.5 rounded-full bg-[#0B0F14]/90 dark:bg-[#0B0F14]/95 text-white text-xs font-mono border border-white/15 shadow-xl backdrop-blur-md pointer-events-none whitespace-nowrap absolute right-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#57CD81] animate-pulse" />
              <span>Chat on WhatsApp</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ambient subtle ping ring */}
        <span className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#57CD81]/30 animate-ping pointer-events-none opacity-30 duration-1000" />

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Sohib Khan on WhatsApp (+91 91459 21300)"
          title="Chat on WhatsApp"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#57CD81] hover:bg-[#46BA70] text-white shadow-[0_6px_18px_rgba(87,205,129,0.4)] hover:shadow-[0_10px_24px_rgba(87,205,129,0.6)] flex items-center justify-center cursor-pointer transition-all duration-200 border border-white/25"
        >
          <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-xs" />
        </motion.a>
      </div>

      {/* ── 3. Scroll To Top Action Button (Theme Color Spruce #2A7569 with Confetti Particles - Bottom) ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative flex items-center justify-center"
          >
            {/* Soft Ambient Glow Halo behind button (Theme Color) */}
            <div className="absolute w-24 h-24 rounded-full bg-[#2A7569]/25 blur-xl pointer-events-none select-none" />

            {/* Surrounding Burst of Colorful Confetti Particles */}
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


            {/* Theme Color Spruce Button (#2A7569) */}
            <motion.button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              title="Scroll to Top"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2A7569] hover:bg-[#22665B] text-white shadow-[0_8px_24px_rgba(42,117,105,0.45)] hover:shadow-[0_12px_30px_rgba(42,117,105,0.65)] flex items-center justify-center cursor-pointer transition-all duration-200 border border-white/25"
            >
              <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.8]" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
