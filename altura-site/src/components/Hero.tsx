export default function Hero() {
  return (
    <section className="relative py-48 md:py-64 text-center overflow-hidden">
      <div className="absolute inset-0 bg-secondary opacity-30 animate-fade-in"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading animate-slide-in">
          Crafting Digital{" "}
          <span className="text-primary relative inline-block">
            Experiences
            <svg
              className="absolute -bottom-2 left-0 w-full h-auto text-primary"
              viewBox="0 0 255 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10.5C56.3333 3.83333 164 -3 254 5"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </h1>
        <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto text-foreground/80 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          We are a software development agency that helps businesses build
          beautiful and functional websites that leave a lasting impression.
        </p>
        <div className="mt-12 animate-fade-in" style={{ animationDelay: "1s" }}>
          <a
            href="#portfolio"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-md hover:bg-primary/90 transition-transform duration-300 ease-in-out transform hover:scale-105 animate-pulse-glow"
          >
            View our work
          </a>
        </div>
      </div>
    </section>
  );
}
