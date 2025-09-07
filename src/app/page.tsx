
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
      thumbnail: "/gallery/exhibition/1.jpg",
      hint: "exhibition stand",
      category: "Exhibition",
      images: [
        { src: "/gallery/exhibition/1.jpg", hint: "exhibition stand" },
        { src: "/gallery/exhibition/2.jpg", hint: "booth design" },
        { src: "/gallery/exhibition/3.jpg", hint: "trade show" },
        { src: "/gallery/exhibition/4.jpg", hint: "event display" },
        { src: "/gallery/exhibition/5.jpg", hint: "interactive kiosk" },
      ],
    },
    {
      title: "Event Management",
      description: "Seamless execution of corporate and promotional events.",
      thumbnail: "/gallery/events/1.jpg",
      hint: "corporate event",
      category: "Events",
      images: [
        { src: "/gallery/events/1.jpg", hint: "conference event" },
        { src: "/gallery/events/2.jpg", hint: "gala dinner" },
      ],
    },
    {
      title: "Indoor Branding",
      description: "Transforming interior spaces with compelling brand identities.",
      thumbnail: "/gallery/indoor_branding/1.jpg",
      hint: "office interior",
      category: "Branding",
      images: [
        { src: "/gallery/indoor_branding/1.jpg", hint: "office reception" },
        { src: "/gallery/indoor_branding/2.jpg", hint: "wall mural" },
      ],
    },
    {
      title: "Outdoor Branding",
      description: "High-impact outdoor signage and branding solutions.",
      thumbnail: "/gallery/outdoor_branding/1.jpg",
      hint: "building signage",
      category: "Branding",
      images: [
        { src: "/gallery/outdoor_branding/1.jpg", hint: "storefront sign" },
        { src: "/gallery/outdoor_branding/2.jpg", hint: "billboard ad" },
      ],
    },
    {
      title: "Product Development",
      description: "From concept to creation, bringing innovative products to life.",
      thumbnail: "/gallery/product_developement/1.jpg",
      hint: "product prototype",
      category: "Development",
      images: [
        { src: "/gallery/product_developement/1.jpg", hint: "3d model" },
        { src: "/gallery/product_developement/2.jpg", hint: "product packaging" },
      ],
    },
    {
      title: "Signage & Nameplates",
      description: "Custom signage and nameplates with precision and quality.",
      thumbnail: "/gallery/signage_and_nameplate/1.jpg",
      hint: "metal sign",
      category: "Signage",
      images: [
        { src: "/gallery/signage_and_nameplate/1.jpg", hint: "engraved nameplate" },
        { src: "/gallery/signage_and_nameplate/2.jpg", hint: "illuminated sign" },
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
