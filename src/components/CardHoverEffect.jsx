import { HoverEffect } from "./ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    title: "Digital Transformation",
    description:
      "Empowering businesses with innovative technology solutions to drive growth.",
    link: "https://stripe.com",
  },
  {
    title: "CFO Consulting",
    description:
      "Strategic financial expertise to optimize business performance.",
    link: "https://netflix.com",
  },
  {
    title: "Executive Services",
    description:
      "Tailored solutions to support leadership and organizational goals.",
    link: "https://google.com",
  },
  {
    title: "Tax Services",
    description:
      "Comprehensive tax planning and compliance for financial efficiency.",
    link: "https://meta.com",
  },
  {
    title: "Audit Readiness",
    description:
      "Ensuring seamless audit preparation with accurate financial insights.",
    link: "https://amazon.com",
  },
  {
    title: "Risk Consulting",
    description:
      "Proactive strategies to identify, assess, and mitigate risks.",
    link: "https://microsoft.com",
  },
  {
    title: "Cfo Dashboard",
    description:
      "Streamline financial decision-making with comprehensive analytics and real-time insights.",
    link: "https://microsoft.com",
  },
  {
    title: "Audit Manager",
    description:
      "Simplify audit processes with efficient tracking, reporting, and compliance tools.",
    link: "https://microsoft.com",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description:
      "Visualize and monitor key metrics for actionable insights in real time.",
    link: "https://microsoft.com",
  },
  
];
