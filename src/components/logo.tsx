import Image from "next/image";

export function Logo({ className }: { className?: string }) {
    return (
      <div className={className}>
        <Image 
          src="/logo.jpg"
          alt="ASK Brands & Signs Logo"
          width={200}
          height={160}
          className="h-full w-auto"
          data-ai-hint="logo"
        />
      </div>
    );
  }
