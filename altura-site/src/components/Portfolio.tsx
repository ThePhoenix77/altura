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
    <section id="portfolio" className="py-20">
      <div className="container">
        <h2 className="text-4xl font-bold text-center font-heading">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {portfolioItems.map((item) => (
            <div key={item.title} className="bg-secondary rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold font-heading">{item.title}</h3>
                <p className="mt-2 text-foreground/80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
