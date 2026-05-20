import {
  Brain,
  Globe2,
  GraduationCap,
  Handshake,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const areas = [
  {
    icon: GraduationCap,
    title: "Accessible Learning",
    description:
      "Designing pathways so underserved learners can access quality education without financial barriers.",
  },
  {
    icon: Brain,
    title: "AI-Powered Experiences",
    description:
      "Prototyping intelligent tools that personalize learning while keeping educators and learners at the center.",
  },
  {
    icon: Globe2,
    title: "Global Equity",
    description:
      "Thinking beyond borders to reach communities where education can change lives and open opportunity.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    description:
      "Working with educators, technologists, and institutions who share our commitment to responsible innovation.",
  },
];

export function FocusAreas() {
  return (
    <section id="focus" className="scroll-mt-20 bg-gray-50/80 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="What we"
          accent="focus on"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {areas.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="transition-shadow hover:shadow-md"
            >
              <CardHeader className="pb-2">
                <div className="flex size-10 items-center justify-center rounded-lg bg-scipace-teal/10 text-scipace-teal">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <CardTitle className="text-scipace-heading">{title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-scipace-body leading-relaxed">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
