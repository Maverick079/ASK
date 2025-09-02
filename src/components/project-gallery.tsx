
"use client";

import { useState } from "react";
import { HoverEffect } from "@/components/ui/hover-effect";
import { LightGallery } from "@/components/light-gallery";

const projects = [
  {
    title: "Quantum Solutions Branding",
    description: "A complete corporate identity overhaul for a tech giant.",
    thumbnail: "https://picsum.photos/400/300?random=1",
    hint: "tech company",
    category: "Corporate Identity",
    images: [
      { src: "https://picsum.photos/800/600?random=11", hint: "office branding" },
      { src: "https://picsum.photos/800/600?random=12", hint: "logo design" },
      { src: "https://picsum.photos/800/600?random=13", hint: "website mockup" },
      { src: "https://picsum.photos/800/600?random=14", hint: "business card" },
    ],
  },
  {
    title: "Eco Foods Packaging",
    description: "Sustainable and beautiful packaging design for an organic food brand.",
    thumbnail: "https://picsum.photos/400/300?random=2",
    hint: "food packaging",
    category: "Packaging Design",
    images: [
      { src: "https://picsum.photos/800/600?random=21", hint: "product box" },
      { src: "https://picsum.photos/800/600?random=22", hint: "label design" },
      { src: "https://picsum.photos/800/600?random=23", hint: "shopping bag" },
    ],
  },
  {
    title: "Starlight Studios Poster",
    description: "Eye-catching movie posters that capture the essence of the film.",
    thumbnail: "https://picsum.photos/400/300?random=3",
    hint: "movie poster",
    category: "Print Design",
    images: [
      { src: "https://picsum.photos/800/600?random=31", hint: "film poster" },
      { src: "https://picsum.photos/800/600?random=32", hint: "cinema display" },
    ],
  },
  {
    title: "Apex Construction Signage",
    description: "Bold and durable signage for a leading construction company.",
    thumbnail: "https://picsum.photos/400/300?random=4",
    hint: "construction sign",
    category: "Signage",
     images: [
      { src: "https://picsum.photos/800/600?random=41", hint: "building wrap" },
      { src: "https://picsum.photos/800/600?random=42", hint: "site board" },
      { src: "https://picsum.photos/800/600?random=43", hint: "vehicle graphics" },
    ],
  },
   {
    title: "Momentum Fitness App",
    description: "A sleek and intuitive user interface for a new fitness application.",
    thumbnail: "https://picsum.photos/400/300?random=5",
    hint: "fitness app",
    category: "Digital Branding",
     images: [
      { src: "https://picsum.photos/800/600?random=51", hint: "app screen" },
      { src: "https://picsum.photos/800/600?random=52", hint: "user profile" },
      { src: "https://picsum.photos/800/600?random=53", hint: "workout tracking" },
    ],
  },
  {
    title: "Voyage Travel Campaign",
    description: "A multi-platform marketing campaign for a luxury travel agency.",
    thumbnail: "https://picsum.photos/400/300?random=6",
    hint: "travel ad",
    category: "Marketing",
     images: [
      { src: "https://picsum.photos/800/600?random=61", hint: "social media ad" },
      { src: "https://picsum.photos/800/600?random=62", hint: "brochure design" },
    ],
  },
];


export function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
  };

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
            <HoverEffect items={projects.map(p => ({...p, onClick: () => handleProjectClick(p)}))} />
          </div>
        </div>
      </section>
      <LightGallery 
        project={selectedProject}
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}
