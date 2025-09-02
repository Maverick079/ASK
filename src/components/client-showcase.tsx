
"use client";

import Image from "next/image";

const clients = [
  { name: "Innovate Inc.", logo: "https://placehold.co/150x60.png", hint: "tech startup" },
  { name: "Quantum Solutions", logo: "https://placehold.co/150x60.png", hint: "corporate logo" },
  { name: "Eco Foods", logo: "https://placehold.co/150x60.png", hint: "organic food" },
  { name: "Apex Construction", logo: "https://placehold.co/150x60.png", hint: "building company" },
  { name: "Starlight Studios", logo: "https://placehold.co/150x60.png", hint: "film studio" },
  { name: "Momentum Fitness", logo: "https://placehold.co/150x60.png", hint: "gym logo" },
  { name: "Voyage Travel", logo: "https://placehold.co/150x60.png", hint: "travel agency" },
  { name: "Pinnacle Realty", logo: "https://placehold.co/150x60.png", hint: "real estate" },
];

export function ClientShowcase() {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8 font-body">
          Trusted by leading brands
        </h3>
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          <div className="flex animate-[scroll-x_40s_linear_infinite]">
            {duplicatedClients.map((client, index) => (
              <div key={index} className="flex-shrink-0 mx-8" style={{ width: '160px' }}>
                <div className="flex justify-center items-center h-full">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={150}
                    height={60}
                    data-ai-hint={client.hint}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
