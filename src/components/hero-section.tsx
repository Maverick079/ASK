import { Button } from "@/components/ui/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4">
              We make your <span className="text-primary">Brand</span> stronger
              <br />
              than you think
            </h1>
            <p className="max-w-xl text-lg md:text-xl text-muted-foreground mb-8 font-body">
              From concept to creation, we blend artistic flair with strategic insights to build brands that stand out and signs that speak volumes.
            </p>
            <div className="flex justify-start gap-4">
              <Button asChild size="lg" className="font-headline">
                <a href="#contact">Get a Quote</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-headline">
                <a href="#gallery">View Our Work</a>
              </Button>
            </div>
          </div>
          <div className="relative h-80 w-full md:h-96 rounded-lg overflow-hidden">
             <Image 
                src="/header.png"
                alt="Branding and design concept"
                fill
                className="object-cover"
                data-ai-hint="branding design"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
