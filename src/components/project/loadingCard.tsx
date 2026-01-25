"use client";

import { cn } from "@/lib/cn";

interface LoadingCardProps {
  className?: string;
}

export default function LoadingCard({ className }: LoadingCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-(--border) bg-(--surface-elevated) p-6 flex flex-col gap-4 animate-pulse",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="w-16 h-4 bg-(--border) rounded" />
          <div className="w-32 h-6 bg-(--border) rounded" />
          <div className="w-12 h-4 bg-(--border) rounded" />
        </div>
        <div className="w-6 h-6 bg-(--border) rounded" />
      </div>

      <div className="mt-4 space-y-2">
        <div className="w-full h-3 bg-(--border) rounded" />
        <div className="w-full h-3 bg-(--border) rounded" />
        <div className="w-3/4 h-3 bg-(--border) rounded" />
      </div>

      <div className="mt-4 w-full aspect-video rounded-lg bg-(--border)" />
    </div>
  );
}
