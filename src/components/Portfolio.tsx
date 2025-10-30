import Image from "next/image";

const portfolioItems = [
  {
    image: "https://picsum.photos/seed/1/600/400",
    title: "Project Alpha",
    description: "A futuristic e-commerce platform.",
  },
  {
    image: "https://picsum.photos/seed/2/600/400",
    title: "Project Beta",
    description: "A sleek and modern portfolio website.",
  },
  {
    image: "https://picsum.photos/seed/3/600/400",
    title: "Project Gamma",
    description: "An innovative social media application.",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 animate-slide-in">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center font-heading">
          Our Work
        </h2>
        <p className="text-lg mt-4 max-w-3xl mx-auto text-center text-foreground/80">
          Check out some of our recent projects that showcase our skills and
          expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {portfolioItems.map((item, i) => (
            <div
              key={item.title}
              className="bg-secondary rounded-lg overflow-hidden group relative animate-fade-in"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/80 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h3 className="text-2xl font-bold font-heading text-primary-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-primary-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
