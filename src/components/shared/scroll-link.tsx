"use client";

import { scrollToSection, scrollToTop } from "@/lib/scroll";
import { cn } from "@/lib/utils";

type ScrollLinkProps = {
  sectionId?: string;
  toTop?: boolean;
  children: React.ReactNode;
  className?: string;
  onNavigate?: () => void;
};

export function ScrollLink({
  sectionId,
  toTop,
  children,
  className,
  onNavigate,
}: ScrollLinkProps) {
  const handleClick = () => {
    if (toTop) {
      scrollToTop();
    } else if (sectionId) {
      scrollToSection(sectionId);
    }
    onNavigate?.();
  };

  return (
    <button type="button" onClick={handleClick} className={cn(className)}>
      {children}
    </button>
  );
}
