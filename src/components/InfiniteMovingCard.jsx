"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    (<div
      className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>)
  );
}

const testimonials = [
  {
    quote:
      "My goal has always been to help businesses navigate the evolving financial landscape. By combining expert financial strategies with innovative technology, we empower our clients to achieve sustained growth and success in a rapidly changing world.",
    name: "Charles Dickens",
    title: "Empowering Businesses for Long-Term Success",
  },
  {
    quote:
      "With years of experience in finance, I’m dedicated to guiding businesses through financial complexities. Our CFO consulting services focus on creating tailored solutions that optimize performance and ensure compliance for long-term success.",
    name: "William Shakespeare",
    title: "Optimizing Financial Strategies for Growth",
  },
  {
    quote: "Risk is an integral part of business, but it doesn’t have to be a roadblock. I’m committed to providing businesses with proactive strategies to manage and mitigate risks, enabling them to grow with confidence and foresight",
    name: "Edgar Allan Poe",
    title: "Turning Risk into Opportunity",
  },
  {
    quote:
      "Digital transformation is about more than just technology; it's about transforming the way businesses operate. I’m passionate about helping organizations harness the power of technology to improve efficiency and drive growth.",
    name: "Jane Austen",
    title: "Harnessing Technology for Business Growth",
  },
  {
    quote:
      "Leadership is essential for business success. I focus on providing executives with the insights and strategies they need to make informed decisions, navigate challenges, and lead their teams with clarity and confidence.",
    name: "Herman Melville",
    title: "Guiding Leadership Toward Excellence",
  },
];
