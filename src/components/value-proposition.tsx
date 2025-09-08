
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Palette, Cog, HardHat } from "lucide-react";

const values = [
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Design",
    description: "Our expert in-house design team works with you to create the perfect custom sign for your business.",
  },
  {
    icon: <Cog className="h-8 w-8 text-primary" />,
    title: "Fabrication",
    description: "All our signs are fabricated in-house, using only the finest quality materials to ensure a durable product.",
  },
  {
    icon: <HardHat className="h-8 w-8 text-primary" />,
    title: "Installation",
    description: "Our own professional technicians handle the entire installation process, ensuring quality workmanship from start to finish.",
  },
];

const testimonials = [
  {
    title: "Our Differentiator",
    quote: "We're often asked 'where did that idea come from?' The truth is that all our ideas come from the client. However unusual or inspired the end result, it all begins and ends with the client. It's a team-work we believe in which derives good briefs and great clients to enable great ideas and allow excellent results.",
    author: "ASK Brands & Signs",
  },
  {
    title: "Our Approch",
    quote: "Simplicity and creativity, keeping them hand in hand is our motto. We keep a tab of best examples of contemporary graphic design and typography which helps us to keep our finger on the pulse of what's new, different and engaging in print & multimedia.",
    author: "ASK Brands & Signs",
  },
];

export function ValuePropositionSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            We blend artistic flair with strategic insights to create brands that stand out and signs that speak volumes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value) => (
            <div key={value.title} className="text-center p-6 bg-card rounded-lg shadow-sm transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
              <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold font-headline mb-2">{value.title}</h3>
              <p className="text-muted-foreground font-body">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.title} className="transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
              <CardTitle className="p-6 italic text-center w-full">
                {testimonial.title}
              </CardTitle>
              <CardContent className="p-6">
                <blockquote className="text-lg font-body mb-4 italic text-foreground/80">
                  “{testimonial.quote}”
                </blockquote>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-semibold font-headline">- {testimonial.author}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
