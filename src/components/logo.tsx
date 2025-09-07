import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoVariant = 'ASK-red' | 'ASK-white' | 'UA-red' | 'UA-white';

const logoMap: Record<LogoVariant, string> = {
  'ASK-red': '/logos/Logo-ASK-PNG-red.png',
  'ASK-white': '/logos/Logo-ASK-PNG-white.png',
  'UA-red': '/logos/Logo-UA-PNG-red.png',
  'UA-white': '/logos/Logo-UA-PNG-white.png',
};

export function Logo({ className, variant = 'ASK-red' }: { className?: string; variant?: LogoVariant }) {
    const logoSrc = logoMap[variant] || logoMap['ASK-red'];
    const isUA = variant.startsWith('UA');

    return (
      <div className={cn("relative", isUA ? "w-48 h-24" : "w-40", className)}>
        <Image 
          src={logoSrc}
          alt="ASK Brands & Signs Logo"
          width={isUA ? 200 : 290}
          height={isUA ? 200 : 100}
          className="h-full w-auto object-contain"
          data-ai-hint="logo"
          priority
        />
      </div>
    );
  }
