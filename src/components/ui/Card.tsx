import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
};

export default function Card({
  className,
  hover = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        `
        rounded-2xl
        border border-(--border) hover:border-(--muted)
        bg-(--surface-elevated)
        p-6
        flex flex-col
        gap-4
        `,
        hover && "transition-colors hover:border-(--primary)",
        className,
      )}
      {...props}
    />
  );
}
