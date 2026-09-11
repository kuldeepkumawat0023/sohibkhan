"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  count?: string;
  className?: string;
}

export function SectionHeader({ title, count, className = "" }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`flex items-center gap-3 mb-7 ${className}`}
    >
      <div className="w-[30px] h-[30px] flex-none bg-primary rounded-[10px] relative shadow-sm neu-amber">
        <span className="absolute left-[9px] top-[11px] w-[9px] h-[5px] border-l-2 border-b-2 border-primary-container -rotate-45" />
      </div>
      <h2 className="text-[22px] font-bold tracking-tight text-foreground">{title}</h2>
      {count && (
        <span className="font-mono text-xs text-muted-foreground ml-auto bg-surface-container px-2.5 py-1 rounded-full neu-pressed border border-border/40">
          {count}
        </span>
      )}
    </motion.div>
  );
}
