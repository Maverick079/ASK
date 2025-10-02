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
  const mapUrl = "https://www.google.com/maps?q=19.200381,73.100716";
  const embedUrl = "https://maps.google.com/maps?q=19.200381,73.100716&z=15&output=embed";
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
                    <a href={link.href} className="text-muted-foreground hover:text-primary hover:underline font-body text-sm transition-colors" target={link.href.startsWith('http') || link.href.startsWith('/feedback') ? '_blank' : undefined} rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
             <div>
              <h4 className="font-headline text-primary font-semibold mb-4 flex items-center gap-2"><MapPin className="h-5 w-5" /> Location</h4>
              <div className="rounded-lg overflow-hidden border border-primary/20 relative group">
                <iframe
                    src={embedUrl}
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a 
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 cursor-pointer"
                    aria-label="View location on Google Maps"
                >
                    <span className="sr-only">View location on Google Maps</span>
                </a>
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
            <Button asChild variant="secondary" className="font-headline mt-4 sm:mt-0" target="_blank" rel="noopener noreferrer">
                <a href="https://wa.me/917400049015">Get a Quote</a>
            </Button>
        </div>
        <div className="mt-8 text-center text-xs text-muted-foreground/50 font-body">
          <p>&copy; {new Date().getFullYear()} ASK Brands & Signs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
