
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { UseEmblaCarouselType } from 'embla-carousel-react';

type Project = {
  title: string;
  images: { src: string; hint: string }[];
};

interface ImageGridProps {
  project: Project;
  carouselApi: UseEmblaCarouselType[1];
  selectedIndex: number;
}

export function ImageGrid({ project, carouselApi, selectedIndex }: ImageGridProps) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 p-4">
      {project.images.map((image, index) => (
        <button
          key={index}
          onClick={() => carouselApi?.scrollTo(index)}
          className={cn(
            'relative aspect-square rounded-md overflow-hidden transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background',
            selectedIndex === index
              ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
              : 'opacity-60 hover:opacity-100'
          )}
        >
          <Image
            src={image.src}
            alt={`${project.title} - thumbnail ${index + 1}`}
            fill
            data-ai-hint={image.hint}
            className="object-cover"
          />
        </button>
      ))}
    </div>
  );
}
