import { ArrowRight } from "lucide-react";
import { SIGN_UP_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-scipace-teal py-10 text-white md:py-12"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 text-center sm:px-6 sm:flex-row sm:justify-between sm:text-left">
        <p className="max-w-lg text-lg font-medium sm:text-xl">
          Ready to register your organization?
        </p>
        <Button
          asChild
          size="lg"
          className="shrink-0 bg-white text-scipace-teal hover:bg-gray-100"
        >
          <a href={SIGN_UP_URL} target="_blank" rel="noopener noreferrer">
            Get started
            <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
