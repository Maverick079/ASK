import { Twitter, Linkedin, Facebook } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "./ui/button";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#" },
      { label: "Brand Center", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Branding", href: "#" },
      { label: "Signage", href: "#" },
      { label: "Digital Design", href: "#" },
      { label: "Print Design", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Support", href: "mailto:hello@askbrands.com" },
      { label: "Safety", href: "#" },
      { label: "Feedback", href: "#" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Terms", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Cookie Settings", href: "#" },
      { label: "Guidelines", href: "#" },
    ],
  },
];


export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1 mb-8 md:mb-0">
                <h3 className="text-3xl font-bold font-headline text-primary mb-4">YOUR BRAND, AMPLIFIED.</h3>
                 <div className="flex gap-4">
                    <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
                    <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
                    <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-5 w-5" />
                    </a>
                </div>
            </div>

            {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-headline text-primary font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary hover:underline font-body text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-primary/50 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-2">
                <Logo variant="ASK-red" className="h-16" />
            </div>
            <Button asChild variant="secondary" className="font-headline mt-4 sm:mt-0">
                <a href="#contact">Get a Quote</a>
            </Button>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground/50 font-body">
          <p>&copy; {new Date().getFullYear()} ASK Brands & Signs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
