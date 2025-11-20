"use client";

import Link from "next/link";
import { MountainIcon, Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-sm border-b border-secondary/30 animate-fade-in">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-heading">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span>
            Alt<span className="text-primary">ura</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <Link href="#features" className="nav-link">
            Features
          </Link>
          <Link href="#portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button href="#contact">Get in touch</Button>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((s) => !s)}
          className="ml-2 md:hidden p-2 rounded-md text-foreground/90 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        className={`md:hidden ${open ? "block" : "hidden"} bg-secondary/95 border-t border-secondary/40`}
      >
        <div className="px-4 pb-6 pt-4 flex flex-col gap-3">
          <Link href="#features" onClick={() => setOpen(false)} className="py-2">
            Features
          </Link>
          <Link href="#portfolio" onClick={() => setOpen(false)} className="py-2">
            Portfolio
          </Link>
          <Link href="#contact" onClick={() => setOpen(false)} className="py-2">
            Contact
          </Link>
          <Button href="#contact" className="mt-2">Get in touch</Button>
        </div>
      </div>
    </header>
  );
}
