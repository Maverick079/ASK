import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
          Have a project in mind?
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-primary-foreground/80 mb-8 font-body">
          Let's talk about how we can elevate your brand to the next level. We're excited to hear your ideas.
        </p>
        <Button asChild size="lg" variant="secondary" className="font-headline text-lg bg-background text-foreground hover:bg-background/90">
          <a href="https://wa.me/917400049015" target="_blank" rel="noopener noreferrer">Get in Touch</a>
        </Button>
      </div>
    </section>
  );
}
