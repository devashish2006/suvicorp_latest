import React, { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={cn("fixed top-0 inset-x-0 w-full bg-black z-50", className)}>
      {/* Mobile Hamburger Menu */}
      <div className="flex items-center justify-between p-4 bg-black text-white lg:hidden">
        <div className="text-lg font-bold">SUVICORP</div>
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Navbar Content */}
      <div className={cn("lg:flex lg:items-center lg:justify-center lg:bg-black lg:text-white", isMenuOpen ? "block" : "hidden")}>        
        <nav className="flex flex-col lg:flex-row lg:space-x-6 p-4">
          <NavItem to="/" label="Home" />
          <NavItem to="/services" label="Services" />
          <NavItem to="/products" label="Products" />
          <NavItem to="/pricing" label="Pricing" />
          <NavItem to="/about" label="About Us" />
          <NavItem to="/contact" label="Contact Us" />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <Link to={to} className="text-white hover:text-blue-500 text-lg p-2">
      {label}
    </Link>
  );
}

export function ProductItem({ title, to, src, description }) {
  return (
    <Link to={to} className="block p-4 border border-gray-700 rounded-lg hover:shadow-lg">
      <img src={src} alt={title} className="w-full h-32 object-cover rounded" />
      <h3 className="text-white mt-2 text-lg font-bold">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </Link>
  );
}
