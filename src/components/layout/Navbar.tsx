"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  Home,
  User,
  Briefcase,
  Code2,
  Layers,
  GraduationCap,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

const NAV_LINKS = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const MOBILE_NAV_LINKS = [
  { href: "#", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#experience", label: "Experience", icon: Briefcase },
  { href: "#projects", label: "Projects", icon: Code2 },
  { href: "#skills", label: "Skills", icon: Layers },
  { href: "#education", label: "Education", icon: GraduationCap },
  { href: "#contact", label: "Contact", icon: Mail },
];

// Page sequence for monotonic last-passed-top calculation
const SCROLL_SECTIONS = [
  { id: "about", navId: "about" },
  { id: "experience", navId: "experience" },
  { id: "projects", navId: "projects" },
  { id: "skills", navId: "skills" },
  { id: "education", navId: "education" },
  { id: "extra", navId: "education" }, // Map Extra (Languages & Hobbies) to Education
  { id: "contact", navId: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Lock scroll-spy during programmatic smooth scrolling so intermediate sections don't flicker
  const isClickScrollingRef = useRef<boolean>(false);
  const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");

    // Temporarily lock scroll-spy while smooth scroll animation executes
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 750);

    if (href === "#") {
      setActiveSection("");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setActiveSection(id);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Skip scroll-spy calculation if user just clicked a link (prevents intermediate section jitter)
      if (isClickScrollingRef.current) return;

      // 1. Top of page -> Home
      if (window.scrollY < 180) {
        setActiveSection("");
        return;
      }

      // 2. Bottom of page -> Contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 60
      ) {
        setActiveSection("contact");
        return;
      }

      // 3. Monotonic last-passed-top algorithm
      const targetOffset = 130;
      let matchedNavId = "";

      for (const section of SCROLL_SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= targetOffset) {
            matchedNavId = section.navId;
          }
        }
      }

      if (matchedNavId) {
        setActiveSection(matchedNavId);
      }
    };

    let rafId: number | null = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        handleScroll();
        rafId = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/90 dark:bg-background/90 backdrop-blur-xl shadow-xs border-b border-border/60 py-3 sm:py-3.5"
          : "bg-transparent py-4 sm:py-5"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12" aria-label="Main Navigation">
        <div className="flex items-center justify-between">

          {/* ── Brand Logo: </> Sohib Khan (Matching Reference Screenshot) ── */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center gap-2 text-foreground transition-colors group cursor-pointer"
            title="Sohib Khan Portfolio"
          >
            <span className="text-primary font-mono font-bold text-lg sm:text-xl tracking-tighter">
              &lt;/&gt;
            </span>
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-foreground">
              Sohib Khan
            </span>
          </a>

          {/* ── Desktop Center Links: Clean Floating with Active Underline Bar ── */}
          <div className="hidden md:flex items-center">
            <ul className="flex items-center gap-6 lg:gap-8 m-0 p-0 list-none">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace("#", "");
                const isActive =
                  link.href === "#" ? activeSection === "" : activeSection === id;

                return (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      aria-current={isActive ? "page" : undefined}
                      className={`relative py-1 text-sm font-medium transition-colors block cursor-pointer select-none ${isActive
                          ? "text-primary font-bold"
                          : "text-foreground/75 hover:text-foreground"
                        }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="navbar-underline"
                          className="absolute -bottom-1 left-0 right-0 h-[2.5px] bg-primary rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 28,
                            mass: 0.8,
                          }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ── Right Action: ThemeToggle + Connect on GitHub Button ── */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <ThemeToggle />

            <a
              href="https://github.com/Sohib-Khan"
              target="_blank"
              rel="noopener noreferrer"
              className="amber-button hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold"
            >
              <FaGithub className="w-4 h-4 text-white shrink-0" />
              <span>Connect on GitHub</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-xs bg-surface-container text-foreground border border-border/60 transition-transform active:scale-95 cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>

        {/* ── Mobile Dropdown Menu ── */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden mt-3 p-3 sm:p-4 rounded-3xl bg-card/95 dark:bg-card/95 backdrop-blur-xl border border-border/80 shadow-2xl"
            >
              <ul className="flex flex-col gap-1.5 m-0 p-0 list-none">
                {MOBILE_NAV_LINKS.map((link) => {
                  const id = link.href.replace("#", "");
                  const isActive =
                    link.href === "#" ? activeSection === "" : activeSection === id;
                  const Icon = link.icon;

                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        aria-current={isActive ? "page" : undefined}
                        className={`flex items-center gap-3.5 px-3.5 py-2.5 rounded-2xl transition-all duration-200 ${isActive
                            ? "bg-surface-container dark:bg-surface-container-high text-primary font-bold shadow-xs"
                            : "text-foreground/85 hover:text-foreground hover:bg-surface-container/60 font-medium"
                          }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isActive
                              ? "bg-primary text-white"
                              : "bg-surface-container/80 dark:bg-surface-container text-foreground/75"
                            }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm">{link.label}</span>
                      </a>
                    </li>
                  );
                })}

                {/* Mobile Connect on GitHub Button */}
                <li className="pt-2 mt-1 border-t border-border/50">
                  <a
                    href="https://github.com/Sohib-Khan"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="amber-button flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-2xl font-mono font-semibold text-xs sm:text-sm active:scale-[0.99]"
                  >
                    <FaGithub className="w-4 h-4 text-white shrink-0" />
                    <span>Connect on GitHub</span>
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
