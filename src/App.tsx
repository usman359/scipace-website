import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqSection } from "@/components/sections/faq-section";
import { FocusAreas } from "@/components/sections/focus-areas";
import { HeroActions } from "@/components/sections/hero-actions";
import { SectionBlock } from "@/components/sections/section-block";
import { PageContainer } from "@/components/shared/page-container";

export default function App() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />

      <section
        id="home"
        className="hero-gradient relative overflow-hidden border-b border-gray-200/60"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          aria-hidden
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--scipace-teal) 12%, transparent) 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
        <PageContainer className="relative z-10 flex flex-col items-center py-14 text-center sm:py-16 md:py-20">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-scipace-heading sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            Knowledge for <span className="text-scipace-teal">Everyone</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg font-medium text-scipace-heading sm:text-xl">
            Exploring ways to make education more accessible and equitable.
          </p>
          <p className="mt-3 max-w-xl text-pretty text-base leading-relaxed text-scipace-muted sm:text-lg">
            Scipace is an early-stage initiative focused on democratizing
            education for underserved learners — because knowledge should be a
            right, not a privilege.
          </p>

          <HeroActions />
        </PageContainer>
      </section>

      <main className="bg-white">
        <SectionBlock id="mission" prefix="Our" accent="Mission">
          At Scipace, we believe money is consumed and forgotten, but knowledge
          endures. Our mission is to explore scalable, technology-driven ways to
          bring education to those who cannot afford it — empowering individuals
          and sowing seeds of opportunity for future generations.
        </SectionBlock>

        <SectionBlock id="vision" prefix="Our" accent="Vision" variant="muted">
          A future where education is accessible to all, regardless of
          background or means — enabling every learner to unlock their
          potential.
        </SectionBlock>

        <FocusAreas />

        <SectionBlock id="status" prefix="Where We Are" accent="Now">
          Scipace is currently in its development phase, testing ideas and
          building prototypes for AI-powered learning experiences. Our focus is
          on research, responsible design, and building partnerships with
          like-minded educators and technologists.
        </SectionBlock>
      </main>

      <FaqSection />
      <CtaBanner />
      <SiteFooter />
    </div>
  );
}
