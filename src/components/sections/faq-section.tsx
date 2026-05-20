import { SectionHeading } from "@/components/shared/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is Scipace for?",
    answer:
      "Learners who face barriers to quality education, and partners—educators, technologists, and institutions—who want to build equitable, lasting solutions.",
  },
  {
    question: "How do I register an organization?",
    answer:
      "Use Sign up in the header to create an account and enter your organization name. You can start building in minutes.",
  },
  {
    question: "How can we collaborate?",
    answer:
      "Email hello@scipace.com with ideas or partnership inquiries. We welcome feedback as the initiative grows.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="scroll-mt-20 py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading title="Questions" accent="& answers" />
        <Accordion
          type="single"
          collapsible
          className="mt-8 rounded-2xl border border-gray-200/80 bg-white px-4 sm:px-6"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="py-4 text-base font-semibold text-scipace-heading hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-scipace-body">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
