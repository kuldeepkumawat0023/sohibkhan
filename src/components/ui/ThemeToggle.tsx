"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full" />;
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer text-foreground/80 hover:text-foreground hover:bg-surface-container border border-border/60 shadow-sm"
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun className="w-[18px] h-[18px] text-amber-bright transition-transform duration-300 hover:rotate-90" />
      ) : (
        <Moon className="w-[18px] h-[18px] transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}

