"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/cn";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-40
        border-b border-(--border)
        bg-(--background)/80
        backdrop-blur-md
      "
    >
      <nav className="mx-auto max-w-6xl h-16 px-6 flex items-center justify-between">
        <Link
          href="/"
          className="
            font-bold
            text-[20px]
            tracking-tight
            text-(--muted-foreground)
            transition-colors duration-300
            hover:text-(--primary)
            "
        >
          <span className="text-(--primary)">AAYUSH</span>
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/about"
            aria-label="About"
            className="
              text-(--muted)
              hover:text-(--primary)
              transition-colors
              flex items-center justify-center
            "
          >
            <FiUser className="h-5 w-5" />
          </Link>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
