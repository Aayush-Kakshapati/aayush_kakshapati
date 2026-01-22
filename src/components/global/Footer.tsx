"use client";

import { cn } from "../../lib/cn";
import Socials from "../home/Socials";

export default function Footer() {
  return (
    <footer className="h-40 border border-(--border) bg-surface py-6 text-center flex flex-col items-center justify-center">
      <div className="mb-4">
        <Socials />
      </div>

      <p className={cn("text-sm text-(--muted)")}>
        © {new Date().getFullYear()} Aayush Kakshapati. All rights reserved.
      </p>
    </footer>
  );
}
