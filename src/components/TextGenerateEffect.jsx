"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `At SUVICORP, we are a trusted partner for businesses seeking innovative solutions to streamline their financial and operational landscapes. With expertise spanning digital transformation, strategic 
consulting, and risk management, we empower organizations to adapt, grow, and excel in today’s dynamic environment.
What We Do
Digital Transformation: Revolutionizing businesses with technology-driven solutions that enhance efficiency, automate processes, and drive innovation.
CFO Consulting: Offering strategic financial insights to help businesses make informed decisions, optimize performance, and achieve sustainable growth.
Executive Services: Supporting leadership teams with expert guidance on financial strategies, operations, and decision-making frameworks.
Tax Services: Simplifying complex tax processes with tailored strategies that ensure compliance and maximize savings.
Audit Readiness: Preparing businesses for seamless audits with meticulous documentation, process optimization, and compliance assurance.
Risk Consulting: Proactively identifying and mitigating risks to safeguard assets and ensure business continuity.
Why Choose Us?
Our team combines deep industry expertise with cutting-edge tools to deliver personalized solutions tailored to your unique needs. Whether you're looking to modernize your operations, prepare for audits, or manage financial risks, we are committed to helping your business thrive.

Let us be the partner that drives your transformation and success.

`;

export function TextGenerateEffectDemo() {
  return (
    <div
      className="bg-black text-white w-full h-auto py-10"
      style={{ minHeight: "calc(100vh - var(--navbar-height) - var(--footer-height))" }}
    >
      <TextGenerateEffect words={words} />
    </div>
  );
}
