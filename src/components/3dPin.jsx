"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    
    <div className="h-full w-full bg-black flex items-center justify-center mt-[5rem] p-4">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{ rowGap: "2rem" }} // Adds space between rows
      >
        <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
          <div
            className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]"
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div
              className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            />
          </div>
        </PinContainer>
        {/* Repeat the PinContainer as needed */}
        <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
          <div
            className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]"
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div
              className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            />
          </div>
        </PinContainer>
        <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
          <div
            className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]"
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div
              className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            />
          </div>
        </PinContainer>
        <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
          <div
            className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]"
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div
              className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            />
          </div>
        </PinContainer>
        <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
          <div
            className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]"
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div
              className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            />
          </div>
        </PinContainer>
        <PinContainer title="/ui.aceternity.com" href="https://twitter.com/mannupaaji">
          <div
            className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]"
          >
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              Aceternity UI
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Customizable Tailwind CSS and Framer Motion Components.
              </span>
            </div>
            <div
              className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
            />
          </div>
        </PinContainer>
        {/* Add more cards */}
      </div>
    </div>
  );
}
