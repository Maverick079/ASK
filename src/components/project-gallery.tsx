import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Quantum Solutions Branding",
    category: "Corporate Identity",
    image: "https://placehold.co/600x400.png",
    hint: "modern office"
  },
  {
    title: "Eco Foods Packaging",
    category: "Packaging Design",
    image: "https://placehold.co/600x400.png",
    hint: "food packaging"
  },
  {
    title: "Starlight Studios Poster",
    category: "Print Design",
    image: "https://placehold.co/600x400.png",
    hint: "movie poster"
  },
  {
    title: "Apex Construction Signage",
    category: "Signage",
    image: "https://placehold.co/600x400.png",
    hint: "building sign"
  },
   {
    title: "Momentum Fitness App",
    category: "Digital Branding",
    image: "https://placehold.co/600x400.png",
    hint: "fitness app"
  },
  {
    title: "Voyage Travel Campaign",
    category: "Marketing",
    image: "https://placehold.co/600x400.png",
    hint: "travel advertisement"
  },
];

export function ProjectGallery() {
  return (
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
            <Card key={project.title} className="overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-4" style={{ transformStyle: 'preserve-3d' }}>
               <div className="transition-transform duration-500 ease-out group-hover:[transform:rotateX(15deg)_rotateY(-15deg)_translateZ(20px)]">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      data-ai-hint={project.hint}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                  <div className="p-4 bg-card">
                    <Badge variant="secondary" className="mb-2 font-body">{project.category}</Badge>
                    <h3 className="font-semibold font-headline">{project.title}</h3>
                  </div>
                </CardContent>
               </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
