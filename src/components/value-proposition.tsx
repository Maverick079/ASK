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

        <div className="grid md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
