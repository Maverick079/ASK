import { Twitter, Linkedin, Facebook } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-secondary/70">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Logo className="h-20" />
          </div>
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
        <div className="mt-8 text-center text-sm text-muted-foreground font-body border-t pt-8">
          <p>&copy; {new Date().getFullYear()} ASK Brands & Signs. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
