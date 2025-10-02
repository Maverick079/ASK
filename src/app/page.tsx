
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { AboutUsSection } from '@/components/about-us';
import { ValuePropositionSection } from '@/components/value-proposition';
import { ProjectGallery } from '@/components/project-gallery';
import { ContactCTA } from '@/components/contact-cta';
import { Footer } from '@/components/footer';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';
import { FeedbackButton } from '@/components/feedback-button';

const getProjectData = () => {
  const projects = [
    {
      title: "Exhibition Stands",
      description: "We provide end-to-end exhibition stand solutions, including custom design, fabrication, and on-site installation to ensure your brand stands out.",
      thumbnail: "https://ik.imagekit.io/askbrandsandsigns/Picture1.png?updatedAt=1758352842573",
      hint: "exhibition stand",
      category: "Exhibition",
      images: [
        { src: "https://ik.imagekit.io/askbrandsandsigns/Picture1.png?updatedAt=1758352842573", hint: "exhibition stand" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/Picture2.png?updatedAt=1758353315921", hint: "booth design" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/Picture3.png?updatedAt=1758353312785", hint: "trade show" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/Picture4.png?updatedAt=1758353312994", hint: "event display" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/Picture6.png?updatedAt=1758353313716", hint: "interactive kiosk" },
      ],
    },
    {
      title: "Event Management",
      description: "Our event management services cover everything from planning and coordination to execution, ensuring a seamless and memorable experience for any corporate or promotional event.",
      thumbnail: "https://ik.imagekit.io/askbrandsandsigns/events/E%20(1).png?updatedAt=1758376185994",
      hint: "corporate event",
      category: "Events",
      images: [
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/E%20(1).png?updatedAt=1758376185994", hint: "exhibition stand" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/E%20(2).png?updatedAt=1758376178779", hint: "booth design" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/E%20(3).png?updatedAt=1758376179611", hint: "event display" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/E%20(4).png?updatedAt=1758376179564", hint: "event display" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/E%20(5).png?updatedAt=1758376179145", hint: "event display" },
      ],
    },
    {
      title: "Indoor Branding",
      description: "We transform your interior spaces with wall graphics, reception signs, and directional signage that creates an immersive brand environment.",
      thumbnail: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/I%20(1).png?updatedAt=1758377482742",
      hint: "office interior",
      category: "Branding",
      images: [
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/I%20(1).png?updatedAt=1758377482742", hint: "office reception" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/I%20(2).png?updatedAt=1758377481926", hint: "wall mural" },    
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/I%20(3).png?updatedAt=1758377482891", hint: "wall mural" }, 
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/I%20(4).png?updatedAt=1758377482167", hint: "wall mural" }, 
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/I%20(5).png?updatedAt=1758377482693", hint: "wall mural" }, 
      ],
    },
    {
      title: "Outdoor Branding",
      description: "Our outdoor solutions include building signs, storefront branding, and large-format banners designed for maximum visibility and durability.",
      thumbnail: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/O%20(1).png?updatedAt=1758377963229",
      hint: "building signage",
      category: "Branding",
      images: [
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/O%20(1).png?updatedAt=1758377963229", hint: "storefront sign" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/O%20(2).png?updatedAt=1758377962550", hint: "billboard ad" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/O%20(3).png?updatedAt=1758377963264", hint: "storefront sign" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/O%20(4).png?updatedAt=1758377963058", hint: "storefront sign" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/O%20(5).png?updatedAt=1758377963153", hint: "storefront sign" },
      ],
    },
    {
      title: "Product Development",
      description: "We guide your product from concept to reality with services in prototyping, 3D modeling, and packaging design to prepare it for the market.",
      thumbnail: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/product_development/PD%20(1).png?updatedAt=1758378068928",
      hint: "product prototype",
      category: "Development",
      images: [
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/product_development/PD%20(1).png?updatedAt=1758378068928", hint: "3d model" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/product_development/PD%20(2).png?updatedAt=1758378068810", hint: "product packaging" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/product_development/PD%20(3).png?updatedAt=1758378069173", hint: "3d model" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/product_development/PD%20(4).png?updatedAt=1758378069214", hint: "3d model" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/product_development/PD%20(5).png?updatedAt=1758378068678", hint: "3d model" },
      ],
    },
    {
      title: "Signage & Nameplates",
      description: "We create custom-made signs, illuminated displays, and engraved nameplates using high-quality materials for a professional and lasting finish.",
      thumbnail: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/product_development/signage_and_nameplate/SN%20(1).png?updatedAt=1758378177579",
      hint: "metal sign",
      category: "Signage",
      images: [
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/product_development/signage_and_nameplate/SN%20(1).png?updatedAt=1758378177579", hint: "engraved nameplate" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/product_development/signage_and_nameplate/SN%20(2).png?updatedAt=1758378177505", hint: "illuminated sign" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/product_development/signage_and_nameplate/SN%20(3).png?updatedAt=1758378177637", hint: "illuminated sign" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/product_development/signage_and_nameplate/SN%20(4).png?updatedAt=1758378178147", hint: "illuminated sign" },
        { src: "https://ik.imagekit.io/askbrandsandsigns/events/indoor_branding/outdoor_branding/product_development/signage_and_nameplate/SN%20(5).png?updatedAt=1758378177253", hint: "engraved nameplate" },
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
      <FeedbackButton />
    </div>
  );
}

    