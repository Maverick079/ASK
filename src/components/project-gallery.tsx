
"use client";

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import { HoverEffect } from "@/components/ui/hover-effect";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const projects = [
  {
    title: "Exhibition Stands",
    description: "Creative and impactful exhibition stands that draw a crowd.",
    thumbnail: "/gallery/exhibition/1.jpg",
    hint: "exhibition stand",
    category: "Exhibitions",
    images: [
      { src: "/gallery/exhibition/1.jpg", hint: "booth design" },
      { src: "/gallery/exhibition/2.jpg", hint: "display setup" },
      { src: "/gallery/exhibition/3.jpg", hint: "event graphics" },
    ],
  },
  {
    title: "Event Management",
    description: "Seamless execution of corporate and promotional events.",
    thumbnail: "/gallery/events/1.jpg",
    hint: "corporate event",
    category: "Events",
    images: [
      { src: "/gallery/events/1.jpg", hint: "stage setup" },
      { src: "/gallery/events/2.jpg", hint: "conference branding" },
      { src: "/gallery/events/3.jpg", hint: "event signage" },
    ],
  },
  {
    title: "Indoor Branding",
    description: "Transforming interior spaces with compelling brand identities.",
    thumbnail: "/gallery/indoor_branding/1.jpg",
    hint: "office interior",
    category: "Indoor Branding",
    images: [
      { src: "/gallery/indoor_branding/1.jpg", hint: "reception logo" },
      { src: "/gallery/indoor_branding/2.jpg", hint: "wall graphics" },
      { src: "/gallery/indoor_branding/3.jpg", hint: "meeting room design" },
    ],
  },
  {
    title: "Outdoor Branding",
    description: "High-impact outdoor signage and branding solutions.",
    thumbnail: "/gallery/outdoor_branding/1.jpg",
    hint: "building signage",
    category: "Outdoor Branding",
    images: [
      { src: "/gallery/outdoor_branding/1.jpg", hint: "storefront sign" },
      { src: "/gallery/outdoor_branding/2.jpg", hint: "billboard design" },
      { src: "/gallery/outdoor_branding/3.jpg", hint: "vehicle wrap" },
    ],
  },
  {
    title: "Product Development",
    description: "From concept to creation, bringing innovative products to life.",
    thumbnail: "/gallery/product_developement/1.jpg",
    hint: "product prototype",
    category: "Product Development",
    images: [
      { src: "/gallery/product_developement/1.jpg", hint: "3d model" },
      { src: "/gallery/product_developement/2.jpg", hint: "packaging concept" },
      { src: "/gallery/product_developement/3.jpg", hint: "product design" },
    ],
  },
  {
    title: "Signage & Nameplates",
    description: "Custom signage and nameplates with precision and quality.",
    thumbnail: "/gallery/signage_and_nameplate/1.jpg",
    hint: "metal sign",
    category: "Signage",
    images: [
      { src: "/gallery/signage_and_nameplate/1.jpg", hint: "office nameplate" },
      { src: "/gallery/signage_and_nameplate/2.jpg", hint: "illuminated sign" },
      { src: "/gallery/signage_and_nameplate/3.jpg", hint: "engraved plaque" },
    ],
  },
];


export function ProjectGallery() {

  const handleProjectClick = (project: (typeof projects)[0]) => {
    const dynamicEl = project.images.map(image => ({
        src: image.src,
        thumb: image.src,
        subHtml: `<h4>${project.title}</h4><p>${image.hint}</p>`
    }));
    
    const lg = lightGallery(document.createElement('div'), {
        dynamic: true,
        dynamicEl,
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        download: false,
    });
    lg.openGallery(0);
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
    </>
  );
}
