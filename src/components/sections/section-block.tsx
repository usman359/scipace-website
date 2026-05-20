import { cn } from "@/lib/utils";

type SectionBlockProps = {
  id?: string;
  prefix: string;
  accent: string;
  children: React.ReactNode;
  variant?: "default" | "muted";
  className?: string;
};

export function SectionBlock({
  id,
  prefix,
  accent,
  children,
  variant = "default",
  className,
}: SectionBlockProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 border-b border-gray-100/80 py-12 text-center md:py-14",
        variant === "muted" && "bg-gray-50/60",
        className
      )}
    >
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:max-w-4xl">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-scipace-heading sm:text-3xl md:text-4xl">
          {prefix}{" "}
          <span className="text-scipace-teal">{accent}</span>
        </h2>
        <div
          className="mx-auto mt-4 h-1 w-10 rounded-full bg-scipace-teal/30"
          aria-hidden
        />
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-scipace-body sm:text-lg">
          {children}
        </p>
      </div>
    </section>
  );
}
