"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About Us" },
];

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled ? "h-24 bg-primary/90 backdrop-blur-sm" : "h-32 bg-primary/80"
      )}
    >
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        <a href="/" className="relative h-full flex items-center">
          <Logo 
            className={cn(
              "absolute -bottom-8 transition-all duration-300",
              scrolled ? "h-28" : "h-40"
            )}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-primary-foreground font-headline"
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="secondary" className="font-headline">
            <a href="#contact">Contact</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <a href="/" className="flex items-center gap-2 mb-4">
                  <Logo className="h-20" />
                </a>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary transition-colors font-headline"
                  >
                    {link.label}
                  </a>
                ))}
                 <Button asChild size="lg" className="font-headline mt-4">
                    <a href="#contact">Contact</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
