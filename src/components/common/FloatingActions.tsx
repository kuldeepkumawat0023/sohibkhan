"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const PHONE_NUMBER = "+919145921300";
const WHATSAPP_URL =
  "https://wa.me/919145921300?text=Hi%20Sohib%2C%20I%20saw%20your%20QA%20portfolio%20and%20would%20like%20to%20connect!";

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
      {/* ── 1. Phone Call Action Button (Blue - Top) ── */}
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
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
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
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#2563EB] to-[#60A5FA] text-white shadow-[0_8px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_28px_rgba(37,99,235,0.6)] flex items-center justify-center cursor-pointer border border-white/30 transition-shadow duration-300"
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-xs" />
        </motion.a>
      </div>

      {/* ── 2. WhatsApp Chat Action Button (Green - Middle) ── */}
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
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>Chat on WhatsApp</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ambient subtle ping ring */}
        <span className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-30 duration-1000" />

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Sohib Khan on WhatsApp (+91 91459 21300)"
          title="Chat on WhatsApp"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-[0_8px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_28px_rgba(37,211,102,0.6)] flex items-center justify-center cursor-pointer border border-white/30 transition-shadow duration-300"
        >
          <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-xs" />
        </motion.a>
      </div>

      {/* ── 3. Scroll To Top Action Button (Deep Blue - Bottom) ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative flex items-center justify-end"
            onMouseEnter={() => setHoveredButton("scroll")}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <AnimatePresence>
              {hoveredButton === "scroll" && (
                <motion.div
                  initial={{ opacity: 0, x: 10, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 10, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                  className="hidden sm:flex items-center gap-2 mr-3 px-3.5 py-1.5 rounded-full bg-[#0B0F14]/90 dark:bg-[#0B0F14]/95 text-white text-xs font-mono border border-white/15 shadow-xl backdrop-blur-md pointer-events-none whitespace-nowrap absolute right-full"
                >
                  <span>Scroll to Top</span>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top of page"
              title="Scroll to Top"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#1E40AF] to-[#2563EB] text-white shadow-[0_8px_20px_rgba(30,64,175,0.4)] hover:shadow-[0_12px_28px_rgba(30,64,175,0.6)] flex items-center justify-center cursor-pointer border border-white/30 transition-shadow duration-300"
            >
              <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2.5]" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
