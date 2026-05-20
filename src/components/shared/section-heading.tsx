import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  accent?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        centered ? "mx-auto max-w-2xl text-center" : "max-w-xl",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-scipace-teal">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-balance text-2xl font-bold tracking-tight text-scipace-heading sm:text-3xl md:text-4xl",
          centered && "mx-auto"
        )}
      >
        {title}
        {accent && (
          <>
            {" "}
            <span className="text-scipace-teal">{accent}</span>
          </>
        )}
      </h2>
      <div
        className={cn(
          "mt-4 h-1 w-10 rounded-full bg-scipace-teal/30",
          centered && "mx-auto"
        )}
        aria-hidden
      />
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed text-scipace-body sm:text-lg",
            centered && "mx-auto max-w-xl"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
