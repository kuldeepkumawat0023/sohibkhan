"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2, Terminal } from "lucide-react";

const RUNLOG_LINES = [
  "validating layout & viewport bounds (12ms)",
  "verifying cross-browser responsiveness (18ms)",
  "executing regression sanity suite (24ms)",
  "candidate profile verified [PASS]",
];

export function RunlogTerminal() {
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setVisibleCount(RUNLOG_LINES.length);
      return;
    }

    const timers: NodeJS.Timeout[] = [];
    RUNLOG_LINES.forEach((_, idx) => {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => Math.max(prev, idx + 1));
      }, 150 + idx * 220);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!isMounted) {
    return <div className="min-h-[64px] mb-3" />;
  }

  return (
    <div className="font-mono text-xs sm:text-[13px] text-muted-foreground min-h-[68px] flex flex-col justify-end gap-1.5 mb-3.5 select-none">
      <div className="flex items-center gap-1.5 text-[11px] text-white/50 uppercase tracking-wider mb-0.5">
        <Terminal className="w-3.5 h-3.5 text-mint-glow" />
        <span>Automated Suite Runner v2.4</span>
      </div>

      {RUNLOG_LINES.slice(0, visibleCount).map((text, i) => (
        <div
          key={i}
          className="flex items-center gap-2 animate-fadeIn transition-opacity duration-300"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-mint-glow flex-none" />
          <span className="text-white/90">{text}</span>
        </div>
      ))}
    </div>
  );
}
