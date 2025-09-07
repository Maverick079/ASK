
"use client";

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import { HoverEffect } from "@/components/ui/hover-effect";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

type Project = {
  title: string;
  description: string;
  thumbnail: string;
  hint: string;
  category: string;
  images: { src: string; hint: string }[];
};

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const handleProjectClick = (project: Project) => {
    if (!project.images || project.images.length === 0) {
      console.warn("No images to display for this project.");
      return;
    }

    const dynamicEl = project.images.map(image => ({
        src: image.src,
        thumb: image.src,
        subHtml: `<h4>${project.title}</h4><p>${image.hint}</p>`
    }));
    
    const lgContainer = document.getElementById('lg-container');
    if (lgContainer) {
      const lg = lightGallery(lgContainer, {
          dynamic: true,
          dynamicEl,
          plugins: [lgZoom, lgThumbnail],
          speed: 500,
          download: false,
      });
      lg.openGallery(0);
    }
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
      <div id="lg-container" style={{ display: 'none' }}></div>
    </>
  );
}
