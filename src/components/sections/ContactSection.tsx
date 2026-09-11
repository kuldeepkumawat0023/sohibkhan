"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Mail,
  Phone,
  ShieldCheck,
  Download,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export function ContactSection() {
  const [copiedType, setCopiedType] = useState<"email" | "phone" | null>(null);

  const handleCopy = (text: string, type: "email" | "phone") => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2200);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden pt-3 sm:pt-4 pb-16 sm:pb-24 w-full">
      {/* ── Background Animated Elements (z-0) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Soft Ambient Radial Dot Grid */}
        <div
          className="absolute inset-0 opacity-[0.045] dark:opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(currentColor 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Floating Mint-Teal Ambient Glow Orb (Top Left) */}
        <motion.div
          animate={{
            x: [-20, 25, -20],
            y: [-15, 20, -15],
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full bg-gradient-to-br from-primary/30 via-mint-glow/20 to-transparent blur-3xl opacity-70 dark:opacity-40"
        />

        {/* Floating Amber Ambient Glow Orb (Bottom Right) */}
        <motion.div
          animate={{
            x: [20, -25, 20],
            y: [15, -20, 15],
            scale: [1, 1.12, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-24 -right-24 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full bg-gradient-to-tl from-amber-bright/30 via-amber/20 to-transparent blur-3xl opacity-70 dark:opacity-40"
        />
      </div>

      {/* ── Main Content Container (z-10) ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full relative z-10">
        <SectionHeader title="Get In Touch" count="Direct Connection" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mt-8">

          {/* ── Left Column: Value Proposition & Direct CTAs (5 Cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs text-primary font-bold uppercase tracking-wider block mb-2">
                DIRECT RECRUITMENT • OPEN TO OPPORTUNITIES
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                Ready to eliminate bugs before production? Let&apos;s talk.
              </h2>

              <p className="text-sm sm:text-base text-foreground/80 mt-4 leading-relaxed">
                Currently working as a Full Stack QA Intern at Artifact Geeks. Actively open to full-time QA Engineer, automation specialist, and SDET roles. Let&apos;s connect directly by email, phone, or LinkedIn.
              </p>

              {/* Immediate Availability Badge */}
              <div className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-[#0c312a] dark:text-mint-glow font-bold bg-primary/15 dark:bg-primary/10 px-4 py-2 rounded-full border border-primary/30 dark:border-primary/25 neumorphic-inset">
                <ShieldCheck className="w-4 h-4 text-[#0c312a] dark:text-mint-glow shrink-0" />
                <span>Available for Immediate Joining • Remote / Relocation</span>
              </div>
            </div>

            {/* Prominent Signature Amber Button: Download QA Resume */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <span className="text-[11px] font-mono text-muted-foreground uppercase font-semibold block mb-3">
                Verified Candidate Documentation:
              </span>
              <a
                href={profileData.contact.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                download="Sohib_Khan_Resume.pdf"
                className="amber-button font-mono text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl shadow-xl w-full sm:w-auto text-center cursor-pointer transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span>Download Official QA Resume</span>
              </a>
            </div>
          </motion.div>

          {/* ── Right Column: 4 3D Neumorphic Contact Slabs (7 Cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
          >
            {/* Slab 1: Email Address */}
            <div className="neumorphic-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="media-icon-box w-12 h-12 rounded-2xl bg-spruce text-white flex items-center justify-center shadow-md mb-0 group-hover:scale-105 group-hover:bg-primary transition-all duration-300">
                    <Mail className="w-5 h-5 text-mint-glow" />
                  </div>
                  <button
                    onClick={() => handleCopy(profileData.contact.email, "email")}
                    className="p-2 rounded-xl bg-surface-container hover:bg-primary/15 text-muted-foreground hover:text-primary transition-colors text-xs font-mono flex items-center gap-1 neumorphic-inset cursor-pointer"
                    title="Copy Email Address"
                    aria-label="Copy Email"
                  >
                    {copiedType === "email" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[10px] font-bold text-primary">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px] hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <span className="text-[11px] font-mono text-muted-foreground uppercase font-semibold block mb-1">
                  Primary Email
                </span>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="font-mono text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors break-all block"
                >
                  {profileData.contact.email}
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>Fast response within 24h</span>
                <span className="text-primary font-semibold">Direct Inbox ↗</span>
              </div>
            </div>

            {/* Slab 2: Direct Phone */}
            <div className="neumorphic-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="media-icon-box w-12 h-12 rounded-2xl bg-spruce text-white flex items-center justify-center shadow-md mb-0 group-hover:scale-105 group-hover:bg-primary transition-all duration-300">
                    <Phone className="w-5 h-5 text-mint-glow" />
                  </div>
                  <button
                    onClick={() => handleCopy(profileData.contact.phone, "phone")}
                    className="p-2 rounded-xl bg-surface-container hover:bg-primary/15 text-muted-foreground hover:text-primary transition-colors text-xs font-mono flex items-center gap-1 neumorphic-inset cursor-pointer"
                    title="Copy Phone Number"
                    aria-label="Copy Phone"
                  >
                    {copiedType === "phone" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[10px] font-bold text-primary">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[10px] hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <span className="text-[11px] font-mono text-muted-foreground uppercase font-semibold block mb-1">
                  Direct Phone &amp; WhatsApp
                </span>
                <a
                  href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
                  className="font-mono text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors block"
                >
                  {profileData.contact.phone}
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>Direct Voice / Call</span>
                <span className="text-primary font-semibold">Tap to Call ↗</span>
              </div>
            </div>

            {/* Slab 3: LinkedIn Network */}
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="neumorphic-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="media-icon-box w-12 h-12 rounded-2xl bg-spruce text-white flex items-center justify-center shadow-md mb-0 group-hover:scale-105 group-hover:bg-primary transition-all duration-300">
                    <FaLinkedin className="w-5 h-5 text-mint-glow" />
                  </div>
                  <span className="p-2 rounded-xl bg-surface-container text-muted-foreground group-hover:text-primary transition-colors neumorphic-inset">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>

                <span className="text-[11px] font-mono text-muted-foreground uppercase font-semibold block mb-1">
                  LinkedIn Network
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors block">
                  sohib-lodhi
                </span>
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>QA &amp; SDET Network</span>
                <span className="text-primary font-semibold">View Profile ↗</span>
              </div>
            </a>

            {/* Slab 4: GitHub Repositories */}
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="neumorphic-card rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="media-icon-box w-12 h-12 rounded-2xl bg-spruce text-white flex items-center justify-center shadow-md mb-0 group-hover:scale-105 group-hover:bg-primary transition-all duration-300">
                    <FaGithub className="w-5 h-5 text-mint-glow" />
                  </div>
                  <span className="p-2 rounded-xl bg-surface-container text-muted-foreground group-hover:text-primary transition-colors neumorphic-inset">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>

                <span className="text-[11px] font-mono text-muted-foreground uppercase font-semibold block mb-1">
                  GitHub Repositories
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors block">
                  Sohib-Khan
                </span>
              </div>

              <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>Automated Test Frameworks</span>
                <span className="text-primary font-semibold">Explore Code ↗</span>
              </div>
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
