
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WavyDivider } from "./wavy-divider";

const testimonials = [
  {
    title: "Our Differentiator",
    quote: "We're often asked 'where did that idea come from?' The truth is that all our ideas come from the client. However unusual or inspired the end result, it all begins and ends with the client. It's a team-work we believe in which derives good briefs and great clients to enable great ideas and allow excellent results.",
    author: "ASK Brands & Signs",
  },
  {
    title: "Our Approach",
    quote: "Simplicity and creativity, keeping them hand in hand is our motto. We keep a tab of best examples of contemporary graphic design and typography which helps us to keep our finger on the pulse of what's new, different and engaging in print & multimedia.",
    author: "ASK Brands & Signs",
  },
];

export function TestimonialsSection() {
    return (
      <section className="relative bg-secondary/30 pb-24 pt-12 md:pb-32 md:pt-20 overflow-hidden">
        <WavyDivider position="top" className="text-background" />
  
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
              Words From Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground font-body max-w-3xl mx-auto">
              Our philosophy is simple: great work comes from great partnerships.
            </p>
          </div>
  
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card 
                key={testimonial.title} 
                className="group relative bg-gradient-to-br from-card to-secondary/50 border-primary/20 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:!border-primary hover:-translate-y-2"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-red-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative h-full w-full bg-card rounded-lg p-6">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-primary">
                            {testimonial.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <blockquote className="text-lg font-body mb-4 italic text-foreground/80 before:content-['“'] before:text-5xl before:text-primary/20 before:font-serif before:absolute before:-top-4 before:left-2 after:content-['”'] after:text-5xl after:text-primary/20 after:font-serif after:absolute after:-bottom-4 after:right-2">
                        {testimonial.quote}
                        </blockquote>
                        <div className="flex items-center gap-4 mt-6">
                            <div>
                                <p className="font-semibold font-headline text-primary/80">- {testimonial.author}</p>
                            </div>
                        </div>
                    </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <WavyDivider position="bottom" className="text-background" />
      </section>
    );
  }
  