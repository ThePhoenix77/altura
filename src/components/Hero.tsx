import Image from "next/image";
import { Container } from "@/components/ui";
import Button from "@/components/ui/Button";
import AuroraBackground from "@/components/ui/aurora-background";

export default function Hero() {
  return (
    <AuroraBackground className="relative bg-background text-foreground overflow-hidden">
      <Container>
        <div className="relative py-24 md:py-36 lg:py-44 flex items-center gap-8 min-h-[60vh]">
          <div className="w-full md:w-6/12 z-10">
            <h1 className="text-4xl md:text-6xl lg:text-display font-bold font-heading leading-tight">
              Crafting digital experiences
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl">
              We build focused, performant websites and applications that drive
              results and create memorable brand experiences.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Button href="#portfolio" size="lg" variant="gradient">
                View our work
              </Button>
              <Button variant="ghost" href="#contact" size="md">
                Contact us
              </Button>
            </div>
          </div>

          <div className="hidden md:block md:w-6/12 relative">
            <div className="absolute -right-12 top-0 w-[520px] h-[340px] rounded-xl overflow-hidden shadow-elevated">
              <Image
                src="https://picsum.photos/seed/hero/900/600"
                alt="Hero visual"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 520px, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </AuroraBackground>
  );
}
