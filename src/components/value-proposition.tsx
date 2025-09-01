import { Card, CardContent } from "@/components/ui/card";
import { Palette, Lightbulb, HeartHandshake } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: "Creative Excellence",
    description: "Our designs are not just beautiful; they are strategic assets that communicate your brand's essence.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "AI-Powered Innovation",
    description: "Leverage our cutting-edge AI tools to rapidly visualize and refine your brand's creative direction.",
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: "Client-Centric Partnership",
    description: "We work with you, not just for you. Your vision is the core of our collaborative process.",
  },
];

const testimonials = [
  {
    quote: "Working with ASK was a game-changer. Their AI tool helped us find our visual identity in minutes!",
    author: "CEO, Innovate Inc.",
    avatar: "https://placehold.co/48x48.png",
    hint: "person portrait"
  },
  {
    quote: "The team's creativity and professionalism exceeded all our expectations. Our new branding has received amazing feedback.",
    author: "Marketing Director, Eco Foods",
    avatar: "https://placehold.co/48x48.png",
    hint: "woman portrait"
  },
];

export function ValuePropositionSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Partner With Us?</h2>
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
            <Card key={testimonial.author} className="transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
              <CardContent className="p-6">
                <blockquote className="text-lg font-body mb-4 italic text-foreground/80">
                  “{testimonial.quote}”
                </blockquote>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    data-ai-hint={testimonial.hint}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold font-headline">{testimonial.author}</p>
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
