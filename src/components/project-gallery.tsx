
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import LightGallery from 'lightgallery/react';
import type { LightGallery as LightGalleryType } from 'lightgallery/lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import React from "react";

const projects = [
  {
    title: "Quantum Solutions Branding",
    category: "Corporate Identity",
    images: [
      { src: "https://picsum.photos/1200/800", hint: "modern office" },
      { src: "https://picsum.photos/1200/800", hint: "logo design" },
      { src: "https://picsum.photos/1200/800", hint: "business card" },
    ],
  },
  {
    title: "Eco Foods Packaging",
    category: "Packaging Design",
    images: [
        { src: "https://picsum.photos/1200/800", hint: "food packaging" },
        { src: "https://picsum.photos/1200/800", hint: "organic product" },
        { src: "https://picsum.photos/1200/800", hint: "label design" },
    ],
  },
  {
    title: "Starlight Studios Poster",
    category: "Print Design",
    images: [
        { src: "https://picsum.photos/1200/800", hint: "movie poster" },
        { src: "https://picsum.photos/1200/800", hint: "film art" },
        { src: "https://picsum.photos/1200/800", hint: "cinema display" },
    ],
  },
  {
    title: "Apex Construction Signage",
    category: "Signage",
    images: [
        { src: "https://picsum.photos/1200/800", hint: "building sign" },
        { src: "https://picsum.photos/1200/800", hint: "construction site" },
        { src: "https://picsum.photos/1200/800", hint: "3d lettering" },
    ],
  },
   {
    title: "Momentum Fitness App",
    category: "Digital Branding",
    images: [
        { src: "https://picsum.photos/1200/800", hint: "fitness app" },
        { src: "https://picsum.photos/1200/800", hint: "user interface" },
        { src: "https://picsum.photos/1200/800", hint: "mobile screen" },
    ],
  },
  {
    title: "Voyage Travel Campaign",
    category: "Marketing",
    images: [
        { src: "https://picsum.photos/1200/800", hint: "travel advertisement" },
        { src: "https://picsum.photos/1200/800", hint: "brochure design" },
        { src: "https://picsum.photos/1200/800", hint: "exotic destination" },
    ],
  },
];


function ProjectCard({ project }: { project: typeof projects[0] }) {
    const lightGalleryRef = React.useRef<LightGalleryType | null>(null);

    const openGallery = (e?: React.MouseEvent) => {
        if(e) e.stopPropagation();
        if (lightGalleryRef.current) {
            lightGalleryRef.current.openGallery();
        }
    }
  
    return (
        <div className="text-left w-full">
            <Card 
              className="overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-4 h-full" 
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => openGallery()}
            >
              <div className="transition-transform duration-500 ease-out group-hover:[transform:rotateX(15deg)_rotateY(-15deg)_translateZ(20px)] h-full flex flex-col">
                <CardContent className="p-0 flex-grow flex flex-col cursor-pointer">
                  <div className="relative">
                    <Image
                      src={project.images[0].src}
                      alt={project.title}
                      width={600}
                      height={400}
                      data-ai-hint={project.images[0].hint}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                  <div className="p-4 bg-card mt-auto">
                    <Badge variant="secondary" className="mb-2 font-body">{project.category}</Badge>
                    <h3 className="font-semibold font-headline">{project.title}</h3>
                    <Button variant="link" className="p-0 h-auto font-body mt-2" onClick={(e) => openGallery(e)}>
                        View More
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
            <LightGallery
                onInit={(ref) => {
                    if (ref) {
                        lightGalleryRef.current = ref.instance
                    }
                }}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                dynamic
                dynamicEl={project.images.map(image => ({
                    src: image.src,
                    thumb: image.src,
                    subHtml: `<h4 class="text-white font-bold text-lg">${project.title}</h4>`
                }))}
            />
        </div>
    )
}

export function ProjectGallery() {
  return (
    <>
      <section id="gallery" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Work</h2>
            <p className="mt-4 text-lg text-muted-foreground font-body">
              A glimpse into the brands we've helped build and transform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
