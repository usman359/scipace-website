import { BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

type ScipaceLogoProps = {
  /** White wordmark on dark backgrounds (footer). Icon stays the same. */
  tone?: "default" | "dark";
  size?: "default" | "lg";
  className?: string;
};

export function ScipaceLogo({
  tone = "default",
  size = "default",
  className,
}: ScipaceLogoProps) {
  const isDark = tone === "dark";
  const isLarge = size === "lg";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className={cn(
          "flex shrink-0 items-center justify-center rounded-lg bg-scipace-teal shadow-md shadow-black/10",
          isLarge ? "size-11" : "size-10"
        )}
      >
        <BookOpen
          className={cn("text-white", isLarge ? "size-6" : "size-5")}
          strokeWidth={1.75}
        />
      </div>
      <span
        className={cn(
          "font-bold tracking-tight",
          isLarge ? "text-2xl" : "text-xl",
          isDark ? "text-white" : "text-scipace-teal"
        )}
      >
        Scipace
      </span>
    </div>
  );
}
