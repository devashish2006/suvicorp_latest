"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    (<div
      className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">
      <TextRevealCard text="Results-driven" revealText="SUVICORP ">
        <TextRevealCardTitle>
        we bring expertise, innovation, and a commitment to excellence to every client engagement.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Unlock
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>)
  );
}
