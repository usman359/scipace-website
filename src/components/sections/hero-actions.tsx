"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { SIGN_UP_URL } from "@/lib/constants";
import { scrollToSection } from "@/lib/scroll";
import { Button } from "@/components/ui/button";

export function HeroActions() {
  return (
    <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
      <Button
        asChild
        className="bg-scipace-heading text-white hover:bg-scipace-heading/90"
      >
        <a href={SIGN_UP_URL} target="_blank" rel="noopener noreferrer">
          Join the Beta
          <ArrowRight className="size-4" />
        </a>
      </Button>
      <Button
        variant="outline"
        className="border-gray-300"
        onClick={() => scrollToSection("mission")}
      >
        Learn more
        <ArrowDown className="size-4" />
      </Button>
    </div>
  );
}
