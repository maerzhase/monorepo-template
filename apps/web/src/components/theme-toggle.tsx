"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="bg-card text-card-foreground border-border hover:bg-muted inline-flex h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium shadow-sm shadow-black/5 backdrop-blur transition-colors dark:shadow-black/30"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      type="button"
    >
      <span className="text-base leading-none" aria-hidden="true">
        {isDark ? "☀" : "☾"}
      </span>
      <span>{isDark ? "Light mode" : "Dark mode"}</span>
    </button>
  );
}
