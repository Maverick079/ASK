
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutUsSection } from '@/components/about-us';
import { ValuePropositionSection } from '@/components/value-proposition';
import { ProjectGallery } from '@/components/project-gallery';
import { ContactCTA } from '@/components/contact-cta';
import { Footer } from '@/components/footer';

const getProjectData = () => {
  const projects = [
    {
      title: "Exhibition Stands",
      description: "Creative and impactful exhibition stands that draw a crowd.",
      thumbnail: "./public/gallery/exibitions/1.png",
      hint: "exhibition stand",
      category: "Exhibition",
      images: [
        { src: "./public/gallery/exibitions/1.png", hint: "Pic 1" },
        { src: "./public/gallery/exibitions/2.png", hint: "Pic 2" },
        { src: "./public/gallery/exibitions/3.png", hint: "Pic 3" },
        { src: "./public/gallery/exibitions/4.png", hint: "Pic 4" },
        { src: "./public/gallery/exibitions/5.png", hint: "Pic 5" },
      ],
    },
    {
      title: "Event Management",
      description: "Seamless execution of corporate and promotional events.",
      thumbnail: "https://picsum.photos/400/300",
      hint: "corporate event",
      category: "Events",
      images: [
        { src: "https://picsum.photos/800/600", hint: "conference event" },
        { src: "https://picsum.photos/800/600", hint: "gala dinner" },
      ],
    },
    {
      title: "Indoor Branding",
      description: "Transforming interior spaces with compelling brand identities.",
      thumbnail: "https://picsum.photos/400/300",
      hint: "office interior",
      category: "Branding",
      images: [
        { src: "https://picsum.photos/800/600", hint: "office reception" },
        { src: "https://picsum.photos/800/600", hint: "wall mural" },
      ],
    },
    {
      title: "Outdoor Branding",
      description: "High-impact outdoor signage and branding solutions.",
      thumbnail: "https://picsum.photos/400/300",
      hint: "building signage",
      category: "Branding",
      images: [
        { src: "https://picsum.photos/800/600", hint: "storefront sign" },
        { src: "https://picsum.photos/800/600", hint: "billboard ad" },
      ],
    },
    {
      title: "Product Development",
      description: "From concept to creation, bringing innovative products to life.",
      thumbnail: "https://picsum.photos/400/300",
      hint: "product prototype",
      category: "Development",
      images: [
        { src: "https://picsum.photos/800/600", hint: "3d model" },
        { src: "https://picsum.photos/800/600", hint: "product packaging" },
      ],
    },
    {
      title: "Signage & Nameplates",
      description: "Custom signage and nameplates with precision and quality.",
      thumbnail: "https://picsum.photos/400/300",
      hint: "metal sign",
      category: "Signage",
      images: [
        { src: "https://picsum.photos/800/600", hint: "engraved nameplate" },
        { src: "https://picsum.photos/800/600", hint: "illuminated sign" },
      ],
    }
  ];

  return projects;
};


export default function Home() {
  const projects = getProjectData();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ValuePropositionSection />
        <ProjectGallery projects={projects} />
        <AboutUsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
