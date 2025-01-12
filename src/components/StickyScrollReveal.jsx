"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Transforming Businesses Through Technology and Expertise",
    description:
     " We specialize in empowering businesses with cutting-edge digital transformation solutions, streamlining processes, and driving growth through innovation. Our expert services help companies thrive in today’s fast-paced, technology-driven market.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Transforming Businesses Through Technology and Expertise
      </div>
    ),
  },
  {
    title: "Comprehensive Financial Consulting and Leadership Support",
    description:
      "Our CFO consulting and executive services provide strategic financial expertise to optimize business performance, support leadership, and achieve organizational goals. We partner with companies to align financial strategies with long-term success.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZn76l4RpH02RJBS4Hsv0dqOmV5Gu1j6GOYQ&s"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Tax Planning, Compliance, and Risk Management",
    description:
      "We offer comprehensive tax services, ensuring businesses remain compliant while optimizing financial efficiency. Our risk consulting services proactively identify, assess, and mitigate risks, safeguarding the long-term stability of your business.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       Tax Planning, Compliance, and Risk Management
      </div>
    ),
  },
  {
    title: "Innovative Tools for Business Efficiency",
    description:
      "Our suite of products, including the CFO Dashboard, Audit Manager, Risk Manager, and Real-Time Analytics Dashboard, provides businesses with powerful tools to gain actionable insights, streamline audit processes, and manage risks effectively for improved decision-making.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Innovative Tools for Business Efficiency
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    (<div className="p-10">
      <StickyScroll content={content} />
    </div>)
  );
}
