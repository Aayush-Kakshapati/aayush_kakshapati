import { MotionDiv, fadeUp } from "@/components/ui/motion";
import { Text, Mono } from "@/components/ui/fonts";

export function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <Mono>{label}</Mono>
      <Mono className="text-right text-(--foreground)">{value}</Mono>
    </div>
  );
}

export function AnimatedStat({
  title,
  children,
  progress,
}: {
  title: string;
  children: React.ReactNode;
  progress?: number;
}) {
  return (
    <MotionDiv variants={fadeUp} className="flex flex-col">
      <Mono className="block mb-1">{title}</Mono>
      <div>{children}</div>
      {progress !== undefined && <Progress percent={progress} />}
    </MotionDiv>
  );
}

export function TechChip({ text }: { text: string }) {
  return (
    <span className="inline-block border border-(--border) hover:border-(--muted) bg-(--surface) text-(--primary) text-sm px-2 py-1 rounded-md mr-2 mb-2">
      {text}
    </span>
  );
}

export function Trait({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-(--primary)" />
      <Text>{children}</Text>
    </li>
  );
}

export function Progress({ percent }: { percent: number }) {
  return (
    <div className="w-full h-2 bg-(--surface) rounded-full mt-1">
      <div
        className="h-2 rounded-full bg-(--primary)"
        style={{ width: `${percent}%`, opacity: 0.7 }}
      />
    </div>
  );
}
