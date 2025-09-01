import Image from "next/image";

export function Logo({ className }: { className?: string }) {
    return (
      <div className={className}>
        <Image 
          src="https://placehold.co/200x160/ffffff/ffffff.png"
          alt="ASK Brands & Signs Logo"
          width={200}
          height={160}
          className="h-full w-auto"
          data-ai-hint="logo"
        />
      </div>
    );
  }
