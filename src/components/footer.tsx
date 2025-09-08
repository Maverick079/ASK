import { Twitter, Linkedin, Facebook, MapPin } from "lucide-react";
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
      { label: "Email", href: "mailto:askbas22@gmail.com" },
    ],
  },
];


export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2 mb-8 md:mb-0">
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
             <div>
              <h4 className="font-headline text-primary font-semibold mb-4 flex items-center gap-2"><MapPin className="h-5 w-5" /> Location</h4>
              <div className="rounded-lg overflow-hidden border border-primary/20">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.8286542273103!2d73.09825367520869!3d19.20032364731118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795899b755555%3A0x80c98f55a5b65851!2sASK%20Brands%20%26%20Signs!5e0!3m2!1sen!2sin!4v1717596043152!5m2!1sen!2sin"
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
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
