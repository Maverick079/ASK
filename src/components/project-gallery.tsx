
"use client";

import { HoverEffect } from "@/components/ui/hover-effect";

const projects = [
  {
    title: "Quantum Solutions Branding",
    description: "A complete corporate identity overhaul for a tech giant.",
    link: "#",
    category: "Corporate Identity",
  },
  {
    title: "Eco Foods Packaging",
    description: "Sustainable and beautiful packaging design for an organic food brand.",
    link: "#",
    category: "Packaging Design",
  },
  {
    title: "Starlight Studios Poster",
    description: "Eye-catching movie posters that capture the essence of the film.",
    link: "#",
    category: "Print Design",
  },
  {
    title: "Apex Construction Signage",
    description: "Bold and durable signage for a leading construction company.",
    link: "#",
    category: "Signage",
  },
   {
    title: "Momentum Fitness App",
    description: "A sleek and intuitive user interface for a new fitness application.",
    link: "#",
    category: "Digital Branding",
  },
  {
    title: "Voyage Travel Campaign",
    description: "A multi-platform marketing campaign for a luxury travel agency.",
    link: "#",
    category: "Marketing",
  },
];


export function ProjectGallery() {
  return (
    <>
      <section id="gallery" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Work</h2>
            <p className="mt-4 text-lg text-muted-foreground font-body max-w-3xl mx-auto">
              A glimpse into the brands we've helped build and transform.
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <HoverEffect items={projects} />
          </div>
        </div>
      </section>
    </>
  );
}
