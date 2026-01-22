import { cn } from "../../lib/cn";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4";
};

export function Heading({ as: Tag = "h2", className, ...props }: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-semibold tracking-tight text-(--foreground)",
        Tag === "h1" && "text-5xl leading-[1.1]",
        Tag === "h2" && "text-3xl leading-tight",
        Tag === "h3" && "text-2xl leading-snug",
        Tag === "h4" && "text-xl leading-snug",
        className,
      )}
      {...props}
    />
  );
}

export function Text({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-base leading-relaxed text-(--muted)", className)}
      {...props}
    />
  );
}

export function Mono({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("font-mono text-sm text-(--muted-foreground)", className)}
      {...props}
    />
  );
}
