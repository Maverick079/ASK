"use client";

import Image from "next/image";
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

type Project = {
    title: string;
    images: { src: string; hint: string }[];
}

interface LightGalleryProps {
  project: Project | null;
  onClose: () => void;
}

export function LightGallery({ project, onClose }: LightGalleryProps) {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 border-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="font-headline">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="p-4">
            <Carousel>
            <CarouselContent>
                {project.images.map((image, index) => (
                <CarouselItem key={index}>
                    <div className="aspect-video relative">
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
            <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
            </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
