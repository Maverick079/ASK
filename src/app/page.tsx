
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutUsSection } from '@/components/about-us';
import { ValuePropositionSection } from '@/components/value-proposition';
import { ProjectGallery } from '@/components/project-gallery';
import { ContactCTA } from '@/components/contact-cta';
import { Footer } from '@/components/footer';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';

const getProjectData = () => {
  const projects = [
    {
      title: "Exhibition Stands",
      description: "Creative and impactful exhibition stands that draw a crowd.",
      thumbnail: "https://live.staticflickr.com/65535/54773324410_804f054972_w.jpg",
      hint: "exhibition stand",
      category: "Exhibition",
      images: [
        { src: "https://live.staticflickr.com/65535/54773324410_804f054972_w.jpg", hint: "exhibition stand" },
        { src: "https://live.staticflickr.com/65535/54773229778_191e24091b_w.jpg", hint: "booth design" },
        { src: "https://live.staticflickr.com/65535/54773291894_88b0598218_w.jpg", hint: "trade show" },
        { src: "https://live.staticflickr.com/65535/54772219197_70641506bf_w.jpg", hint: "event display" },
        { src: "https://live.staticflickr.com/65535/54773292929_96fa592500_w.jpg", hint: "interactive kiosk" },
      ],
    },
    {
      title: "Event Management",
      description: "Seamless execution of corporate and promotional events.",
      thumbnail: "https://live.staticflickr.com/65535/54773411050_4c8eb7049d_w.jpg",
      hint: "corporate event",
      category: "Events",
      images: [
        { src: "https://live.staticflickr.com/65535/54773411050_4c8eb7049d_w.jpg", hint: "exhibition stand" },
        { src: "https://live.staticflickr.com/65535/54773299709_b3c481d2cd_w.jpg", hint: "booth design" },
        { src: "https://live.staticflickr.com/65535/54771069732_308b098518_w.jpg", hint: "event display" },
        { src: "https://live.staticflickr.com/65535/54773410960_9535f9da12_w.jpg", hint: "event display" },
        { src: "https://live.staticflickr.com/65535/54772225927_faaf8899e1_w.jpg", hint: "event display" },
      ],
    },
    {
      title: "Indoor Branding",
      description: "Transforming interior spaces with compelling brand identities.",
      thumbnail: "https://live.staticflickr.com/65535/54773420830_74211f9bf0_w.jpg",
      hint: "office interior",
      category: "Branding",
      images: [
        { src: "https://live.staticflickr.com/65535/54773420830_74211f9bf0_w.jpg", hint: "office reception" },
        { src: "https://live.staticflickr.com/65535/54773082771_590bdcbf87_w.jpg", hint: "wall mural" },    
        { src: "https://live.staticflickr.com/65535/54773321938_de6f0b35d7_w.jpg", hint: "wall mural" }, 
        { src: "https://live.staticflickr.com/65535/54773321953_eb6bf233dc_w.jpg", hint: "wall mural" }, 
        { src: "https://live.staticflickr.com/65535/54773310104_7ff4c6ffbf_w.jpg", hint: "wall mural" }, 
      ],
    },
    {
      title: "Outdoor Branding",
      description: "High-impact outdoor signage and branding solutions.",
      thumbnail: "https://live.staticflickr.com/65535/54773319229_4f20ef521e_w.jpg",
      hint: "building signage",
      category: "Branding",
      images: [
        { src: "https://live.staticflickr.com/65535/54773319229_4f20ef521e_w.jpg", hint: "storefront sign" },
        { src: "https://live.staticflickr.com/65535/54772245122_44c452584c_w.jpg", hint: "billboard ad" },
        { src: "https://live.staticflickr.com/65535/54773330343_4e52bbab8d_w.jpg", hint: "storefront sign" },
        { src: "https://live.staticflickr.com/65535/54773330368_a430f12529_w.jpg", hint: "storefront sign" },
        { src: "https://live.staticflickr.com/65535/54773091711_836ec39fe2_w.jpg", hint: "storefront sign" },
      ],
    },
    {
      title: "Product Development",
      description: "From concept to creation, bringing innovative products to life.",
      thumbnail: "https://live.staticflickr.com/65535/54772256627_ce8eeee21c_w.jpg",
      hint: "product prototype",
      category: "Development",
      images: [
        { src: "https://live.staticflickr.com/65535/54772256627_ce8eeee21c_w.jpg", hint: "3d model" },
        { src: "https://live.staticflickr.com/65535/54773102646_784f3ec26c_w.jpg", hint: "product packaging" },
        { src: "https://live.staticflickr.com/65535/54773102661_710cb8bff2_w.jpg", hint: "3d model" },
        { src: "https://live.staticflickr.com/65535/54773330264_0e6c4aa210_w.jpg", hint: "3d model" },
        { src: "https://live.staticflickr.com/65535/54773102701_9cf353ab97_w.jpg", hint: "3d model" },
      ],
    },
    {
      title: "Signage & Nameplates",
      description: "Custom signage and nameplates with precision and quality.",
      thumbnail: "https://live.staticflickr.com/65535/54773111011_a605359fa0_w.jpg",
      hint: "metal sign",
      category: "Signage",
      images: [
        { src: "https://live.staticflickr.com/65535/54773111011_a605359fa0_w.jpg", hint: "engraved nameplate" },
        { src: "https://live.staticflickr.com/65535/54773338639_8e853f0213_w.jpg", hint: "illuminated sign" },
        { src: "https://live.staticflickr.com/65535/54772265032_00d8e41ce8_w.jpg", hint: "illuminated sign" },
        { src: "https://live.staticflickr.com/65535/54772265062_9f03e11e92_w.jpg", hint: "illuminated sign" },
        { src: "https://live.staticflickr.com/65535/54773450115_97fbde11e7_w.jpg", hint: "engraved nameplate" },
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
        <TestimonialsSection />
        <ProjectGallery projects={projects} />
        <AboutUsSection />
        <ContactCTA />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
