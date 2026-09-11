"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { profileData } from "@/data/profile";

const TOP_PARTICLES = [
  { left: "2%", top: "8px", size: "w-2.5 h-2.5", color: "bg-rose-500", delay: 0 },
  { left: "5%", top: "18px", size: "w-3 h-3", color: "bg-amber-400", delay: 0.2 },
  { left: "7%", top: "6px", size: "w-2 h-2", color: "bg-teal-400", delay: 0.5 },
  { left: "10%", top: "22px", size: "w-3.5 h-3.5", color: "bg-primary", delay: 0.8 },
  { left: "14%", top: "10px", size: "w-2 h-2", color: "bg-emerald-400", delay: 0.3 },
  { left: "18%", top: "26px", size: "w-3 h-3", color: "bg-violet-500", delay: 0.6 },
  { left: "23%", top: "12px", size: "w-2.5 h-2.5", color: "bg-amber-500", delay: 0.1 },
  { left: "28%", top: "20px", size: "w-3 h-3", color: "bg-sky-400", delay: 0.4 },
  { left: "32%", top: "8px", size: "w-2 h-2", color: "bg-rose-400", delay: 0.7 },
  { left: "38%", top: "24px", size: "w-3 h-3", color: "bg-primary", delay: 0.2 },
  { left: "44%", top: "14px", size: "w-2 h-2", color: "bg-amber-400", delay: 0.5 },
  { left: "49%", top: "26px", size: "w-3 h-3", color: "bg-teal-300", delay: 0.9 },
  { left: "54%", top: "10px", size: "w-2.5 h-2.5", color: "bg-primary", delay: 0.3 },
  { left: "60%", top: "22px", size: "w-3 h-3", color: "bg-amber-500", delay: 0.6 },
  { left: "66%", top: "8px", size: "w-2 h-2", color: "bg-rose-500", delay: 0.1 },
  { left: "72%", top: "26px", size: "w-3 h-3", color: "bg-sky-400", delay: 0.4 },
  { left: "78%", top: "12px", size: "w-2.5 h-2.5", color: "bg-primary", delay: 0.8 },
  { left: "83%", top: "20px", size: "w-3 h-3", color: "bg-emerald-400", delay: 0.2 },
  { left: "88%", top: "6px", size: "w-2 h-2", color: "bg-violet-400", delay: 0.5 },
  { left: "92%", top: "24px", size: "w-3.5 h-3.5", color: "bg-amber-400", delay: 0.7 },
  { left: "96%", top: "10px", size: "w-2.5 h-2.5", color: "bg-teal-400", delay: 0.3 },
];

export function Footer() {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const technologies = [
    "Selenium & Playwright",
    "Postman & API Validation",
    "Core Java & MySQL",
    "Manual & Regression Testing",
    "Git & GitHub Workflows",
  ];

  return (
    <footer className="pt-16 pb-12 sm:pb-16 border-t border-border/60 bg-surface-container-low/40 relative z-10 w-full overflow-hidden">
      
      {/* ── Top Ambient Colorful Particles (Matching Reference Design) ── */}
      <div className="absolute top-0 inset-x-0 h-12 pointer-events-none overflow-hidden select-none z-0">
        {TOP_PARTICLES.map((particle, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [-3, 3, -3],
              opacity: [0.65, 0.95, 0.65],
            }}
            transition={{
              duration: 3 + (idx % 3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
            className={`absolute rounded-full ${particle.size} ${particle.color} shadow-xs`}
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        
        {/* ── Main 4-Column Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-border/50">
          
          {/* Column 1: Brand & Bio (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-primary font-mono font-bold text-xl mb-3">
                <span className="text-primary font-mono tracking-tighter">&lt;/&gt;</span>
                <span className="text-xl font-extrabold text-foreground tracking-tight">Sohib Khan</span>
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed max-w-sm">
                QA Engineer dedicated to breaking software so users don&apos;t have to. Specializing in manual validation, Selenium, Playwright, and API testing.
              </p>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface-container hover:bg-primary/20 text-foreground/80 hover:text-primary transition-all duration-200 border border-border/70 flex items-center justify-center shadow-xs cursor-pointer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>

              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-surface-container hover:bg-primary/20 text-foreground/80 hover:text-primary transition-all duration-200 border border-border/70 flex items-center justify-center shadow-xs cursor-pointer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${profileData.contact.email}`}
                className="w-9 h-9 rounded-full bg-surface-container hover:bg-primary/20 text-foreground/80 hover:text-primary transition-all duration-200 border border-border/70 flex items-center justify-center shadow-xs cursor-pointer"
                aria-label="Direct Email"
                title="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-foreground tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-foreground/75">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Technologies (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-foreground tracking-wide mb-4">
              Technologies
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-foreground/75">
              {technologies.map((tech) => (
                <li key={tech} className="hover:text-foreground transition-colors">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch (3 Cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-foreground tracking-wide mb-4">
                Get In Touch
              </h4>

              <div className="space-y-3 text-sm text-foreground/80">
                {/* Email */}
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="flex items-center gap-2.5 hover:text-primary transition-colors group break-all"
                >
                  <Mail className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-mono text-xs sm:text-sm">{profileData.contact.email}</span>
                </a>

                {/* Location */}
                <div className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>Sunder Vihar Colony, Vivek Vihar, Jaipur, Rajasthan</span>
                </div>
              </div>
            </div>

            {/* Availability Status Pill */}
            <div className="mt-5 inline-flex items-center gap-2 font-mono text-xs text-[#0c312a] dark:text-mint-glow font-bold px-3.5 py-1.5 rounded-full bg-primary/15 dark:bg-primary/10 border border-primary/30 dark:border-primary/25 neumorphic-inset w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />
              <span>Available for Projects</span>
            </div>
          </div>

        </div>

        {/* ── Bottom Sub-Footer Bar ── */}
        <div className="pt-6 flex items-center justify-center text-xs font-mono text-muted-foreground text-center">
          <span>© {new Date().getFullYear()} Sohib Khan — Built with care for detail, like every test case.</span>
        </div>

      </div>
    </footer>
  );
}
