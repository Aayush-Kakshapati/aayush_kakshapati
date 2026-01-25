import { cn } from "@/lib/cn";

export function Section({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("mx-auto max-w-7xl px-6", className)} {...props} />
  );
}
