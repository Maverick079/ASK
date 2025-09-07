import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Eye } from "lucide-react";

const teamMembers = [
  {
    name: "Vijay",
    role: "Lead Designer",
    avatar: "https://picsum.photos/100/100",
    hint: "male portrait"
  },
  {
    name: "AI Assistant",
    role: "Creative Strategist",
    avatar: "https://picsum.photos/100/100",
    hint: "robot face"
  },
];

export function AboutUsSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">About ASK Brands & Signs</h2>
          <p className="mt-4 text-lg text-muted-foreground font-body max-w-3xl mx-auto">
            We are a team of passionate creators, strategists, and innovators dedicated to building brands that resonate.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-card hover:shadow-lg">
                    <div className="flex-shrink-0">
                        <div className="p-3 bg-primary/10 text-primary rounded-lg">
                            <Target className="w-6 h-6" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-headline font-semibold">Our Mission</h3>
                        <p className="text-muted-foreground font-body mt-1">To empower businesses with distinct brand identities and high-impact signage that drives growth and recognition.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-card hover:shadow-lg">
                    <div className="flex-shrink-0">
                        <div className="p-3 bg-primary/10 text-primary rounded-lg">
                            <Eye className="w-6 h-6" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-headline font-semibold">Our Vision</h3>
                        <p className="text-muted-foreground font-body mt-1">To be the leading partner for brands seeking to make their mark on the world through creative design and strategic thinking.</p>
                    </div>
                </div>
            </div>
            <div>
                 <Card className="transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-2">
                           <Users/>
                            Meet the Team
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {teamMembers.map((member) => (
                        <div key={member.name} className="flex items-center gap-4">
                            <Image
                            src={member.avatar}
                            alt={member.name}
                            width={64}
                            height={64}
                            data-ai-hint={member.hint}
                            className="rounded-full"
                            />
                            <div>
                            <h4 className="font-semibold font-headline">{member.name}</h4>
                            <p className="text-sm text-muted-foreground font-body">{member.role}</p>
                            </div>
                        </div>
                        ))}
                    </CardContent>
                 </Card>
            </div>
        </div>
      </div>
    </section>
  );
}
