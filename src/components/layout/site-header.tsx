"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { ScipaceLogo } from "@/components/shared/scipace-logo";
import { ScrollLink } from "@/components/shared/scroll-link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SIGN_UP_URL } from "@/lib/constants";
import { navSections } from "@/lib/nav-sections";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-16">
        <ScrollLink
          toTop
          className="shrink-0 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-scipace-teal/40"
          aria-label="Scroll to top"
        >
          <ScipaceLogo />
        </ScrollLink>

        <nav className="hidden items-center gap-0.5 md:flex">
          {navSections.map((link) => (
            <ScrollLink
              key={link.id}
              sectionId={link.id}
              className="rounded-md px-3 py-2 text-sm font-medium text-scipace-body transition-colors hover:bg-gray-100 hover:text-scipace-teal"
            >
              {link.label}
            </ScrollLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            className="hidden sm:inline-flex"
          >
            <a href="mailto:hello@scipace.com">Contact us</a>
          </Button>
          <Button
            asChild
            className="hidden bg-scipace-heading text-white hover:bg-scipace-heading/90 sm:inline-flex"
          >
            <a
              href={SIGN_UP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Beta
            </a>
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle className="text-left text-scipace-heading">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-1">
                {navSections.map((link) => (
                  <ScrollLink
                    key={link.id}
                    sectionId={link.id}
                    onNavigate={() => setMenuOpen(false)}
                    className="rounded-md px-3 py-2.5 text-left text-sm font-medium text-scipace-body transition-colors hover:bg-gray-50 hover:text-scipace-teal"
                  >
                    {link.label}
                  </ScrollLink>
                ))}
                <Button
                  asChild
                  className="mt-3 w-full bg-scipace-heading text-white hover:bg-scipace-heading/90"
                  onClick={() => setMenuOpen(false)}
                >
                  <a
                    href={SIGN_UP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join the Beta
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  <a href="mailto:hello@scipace.com">Contact us</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
