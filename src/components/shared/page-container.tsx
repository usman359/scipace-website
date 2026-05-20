import { cn } from "@/lib/utils";

type PageContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section";
};

export function PageContainer({
  children,
  className,
  as: Component = "div",
}: PageContainerProps) {
  return (
    <Component
      className={cn("mx-auto w-full max-w-3xl px-6 sm:px-8 lg:max-w-4xl", className)}
    >
      {children}
    </Component>
  );
}
