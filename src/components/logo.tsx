import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
      <div className={cn("relative w-40", className)}>
        <Image 
          src="/logo.png"
          alt="ASK Brands & Signs Logo"
          width={290}
          height={100}
          className="h-full w-auto object-contain"
          data-ai-hint="logo"
          priority
        />
      </div>
    );
  }
