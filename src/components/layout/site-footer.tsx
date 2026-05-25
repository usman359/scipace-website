"use client";

import { Globe, Mail } from "lucide-react";
import { ScipaceLogo } from "@/components/shared/scipace-logo";
import { ScrollLink } from "@/components/shared/scroll-link";
import { Separator } from "@/components/ui/separator";
import { SIGN_UP_URL } from "@/lib/constants";
import { navSections } from "@/lib/nav-sections";

export function SiteFooter() {
  return (
    <footer className="relative bg-scipace-footer text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <ScipaceLogo tone="dark" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
              Scipace is an independent initiative focused on social good
              through education. We welcome collaboration and feedback as we
              shape its future.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-2 text-sm text-white/70">
              {navSections.map((link) => (
                <li key={link.id}>
                  <ScrollLink
                    sectionId={link.id}
                    className="text-left transition-colors hover:text-white"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/90">
              Connect
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/75">
              <li>
                <a
                  href={SIGN_UP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Join the Beta
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@scipace.com"
                  className="group inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail
                    className="size-4 shrink-0 opacity-70"
                    strokeWidth={1.75}
                  />
                  hello@scipace.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <Globe
                  className="size-4 shrink-0 opacity-70"
                  strokeWidth={1.75}
                />
                Available Worldwide
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mt-10 bg-white/10" />
        <p className="pt-6 text-center text-sm text-white/50">
          © 2026 Scipace. Exploring ways to make education more accessible and
          equitable.
        </p>
      </div>
    </footer>
  );
}
