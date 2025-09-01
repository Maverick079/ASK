import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4">
          We make your <span className="text-primary">BRAND</span> stronger
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 font-body">
          than you think.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" variant="outline" className="font-headline">
            <a href="#gallery">View Our Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
