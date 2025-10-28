export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-6xl font-bold font-heading">
        Building the Future of the Web
      </h1>
      <p className="text-lg mt-4 text-foreground/80">
        We are a software development agency that helps businesses build
        beautiful and functional websites.
      </p>
      <div className="mt-8">
        <a href="#portfolio" className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors">
          View our work
        </a>
      </div>
    </section>
  );
}
