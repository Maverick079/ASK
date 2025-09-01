import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Logo } from "./logo";

const navLinks = [
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About Us" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <Logo className="h-20" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary font-headline"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="font-headline">
            <a href="#contact">Contact</a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
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
