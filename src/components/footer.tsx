import { Twitter, Linkedin, Facebook } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "./ui/button";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Our Work", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "WhatsApp", href: "https://wa.me/917400049015" },
      { label: "Email", href: "mailto:hello@askbrands.com" },
    ],
  },
];


export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-3 mb-8 md:mb-0">
                <h3 className="text-3xl font-bold font-headline text-primary mb-4">YOUR BRAND, AMPLIFIED.</h3>
                 <div className="flex gap-4">
                    <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
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
                    <a href={link.href} className="text-muted-foreground hover:text-primary hover:underline font-body text-sm transition-colors" target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-primary/50 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-end gap-4">
                <Logo variant="ASK-red" className="h-20" />
                <div className="h-16 w-px bg-border"></div>
                <div className="flex flex-col items-center gap-2">
                    <span className="font-body text-xs italic text-muted-foreground">in association with</span>
                    <Logo variant="UA-red" className="h-20" />
                </div>
            </div>
            <Button asChild variant="secondary" className="font-headline mt-4 sm:mt-0">
                <a href="https://wa.me/917400049015" target="_blank" rel="noopener noreferrer">Get a Quote</a>
            </Button>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground/50 font-body">
          <p>&copy; {new Date().getFullYear()} ASK Brands & Signs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
