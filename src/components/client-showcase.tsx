
"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const clients = [
  { name: "Innovate Inc.", logo: "https://placehold.co/150x60.png", hint: "tech startup" },
  { name: "Quantum Solutions", logo: "https://placehold.co/150x60.png", hint: "corporate logo" },
  { name: "Eco Foods", logo: "https://placehold.co/150x60.png", hint: "organic food" },
  { name: "Apex Construction", logo: "https://placehold.co/150x60.png", hint: "building company" },
  { name: "Starlight Studios", logo: "https://placehold.co/150x60.png", hint: "film studio" },
  { name: "Momentum Fitness", logo: "https://placehold.co/150x60.png", hint: "gym logo" },
  { name: "Voyage Travel", logo: "https://placehold.co/150x60.png", hint: "travel agency" },
  { name: "Pinnacle Realty", logo: "https://placehold.co/150x60.png", hint: "real estate" },
];

export function ClientShowcase() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8 font-body">
          Trusted by leading brands
        </h3>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {clients.map((client, index) => (
              <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-4 flex justify-center items-center h-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={60}
                    data-ai-hint={client.hint}
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
