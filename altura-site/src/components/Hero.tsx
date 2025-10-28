export default function Hero() {
  return (
    <section className="py-32 md:py-48 text-center bg-secondary/20 rounded-lg">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading">
          Building the Future of the Web
        </h1>
        <p className="text-md md:text-lg mt-4 max-w-3xl mx-auto text-foreground/80">
          We are a software development agency that helps businesses build
          beautiful and functional websites that leave a lasting impression.
        </p>
        <div className="mt-8">
          <a
            href="#portfolio"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}
