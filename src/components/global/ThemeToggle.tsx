"use client";

import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme(); // removed 'theme'
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-2 rounded text-(--muted) hover:text-(--primary) transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
}
