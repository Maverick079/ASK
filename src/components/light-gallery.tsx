
"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import type { UseEmblaCarouselType } from 'embla-carousel-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageGrid } from "./image-grid";

type Project = {
    title: string;
    images: { src: string; hint: string }[];
}

interface LightGalleryProps {
  project: Project | null;
  onClose: () => void;
}

export function LightGallery({ project, onClose }: LightGalleryProps) {
  const [carouselApi, setCarouselApi] = useState<UseEmblaCarouselType[1]>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!carouselApi) return;
    setSelectedIndex(carouselApi.selectedScrollSnap());
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi) return;
    onSelect();
    carouselApi.on('select', onSelect);
    carouselApi.on('reInit', onSelect);
    return () => {
      carouselApi?.off('select', onSelect);
    };
  }, [carouselApi, onSelect]);

  useEffect(() => {
    if (project) {
        setSelectedIndex(0);
        carouselApi?.scrollTo(0, true);
    }
  }, [project, carouselApi]);


  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-6xl p-0 border-0 flex flex-col h-full sm:h-auto max-h-screen">
        <DialogHeader className="p-4 pb-0 shrink-0">
          <DialogTitle className="font-headline">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="px-12 py-4 relative flex-grow min-h-0">
            <Carousel setApi={setCarouselApi} className="h-full">
            <CarouselContent className="h-full">
                {project.images.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                    <div className="relative h-full">
                    <Image
                        src={image.src}
                        alt={`${project.title} - image ${index + 1}`}
                        fill
                        data-ai-hint={image.hint}
                        className="object-contain"
                    />
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 h-12 w-12" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 h-12 w-12" />
            </Carousel>
        </div>
        <div className="shrink-0 border-t">
          <ImageGrid project={project} carouselApi={carouselApi} selectedIndex={selectedIndex} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
