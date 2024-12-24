import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <Link to="/" className="text-white hover:text-blue-500">Digital Transformation</Link>
            <Link to="/" className="text-white hover:text-blue-500">CFO Consulting</Link>
            <Link to="/" className="text-white hover:text-blue-500">Executive Services</Link>
            <Link to="/" className="text-white hover:text-blue-500">Tax Services</Link>
            <Link to="/" className="text-white hover:text-blue-500">Audit Readiness</Link>
            <Link to="/" className="text-white hover:text-blue-500">Risk Consulting</Link>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Cfo Dashboard"
              to="/"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Streamline financial decision-making with comprehensive analytics and real-time insights."
            />
            <ProductItem
              title="Audit Manager"
              to="/"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Simplify audit processes with efficient tracking, reporting, and compliance tools."
            />
            <ProductItem
              title="Risk Manager"
              to="/"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Proactively identify, assess, and mitigate business risks with AI-driven solutions."
            />
            <ProductItem
              title="Real-Time Analytics Dashboard"
              to="/"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description=" Visualize and monitor key metrics for actionable insights in real time."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <Link to="/" className="text-white hover:text-blue-500">Individual</Link>
            <Link to="/" className="text-white hover:text-blue-500">Team</Link>
            <Link to="/" className="text-white hover:text-blue-500">Enterprise</Link>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <Link to="/about" className="text-white hover:text-blue-500">Individual</Link>
            <Link to="/about" className="text-white hover:text-blue-500">Team</Link>
            <Link to="/about" className="text-white hover:text-blue-500">Enterprise</Link>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact Us">
          <div className="flex flex-col space-y-4 text-sm">
            <Link to="/contact" className="text-white hover:text-blue-500">Individual</Link>
            <Link to="/contact" className="text-white hover:text-blue-500">Team</Link>
            <Link to="/contact" className="text-white hover:text-blue-500">Enterprise</Link>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
